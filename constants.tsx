
import React from 'react';
import { Shield, Mail, Phone, Globe, Smartphone, QrCode, UserSearch, AlertTriangle, FileWarning, DollarSign, Brain, Lock, Target, Gift, HelpCircle, HardDrive, Eye, Ear, Ghost, Trash2, UserCheck, Zap, Video, Fingerprint, Activity, MousePointer2, ShieldCheck, BookOpen } from 'lucide-react';
import { AttackType, LawSection, Resource, AwarenessSection, SimulationModule, GlossaryItem } from './types';

export const GLOSSARY_TERMS: GlossaryItem[] = [
  { id: '1', term: 'Social Engineering', definition: 'The art of manipulating people so they give up confidential information.', category: 'General' },
  { id: '2', term: 'Phishing', definition: 'The practice of sending fraudulent communications that appear to come from a reputable source, usually through email.', category: 'Technical' },
  { id: '3', term: 'MFA', definition: 'Multi-Factor Authentication. A security system that requires more than one method of authentication from independent categories of credentials.', category: 'Technical' },
  { id: '4', term: 'PII', definition: 'Personally Identifiable Information. Any data that could potentially identify a specific individual.', category: 'General' },
  { id: '5', term: 'Smishing', definition: 'A form of phishing that uses mobile phone text messages to lure victims into revealing sensitive information.', category: 'Technical' },
  { id: '6', term: 'Vishing', definition: 'Voice phishing; the use of telephony to conduct phishing attacks.', category: 'Technical' },
  { id: '7', term: 'Homograph Attack', definition: 'A deception where a URL looks like a familiar address but uses visually similar characters from different alphabets.', category: 'Technical' },
  { id: '8', term: 'Pretexting', definition: 'Creating a fabricated scenario to convince a victim to leak information.', category: 'Behavioral' },
  { id: '9', term: 'Baiting', definition: 'Offering something enticing to a victim in exchange for their login credentials or private data.', category: 'Behavioral' },
  { id: '10', term: 'Tailgating', definition: 'Physical social engineering where an unauthorized person follows an authorized person into a secure area.', category: 'Behavioral' },
  { id: '11', term: 'BEC', definition: 'Business Email Compromise. A type of scam where the attacker targets organizations to defraud them.', category: 'Technical' },
  { id: '12', term: 'Deepfake', definition: 'Synthetic media in which a person in an existing image or video is replaced with someone else\'s likeness using AI.', category: 'Technical' },
  { id: '13', term: 'OTP', definition: 'One-Time Password. A password that is valid for only one login session or transaction.', category: 'Technical' },
  { id: '14', term: 'Typosquatting', definition: 'A form of cybersquatting that relies on mistakes such as typographical errors made by Internet users when inputting a website address.', category: 'Technical' },
  { id: '15', term: 'Scareware', definition: 'Malware that uses social engineering to cause shock, anxiety, or the perception of a threat.', category: 'Technical' },
  { id: '16', term: 'Shoulder Surfing', definition: 'Direct observation techniques, such as looking over someone\'s shoulder, to get information.', category: 'Behavioral' },
  { id: '17', term: 'SPF', definition: 'Sender Policy Framework. An email authentication method that specifies the mail servers authorized to send email for a domain.', category: 'Technical' },
  { id: '18', term: 'DKIM', definition: 'DomainKeys Identified Mail. Allows an organization to take responsibility for a message in a way that can be validated by a recipient.', category: 'Technical' },
  { id: '19', term: 'DMARC', definition: 'Domain-based Message Authentication, Reporting, and Conformance. An email authentication protocol.', category: 'Technical' },
  { id: '20', term: 'IPC', definition: 'Indian Penal Code. The official criminal code of India.', category: 'Legal' },
  { id: '21', term: 'IT Act', definition: 'Information Technology Act, 2000. Primary law in India dealing with cybercrime and electronic commerce.', category: 'Legal' },
];

