import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { AnalysisResult, ChatMessage } from "../types";

// Always initialize GoogleGenAI with a named parameter using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export type ChatMode = 'lite' | 'search' | 'thinking';

const KNOWN_SHORTENERS = [
  'bit.ly', 'tinyurl.com', 't.co', 'is.gd', 'buff.ly', 'goo.gl', 'ow.ly', 'shorte.st', 't.ly', 
  'rebrand.ly', 'tiny.cc', 'clk.im', 'v.gd', 'snip.ly', 't2mio.com'
];

const SIMULATED_BLACKLIST = [
  'login-apple-security.com', 'secure-paypal-login.net', 'bank-verify-account.support', 
  'microsoft-office-update.xyz', 'amazon-order-verify.in', 'netfIix-verify.com', 
  'login.facebook-security.co', 'walmart-giftcard.free', 'binance-support-live.com',
  'coinbase-verify-identity.net', 'chase-online-access.com'
];

const SUSPICIOUS_TLDS = ['.xyz', '.top', '.icu', '.work', '.click', '.zip', '.mov', '.link', '.today', '.gq', '.tk', '.ml'];

export const analyzeThreatContent = async (text: string, imageData?: string): Promise<AnalysisResult> => {
  const model = 'gemini-3-flash-preview';
  
  // Heuristic Pre-Processor
  const localIndicators: string[] = [];
  const lowercaseText = text.toLowerCase();
  
  KNOWN_SHORTENERS.forEach(shortener => {
    if (lowercaseText.includes(shortener)) localIndicators.push(`URL Shortener (${shortener})`);
  });

  SIMULATED_BLACKLIST.forEach(domain => {
    if (lowercaseText.includes(domain)) localIndicators.push(`Blacklisted Domain Match (${domain})`);
  });

  SUSPICIOUS_TLDS.forEach(tld => {
    if (lowercaseText.includes(tld + '/') || lowercaseText.endsWith(tld)) localIndicators.push(`Risky TLD (${tld})`);
  });

  if (/https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g.test(text)) localIndicators.push("Direct IP Access");
  if (text.includes("xn--")) localIndicators.push("Punycode (IDN) Spoofing");
  if ((text.match(/%/g) || []).length > 3) localIndicators.push("Heavy %-Encoding Obfuscation");
  if (/[\u200B-\u200D\uFEFF]/.test(text)) localIndicators.push("Zero-Width Character Evasion");

  const localIndicatorsStr = localIndicators.length > 0 
    ? `Heuristic flags: ${localIndicators.join(', ')}.` 
    : "No immediate heuristic flags.";

  const prompt = `Act as a Senior Cyber-Forensics Lead. Analyze the following artifact for social engineering markers: "${text}".

  Heuristic Pre-Processor Logs: ${localIndicatorsStr}

  AUDIT SCOPE:
  1. ADVANCED EVASION: Check for character substitution, hidden subdomains, or redirection loops.
  2. PSYCHOLOGICAL VECTORS: Identify triggers like Urgency, Fear, Authority, or Social Proof.
  3. TECHNICAL RISK: Evaluate the likely payload (Credential harvesting, malware delivery, or data scraping).

  OUTPUT PROTOCOL (JSON ONLY):
  - status: 'Safe' | 'Suspicious' | 'Dangerous'
  - riskLevel: 0-100 (Integer)
  - reasoning: High-level professional technical summary of the findings.
  - suggestedActions: Tactical list of defensive protocols for the user.
  - detectedIndicators: Technical terminology of artifacts found (e.g., "Typosquatting", "Social Pretexting").`;

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
      status: localIndicators.length > 0 ? 'Suspicious' : 'Safe',
      riskLevel: localIndicators.length > 0 ? 60 : 0,
      reasoning: "Forensic parser anomaly. Summary based on heuristic indicators.",
      suggestedActions: ["Manual validation required", "Verify source integrity"],
      detectedIndicators: localIndicators
    };
  }
};

export const getChatResponse = async (history: ChatMessage[], mode: ChatMode = 'lite'): Promise<{ text: string; sources?: { title: string; uri: string }[] }> => {
  let model = 'gemini-3-flash-preview';
  
  let systemInstruction = `You are the SAFECLICK Chief Intelligence Mentor & Tactical Assistant.

PERSONA: You are a world-class Cyber-Intelligence Analyst and Security Mentor. Your tone is authoritative, highly precise, yet intellectually supportive. You do not give generic advice; you provide forensic-grade insights.

OPERATING FRAMEWORK:
1. RESPONSE ARCHITECTURE: For any complex query, follow this structure:
   - **Executive Summary**: A concise, bottom-line-up-front (BLUF) assessment.
   - **Threat Analysis**: A deep dive into the psychological and technical mechanics of the threat. Use terminology like "Attack Vectors", "Payload Delivery", "Pretexting", "Social Engineering Heuristics".
   - **Tactical Hardening Protocol**: A step-by-step checklist of immediate defensive actions.
   - **Legal Intelligence**: Relevant Indian laws (IT Act, IPC, DPDP) and reporting steps (1930 Helpline).

2. EXPERTISE PILLARS:
   - **Identifying Attacks**: Teach the user to spot "Red Flags" like urgency bias, authority simulation, and homograph obfuscation.
   - **Cyber Law**: Explain consequences and legal remedies clearly.
   - **Safe Behavior**: Promote a "Zero-Trust" mindset.

3. ANALYST MODE (Thinking Mode): When using 'Analyst' mode, provide extreme depth. Simulate how an attacker would think and then provide the counter-maneuver.

4. SAFETY: Never request PII, passwords, or sensitive credentials. Maintain strict operational security boundaries.

Always use professional Markdown with bold headers and clean bullet points for readability. Respond like a high-tier intelligence dossier.`;

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
    text: response.text || "Neural link disruption: Intelligence retrieval failed.",
    sources 
  };
};