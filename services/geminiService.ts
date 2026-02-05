import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { AnalysisResult, ChatMessage } from "../types";

// Always initialize GoogleGenAI with a named parameter using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export type ChatMode = 'lite' | 'search' | 'thinking';

export const analyzeThreatContent = async (text: string, imageData?: string): Promise<AnalysisResult> => {
  const model = 'gemini-3-flash-preview';
  
  const prompt = `Act as a Senior Cyber-Forensics Lead. Analyze the following artifact for social engineering markers: "${text}".

  AUDIT SCOPE:
  1. ADVANCED EVASION: Check for character substitution, hidden subdomains, or redirection loops.
  2. PSYCHOLOGICAL VECTORS: Identify triggers like Urgency, Fear, Authority, or Social Proof.
  3. TECHNICAL RISK: Evaluate the likely payload (Credential harvesting, malware delivery, or data scraping).

  OUTPUT PROTOCOL (JSON ONLY):
  - status: 'Safe' | 'Suspicious' | 'Dangerous'
  - riskLevel: 0-100 (Integer)
  - reasoning: High-level professional technical summary of the findings.
  - suggestedActions: Tactical list of defensive protocols for the user.
  - detectedIndicators: Technical terminology of artifacts found.`;

  const parts: any[] = [{ text: prompt }];
  if (imageData) {
    parts.push({
      inlineData: { data: imageData.split(',')[1], mimeType: 'image/jpeg' }
    });
  }

  const response = await ai.models.generateContent({
    model,
    contents: { parts },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          status: { type: Type.STRING },
          riskLevel: { type: Type.NUMBER },
          reasoning: { type: Type.STRING },
          suggestedActions: { type: Type.ARRAY, items: { type: Type.STRING } },
          detectedIndicators: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ['status', 'riskLevel', 'reasoning', 'suggestedActions', 'detectedIndicators']
      }
    }
  });

  try {
    return JSON.parse(response.text) as AnalysisResult;
  } catch (e) {
    return {
      status: 'Suspicious',
      riskLevel: 50,
      reasoning: "Forensic parser anomaly. Manual verification required.",
      suggestedActions: ["Do not click links", "Verify source identity"],
      detectedIndicators: ["Parser Error"]
    };
  }
};

export const getChatResponse = async (history: ChatMessage[], mode: ChatMode = 'lite'): Promise<{ text: string; sources?: { title: string; uri: string }[] }> => {
  let model = 'gemini-3-flash-preview';
  
  let systemInstruction = `You are the SAFECLICK Chief Intelligence Mentor. 

PERSONA: You are a world-class Cyber-Intelligence Analyst and Security Mentor. Your tone is authoritative, analytical, and highly precise, yet intellectually supportive. You do not give generic advice; you provide forensic-grade insights.

REASONING FRAMEWORK:
For every query, structure your response as follows:
1. **TACTICAL SUMMARY**: A Bottom-Line-Up-Front (BLUF) executive assessment.
2. **THREAT MECHANICS**: Deep reasoning into the "Why" and "How". Explain psychological triggers (Urgency, Authority) and technical vectors (Homograph attacks, MFA fatigue).
3. **TACTICAL HARDENING**: Concrete, step-by-step defensive actions for the user.
4. **LEGAL INTEL**: Relevant Indian laws (IT Act, IPC, DPDP) and 1930 reporting steps where applicable.

GUIDELINES:
- Use professional terminology (TTPs, Vectors, Payloads, Zero-Trust).
- Use analogies to explain complex topics.
- Maintain a professional, supportive, and trustworthy tone.
- If in 'thinking' (Analyst) mode, simulate an attacker's thought process to provide better defense.`;

  const config: any = { systemInstruction };

  if (mode === 'search') {
    config.tools = [{ googleSearch: {} }];
  } else if (mode === 'thinking') {
    model = 'gemini-3-pro-preview';
    config.thinkingConfig = { thinkingBudget: 32768 };
  } else if (mode === 'lite') {
    model = 'gemini-flash-lite-latest';
  }

  const response = await ai.models.generateContent({
    model,
    contents: history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
    config
  });

  const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
    ?.filter((chunk: any) => chunk.web)
    ?.map((chunk: any) => ({
      title: chunk.web.title,
      uri: chunk.web.uri
    }));

  return { 
    text: response.text || "Communication link lost.",
    sources 
  };
};