export const SIMULATIONS: SimulationModule[] = [
  {
    id: 'sim-1',
    type: 'email',
    title: 'Spot the Phish: Netflix Account Alert',
    scenario: 'You just received an urgent email claiming your subscription has expired.',
    content: `
      <div class="bg-white p-6 rounded-xl border border-gray-200 text-slate-800 font-sans shadow-inner">
        <div class="border-b pb-4 mb-4 text-xs text-slate-400">
          From: <strong>Netflix Support &lt;account-security@netfIix-updates.com&gt;</strong><br/>
          Subject: <strong>Final Warning: Payment Method Declined</strong>
        </div>
        <div class="space-y-4">
          <p class="font-bold">Hi Customer,</p>
          <p>We're having some trouble with your current billing information. We'll try again, but in the meantime you may want to update your payment details.</p>
          <div class="bg-red-600 text-white py-3 px-6 rounded inline-block font-bold">RE-ACTIVATE MEMBERSHIP</div>
          <p class="text-sm">If you don't update within 24 hours, your account will be suspended permanently.</p>
          <p class="text-sm">Thanks,<br/>Netflix Team</p>
        </div>
      </div>
    `,
    difficulty: 'Beginner',
    options: [
      { id: '1', text: 'Click the button and update details immediately.', isCorrect: false, feedback: 'Incorrect. The urgency and the sender domain (netfIix-updates.com with an "I" instead of "l") are major red flags.' },
      { id: '2', text: 'Hover over the link and check the sender address carefully.', isCorrect: true, feedback: 'Correct! The domain uses a homograph attack (capital I instead of lowercase L) and creates artificial urgency.' },
      { id: '3', text: 'Reply to the email asking for clarification.', isCorrect: false, feedback: 'Risky. Replying confirms your email is active to attackers. Always use official apps or sites directly.' }
    ]
  },
  {
    id: 'sim-2',
    type: 'vishing',
    title: 'Simulated Vishing: The IT Support Call',
    scenario: 'An incoming call from "Internal IT Department" appears on your phone.',
    content: `
      <div class="bg-slate-900 p-8 rounded-[2rem] text-blue-400 font-mono border border-blue-500/30">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse">
            <Phone size={24} />
          </div>
          <div>
            <p class="text-xs opacity-50 uppercase tracking-widest">Incoming Call</p>
            <p class="text-xl font-bold">+1 (800) IT-HELP-SYS</p>
          </div>
        </div>
        <div class="space-y-4 text-sm opacity-80 italic">
          <p>"Hello? This is Mark from the Global IT Security Operations Center. We've detected a massive outbound data breach originating from your terminal IP."</p>
          <p>"To secure your workstation, I need you to read back the 6-digit MFA code that was just sent to your mobile device for verification."</p>
        </div>
      </div>
    `,
    difficulty: 'Intermediate',
    options: [
      { id: '1', text: 'Provide the code to help secure the company network.', isCorrect: false, feedback: 'Dangerous! Internal IT will NEVER ask for your MFA code. This is a classic MFA fatigue/bypass attack.' },
      { id: '2', text: 'Hang up and report the call to the official IT helpdesk.', isCorrect: true, feedback: 'Perfect. Always verify requests for credentials via a trusted internal channel.' },
      { id: '3', text: 'Ask Mark for his employee ID and then provide the code.', isCorrect: false, feedback: 'Not enough. Attackers can easily fake employee IDs or pretext a believable background.' }
    ]
  },
  {
    id: 'sim-3',
    type: 'website',
    title: 'The "Secure" Banking Portal',
    scenario: 'You follow a link from a text message to "verify a suspicious transaction".',
    content: `
      <div class="bg-slate-50 p-4 rounded-xl border border-gray-200 shadow-inner">
        <div class="bg-white border rounded-lg overflow-hidden">
          <div class="bg-gray-100 p-2 flex items-center gap-2 border-b text-[10px] font-mono">
            <Lock size={10} class="text-green-600" />
            <span class="text-slate-500">https://</span>secure-verify.chase-banking-portal.net/login
          </div>
          <div class="p-8 text-center space-y-4">
            <div class="text-2xl font-black text-blue-800">CHASE</div>
            <div class="space-y-2 text-left max-w-xs mx-auto">
              <div class="h-10 bg-gray-100 rounded border border-gray-200"></div>
              <div class="h-10 bg-gray-100 rounded border border-gray-200"></div>
              <div class="h-10 bg-blue-700 rounded text-white font-bold flex items-center justify-center">Sign In</div>
            </div>
          </div>
        </div>
      </div>
    `,
    difficulty: 'Expert',
    options: [
      { id: '1', text: 'Log in because the URL has HTTPS and a green lock.', isCorrect: false, feedback: 'Incorrect. HTTPS only means the connection is encrypted, not that the destination is legitimate. Attackers can easily get SSL certificates.' },
      { id: '2', text: 'Analyze the domain: "chase-banking-portal.net" is not chase.com.', isCorrect: true, feedback: 'Spot on! This is a typosquatting/subdomain attack. Always check the primary domain name (the part before the .com/.net).' },
      { id: '3', text: 'Enter fake credentials to see what happens.', isCorrect: false, feedback: 'Risky behavior. Interacting with malicious sites can lead to browser exploitation or fingerprinting.' }
    ]
  }
];

