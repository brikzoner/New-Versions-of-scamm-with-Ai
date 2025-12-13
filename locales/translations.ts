export const translations: Record<string, any> = {
  en: {
    rtl: false,
    nav: {
      logo: 'AI Scam Awareness',
      home: 'Home',
      scamTypes: 'Scam Types',
      detection: 'Detection Tool',
      resources: 'Resources',
      about: 'About',
      contact: 'Contact',
      selectLanguage: 'Select Language',
    },
    home: {
      hero: {
        title: 'Protect Yourself from AI-Powered Scams',
        subtitle: 'Learn to identify and defend against the latest AI-driven fraud techniques. Stay safe in the digital age.',
        cta: {
          detect: 'Check for Scams',
          learn: 'Learn More',
        },
      },
      features: {
        title: 'Why Choose Our Platform',
        subtitle: 'Comprehensive protection against AI-powered fraud',
        education: {
          title: 'Educational Content',
          description: 'Learn about the latest AI scam techniques and how they work.',
        },
        detection: {
          title: 'AI Detection',
          description: 'Use our advanced tool to detect suspicious content instantly.',
        },
        awareness: {
          title: 'Stay Informed',
          description: 'Keep up with evolving threats and protection strategies.',
        },
        protection: {
          title: 'Real Protection',
          description: 'Practical tools and knowledge to protect yourself and others.',
        },
      },
      stats: {
        scamTypes: 'Scam Types',
        free: 'Free Access',
        available: 'Available',
        languages: 'Languages',
      },
      cta: {
        title: 'Ready to Protect Yourself?',
        description: 'Start using our AI scam detection tool now and stay safe online.',
        button: 'Try Detection Tool',
      },
    },
    footer: {
      about: {
        title: 'About Us',
        description: 'We are dedicated to educating people about AI-powered scams and fraud.',
      },
      links: {
        title: 'Quick Links',
        scamTypes: 'Scam Types',
        detection: 'Detection Tool',
        resources: 'Resources',
      },
      info: {
        title: 'Information',
        about: 'About Project',
        contact: 'Contact Us',
      },
      legal: {
        title: 'Legal',
        disclaimer: 'This platform is for educational purposes only. Always verify information independently.',
      },
      copyright: 'AI Scam Awareness. All rights reserved.',
    },
    scamTypes: {
      title: 'AI-Powered Scam Types',
      subtitle: 'Learn about different types of AI-driven fraud and how to protect yourself',
      deepfake: {
        title: 'Deepfake',
        subtitle: 'AI-Generated Fake Videos & Images',
        what: {
          title: 'What is Deepfake?',
          content: 'Deepfake technology uses artificial intelligence to create highly realistic fake videos and images. It can swap faces, manipulate expressions, and even create entirely synthetic media that looks authentic.',
        },
        danger: {
          title: 'Why is it Dangerous?',
          content: 'Deepfakes can be used to create false evidence, spread misinformation, damage reputations, commit fraud, and manipulate public opinion. They are becoming increasingly difficult to detect.',
        },
        examples: {
          title: 'Real-World Examples',
          content: [
            'Fake celebrity endorsements for products',
            'Manipulated political speeches',
            'Revenge porn and non-consensual content',
            'Corporate fraud and business email compromise',
            'Fake news and misinformation campaigns',
          ],
        },
        recognize: {
          title: 'How to Recognize',
          content: [
            'Look for unnatural facial movements or expressions',
            'Check for inconsistencies in lighting and shadows',
            'Watch for blurry edges around faces',
            'Verify the source and cross-reference with official channels',
            'Use deepfake detection tools',
          ],
        },
        action: {
          title: 'What to Do if Targeted',
          content: [
            'Do not share or forward suspicious content',
            'Report the content to the platform',
            'Contact relevant authorities if it involves fraud',
            'Document evidence if you are a victim',
            'Seek legal advice if necessary',
          ],
        },
      },
      voiceSpoofing: {
        title: 'Voice Spoofing',
        subtitle: 'AI Voice Cloning & Impersonation',
        what: {
          title: 'What is Voice Spoofing?',
          content: 'Voice spoofing uses AI to clone and mimic human voices. With just a few seconds of audio, AI can create convincing voice replicas that can be used to impersonate individuals.',
        },
        danger: {
          title: 'Why is it Dangerous?',
          content: 'Voice spoofing can be used for phone scams, identity theft, unauthorized access to voice-activated systems, and creating false audio evidence. It can be very convincing and hard to detect.',
        },
        examples: {
          title: 'Real-World Examples',
          content: [
            'Phone calls impersonating family members asking for money',
            'Voice-activated system bypass',
            'Fake audio evidence in legal cases',
            'Corporate fraud through voice impersonation',
            'Social engineering attacks',
          ],
        },
        recognize: {
          title: 'How to Recognize',
          content: [
            'Unexpected requests for money or sensitive information',
            'Unusual speech patterns or slight delays',
            'Background noise inconsistencies',
            'Verify identity through alternative channels',
            'Ask personal questions only the real person would know',
          ],
        },
        action: {
          title: 'What to Do if Targeted',
          content: [
            'Hang up and call back using a known number',
            'Verify the caller through alternative means',
            'Never share sensitive information over the phone',
            'Report suspicious calls to authorities',
            'Enable two-factor authentication where possible',
          ],
        },
      },
      aiChats: {
        title: 'AI-Powered Fake Chats',
        subtitle: 'Sophisticated Bot Conversations',
        what: {
          title: 'What are AI Fake Chats?',
          content: 'AI-powered chatbots can now engage in highly convincing conversations that mimic human behavior. They can build relationships, gain trust, and manipulate victims into scams.',
        },
        danger: {
          title: 'Why is it Dangerous?',
          content: 'These AI bots can operate 24/7, scale attacks to thousands of victims simultaneously, and adapt their tactics based on responses. They can create emotional connections and exploit vulnerabilities.',
        },
        examples: {
          title: 'Real-World Examples',
          content: [
            'Romance scams on dating platforms',
            'Customer service impersonation',
            'Investment fraud through social media',
            'Phishing through chat applications',
            'Social engineering on messaging platforms',
          ],
        },
        recognize: {
          title: 'How to Recognize',
          content: [
            'Too good to be true offers or requests',
            'Rapid escalation of relationship or urgency',
            'Requests for money, personal information, or access',
            'Inconsistent or scripted responses',
            'Refusal to meet in person or video call',
          ],
        },
        action: {
          title: 'What to Do if Targeted',
          content: [
            'Stop communication immediately',
            'Do not share personal or financial information',
            'Report the account to the platform',
            'Block and delete the contact',
            'Monitor your accounts for suspicious activity',
          ],
        },
      },
      phishing: {
        title: 'AI-Personalized Phishing',
        subtitle: 'Targeted Email & Message Attacks',
        what: {
          title: 'What is AI-Personalized Phishing?',
          content: 'AI analyzes your online presence, social media, and public data to create highly personalized phishing attacks. These messages appear legitimate and are tailored to your interests and relationships.',
        },
        danger: {
          title: 'Why is it Dangerous?',
          content: 'Personalized phishing has much higher success rates than generic attacks. AI can craft messages that feel authentic, reference real events, and exploit your specific vulnerabilities.',
        },
        examples: {
          title: 'Real-World Examples',
          content: [
            'Emails referencing recent purchases or activities',
            'Messages from "colleagues" about work projects',
            'Fake invoices from services you actually use',
            'Social media messages from "friends"',
            'Targeted job offer scams',
          ],
        },
        recognize: {
          title: 'How to Recognize',
          content: [
            'Check sender email addresses carefully',
            'Look for spelling and grammar errors (though AI reduces these)',
            'Verify links before clicking',
            'Be suspicious of urgent requests',
            'Confirm through alternative communication channels',
          ],
        },
        action: {
          title: 'What to Do if Targeted',
          content: [
            'Do not click links or download attachments',
            'Verify the sender through official channels',
            'Report phishing attempts to your email provider',
            'Change passwords if you interacted with the message',
            'Enable security alerts on your accounts',
          ],
        },
      },
      socialEngineering: {
        title: 'AI-Driven Social Engineering',
        subtitle: 'Psychological Manipulation at Scale',
        what: {
          title: 'What is AI-Driven Social Engineering?',
          content: 'AI systems analyze psychological profiles, communication patterns, and behavioral data to craft highly effective social engineering attacks. They can adapt in real-time and exploit human psychology.',
        },
        danger: {
          title: 'Why is it Dangerous?',
          content: 'AI can process vast amounts of data to identify vulnerabilities, craft perfect timing for attacks, and manipulate emotions effectively. It can scale sophisticated attacks that would be impossible manually.',
        },
        examples: {
          title: 'Real-World Examples',
          content: [
            'Pretexting attacks using AI-gathered information',
            'Baiting with personalized offers',
            'Quid pro quo scams with AI-generated personas',
            'Tailgating through social media analysis',
            'Authority impersonation with AI-generated content',
          ],
        },
        recognize: {
          title: 'How to Recognize',
          content: [
            'Be aware of information gathering attempts',
            'Question requests that create urgency or fear',
            'Verify identities independently',
            'Be cautious of too-perfect timing',
            'Trust your instincts if something feels off',
          ],
        },
        action: {
          title: 'What to Do if Targeted',
          content: [
            'Slow down and think critically',
            'Verify all claims independently',
            'Do not make decisions under pressure',
            'Consult with trusted friends or colleagues',
            'Report suspicious activity to authorities',
          ],
        },
      },
    },
    detection: {
      title: 'AI Scam Detection Tool',
      subtitle: 'Analyze suspicious content for AI-powered fraud indicators',
      input: {
        label: 'Enter suspicious content',
        placeholder: 'Paste messages, emails, chat conversations, or phone call scripts here...',
        button: 'Analyze Content',
        analyzing: 'Analyzing...',
      },
      results: {
        title: 'Analysis Results',
        verdict: {
          label: 'Verdict',
          scam: 'Scam',
          suspicious: 'Suspicious',
          safe: 'Likely Safe',
        },
        risk: {
          label: 'Risk Level',
          percentage: '{percentage}%',
        },
        explanation: {
          title: 'Explanation',
        },
        indicators: {
          title: 'Detected Indicators',
        },
      },
      tips: {
        title: 'Tips for Better Detection',
        content: [
          'Include full context when possible',
          'Copy complete messages or conversations',
          'Include sender information if available',
          'Note any unusual behavior or requests',
        ],
      },
    },
    resources: {
      title: 'Educational Resources',
      subtitle: 'Learn more about protecting yourself from AI scams',
      sections: {
        guides: {
          title: 'Protection Guides',
          items: [
            {
              title: 'How to Verify Online Identities',
              description: 'Learn techniques to verify if someone is who they claim to be online.',
            },
            {
              title: 'Secure Communication Practices',
              description: 'Best practices for safe communication in the digital age.',
            },
            {
              title: 'Recognizing Social Engineering',
              description: 'Understand the psychology behind social engineering attacks.',
            },
          ],
        },
        tools: {
          title: 'Useful Tools',
          items: [
            {
              title: 'Deepfake Detection Tools',
              description: 'Resources for detecting manipulated media.',
            },
            {
              title: 'Email Verification Services',
              description: 'Tools to verify email authenticity.',
            },
            {
              title: 'Phone Number Lookup',
              description: 'Services to check suspicious phone numbers.',
            },
          ],
        },
        updates: {
          title: 'Latest Updates',
          items: [
            {
              title: 'New AI Scam Techniques',
              description: 'Stay updated on emerging threats.',
            },
            {
              title: 'Protection Strategies',
              description: 'Latest methods to protect yourself.',
            },
          ],
        },
      },
    },
    about: {
      title: 'About This Project',
      subtitle: 'Our mission to protect people from AI-powered fraud',
      mission: {
        title: 'Our Mission',
        content: 'We are dedicated to educating people about the growing threat of AI-powered scams and fraud. Our goal is to provide accessible, comprehensive information and tools to help individuals protect themselves in an increasingly digital world.',
      },
      why: {
        title: 'Why This Matters',
        content: 'As AI technology becomes more accessible, scammers are using it to create more sophisticated and convincing fraud attempts. Traditional security measures are no longer enough. We need to stay informed and use advanced detection methods.',
      },
      approach: {
        title: 'Our Approach',
        content: 'We combine educational content, real-world examples, and practical detection tools to create a comprehensive platform for scam awareness. Our content is regularly updated to reflect the latest threats and protection strategies.',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with questions or feedback',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
      },
      info: {
        title: 'Contact Information',
        email: 'Email: info@aiscamawareness.com',
        note: 'We aim to respond within 24-48 hours.',
      },
    },
  },
  // Add more languages with similar structure
  es: {
    rtl: false,
    nav: {
      logo: 'Conciencia de Estafas IA',
      home: 'Inicio',
      scamTypes: 'Tipos de Estafas',
      detection: 'Herramienta de Detección',
      resources: 'Recursos',
      about: 'Acerca de',
      contact: 'Contacto',
      selectLanguage: 'Seleccionar Idioma',
    },
    // ... (abbreviated for space, but full translations should be included)
  },
  ar: {
    rtl: true,
    nav: {
      logo: 'الوعي باحتيال الذكاء الاصطناعي',
      home: 'الرئيسية',
      scamTypes: 'أنواع الاحتيال',
      detection: 'أداة الكشف',
      resources: 'الموارد',
      about: 'حول',
      contact: 'اتصل',
      selectLanguage: 'اختر اللغة',
    },
    // ... (abbreviated for space)
  },
}