export const INTEL_LIBRARY: AwarenessSection[] = [
  {
    id: 'intro',
    title: 'The Human Operating System',
    subtitle: 'Understanding the Social Engineering Engine',
    description: 'Social engineering is not about hacking machines—it’s about hacking people. It exploits trust, habits, and cognitive biases.',
    icon: 'Brain',
    color: 'blue',
    details: [
      {
        heading: 'Why Humans are Targeted',
        body: 'A system can be secure, encrypted, and updated, but one careless human action can destroy everything. Attackers don’t need to crack a 256-bit encryption key if they can simply ask an employee for their password.',
        points: [
          'Trust is easier to exploit than code.',
          'Humans naturally want to be helpful.',
          'Predictable behavior makes us "hackable".'
        ]
      },
      {
        heading: 'The "Patch" for People',
        body: 'Unlike software vulnerabilities, human psychology can’t be "patched" with a simple update. Awareness and constant vigilance are the only firewalls for the human mind.'
      }
    ],
    takeaways: [
      'Think before you click.',
      'Trust is earned, not assumed.',
      'Skepticism is a security tool.'
    ]
  },
  {
    id: 'psychology',
    title: 'Cognitive Manipulation',
    subtitle: 'The 5 Pillars of Psychological Warfare',
    description: 'Attackers use emotional triggers to shut down your logical thinking and force a rapid response.',
    icon: 'Activity',
    color: 'purple',
    details: [
      {
        heading: '1. Fear & Panic',
        body: 'Attackers create high-stakes scenarios (e.g., "Account Blocked", "Police Case") to trigger your fight-or-flight response, which bypasses rational judgment.'
      },
      {
        heading: '2. Artificial Urgency',
        body: 'By imposing a strict deadline (e.g., "Respond within 10 minutes"), scammers prevent you from having time to verify the request.'
      },
      {
        heading: '3. Perceived Authority',
        body: 'Humans are conditioned to obey hierarchy. Scammers impersonate CEOs, IT admins, or police officers to gain compliance.'
      },
      {
        heading: '4. Familiarity & Trust',
        body: 'They pretend to be a friend or colleague. Since trust reduces suspicion, you are less likely to question an unusual request.'
      },
      {
        heading: '5. Greed & Curiosity',
        body: 'Offers of "Free Access" or "Exclusive Leaks" exploit dopamine triggers to make you lower your defenses.'
      }
    ],
    takeaways: [
      'Fear is a red flag.',
      'Urgency is a manipulation tactic.',
      'Always verify authority.'
    ]
  },
  {
    id: 'digital-scenarios',
    title: 'Digital Vector Scenarios',
    subtitle: 'Real-World Tactics in Your Inbox & Apps',
    description: 'How social engineering manifests across your primary communication channels.',
    icon: 'Globe',
    color: 'emerald',
    details: [
      {
        heading: 'Email Deception (Phishing)',
        body: 'Look for generic greetings, spelling errors, and "lookalike" domains. Hover over every link before clicking to see the actual destination.',
      },
      {
        heading: 'Mobile & SMS (Smishing)',
        body: 'Smishing often targets financial data or OTPs. Real banks never send links asking you to log in via SMS to "verify your account".',
      },
      {
        heading: 'Voice Calls (Vishing)',
        body: 'The caller may sound friendly or authoritative. If they ask for PII (Personally Identifiable Information), hang up and call the official number yourself.'
      }
    ],
    takeaways: [
      'Never share OTPs.',
      'Verify sender domains.',
      'Don’t trust Caller ID.'
    ]
  },
  {
    id: 'physical',
    title: 'The Physical Perimeter',
    subtitle: 'Threats in the Office & Public Spaces',
    description: 'Security doesn’t end at the screen. Physical access can lead to instant digital compromise.',
    icon: 'Lock',
    color: 'orange',
    details: [
      {
        heading: 'Tailgating & Empathy',
        body: 'Politeness is a vulnerability. Attackers carry boxes or coffee to trick you into holding the door for them into secure areas.',
      },
      {
        heading: 'Shoulder Surfing',
        body: 'In cafes or public transport, attackers watch you type passwords or PINs. Privacy screens are an essential physical defense.',
      },
      {
        heading: 'Dumpster Diving',
        body: 'Discarded invoices, employee lists, or old hard drives are goldmines for attackers conducting reconnaissance.'
      }
    ],
    takeaways: [
      'One badge, one entry.',
      'Shred sensitive documents.',
      'Lock your system when away.'
    ]
  },
  {
    id: 'mindset',
    title: 'The STOP Protocol',
    subtitle: 'Building a Defensive Mindset',
    description: 'Security is a conscious habit, not a software product. Adopt the "Zero-Trust" mindset.',
    icon: 'ShieldCheck',
    color: 'brand-primary',
    details: [
      {
        heading: 'Stop. Think. Observe. Proceed.',
        body: 'When you receive an unexpected request, stop. Think about the intent. Observe the source. Only then, proceed with caution.',
        points: [
          'Identity: Is this really who they say they are?',
          'Source: Is the channel official?',
          'Intent: Why do they need this information NOW?'
        ]
      },
      {
        heading: 'The Power of "No"',
        body: 'You have the right to refuse any request for confidential information. A legitimate organization will understand and provide alternate ways to verify.'
      }
    ],
    takeaways: [
      'Verify before trusting.',
      'Default to "No" for sensitive data.',
      'Healthy skepticism is safety.'
    ]
  }
];

export const ATTACK_TYPES: AttackType[] = [
  {
    id: 'phishing',
    title: 'Phishing (Email/SMS/Voice)',
    definition: 'The most widespread form of social engineering where attackers masquerade as a trusted entity to steal sensitive data.',
    howItWorks: 'Attackers send mass communications (emails, texts, or calls) designed to create a sense of urgency, fear, or curiosity, leading the victim to a malicious website or convincing them to disclose info over the phone.',
    techniques: [
      'Link Manipulation: Using lookalike URLs (googIe.com vs google.com).',
      'Filter Evasion: Using images instead of text to bypass spam filters.',
      'Website Forgery: Creating near-perfect replicas of banking or login portals.',
      'Smishing: Phishing via SMS messages.',
      'Vishing: Phishing via voice calls or automated systems.'
    ],
    examples: [
      'An email from "Netflix" claiming your payment failed.',
      'A text from "your bank" about a suspicious login with a "secure" link.',
      'An automated call from the "IRS" threatening legal action.'
    ],
    targets: ['General Public', 'Bank Account Holders', 'SaaS Users'],
    impactDescription: 'Financial loss through direct theft, unauthorized access to accounts, and identity theft resulting in long-term credit damage.',
    psychology: ['Urgency', 'Fear', 'Authority', 'Trust'],
    redFlags: [
      'Generic greetings (Dear Customer).',
      'Sense of extreme urgency or threats.',
      'Suspicious sender email addresses or hidden URLs.',
      'Poor grammar or unusual formatting.'
    ],
    prevention: [
      '1. NEVER click links in unsolicited emails or SMS. Manually type the address into your browser.',
      '2. Hover over any link to inspect the actual destination URL before clicking.',
      '3. Enable Multi-Factor Authentication (MFA) using hardware keys or authenticator apps—avoid SMS codes.',
      '4. If you receive a suspicious call, hang up and call the official support number found on the back of your card.',
      '5. Report phishing attempts to your email provider and the National Cyber Crime portal (1930).'
    ],
    icon: 'Mail',
    severity: 'High',
    complexity: 'Easy'
  },
  {
    id: 'spear-phishing',
    title: 'Spear Phishing',
    definition: 'A highly targeted phishing attack aimed at a specific individual, department, or organization.',
    howItWorks: 'The attacker performs deep reconnaissance (Recon) on the target using social media or corporate directories. They craft a message containing personal details that make the deception incredibly convincing.',
    techniques: [
      'Identity Mimicry: Pretending to be a known colleague or manager.',
      'Contextual Lure: Referencing a specific project or event the victim is involved in.',
      'Document Maliciousness: Sending an "invoice" or "contract" that contains malware.'
    ],
    examples: [
      'An email to an HR manager from a "job seeker" with a resume file that is actually a trojan.',
      'A message to a developer from a "team lead" asking for access to a specific repository.'
    ],
    targets: ['HR Departments', 'System Administrators', 'Project Leads'],
    impactDescription: 'Corporate data breaches, intellectual property theft, and long-term network compromise.',
    psychology: ['Trust', 'Responsibility', 'Curiosity'],
    redFlags: [
      'Unusual requests for sensitive data from "trusted" contacts.',
      'Messages received at odd hours or with a slightly different tone.',
      'Links to third-party file-sharing sites you don\'t usually use.'
    ],
    prevention: [
      '1. Verify any request for sensitive data or money transfers via a second, "out-of-band" channel (voice call).',
      '2. Limit the amount of professional and personal detail you share on public social media (LinkedIn, etc).',
      '3. Use digital signatures (S/MIME) for internal company emails to prove identity.',
      '4. Never open attachments from emails that appear even slightly out of context for the sender.',
      '5. Organizations should implement DMARC, SPF, and DKIM to prevent domain spoofing.'
    ],
    icon: 'Target',
    severity: 'Critical',
    complexity: 'Advanced'
  },
  {
    id: 'whaling',
    title: 'Whaling',
    definition: 'A form of spear phishing specifically targeting high-profile corporate executives (the "Big Fish").',
    howItWorks: 'Attackers target CEOs, CFOs, or high-level government officials. These attacks are meticulously researched and often involve legal, financial, or executive-level scenarios.',
    techniques: [
      'Executive Impersonation: Mimicking the CEO to order a wire transfer.',
      'Legal Threats: Faking subpoenas or government investigations.',
      'Financial Pressure: Faking urgent merger/acquisition documents.'
    ],
    examples: [
      'A CFO receives a "confidential" legal notice regarding an upcoming audit that requires downloading a disclosure tool.',
      'An executive is tricked into authorizing a "secret" wire transfer for a foreign acquisition.'
    ],
    targets: ['CEOs', 'CFOs', 'Board Members', 'Government Officials'],
    impactDescription: 'Catastrophic financial loss, stock price manipulation, and massive reputational damage.',
    psychology: ['Authority', 'Fear', 'Confidentiality'],
    redFlags: [
      'Requests for large, urgent wire transfers that bypass normal procedures.',
      'Highly confidential "secret" requests that discourage verification.',
      'Attachments related to high-level legal or financial matters.'
    ],
    prevention: [
      '1. Enforce strict "dual-authorization" protocols for all significant financial transactions.',
      '2. Implement specialized anti-phishing software that identifies executive-level impersonation patterns.',
      '3. Conduct "Whaling Simulations" specifically for the C-suite and executive assistants.',
      '4. Use hardware security keys for all executive level account logins.',
      '5. Monitor for "Lookalike Domains" (typosquatting) of the corporate brand and executives\' names.'
    ],
    icon: 'Zap',
    severity: 'Critical',
    complexity: 'Advanced'
  },
  {
    id: 'pretexting',
    title: 'Pretexting',
    definition: 'The act of creating an invented scenario (a pretext) to engage a target and extract information.',
    howItWorks: 'The attacker builds a believable persona—such as an auditor, a fellow employee, or a service provider. They use this trust to ask for data like social security numbers, birth dates, or system passwords.',
    techniques: [
      'Persona Adoption: Pretending to be an IT support tech or a bank investigator.',
      'Scenario Building: Inventing a crisis that requires the victim\'s information to solve.',
      'Information Harvesting: Asking for "just one more piece of data" to verify identity.'
    ],
    examples: [
      'Someone calls claiming to be from IT and says they need your password to "patch" a security hole in your account.',
      'An attacker poses as a delivery driver who needs your employee ID to "verify access" to a loading dock.'
    ],
    targets: ['Help Desk Staff', 'Front Desk Personnel', 'Senior Citizens'],
    impactDescription: 'Account takeover, unauthorized physical or digital access, and fraud.',
    psychology: ['Trust', 'Helpfulness', 'Authority'],
    redFlags: [
      'Being asked for information the requester should already have access to.',
      'Inconsistent stories or gaps in the attacker\'s persona.',
      'Pressure to provide data quickly without following official protocols.'
    ],
    prevention: [
      '1. NEVER share passwords or OTPs over the phone or email, even with "IT Support".',
      '2. Challenge the identity: Ask for an employee ID or call back using the official internal directory.',
      '3. Be wary of "Overly Friendly" or "Urgent" callers who try to build quick rapport.',
      '4. Only share sensitive data if YOU initiated the contact through an official channel.',
      '5. Report any suspicious identity-probing calls to your security or HR department.'
    ],
    icon: 'Brain',
    severity: 'High',
    complexity: 'Moderate'
  },
  {
    id: 'baiting',
    title: 'Baiting',
    definition: 'Using a false promise to pique a victim\'s greed or curiosity to steal information or infect systems.',
    howItWorks: 'Attackers leave an infected physical medium (like a USB drive) in a public place, or offer a digital "freebie" like a movie or game download that contains malware.',
    techniques: [
      'Physical Baiting: Leaving "labeled" USB sticks (e.g., "Executive Salaries") in parking lots.',
      'Digital Baiting: Offering free software, premium movies, or gift cards in exchange for account logins.',
      'Social Media Contests: Fake giveaways requiring excessive personal data.'
    ],
    examples: [
      'An employee finds a USB drive in the lobby, plugs it in to find the owner, and accidentally executes a keylogger.',
      'A popup offers a free download of a new blockbuster movie that installs a cryptominer.'
    ],
    targets: ['Office Workers', 'Gamers', 'Movie Streamers'],
    impactDescription: 'System infection with ransomware/spyware and compromise of local storage.',
    psychology: ['Curiosity', 'Greed'],
    redFlags: [
      'Found physical media in unverified locations.',
      'Offers that seem "too good to be true" (free expensive software).',
      'Downloadable files from untrusted or non-official sources.'
    ],
    prevention: [
      '1. NEVER plug in a "found" USB drive, hard drive, or charging cable into your computer.',
      '2. Turn off "Auto-Run" and "Auto-Play" on all your devices.',
      '3. Only download software and media from official, reputable marketplaces (App Store, Steam).',
      '4. If you find a drive in a corporate setting, hand it over to security for safe analysis.',
      '5. Use a "USB Condom" (data blocker) if you must use a public charging port.'
    ],
    icon: 'Gift',
    severity: 'Medium',
    complexity: 'Moderate'
  },
  {
    id: 'quid-pro-quo',
    title: 'Quid Pro Quo',
    definition: 'Offering a service or benefit in exchange for information or access (Latin for "this for that").',
    howItWorks: 'Attackers promise to do something for the victim—like fixing a computer problem or providing a gift card—if the victim provides information like a password or access code.',
    techniques: [
      'Tech Support Scam: Calling employees pretending to be IT and offering a "system speedup" if they share login credentials.',
      'Survey Fraud: Offering money or prizes in exchange for completing a survey that asks for sensitive personal data.'
    ],
    examples: [
      'A random call to an office: "Hi, this is IT, we noticed some lag on your station, can you log in to this portal so we can fix it?"',
      'A scammer offers a $100 Amazon gift card if you "verify" your account credentials on their site.'
    ],
    targets: ['Large Organization Employees', 'Call Center Staff'],
    impactDescription: 'Credential theft and unauthorized network entry.',
    psychology: ['Reciprocity', 'Trust', 'Laziness'],
    redFlags: [
      'Unsolicited help or gifts in exchange for passwords or security codes.',
      'The "IT person" asking for your password (real IT will never ask).',
      'High-value rewards for low-effort tasks.'
    ],
    prevention: [
      '1. Always decline unsolicited help from "technicians" you haven\'t called yourself.',
      '2. Use official company ticketing systems to request and receive technical assistance.',
      '3. Be highly skeptical of surveys or "gift card rewards" that require account login or PII.',
      '4. Educate yourself on your company\'s official support and procurement procedures.',
      '5. Don\'t feel obligated to "help" a caller who is doing you an unrequested favor.'
    ],
    icon: 'HelpCircle',
    severity: 'Medium',
    complexity: 'Moderate'
  },
  {
    id: 'tailgating',
    title: 'Tailgating / Piggybacking',
    definition: 'Gaining unauthorized physical access to a secure building by following an authorized person.',
    howItWorks: 'The attacker waits near a secure entrance. When an employee swipes their badge and opens the door, the attacker walks in behind them, often using a distraction or pretending to have their hands full.',
    techniques: [
      'The "Helpful Hands" Tactic: Carrying boxes or coffee cups so an employee holds the door open for you.',
      'Distraction: Creating a commotion or asking a confusing question while the door is closing.',
      'Piggybacking: Explicitly asking a coworker to "let them in" because they "forgot their badge."'
    ],
    examples: [
      'A man in a suit carrying two large boxes follows an employee into a restricted server room.',
      'An attacker pretends to be a maintenance worker and waits for an employee to exit, then catches the door before it latches.'
    ],
    targets: ['Corporate Offices', 'Data Centers', 'Research Labs'],
    impactDescription: 'Physical theft of hardware, installation of spy devices, and unauthorized access to workstations.',
    psychology: ['Social Politeess', 'Empathy', 'Bystander Effect'],
    redFlags: [
      'Unknown individuals waiting near secure doors.',
      'People trying to enter without whiping their own badges.',
      'Individuals using props (delivery bags, boxes) to appear legitimate.'
    ],
    prevention: [
      '1. ALWAYS swipe your own badge even if the door is already open.',
      '2. Politely refuse to hold doors for people you don\'t recognize; direct them to the front desk.',
      '3. Report any unknown individual loitering near secure entrances to security immediately.',
      '4. If you see someone follow you in without swiping, alert them or security right away.',
      '5. Companies should install "mantraps" or turnstiles that only allow one person per swipe.'
    ],
    icon: 'Ghost',
    severity: 'High',
    complexity: 'Easy'
  },
  {
    id: 'shoulder-surfing',
    title: 'Shoulder Surfing',
    definition: 'The practice of spying on the user of an ATM, computer, or other electronic device in order to obtain their personal information.',
    howItWorks: 'Attackers simply watch over a victim\'s shoulder as they enter PINs, passwords, or credit card numbers in public places.',
    techniques: [
      'Direct Observation: Standing close enough to see the screen or keypad.',
      'Binoculars/Cameras: Using long-range optics or hidden cameras in public spaces.',
      'Recording: Filming a victim while they type sensitive info.'
    ],
    examples: [
      'Someone standing behind you at a cafe as you log in to your bank account.',
      'A person watching the keypad at a grocery store while you enter your debit card PIN.'
    ],
    targets: ['Public Transport Users', 'ATM Customers', 'Cafe Workers'],
    impactDescription: 'Immediate account takeover and financial theft.',
    psychology: ['Observational Stealth'],
    redFlags: [
      'People standing unnecessarily close while you use an electronic device.',
      'Individuals loitering near ATMs or checkout counters without buying anything.'
    ],
    prevention: [
      '1. Use a physical "privacy screen" filter on your laptop and phone to block side-viewing.',
      '2. Use your body or hand to shield the keypad when entering PINs at ATMs or stores.',
      '3. Switch to biometric logins (FaceID, Fingerprint) to avoid typing passwords in public.',
      '4. Avoid working on sensitive documents or logging into bank accounts on public transport.',
      '5. Be aware of your surroundings; if someone is standing too close, pause your activity.'
    ],
    icon: 'Eye',
    severity: 'Low',
    complexity: 'Easy'
  },
  {
    id: 'dumpster-diving',
    title: 'Dumpster Diving',
    definition: 'Searching through trash to find information that can be used to facilitate a social engineering attack.',
    howItWorks: 'Attackers look for discarded documents like invoices, employee lists, or even Post-it notes with passwords that haven\'t been shredded.',
    techniques: [
      'Document Sifting: Looking for utility bills or bank statements.',
      'Hardware Retrieval: Finding old hard drives or phones that weren\'t wiped properly.',
      'Social Mapping: Using discarded internal memos to understand corporate structure.'
    ],
    examples: [
      'An attacker finds a discarded employee directory and uses it for spear-phishing.',
      'Finding a bank statement that reveals account numbers and spending habits.'
    ],
    targets: ['Businesses', 'Financial Institutions', 'Residential Homes'],
    impactDescription: 'Identity theft and more effective spear-phishing attacks.',
    psychology: ['Negligence Exploration'],
    redFlags: [
      'Unauthorized individuals loitering near waste bins.',
      'Rummaged-through or disorganized trash bins in secure areas.'
    ],
    prevention: [
      '1. ALWAYS shred documents containing PII or company secrets using a cross-cut shredder.',
      '2. Use locked disposal bins for all sensitive trash in an office environment.',
      '3. Physically destroy old hard drives and storage media before disposal.',
      '4. Don\'t throw away mail with your address and full name intact; tear it up or black it out.',
      '5. Secure your outdoor trash bins to prevent easy access by passersby.'
    ],
    icon: 'Trash2',
    severity: 'Medium',
    complexity: 'Easy'
  },
  {
    id: 'scareware',
    title: 'Scareware',
    definition: 'Malicious software that uses social engineering to cause shock, anxiety, or the perception of a threat in order to manipulate users into buying unwanted software.',
    howItWorks: 'Users are bombarded with fake security alerts, pop-ups, and "system warnings" claiming their computer is infected with dozens of viruses.',
    techniques: [
      'Fake System Scans: An animation that "finds" viruses on your drive.',
      'Pop-up Storms: Multiple windows that are difficult to close.',
      'Brand Spoofing: Mimicking Microsoft or Apple security warnings.'
    ],
    examples: [
      'A website shows a flashing red warning: "YOUR PC IS INFECTED! DOWNLOAD CLEANER NOW!"',
      'An app that mimics a legitimate antivirus but asks for money to "delete" the non-existent threats.'
    ],
    targets: ['Inexperienced PC Users', 'Seniors', 'Casual Browsers'],
    impactDescription: 'Financial fraud (buying fake software) and installation of actual malware.',
    psychology: ['Fear', 'Panic', 'Urgency'],
    redFlags: [
      'Browser pop-ups claiming you have a virus.',
      'System warnings appearing in the browser instead of the OS notification area.',
      'Demands for immediate payment to "fix" your computer.'
    ],
    prevention: [
      '1. NEVER click on "System Update" or "Virus Detected" pop-ups that appear in your web browser.',
      '2. Close suspicious browser windows using Task Manager (Ctrl+Shift+Esc) instead of clicking "X".',
      '3. Only trust security alerts from your OS\'s official Security Center (Windows Defender).',
      '4. Keep your browser and antivirus software updated to catch these fake alerts early.',
      '5. Educate family members that real tech support will never show a full-screen red warning.'
    ],
    icon: 'Shield',
    severity: 'Medium',
    complexity: 'Easy'
  },
  {
    id: 'bec',
    title: 'Business Email Compromise (BEC)',
    definition: 'A sophisticated scam where attackers spoof or hack corporate email accounts to defraud companies.',
    howItWorks: 'Attackers monitor corporate email threads for weeks. They then strike during a legitimate transaction, asking for payment to be redirected to a new account they control.',
    techniques: [
      'Lookalike Domains: Registering "corpp-payment.com" instead of "corp-payment.com".',
      'Account Takeover: Using stolen credentials to log in to a real employee\'s email.',
      'Invoice Manipulation: Intercepting a real invoice and changing the banking details.'
    ],
    examples: [
      'An accountant receives an email from the "CEO" (spoofed) asking for an urgent payment to a new vendor.',
      'A real estate firm is tricked into wiring closing funds to a scammer\'s account after receiving a fake "update" from the escrow officer.'
    ],
    targets: ['Finance Teams', 'Real Estate Firms', 'Supply Chain Partners'],
    impactDescription: 'Direct financial loss of hundreds of thousands—or millions—of dollars.',
    psychology: ['Authority', 'Trust', 'Urgency'],
    redFlags: [
      'Sudden changes in banking details for existing vendors.',
      'Requests for large wire transfers that bypass normal workflows.',
      'Subtle differences in the sender\'s email address or style.'
    ],
    prevention: [
      '1. Enforce a verbal verification policy for any change in vendor banking details.',
      '2. Use "External Email" tags to identify messages coming from outside the organization.',
      '3. Implement strict "multi-person approval" for all significant financial transfers.',
      '4. Periodically audit employee email forwarding rules to detect "ghost" monitors.',
      '5. Train finance teams specifically on the mechanics of Business Email Compromise.'
    ],
    icon: 'DollarSign',
    severity: 'Critical',
    complexity: 'Advanced'
  },
  {
    id: 'ai-deepfake',
    title: 'AI / Deepfake Attacks',
    definition: 'The use of artificial intelligence to create highly realistic audio, video, or text to manipulate victims.',
    howItWorks: 'Attackers use machine learning to clone a manager\'s voice or create a video of a CEO speaking. They use these "Deepfakes" in vishing calls or video meetings to authorize fraudulent acts.',
    techniques: [
      'Voice Cloning: Creating a perfect digital replica of a target\'s voice from a short audio clip.',
      'Video Deepfakes: Swapping faces or creating entirely synthetic video of a trusted person.',
      'AI Chatbots: Using LLMs to conduct hundreds of personalized social engineering conversations simultaneously.'
    ],
    examples: [
      'A manager receives a voice message from their "CEO" (AI-generated) asking for an immediate wire transfer.',
      'An employee is invited to a Zoom meeting where the "CFO" appears on camera (Deepfake) and orders a specific data disclosure.'
    ],
    targets: ['Corporate Executives', 'Public Figures', 'Family Members'],
    impactDescription: 'High-value fraud, reputational damage, and psychological trauma.',
    psychology: ['Advanced Deception', 'Authority', 'Trust'],
    redFlags: [
      'Unusual or high-stakes requests received via video/voice out of the blue.',
      'Subtle glitches in audio or video (weird lip-sync, metallic voice).',
      'Requests to keep a voice/video call secret.'
    ],
    prevention: [
      '1. Establish a family or company "Safe Word" for authenticating emergency requests.',
      '2. Be skeptical of unusual requests for money or data, even if the voice/video looks real.',
      '3. If suspicious on a video call, ask the person to wave their hand in front of their face (Deepfakes often glitch).',
      '4. Verify the request through a secondary channel, like a text message or office chat.',
      '5. Report AI impersonation immediately to IT and legal departments.'
    ],
    icon: 'Video',
    severity: 'Critical',
    complexity: 'Advanced'
  }
];

export const LAWS: LawSection[] = [
  // --- IT ACT ---
  {
    id: 'it-43',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 43'],
    title: 'Unauthorized Access & Damage',
    description: 'Covers accessing, downloading, or damaging a computer network without permission, or introducing malware.',
    punishment: 'Civil liability: Compensation up to ₹1 crore to the affected party.',
    severity: 'High',
    example: 'Unauthorized entry into a corporate server to copy client databases.'
  },
  {
    id: 'it-66',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 66'],
    title: 'Computer-Related Offences',
    description: 'Any act described in Section 43 performed dishonestly or fraudulently.',
    punishment: 'Imprisonment up to 3 years and/or fine up to ₹5 lakh.',
    severity: 'High',
    example: 'Hacking into a computer with intent to cause financial loss.'
  },
  {
    id: 'it-66b',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 66B'],
    title: 'Receiving Stolen Computer Resource',
    description: 'Dishonestly receiving or retaining any stolen computer resource or device.',
    punishment: 'Imprisonment up to 3 years and/or fine up to ₹1 lakh.',
    severity: 'Medium',
    example: 'Purchasing a stolen laptop or using data from a known breach.'
  },
  {
    id: 'it-66c',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 66C'],
    title: 'Identity Theft',
    description: 'Fraudulent use of digital signature, password, or any unique identification feature of another person.',
    punishment: 'Imprisonment up to 3 years and/or fine up to ₹1 lakh.',
    severity: 'Critical',
    example: 'Using another person\'s bank login or OTP to authorize a transaction.'
  },
  {
    id: 'it-66d',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 66D'],
    title: 'Cheating by Personation',
    description: 'Cheating by personating through a communication device or computer resource (Primary Phishing Law).',
    punishment: 'Imprisonment up to 3 years and/or fine up to ₹1 lakh.',
    severity: 'Critical',
    example: 'Creating a fake banking portal or social media profile to scam users.'
  },
  {
    id: 'it-66e',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 66E'],
    title: 'Violation of Privacy',
    description: 'Capturing, publishing, or transmitting images of a private area of any person without consent.',
    punishment: 'Imprisonment up to 3 years and/or fine up to ₹2 lakh.',
    severity: 'High',
    example: 'Sharing non-consensual private media or hidden camera recordings.'
  },
  {
    id: 'it-66f',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 66F'],
    title: 'Cyber Terrorism',
    description: 'Acts intended to threaten the unity, integrity, security, or sovereignty of India or strike terror.',
    punishment: 'Imprisonment for life.',
    severity: 'Critical',
    example: 'Attacking nuclear facilities or national defense grids via the internet.'
  },
  {
    id: 'it-67',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 67'],
    title: 'Obscene Content Publication',
    description: 'Publishing or transmitting material which is lascivious or appeals to the prurient interest.',
    punishment: '1st Conviction: Up to 3 years + ₹5 lakh fine. Subsequent: Up to 5 years + ₹10 lakh fine.',
    severity: 'High',
    example: 'Circulating explicit adult content without proper legal standing.'
  },
  {
    id: 'it-67a',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 67A'],
    title: 'Sexually Explicit Content',
    description: 'Publishing or transmitting material containing sexually explicit acts in electronic form.',
    punishment: 'Up to 5 years and/or fine up to ₹10 lakh.',
    severity: 'High',
    example: 'Directly uploading pornography or sexually explicit videos online.'
  },
  {
    id: 'it-67b',
    category: 'IT_ACT',
    actName: 'IT Act, 2000',
    sections: ['Section 67B'],
    title: 'Child Pornography',
    description: 'Punishment for publishing or transmitting material depicting children in sexually explicit act, etc. in electronic form.',
    punishment: '1st Conviction: Up to 5 years + ₹10 lakh fine. Subsequent: Up to 7 years + ₹10 lakh fine.',
    severity: 'Critical',
    example: 'Generating, distributing or browsing child sexual abuse material (CSAM).'
  },
  // --- IPC ---
  {
    id: 'ipc-420',
    category: 'IPC',
    actName: 'Indian Penal Code',
    sections: ['Section 420'],
    title: 'Cheating & Dishonesty',
    description: 'Cheating and dishonestly inducing delivery of property.',
    punishment: 'Imprisonment up to 7 years and fine.',
    severity: 'High',
    example: 'Financial fraud via phishing or vishing where money is transferred.'
  },
  {
    id: 'ipc-465',
    category: 'IPC',
    actName: 'Indian Penal Code',
    sections: ['Section 465'],
    title: 'Punishment for Forgery',
    description: 'Forgering documents or electronic records.',
    punishment: 'Imprisonment up to 2 years or fine or both.',
    severity: 'Medium',
    example: 'Faking an appointment letter or corporate email to gain trust.'
  },
  {
    id: 'ipc-503',
    category: 'IPC',
    actName: 'Indian Penal Code',
    sections: ['Section 503'],
    title: 'Criminal Intimidation',
    description: 'Threatening a person with injury to their person, reputation or property.',
    punishment: 'Imprisonment up to 2 years or fine or both.',
    severity: 'Medium',
    example: 'Cyber-stalking or threatening to release private info (Doxing).'
  },
  // --- DPDP ---
  {
    id: 'dpdp-2023',
    category: 'DPDP',
    actName: 'DPDP Act, 2023',
    sections: ['General'],
    title: 'Data Principal Rights',
    description: 'The right of individuals to protect their personal data and seek summary of processed data.',
    punishment: 'Penalties up to ₹250 crore for data breaches.',
    severity: 'Critical',
    example: 'A company failing to protect user PII leading to a massive leak.'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'res-1',
    title: 'Social Engineering Playbook',
    type: 'pdf',
    downloadUrl: '#',
    category: 'Defense'
  },
  {
    id: 'res-2',
    title: 'Incident Response Checklist',
    type: 'checklist',
    downloadUrl: '#',
    category: 'Technical'
  },
  {
    id: 'res-3',
    title: 'MFA Hardening Guide',
    type: 'guide',
    downloadUrl: '#',
    category: 'Security'
  },
  {
    id: 'res-4',
    title: 'Digital Footprint Audit',
    type: 'checklist',
    downloadUrl: '#',
    category: 'Privacy'
  },
  {
    id: 'res-5',
    title: 'Corporate Security Policy Template',
    type: 'guide',
    downloadUrl: '#',
    category: 'Legal'
  },
  {
    id: 'res-6',
    title: 'Phishing Awareness Poster Set',
    type: 'pdf',
    downloadUrl: '#',
    category: 'Awareness'
  }
];
