// IoT Finals Exam Data - Lessons 5-8
// All questions are multiple choice with 4 options
// Part 1: Lessons 5-6 (IoT Security & Cloud Computing)
// Part 2: Lessons 7-8 (Fog Computing & IoT in Practice) - To be added later

const examQuestions = [
  // ====== LESSON 5: IoT Security ======
  
  {
    id: 1,
    lesson: "Lesson 5",
    topic: "IoT Security Basics",
    question: "What is IoT security based on?",
    options: [
      "A cybersecurity strategy to protect IoT devices and vulnerable networks from cyber attacks",
      "A hardware protection system for routers only",
      "A software firewall for computers",
      "A physical security protocol for data centers"
    ],
    correct: 0,
    explanation: "IoT security is based on a cybersecurity strategy to protect IoT devices and the vulnerable networks they connect to from cyber attacks."
  },
  {
    id: 2,
    lesson: "Lesson 5",
    topic: "IoT Vulnerabilities",
    question: "What are examples of Weak Credentials in IoT devices?",
    options: [
      "Default passwords, hardcoded credentials, and unencrypted telemetry",
      "Strong encryption and two-factor authentication",
      "Biometric security and facial recognition",
      "Regular password updates and secure protocols"
    ],
    correct: 0,
    explanation: "Weak Credentials include default passwords, hardcoded credentials, and unencrypted telemetry which are industry standard, enabling trivial unauthorized access."
  },
  {
    id: 3,
    lesson: "Lesson 5",
    topic: "IoT Vulnerabilities",
    question: "What is Supply Chain Risk in IoT?",
    options: [
      "Complex, opaque supply chains introduce firmware and component risks that are nearly impossible to detect or remediate at scale",
      "The cost of shipping IoT devices",
      "The availability of IoT components in stores",
      "The manufacturing speed of IoT devices"
    ],
    correct: 0,
    explanation: "Supply Chain Risk refers to complex, opaque supply chains that introduce firmware and component risks that are nearly impossible to detect or remediate at scale."
  },
  {
    id: 4,
    lesson: "Lesson 5",
    topic: "IoT Vulnerabilities",
    question: "What are Patching Gaps in IoT?",
    options: [
      "Many devices lack secure update mechanisms; billions of vulnerabilities remain unpatched across device lifecycles spanning years",
      "Physical gaps in device casings",
      "Network bandwidth limitations",
      "Storage capacity issues"
    ],
    correct: 0,
    explanation: "Patching Gaps mean many devices lack secure update mechanisms. Billions of vulnerabilities remain unpatched across device lifecycles spanning years."
  },
  {
    id: 5,
    lesson: "Lesson 5",
    topic: "IoT Security Risks",
    question: "Which of the following is a core risk within the IoT ecosystem?",
    options: [
      "Insecure Default Settings",
      "High battery consumption",
      "Slow processing speed",
      "Limited color display"
    ],
    correct: 0,
    explanation: "Insecure Default Settings is one of the core risks within the IoT ecosystem, along with Lack of Device Management, Insecure Network Services, and others."
  },
  {
    id: 6,
    lesson: "Lesson 5",
    topic: "IoT Security Risks",
    question: "Which is NOT a core IoT security risk?",
    options: [
      "High device cost",
      "Lack of Device Management",
      "Insecure Network Services",
      "Insecure Data Transfer"
    ],
    correct: 0,
    explanation: "The core IoT security risks include Insecure Default Settings, Lack of Device Management, Insecure Network Services, Insecure Data Transfer, Lack of Secure Updates, and Use of Insecure Components."
  },
  {
    id: 7,
    lesson: "Lesson 5",
    topic: "IoT Security Definition",
    question: "What is IoT security?",
    options: [
      "The practice that keeps your IoT systems safe",
      "A type of antivirus software",
      "A hardware firewall device",
      "A network cable standard"
    ],
    correct: 0,
    explanation: "IoT security is the practice that keeps your IoT systems safe."
  },
  {
    id: 8,
    lesson: "Lesson 5",
    topic: "IoT Security Tools",
    question: "What do IoT security tools protect from?",
    options: [
      "Threats and breaches",
      "Power outages only",
      "Physical theft only",
      "Weather damage only"
    ],
    correct: 0,
    explanation: "IoT security tools protect from threats and breaches."
  },
  {
    id: 9,
    lesson: "Lesson 5",
    topic: "IoT Security Tools",
    question: "What can IoT security tools identify, monitor, and help fix?",
    options: [
      "Risks and vulnerabilities",
      "Hardware malfunctions only",
      "Battery issues only",
      "Display problems only"
    ],
    correct: 0,
    explanation: "IoT security tools identify and monitor risks and can help fix vulnerabilities."
  },
  {
    id: 10,
    lesson: "Lesson 5",
    topic: "IoT Security",
    question: "IoT security ensures which three properties of your IoT solution?",
    options: [
      "Availability, integrity, and confidentiality",
      "Speed, size, and color",
      "Cost, weight, and durability",
      "Brightness, volume, and temperature"
    ],
    correct: 0,
    explanation: "IoT security ensures the availability, integrity, and confidentiality of your IoT solution."
  },
  {
    id: 11,
    lesson: "Lesson 5",
    topic: "C&C Architecture",
    question: "What is a component of System Communication (C&C Architecture)?",
    options: [
      "Botmaster",
      "Cloud Storage",
      "Web Browser",
      "Email Client"
    ],
    correct: 0,
    explanation: "System Communication Components (C&C Architecture) include Botmaster, C&C Server (Command and Control), Bot (Multiple instances), and Command and Response."
  },
  {
    id: 12,
    lesson: "Lesson 5",
    topic: "C&C Architecture",
    question: "What does C&C Server stand for in IoT security?",
    options: [
      "Command and Control Server",
      "Cloud and Computing Server",
      "Central and Core Server",
      "Copy and Create Server"
    ],
    correct: 0,
    explanation: "C&C Server stands for Command and Control Server in the context of IoT security architecture."
  },
  {
    id: 13,
    lesson: "Lesson 5",
    topic: "IoT Applications",
    question: "Which is an example of IoT devices used by businesses?",
    options: [
      "Smart security cameras",
      "Desktop computers",
      "Printed books",
      "Paper documents"
    ],
    correct: 0,
    explanation: "Businesses use a wide range of IoT devices, including smart security cameras, trackers for vehicles, ships, and goods, and sensors that capture data about industrial machinery."
  },
  {
    id: 14,
    lesson: "Lesson 5",
    topic: "IoT Applications",
    question: "What do sensors in IoT capture data about?",
    options: [
      "Industrial machinery",
      "Weather forecasts only",
      "Stock market prices only",
      "Social media trends only"
    ],
    correct: 0,
    explanation: "Sensors capture data about industrial machinery as part of business IoT applications."
  },
  {
    id: 15,
    lesson: "Lesson 5",
    topic: "Vulnerable IoT Devices",
    question: "What new techniques do attackers use against IoT devices?",
    options: [
      "Persistence, automation, and evasion at unprecedented scale",
      "Manual testing only",
      "Physical access only",
      "Social engineering only"
    ],
    correct: 0,
    explanation: "Attackers are evolving faster than defenses. New techniques now enable persistence, automation, and evasion at unprecedented scale."
  },
  {
    id: 16,
    lesson: "Lesson 5",
    topic: "Weak Passwords",
    question: "Why do most IoT devices have weak guessable passwords?",
    options: [
      "They come with pre-set credentials (username and passwords) provided by the manufacturer",
      "Users always choose weak passwords",
      "Strong passwords are not supported",
      "Passwords are optional"
    ],
    correct: 0,
    explanation: "Weak guessable passwords: Most IoT devices come with pre-set credentials (username and Passwords) that are provided by the manufacturer."
  },
  {
    id: 17,
    lesson: "Lesson 5",
    topic: "Network Security",
    question: "What is a core feature of IoT devices regarding networking?",
    options: [
      "Networking capabilities that allow endpoints to communicate amongst themselves over a secure internet connection",
      "Ability to work offline only",
      "No internet connection needed",
      "Only Bluetooth connectivity"
    ],
    correct: 0,
    explanation: "One of the core features of IoT devices involves networking capabilities that allow endpoints to communicate amongst themselves over a secure internet connection."
  },
  {
    id: 18,
    lesson: "Lesson 5",
    topic: "Public Wi-Fi Security",
    question: "What allows side-channel snooping between industrial IoT tenants?",
    options: [
      "5G network slice misconfigurations",
      "Strong encryption protocols",
      "Secure VPN connections",
      "Hardware firewalls"
    ],
    correct: 0,
    explanation: "5G network slice misconfigurations now allow side-channel snooping between industrial IoT tenants, creating new lateral movement paths for attackers."
  },
  {
    id: 19,
    lesson: "Lesson 5",
    topic: "Data Vulnerabilities",
    question: "What can happen if users fail to encrypt data within their IT ecosystems?",
    options: [
      "Sensitive information can be stolen at the point of collection, while in transit, or during processing",
      "Data becomes faster to process",
      "Storage capacity increases",
      "Network speed improves"
    ],
    correct: 0,
    explanation: "Even the most robust IoT equipment can be exploited if users fail to encrypt data within their IT ecosystems. Sensitive information can be stolen at the point of collection, while it is in transit or during processing."
  },
  {
    id: 20,
    lesson: "Lesson 5",
    topic: "Update Mechanisms",
    question: "What must companies be able to send to prevent IoT devices from being compromised?",
    options: [
      "Real-time updates to each endpoint as soon as they are made available",
      "Monthly newsletters",
      "Annual reports",
      "Physical repair kits"
    ],
    correct: 0,
    explanation: "To prevent IoT devices from being compromised, companies must be able to send real-time updates to each endpoint as soon as they are made available."
  },
  {
    id: 21,
    lesson: "Lesson 5",
    topic: "Device Vulnerabilities",
    question: "What are insecure components in IoT devices?",
    options: [
      "Outdated components or components that contain vulnerabilities",
      "Brand new components",
      "Expensive components",
      "Large components"
    ],
    correct: 0,
    explanation: "Insecure components refer to outdated components or components that contain vulnerabilities."
  },
  {
    id: 22,
    lesson: "Lesson 5",
    topic: "Device Vulnerabilities",
    question: "What can unnecessary open ports in IoT devices allow?",
    options: [
      "Hackers to exploit vulnerable services",
      "Faster internet connection",
      "Better device performance",
      "Improved battery life"
    ],
    correct: 0,
    explanation: "Unnecessary open ports: Unused open ports in some devices can allow hackers to exploit vulnerable services."
  },
  {
    id: 23,
    lesson: "Lesson 5",
    topic: "Device Vulnerabilities",
    question: "What does lack of logging mechanism in devices make difficult?",
    options: [
      "Detecting malicious activities",
      "Connecting to the internet",
      "Charging the battery",
      "Updating the software"
    ],
    correct: 0,
    explanation: "Insufficient logging mechanisms: Lack of logging mechanism in devices makes it difficult to detect malicious activities."
  },
  {
    id: 24,
    lesson: "Lesson 5",
    topic: "Device Vulnerabilities",
    question: "What is inadequate privacy protection in IoT devices?",
    options: [
      "Poor data management capabilities and lack of encryption on shared data",
      "Too much encryption",
      "Excessive privacy settings",
      "Over-protected data"
    ],
    correct: 0,
    explanation: "Inadequate privacy protection and encryption refers to poor data management capabilities and lack of encryption on shared data."
  },
  {
    id: 25,
    lesson: "Lesson 5",
    topic: "Device Vulnerabilities",
    question: "What is a problem with hardcoded passwords?",
    options: [
      "Passwords cannot be changed",
      "Passwords are too long",
      "Passwords expire too quickly",
      "Passwords are too complex"
    ],
    correct: 0,
    explanation: "Hardcoded passwords: Passwords cannot be changed."
  },
  {
    id: 26,
    lesson: "Lesson 5",
    topic: "Defense Strategies",
    question: "What does defense against IoT threats require?",
    options: [
      "Layered, comprehensive strategies across design, deployment, and governance",
      "A single antivirus program",
      "One-time password change",
      "Physical locks only"
    ],
    correct: 0,
    explanation: "Security is not solved by any single control. Defense requires layered, comprehensive strategies across design, deployment, and governance."
  },
  {
    id: 27,
    lesson: "Lesson 5",
    topic: "Defense Strategies",
    question: "What should organizations do for Inventory & Segmentation?",
    options: [
      "Know every device on your network and isolate IoT zones with micro-segmentation",
      "Connect all devices to the same network",
      "Ignore device inventory",
      "Remove all security zones"
    ],
    correct: 0,
    explanation: "Inventory & Segmentation: Know every device on your network. Isolate IoT zones with micro-segmentation to limit breach radius and contain attacks."
  },
  {
    id: 28,
    lesson: "Lesson 5",
    topic: "Defense Strategies",
    question: "What does Security by Design mandate?",
    options: [
      "Secure development lifecycles, code signing, cryptographic hardening, and automated over-the-air update mechanisms",
      "Quick development without testing",
      "Manual updates only",
      "No encryption requirements"
    ],
    correct: 0,
    explanation: "Security by Design: Mandate secure development lifecycles, code signing, cryptographic hardening, and automated over-the-air update mechanisms."
  },
  {
    id: 29,
    lesson: "Lesson 5",
    topic: "Defense Strategies",
    question: "What should Identity & Access deploy?",
    options: [
      "Passwordless multi-factor authentication, machine identity management, and zero standing privilege models",
      "Single password for all devices",
      "No authentication required",
      "Username only access"
    ],
    correct: 0,
    explanation: "Identity & Access: Deploy passwordless multi-factor authentication, machine identity management, and zero standing privilege models."
  },
  {
    id: 30,
    lesson: "Lesson 5",
    topic: "Defense Strategies",
    question: "What should Policy & Regulation support?",
    options: [
      "IoT security labeling standards, supply chain transparency mandates, and international security cooperation frameworks",
      "No regulations",
      "Self-regulation only",
      "Local standards only"
    ],
    correct: 0,
    explanation: "Policy & Regulation: Support IoT security labeling standards, supply chain transparency mandates, and international security cooperation frameworks."
  },
  {
    id: 31,
    lesson: "Lesson 5",
    topic: "Organizational Challenges",
    question: "What is the Lifecycle Mismatch challenge in IoT?",
    options: [
      "Devices operate 5-10 years; manufacturer support ends in 2-3 years; unpatched devices persist indefinitely",
      "Devices last forever",
      "Manufacturers support devices indefinitely",
      "All devices are updated automatically"
    ],
    correct: 0,
    explanation: "Lifecycle Mismatch: Devices operate 5-10 years; manufacturer support ends in 2-3 years. Unpatched devices persist indefinitely."
  },
  {
    id: 32,
    lesson: "Lesson 5",
    topic: "Organizational Challenges",
    question: "What often represents the weakest security links in organizations?",
    options: [
      "Complex buying processes and asset management",
      "Strong encryption",
      "Regular updates",
      "Employee training"
    ],
    correct: 0,
    explanation: "Procurement Risk: Complex buying processes and asset management often represent the weakest security links in organizations."
  },
  {
    id: 33,
    lesson: "Lesson 5",
    topic: "Organizational Challenges",
    question: "What is now mandatory for IoT resilience?",
    options: [
      "Monitoring, penetration testing, and offensive security exercises",
      "Annual security reviews only",
      "One-time security audit",
      "No security testing required"
    ],
    correct: 0,
    explanation: "Continuous Defense: Monitoring, penetration testing, and offensive security exercises are now mandatory for IoT resilience."
  },

  // ====== LESSON 6: Cloud Computing ======
  
  {
    id: 34,
    lesson: "Lesson 6",
    topic: "The Old Way",
    question: "What did the 'Old Way' (On-Premises) require companies to buy?",
    options: [
      "Physical servers, storage disks, and networking equipment",
      "Cloud subscriptions only",
      "Software licenses only",
      "Internet connections only"
    ],
    correct: 0,
    explanation: "The 'Old Way' (On-Premises): The company had to buy powerful physical servers, storage disks, and networking equipment."
  },
  {
    id: 35,
    lesson: "Lesson 6",
    topic: "The Old Way",
    question: "What is the huge upfront investment in the 'Old Way' known as?",
    options: [
      "Capital Expenditure (CapEx)",
      "Operational Expenditure (OpEx)",
      "Monthly Subscription",
      "Annual License Fee"
    ],
    correct: 0,
    explanation: "This required a huge upfront investment, known as Capital Expenditure (CapEx)."
  },
  {
    id: 36,
    lesson: "Lesson 6",
    topic: "The Old Way",
    question: "What problem did guessing peak traffic needs cause in the 'Old Way'?",
    options: [
      "Buying far more capacity than used day-to-day, leading to wasted resources",
      "Not having enough capacity ever",
      "Perfect resource utilization",
      "Automatic scaling"
    ],
    correct: 0,
    explanation: "They had to guess their peak traffic needs, often buying far more capacity than they used day-to-day, leading to wasted resources."
  },
  {
    id: 37,
    lesson: "Lesson 6",
    topic: "The Old Way",
    question: "How long could the process of ordering, installing, and configuring a new server take?",
    options: [
      "Weeks or even months",
      "Minutes",
      "Hours",
      "Seconds"
    ],
    correct: 0,
    explanation: "If they needed a new server, the process of ordering, installing, and configuring it could take weeks or even months."
  },
  {
    id: 38,
    lesson: "Lesson 6",
    topic: "The New Way",
    question: "In the 'New Way' (Cloud Computing), instead of buying hardware, what do you do?",
    options: [
      "Rent computing power from a cloud provider",
      "Build your own data center",
      "Use only local storage",
      "Share hardware with neighbors"
    ],
    correct: 0,
    explanation: "The 'New Way' (Cloud Computing): Instead of buying hardware, you rent computing power from a cloud provider (like AWS, Google, or Microsoft)."
  },
  {
    id: 39,
    lesson: "Lesson 6",
    topic: "The New Way",
    question: "What is the manageable monthly bill in cloud computing known as?",
    options: [
      "Operational Expenditure (OpEx)",
      "Capital Expenditure (CapEx)",
      "Hardware Investment",
      "Equipment Cost"
    ],
    correct: 0,
    explanation: "This shifts the cost from a large upfront investment to a manageable monthly bill, known as an Operational Expenditure (OpEx)."
  },
  {
    id: 40,
    lesson: "Lesson 6",
    topic: "The New Way",
    question: "What does the cloud model eliminate?",
    options: [
      "Guesswork, long waiting times, and wasted resources",
      "Internet connectivity",
      "Software applications",
      "User accounts"
    ],
    correct: 0,
    explanation: "This model eliminates guesswork, long waiting times, and wasted resources."
  },
  {
    id: 41,
    lesson: "Lesson 6",
    topic: "Cloud Computing Definition",
    question: "What is Cloud Computing?",
    options: [
      "A technology that allows you to store and access data and applications over the internet instead of using your computer's hard drive or a local server",
      "A weather prediction system",
      "A type of airplane navigation",
      "A physical storage device"
    ],
    correct: 0,
    explanation: "Cloud Computing is a technology that allows you to store and access data and applications over the internet instead of using your computer's hard drive or a local server."
  },
  {
    id: 42,
    lesson: "Lesson 6",
    topic: "On-Demand Services",
    question: "What essential computing services does cloud computing deliver?",
    options: [
      "Servers, storage, databases, networking, and software",
      "Only email services",
      "Only file storage",
      "Only video streaming"
    ],
    correct: 0,
    explanation: "Cloud computing delivers essential computing services—including servers, storage, databases, networking, and software—all over the Internet."
  },
  {
    id: 43,
    lesson: "Lesson 6",
    topic: "On-Demand Services",
    question: "What is cloud computing about regarding resources?",
    options: [
      "Accessing resources as you need them, rather than owning and maintaining them",
      "Buying resources upfront",
      "Never using external resources",
      "Owning all hardware"
    ],
    correct: 0,
    explanation: "It's about accessing resources as you need them, rather than owning and maintaining them."
  },
  {
    id: 44,
    lesson: "Lesson 6",
    topic: "Shared & Scalable",
    question: "What does cloud computing enable on-demand access to?",
    options: [
      "A pool of shared, scalable resources",
      "A single dedicated server",
      "Physical hardware only",
      "Local storage only"
    ],
    correct: 0,
    explanation: "This model enables on-demand access to a pool of shared, scalable resources."
  },
  {
    id: 45,
    lesson: "Lesson 6",
    topic: "Shared & Scalable",
    question: "What can organizations rapidly do with computing power in the cloud?",
    options: [
      "Provision and de-provision computing power",
      "Only increase computing power",
      "Only decrease computing power",
      "Never change computing power"
    ],
    correct: 0,
    explanation: "Organizations can rapidly provision and de-provision computing power, ensuring they always have the right amount of capacity without the upfront investment in physical infrastructure."
  },
  {
    id: 46,
    lesson: "Lesson 6",
    topic: "Public Cloud",
    question: "What is a Public Cloud?",
    options: [
      "Services offered by third-party providers over the public internet, open to anyone who wants to use them",
      "A cloud only for government use",
      "A cloud for one organization only",
      "A physical server room"
    ],
    correct: 0,
    explanation: "Public Cloud: Services are offered by third-party providers over the public internet, open to anyone who wants to use them."
  },
  {
    id: 47,
    lesson: "Lesson 6",
    topic: "Public Cloud",
    question: "Which are examples of Public Cloud providers?",
    options: [
      "Amazon Web Services (AWS) and Google Cloud Platform",
      "Personal home servers",
      "Local data centers",
      "Private company servers"
    ],
    correct: 0,
    explanation: "Examples include Amazon Web Services (AWS) and Google Cloud Platform."
  },
  {
    id: 48,
    lesson: "Lesson 6",
    topic: "Private Cloud",
    question: "What is a Private Cloud?",
    options: [
      "Dedicated to a single organization, offering enhanced security and control tailored to specific business needs",
      "Open to anyone on the internet",
      "Shared among multiple companies",
      "A public internet service"
    ],
    correct: 0,
    explanation: "Private Cloud: Dedicated to a single organization, a private cloud can be hosted on-premises or by a third-party, offering enhanced security and control tailored to specific business needs."
  },
  {
    id: 49,
    lesson: "Lesson 6",
    topic: "Private Cloud",
    question: "Where can a private cloud be hosted?",
    options: [
      "On-premises or by a third-party",
      "Only on public internet",
      "Only in personal homes",
      "Only in government buildings"
    ],
    correct: 0,
    explanation: "A private cloud can be hosted on-premises or by a third-party."
  },
  {
    id: 50,
    lesson: "Lesson 6",
    topic: "Hybrid Cloud",
    question: "What is a Hybrid Cloud?",
    options: [
      "A mix of public and private clouds allowing data and applications to move between the two environments",
      "Only public cloud services",
      "Only private cloud services",
      "A physical data center"
    ],
    correct: 0,
    explanation: "Hybrid Cloud: A mix of public and private clouds, this model allows data and applications to move between the two environments."
  },
  {
    id: 51,
    lesson: "Lesson 6",
    topic: "Hybrid Cloud",
    question: "What does Hybrid Cloud provide?",
    options: [
      "Greater flexibility and optimized resource allocation",
      "Less flexibility",
      "Fixed resource allocation",
      "No resource sharing"
    ],
    correct: 0,
    explanation: "Hybrid Cloud provides greater flexibility and optimized resource allocation."
  },
  {
    id: 52,
    lesson: "Lesson 6",
    topic: "Multicloud",
    question: "What percentage of companies now leverage multicloud strategies?",
    options: [
      "Nearly 90%",
      "About 10%",
      "Around 50%",
      "Less than 5%"
    ],
    correct: 0,
    explanation: "Nearly 90% of companies now leverage multicloud strategies."
  },
  {
    id: 53,
    lesson: "Lesson 6",
    topic: "Multicloud",
    question: "What does a multicloud approach enhance and prevent?",
    options: [
      "Enhances resilience, prevents vendor lock-in, and optimizes performance",
      "Increases costs and complexity",
      "Reduces security",
      "Limits flexibility"
    ],
    correct: 0,
    explanation: "This approach enhances resilience, prevents vendor lock-in, and optimizes performance."
  },
  {
    id: 54,
    lesson: "Lesson 6",
    topic: "IaaS",
    question: "What does IaaS (Infrastructure as a Service) provide?",
    options: [
      "Fundamental computing resources like virtual machines, storage, and networking over the internet",
      "Ready-to-use software applications",
      "A platform for building applications",
      "Physical hardware delivery"
    ],
    correct: 0,
    explanation: "IaaS (Infrastructure as a Service): Provides fundamental computing resources like virtual machines, storage, and networking over the internet."
  },
  {
    id: 55,
    lesson: "Lesson 6",
    topic: "IaaS",
    question: "In IaaS, what do you manage?",
    options: [
      "Your operating systems, applications, and data",
      "Only the physical hardware",
      "Nothing at all",
      "Only the networking"
    ],
    correct: 0,
    explanation: "You manage your operating systems, applications, and data, while the provider handles the underlying infrastructure."
  },
  {
    id: 56,
    lesson: "Lesson 6",
    topic: "IaaS",
    question: "What is an example of IaaS?",
    options: [
      "Amazon EC2",
      "Microsoft 365",
      "Salesforce",
      "Gmail"
    ],
    correct: 0,
    explanation: "Example of IaaS: Amazon EC2."
  },
  {
    id: 57,
    lesson: "Lesson 6",
    topic: "PaaS",
    question: "What does PaaS (Platform as a Service) deliver?",
    options: [
      "A platform allowing developers to build, run, and manage applications without the complexity of building and maintaining the infrastructure",
      "Physical servers",
      "Ready-to-use software",
      "Networking equipment"
    ],
    correct: 0,
    explanation: "PaaS (Platform as a Service): Delivers a platform allowing developers to build, run, and manage applications without the complexity of building and maintaining the infrastructure."
  },
  {
    id: 58,
    lesson: "Lesson 6",
    topic: "PaaS",
    question: "What is an example of PaaS?",
    options: [
      "Google App Engine",
      "Amazon EC2",
      "Microsoft 365",
      "Netflix"
    ],
    correct: 0,
    explanation: "Example of PaaS: Google App Engine."
  },
  {
    id: 59,
    lesson: "Lesson 6",
    topic: "SaaS",
    question: "What does SaaS (Software as a Service) provide?",
    options: [
      "Ready-to-use software applications over the internet on a subscription basis",
      "Physical hardware",
      "Development platforms",
      "Virtual machines"
    ],
    correct: 0,
    explanation: "SaaS (Software as a Service): Provides ready-to-use software applications over the internet on a subscription basis."
  },
  {
    id: 60,
    lesson: "Lesson 6",
    topic: "SaaS",
    question: "How do users access SaaS software?",
    options: [
      "Via a web browser or mobile app",
      "By installing physical disks",
      "Through command line only",
      "By visiting a store"
    ],
    correct: 0,
    explanation: "Users access the software via a web browser or mobile app."
  },
  {
    id: 61,
    lesson: "Lesson 6",
    topic: "SaaS",
    question: "Which are examples of SaaS?",
    options: [
      "Microsoft 365 and Salesforce",
      "Amazon EC2",
      "Google App Engine",
      "Physical servers"
    ],
    correct: 0,
    explanation: "Examples of SaaS: Microsoft 365 and Salesforce."
  },
  {
    id: 62,
    lesson: "Lesson 6",
    topic: "Cloud Benefits",
    question: "How does cloud computing provide Cost Efficiency?",
    options: [
      "Reduces operational costs by eliminating expensive hardware investments and maintenance; businesses pay only for resources consumed",
      "Requires large upfront investments",
      "Increases hardware costs",
      "Requires buying excess capacity"
    ],
    correct: 0,
    explanation: "Cost Efficiency: Reduces operational costs by eliminating expensive hardware investments and maintenance. Businesses pay only for resources consumed."
  },
  {
    id: 63,
    lesson: "Lesson 6",
    topic: "Cloud Benefits",
    question: "What does Scalability & Flexibility enable in cloud computing?",
    options: [
      "Instant scaling of resources to meet fluctuating demand spikes without over-provisioning",
      "Fixed resource allocation",
      "Manual scaling only",
      "No scaling options"
    ],
    correct: 0,
    explanation: "Scalability & Flexibility: Enables instant scaling of resources to meet fluctuating demand spikes without over-provisioning."
  },
  {
    id: 64,
    lesson: "Lesson 6",
    topic: "Cloud Benefits",
    question: "What does Global Accessibility mean in cloud computing?",
    options: [
      "Data and applications are accessible anytime, anywhere, from any device with an internet connection",
      "Data is only accessible locally",
      "Applications work offline only",
      "Access is limited to one location"
    ],
    correct: 0,
    explanation: "Global Accessibility: Data and applications are accessible anytime, anywhere, from any device with an internet connection."
  },
  {
    id: 65,
    lesson: "Lesson 6",
    topic: "Cloud Benefits",
    question: "What does Business Continuity offer in cloud computing?",
    options: [
      "Robust automated backup solutions, disaster recovery, and high availability",
      "Manual backup only",
      "No disaster recovery",
      "Single point of failure"
    ],
    correct: 0,
    explanation: "Business Continuity: Offers robust automated backup solutions, disaster recovery, and high availability."
  },
  {
    id: 66,
    lesson: "Lesson 6",
    topic: "Real-World Cloud",
    question: "How do Gmail and Outlook leverage cloud infrastructure?",
    options: [
      "To store and synchronize communications across devices",
      "To play video games",
      "To control smart home devices",
      "To manage physical servers"
    ],
    correct: 0,
    explanation: "Gmail and Outlook: Leverage cloud infrastructure to store and synchronize communications across devices."
  },
  {
    id: 67,
    lesson: "Lesson 6",
    topic: "Real-World Cloud",
    question: "What does Netflix rely on cloud servers for?",
    options: [
      "Handling massive data volumes and personalized viewing experiences",
      "Selling physical DVDs",
      "Manufacturing televisions",
      "Printing movie posters"
    ],
    correct: 0,
    explanation: "Netflix: Streams high-definition video content worldwide, relying on cloud servers to handle massive data volumes and personalized viewing experiences."
  },
  {
    id: 68,
    lesson: "Lesson 6",
    topic: "Real-World Cloud",
    question: "How many daily meeting participants does Zoom enable to connect?",
    options: [
      "Over 300 million",
      "About 1 million",
      "Around 10 million",
      "Less than 100,000"
    ],
    correct: 0,
    explanation: "Zoom: Enables over 300 million daily meeting participants to connect via cloud infrastructure providing bandwidth and global reach."
  },
  {
    id: 69,
    lesson: "Lesson 6",
    topic: "Cloud Challenges",
    question: "What is a concern regarding Data Security and Privacy in cloud computing?",
    options: [
      "Data breaches and compliance with privacy regulations",
      "Too much security",
      "Over-encryption",
      "Excessive privacy"
    ],
    correct: 0,
    explanation: "Data Security and Privacy: Concerns about data breaches and compliance with privacy regulations."
  },
  {
    id: 70,
    lesson: "Lesson 6",
    topic: "Cloud Challenges",
    question: "What makes Vendor Lock-in risky?",
    options: [
      "Migrating data/apps can be complex and costly due to proprietary services",
      "Easy migration between providers",
      "Open source solutions",
      "Free data transfer"
    ],
    correct: 0,
    explanation: "Vendor Lock-in Risks: Migrating data/apps can be complex and costly due to proprietary services."
  },
  {
    id: 71,
    lesson: "Lesson 6",
    topic: "Cloud Challenges",
    question: "What can outages or cyberattacks lead to?",
    options: [
      "Temporary data inaccessibility",
      "Permanent data storage",
      "Faster data access",
      "Improved security"
    ],
    correct: 0,
    explanation: "Potential Data Loss and Downtime: Outages or cyberattacks can lead to temporary data inaccessibility."
  },
  {
    id: 72,
    lesson: "Lesson 6",
    topic: "Cloud Challenges",
    question: "Why is there a need for skilled cloud engineers?",
    options: [
      "Designing and maintaining systems requires specialized expertise",
      "Cloud systems are self-managing",
      "No expertise is needed",
      "Anyone can manage cloud systems"
    ],
    correct: 0,
    explanation: "Need for Skilled Cloud Engineers: Designing and maintaining systems requires specialized expertise."
  },
  {
    id: 73,
    lesson: "Lesson 6",
    topic: "Data Stream",
    question: "What is a Data Stream?",
    options: [
      "An existing, continuous, ordered chain of items that is unfeasible to control the order or locally capture in its entirety",
      "A static file on a hard drive",
      "A printed document",
      "A physical river of data"
    ],
    correct: 0,
    explanation: "A data stream is an existing, continuous, ordered (implicitly by entrance time or explicitly by timestamp) chain of items. It is unfeasible to control the order in which units arrive or to locally capture the stream in its entirety."
  },
  {
    id: 74,
    lesson: "Lesson 6",
    topic: "Data Stream",
    question: "What is a characteristic of Data Streams regarding volume?",
    options: [
      "Large volumes of continuous data, possibly infinite",
      "Small, fixed amounts of data",
      "Only temporary data",
      "Static, unchanging data"
    ],
    correct: 0,
    explanation: "Characteristics of Data Stream: Large volumes of continuous data, possibly infinite."
  },
  {
    id: 75,
    lesson: "Lesson 6",
    topic: "Data Stream",
    question: "What does Data Stream require due to steady changing?",
    options: [
      "A fast, real-time response",
      "Slow processing",
      "Manual review",
      "Weekly updates"
    ],
    correct: 0,
    explanation: "Data Stream is steady changing and requires a fast, real-time response."
  },
  {
    id: 76,
    lesson: "Lesson 6",
    topic: "Data Stream",
    question: "Why is random access expensive in Data Streams?",
    options: [
      "It requires a single scan algorithm",
      "Random access is free",
      "It's the fastest method",
      "It uses no resources"
    ],
    correct: 0,
    explanation: "Random access is expensive and requires a single scan algorithm."
  },
  {
    id: 77,
    lesson: "Lesson 6",
    topic: "Data Stream",
    question: "What should be stored from Data Streams?",
    options: [
      "Only the summary of the data seen so far",
      "Every single data point",
      "Nothing at all",
      "Only the first item"
    ],
    correct: 0,
    explanation: "Store only the summary of the data seen so far."
  },
  {
    id: 78,
    lesson: "Lesson 6",
    topic: "Data Stream Types",
    question: "What is an example of Transactional data stream?",
    options: [
      "Credit card purchases, Telecommunications (phone calls), Web (accesses by clients)",
      "Static database records",
      "Printed reports",
      "Physical mail"
    ],
    correct: 0,
    explanation: "Transactional data stream: Credit card purchases; Telecommunications (phone calls); Web (accesses by clients)."
  },
  {
    id: 79,
    lesson: "Lesson 6",
    topic: "Data Stream Advantages",
    question: "What are advantages of Data Streams?",
    options: [
      "Helpful in upgrading sales, recognizing the fallacy, minimizing costs, and reacting swiftly to risk",
      "Slow processing",
      "High storage costs",
      "Manual data entry required"
    ],
    correct: 0,
    explanation: "Advantages: Helpful in upgrading sales, recognizing the fallacy, minimizing costs, and reacting swiftly to risk."
  },
  {
    id: 80,
    lesson: "Lesson 6",
    topic: "Data Stream Disadvantages",
    question: "What are disadvantages of Data Streams?",
    options: [
      "Lack of security in the cloud, vendor subordination, and potential for disconnection",
      "Perfect security",
      "Complete independence",
      "Always connected"
    ],
    correct: 0,
    explanation: "Disadvantages: Lack of security in the cloud, vendor subordination, and potential for disconnection."
  },

  // ====== LESSON 7: Fog Computing ======

  {
    id: 81,
    lesson: "Lesson 7",
    topic: "Architecture Layers",
    question: "What are the three layers of the Fog Computing ecosystem?",
    options: [
      "Cloud-Layer (Cloud/Data-Center), Fog-Layer (Fog-Nodes), Edge-Layer (Edge-Gateway, Edge-Devices)",
      "Application Layer, Transport Layer, Network Layer",
      "Hardware Layer, Software Layer, User Layer",
      "Input Layer, Processing Layer, Output Layer"
    ],
    correct: 0,
    explanation: "The ecosystem is organized into: Cloud-Layer (Cloud/Data-Center), Fog-Layer (Fog-Nodes), Edge-Layer (Edge-Gateway, Edge-Devices)."
  },
  {
    id: 82,
    lesson: "Lesson 7",
    topic: "Fog Computing Definition",
    question: "What is Fog Computing's Decentralized Architecture?",
    options: [
      "Extending cloud capabilities to the network edge, enabling powerful local processing",
      "Centralizing all data in one server",
      "Removing edge devices from the network",
      "Storing all data in physical file cabinets"
    ],
    correct: 0,
    explanation: "Decentralized Architecture: Extending cloud capabilities to the network edge, enabling powerful local processing."
  },
  {
    id: 83,
    lesson: "Lesson 7",
    topic: "Fog Computing Origin",
    question: "Who coined the term 'Fog Computing' and when?",
    options: [
      "Cisco in 2014, describing computing 'close to the ground' — near where data is generated",
      "Microsoft in 2010, for cloud storage",
      "Google in 2015, for search optimization",
      "Amazon in 2012, for e-commerce"
    ],
    correct: 0,
    explanation: "Cisco's Vision (2014): Coined to describe computing 'close to the ground' — near where data is generated."
  },
  {
    id: 84,
    lesson: "Lesson 7",
    topic: "Fog Computing Benefits",
    question: "How does Fog Computing achieve Faster Processing?",
    options: [
      "Handles data closer to its source, significantly reducing latency and improving responsiveness",
      "Sends all data to remote servers first",
      "Uses slower but more reliable connections",
      "Processes data only during off-peak hours"
    ],
    correct: 0,
    explanation: "Faster Processing: Handles data closer to its source, significantly reducing latency and improving responsiveness."
  },
  {
    id: 85,
    lesson: "Lesson 7",
    topic: "Cloud Limitations",
    question: "What is the High Latency problem in Cloud Computing?",
    options: [
      "Cloud computing suffers from delays, hindering real-time applications",
      "Cloud computing is too fast for some applications",
      "Cloud computing has no latency issues",
      "Cloud computing only works offline"
    ],
    correct: 0,
    explanation: "High Latency: Cloud computing suffers from delays, hindering real-time applications."
  },
  {
    id: 86,
    lesson: "Lesson 7",
    topic: "Cloud Limitations",
    question: "What are Bandwidth Bottlenecks in Cloud Computing?",
    options: [
      "Centralized processing creates network congestion unsuitable for time-sensitive IoT and industrial systems",
      "Unlimited bandwidth for all applications",
      "Perfect network performance at all times",
      "No data transfer limitations"
    ],
    correct: 0,
    explanation: "Bandwidth Bottlenecks: Centralized processing creates network congestion unsuitable for time-sensitive IoT and industrial systems."
  },
  {
    id: 87,
    lesson: "Lesson 7",
    topic: "Cloud Limitations",
    question: "Why does Cloud Computing have Increased Security Risks?",
    options: [
      "Data traveling long distances to centralized clouds faces more exposure and potential threats",
      "Data is stored locally and never transmitted",
      "Cloud servers are immune to attacks",
      "All cloud data is automatically encrypted"
    ],
    correct: 0,
    explanation: "Increased Security Risks: Data traveling long distances to centralized clouds faces more exposure and potential threats."
  },
  {
    id: 88,
    lesson: "Lesson 7",
    topic: "Fog vs Cloud - Latency",
    question: "How does latency compare between Fog and Cloud Computing?",
    options: [
      "Fog: Low latency for immediate responses; Cloud: High latency due to distance",
      "Fog: High latency; Cloud: Low latency",
      "Both have identical latency",
      "Neither has any latency"
    ],
    correct: 0,
    explanation: "Latency: Fog has Low latency for immediate responses; Cloud has High latency due to distance."
  },
  {
    id: 89,
    lesson: "Lesson 7",
    topic: "Fog vs Cloud - Location",
    question: "How does location differ between Fog and Cloud Computing?",
    options: [
      "Fog: Nodes at local network edge, close to data sources; Cloud: Centralized servers located remotely",
      "Fog: Remote servers; Cloud: Local nodes",
      "Both use the same server locations",
      "Neither requires physical servers"
    ],
    correct: 0,
    explanation: "Location: Fog has Nodes at local network edge, close to data sources; Cloud has Centralized servers located remotely."
  },
  {
    id: 90,
    lesson: "Lesson 7",
    topic: "Fog vs Cloud - Data Hops",
    question: "How do data hops compare between Fog and Cloud Computing?",
    options: [
      "Fog: Processes data in one hop or very few; Cloud: Requires multiple hops, increasing delay",
      "Fog: Multiple hops; Cloud: One hop",
      "Both require the same number of hops",
      "Neither involves any data hops"
    ],
    correct: 0,
    explanation: "Data Hops: Fog processes data in one hop or very few; Cloud requires multiple hops, increasing delay."
  },
  {
    id: 91,
    lesson: "Lesson 7",
    topic: "Fog vs Cloud - Security",
    question: "How does security compare between Fog and Cloud Computing?",
    options: [
      "Fog: Enhanced security by localizing sensitive data; Cloud: More vulnerable due to longer data travel",
      "Cloud is more secure than Fog",
      "Both have identical security levels",
      "Neither has any security features"
    ],
    correct: 0,
    explanation: "Security: Fog has Enhanced security by localizing sensitive data; Cloud is More vulnerable due to longer data travel."
  },
  {
    id: 92,
    lesson: "Lesson 7",
    topic: "Fog Architecture Components",
    question: "What is the role of Cloud Data Centers in Fog Computing Architecture?",
    options: [
      "Centralized analytics, long-term storage, and control",
      "Real-time sensor data collection",
      "Local network routing only",
      "Device manufacturing"
    ],
    correct: 0,
    explanation: "Cloud Data Centers: Centralized analytics, long-term storage, and control."
  },
  {
    id: 93,
    lesson: "Lesson 7",
    topic: "Fog Architecture Components",
    question: "What is the role of Fog Nodes in Fog Computing Architecture?",
    options: [
      "Local servers/gateways for computation and buffering",
      "Long-term data storage only",
      "Internet service provision",
      "End-user device manufacturing"
    ],
    correct: 0,
    explanation: "Fog Nodes: Local servers/gateways for computation and buffering."
  },
  {
    id: 94,
    lesson: "Lesson 7",
    topic: "Fog Architecture Components",
    question: "What is the role of Edge Devices in Fog Computing Architecture?",
    options: [
      "Sensors, cameras, and actuators collecting data",
      "Central data processing",
      "Cloud storage management",
      "Network administration"
    ],
    correct: 0,
    explanation: "Edge Devices: Sensors, cameras, and actuators collecting data."
  },
  {
    id: 95,
    lesson: "Lesson 7",
    topic: "Fog Core Characteristics",
    question: "What does Low Latency mean in Fog Computing?",
    options: [
      "Processes data close to the source for fast response",
      "Slow data processing for accuracy",
      "Delayed responses for security",
      "Remote processing for efficiency"
    ],
    correct: 0,
    explanation: "Low Latency: Processes data close to the source for fast response."
  },
  {
    id: 96,
    lesson: "Lesson 7",
    topic: "Fog Core Characteristics",
    question: "What does Proximity mean in Fog Computing?",
    options: [
      "Fog nodes operate near IoT devices",
      "Fog nodes are far from data sources",
      "Fog nodes are in remote data centers",
      "Fog nodes are in orbit"
    ],
    correct: 0,
    explanation: "Proximity: Fog nodes operate near IoT devices."
  },
  {
    id: 97,
    lesson: "Lesson 7",
    topic: "Fog Core Characteristics",
    question: "What does Real-Time Processing mean in Fog Computing?",
    options: [
      "Supports instant or near-instant analytics",
      "Processes data with a 24-hour delay",
      "Only batch processing is supported",
      "No analytics capability"
    ],
    correct: 0,
    explanation: "Real-Time Processing: Supports instant or near-instant analytics."
  },
  {
    id: 98,
    lesson: "Lesson 7",
    topic: "Fog Core Characteristics",
    question: "What is Distributed Architecture in Fog Computing?",
    options: [
      "Uses many small nodes instead of one central server",
      "Uses a single large central server",
      "Has no server infrastructure",
      "Relies entirely on cloud computing"
    ],
    correct: 0,
    explanation: "Distributed Architecture: Uses many small nodes instead of one central server."
  },
  {
    id: 99,
    lesson: "Lesson 7",
    topic: "Fog Applications",
    question: "How is Fog Computing used in Industrial IoT?",
    options: [
      "Real-time monitoring and control of manufacturing equipment for optimal efficiency",
      "Storing old manufacturing records",
      "Manual equipment inspection only",
      "Marketing automation"
    ],
    correct: 0,
    explanation: "Industrial IoT: Real-time monitoring and control of manufacturing equipment for optimal efficiency."
  },
  {
    id: 100,
    lesson: "Lesson 7",
    topic: "Fog Applications",
    question: "How is Fog Computing used in Smart Cities?",
    options: [
      "Enhancing traffic light management and public safety systems with ultra-low latency responses",
      "Building construction management",
      "Historical record keeping",
      "City tourism promotion"
    ],
    correct: 0,
    explanation: "Smart Cities: Enhancing traffic light management and public safety systems with ultra-low latency responses."
  },
  {
    id: 101,
    lesson: "Lesson 7",
    topic: "Fog Applications",
    question: "How is Fog Computing used in Autonomous Vehicles?",
    options: [
      "Immediate processing of sensor data crucial for navigation, collision avoidance, and safety",
      "Entertainment system management",
      "Vehicle paint selection",
      "Insurance claim processing"
    ],
    correct: 0,
    explanation: "Autonomous Vehicles: Immediate processing of sensor data crucial for navigation, collision avoidance, and safety."
  },
  {
    id: 102,
    lesson: "Lesson 7",
    topic: "Fog Applications",
    question: "How is Fog Computing used in Content Delivery?",
    options: [
      "Netflix's edge caching infrastructure reduces streaming delays and conserves network bandwidth",
      "Physical DVD distribution",
      "Newspaper printing",
      "Radio broadcasting only"
    ],
    correct: 0,
    explanation: "Content Delivery: Netflix's edge caching infrastructure reduces streaming delays and conserves network bandwidth."
  },
  {
    id: 103,
    lesson: "Lesson 7",
    topic: "Fog Advantages",
    question: "How does Fog Computing achieve Reduced Cloud Data?",
    options: [
      "Less data sent to the cloud, lowering bandwidth usage and network congestion",
      "More data sent to the cloud for backup",
      "Increased cloud storage requirements",
      "Mandatory cloud synchronization"
    ],
    correct: 0,
    explanation: "Reduced Cloud Data: Less data sent to the cloud, lowering bandwidth usage and network congestion."
  },
  {
    id: 104,
    lesson: "Lesson 7",
    topic: "Fog Advantages",
    question: "Why are Improved Response Times critical in Fog Computing?",
    options: [
      "Critical for mission-critical and safety applications where every millisecond counts",
      "Only important for gaming applications",
      "Not relevant for IoT systems",
      "Slow response is preferred"
    ],
    correct: 0,
    explanation: "Improved Response Times: Critical for mission-critical and safety applications where every millisecond counts."
  },
  {
    id: 105,
    lesson: "Lesson 7",
    topic: "Fog Advantages",
    question: "How does Fog Computing enhance Privacy & Security?",
    options: [
      "Localizing sensitive processing minimizes data exposure and bolsters security",
      "Sending all data to public servers",
      "Removing all encryption",
      "Sharing data with third parties"
    ],
    correct: 0,
    explanation: "Enhanced Privacy & Security: Localizing sensitive processing minimizes data exposure and bolsters security."
  },
  {
    id: 106,
    lesson: "Lesson 7",
    topic: "Fog Advantages",
    question: "How does Fog Computing achieve Efficient Scaling?",
    options: [
      "Scales effectively across a vast number of connected devices in diverse environments",
      "Only works with a single device",
      "Cannot scale beyond 10 devices",
      "Requires manual scaling only"
    ],
    correct: 0,
    explanation: "Efficient Scaling: Scales effectively across a vast number of connected devices in diverse environments."
  },
  {
    id: 107,
    lesson: "Lesson 7",
    topic: "Fog & Emerging Tech",
    question: "How does AI & Machine Learning integrate with Fog Computing?",
    options: [
      "Integration for smarter, predictive edge analytics and decision-making",
      "AI replaces Fog Computing entirely",
      "ML is incompatible with Fog nodes",
      "Only used for image editing"
    ],
    correct: 0,
    explanation: "AI & Machine Learning: Integration for smarter, predictive edge analytics and decision-making."
  },
  {
    id: 108,
    lesson: "Lesson 7",
    topic: "Fog & Emerging Tech",
    question: "How does Blockchain integrate with Fog Computing?",
    options: [
      "Enables secure, decentralized data management and trust at the edge",
      "Replaces all fog nodes",
      "Only used for cryptocurrency",
      "Incompatible with IoT"
    ],
    correct: 0,
    explanation: "Blockchain: Enables secure, decentralized data management and trust at the edge."
  },
  {
    id: 109,
    lesson: "Lesson 7",
    topic: "Fog & Emerging Tech",
    question: "How does 5G Networks integrate with Fog Computing?",
    options: [
      "Supports ultra-low latency and massive IoT connectivity, leveraging 5G's capabilities",
      "5G is incompatible with Fog",
      "5G increases latency",
      "5G reduces IoT connectivity"
    ],
    correct: 0,
    explanation: "5G Networks: Supports ultra-low latency and massive IoT connectivity, leveraging 5G's capabilities."
  },
  {
    id: 110,
    lesson: "Lesson 7",
    topic: "Scale of Connectivity",
    question: "What is the scale of connectivity for Cloud Data Centers, Fog Nodes, and Edge Devices?",
    options: [
      "Thousands (Cloud Data Centers), Millions (Fog Nodes), Billions (Edge Devices)",
      "Billions (Cloud), Thousands (Fog), Millions (Edge)",
      "Millions (Cloud), Billions (Fog), Thousands (Edge)",
      "All have the same scale"
    ],
    correct: 0,
    explanation: "Scale of Connectivity: Thousands (Cloud Data Centers), Millions (Fog Nodes), Billions (Edge Devices)."
  },
  {
    id: 111,
    lesson: "Lesson 7",
    topic: "Network Communication",
    question: "What is the data flow Without Fog Computing?",
    options: [
      "Sensors -> Relay Node -> Cloud Application Platform. Raw Data travels the entire path",
      "Sensors -> Fog Node -> Cloud",
      "Cloud -> Fog -> Sensors",
      "No data transmission needed"
    ],
    correct: 0,
    explanation: "Without Fog Computing: Sensors -> Relay Node -> Cloud Application Platform. Raw Data travels the entire path."
  },
  {
    id: 112,
    lesson: "Lesson 7",
    topic: "Network Communication",
    question: "What is the data flow With Fog Computing?",
    options: [
      "Sensors -> Fog Node (Query/Control) -> Cloud Application Platform. Utilizes Data Subscription with MQTT",
      "Sensors -> Cloud -> Fog Node",
      "Cloud -> Sensors directly",
      "No intermediate processing"
    ],
    correct: 0,
    explanation: "With Fog Computing: Sensors -> Fog Node (Query/Control) -> Cloud Application Platform. Utilizes Data Subscription with MQTT."
  },
  {
    id: 113,
    lesson: "Lesson 7",
    topic: "Future of Fog",
    question: "Why is Fog Computing essential for the future?",
    options: [
      "Crucial for the rapidly expanding Internet of Things and real-time applications",
      "Only useful for legacy systems",
      "Will be replaced by cloud computing",
      "Not relevant for modern technology"
    ],
    correct: 0,
    explanation: "Essential Role: Crucial for the rapidly expanding Internet of Things and real-time applications."
  },
  {
    id: 114,
    lesson: "Lesson 7",
    topic: "Future of Fog",
    question: "What are Hybrid Architectures in Fog Computing?",
    options: [
      "Synergistic with cloud computing, creating optimal performance through hybrid models",
      "Fog and Cloud cannot work together",
      "Only pure Fog systems are viable",
      "Only pure Cloud systems are viable"
    ],
    correct: 0,
    explanation: "Hybrid Architectures: Synergistic with cloud computing, creating optimal performance through hybrid models."
  },
  {
    id: 115,
    lesson: "Lesson 7",
    topic: "Future of Fog",
    question: "How will Fog Computing transform industries?",
    options: [
      "Poised to revolutionize industries by enabling smarter, faster, and more secure edge computing",
      "Will have no impact on industries",
      "Only affects the entertainment industry",
      "Will make industries slower"
    ],
    correct: 0,
    explanation: "Industry Transformation: Poised to revolutionize industries by enabling smarter, faster, and more secure edge computing."
  },

  // ====== LESSON 8: IoT in Practice ======

  {
    id: 116,
    lesson: "Lesson 8",
    topic: "Sensors",
    question: "What do Sensors do in IoT?",
    options: [
      "Convert physical parameters into electrical signals",
      "Convert electrical signals into physical actions",
      "Store data permanently",
      "Generate electricity"
    ],
    correct: 0,
    explanation: "Sensors convert physical parameters into electrical signals."
  },
  {
    id: 117,
    lesson: "Lesson 8",
    topic: "Sensor Types",
    question: "What are examples of Environmental sensors?",
    options: [
      "Temperature, Humidity, Air Quality",
      "Accelerometers, Gyroscopes, GPS",
      "Cameras, IR, Light intensity",
      "Pressure, Flow, Vibration"
    ],
    correct: 0,
    explanation: "Environmental sensors: Temperature, Humidity, Air Quality."
  },
  {
    id: 118,
    lesson: "Lesson 8",
    topic: "Sensor Types",
    question: "What are examples of Motion/Position sensors?",
    options: [
      "Accelerometers, Gyroscopes, GPS",
      "Temperature, Humidity, Air Quality",
      "Pressure, Flow, Vibration",
      "Cameras, IR, Light intensity"
    ],
    correct: 0,
    explanation: "Motion/Position sensors: Accelerometers, Gyroscopes, GPS."
  },
  {
    id: 119,
    lesson: "Lesson 8",
    topic: "Sensor Types",
    question: "What are examples of Optical sensors?",
    options: [
      "Light intensity, Cameras, IR",
      "Temperature, Humidity, Air Quality",
      "Accelerometers, Gyroscopes, GPS",
      "Pressure, Flow, Vibration"
    ],
    correct: 0,
    explanation: "Optical sensors: Light intensity, Cameras, IR."
  },
  {
    id: 120,
    lesson: "Lesson 8",
    topic: "Sensor Types",
    question: "What are examples of Industrial sensors?",
    options: [
      "Pressure, Flow, Vibration",
      "Temperature, Humidity, Air Quality",
      "Accelerometers, Gyroscopes, GPS",
      "Light intensity, Cameras, IR"
    ],
    correct: 0,
    explanation: "Industrial sensors: Pressure, Flow, Vibration."
  },
  {
    id: 121,
    lesson: "Lesson 8",
    topic: "Actuators",
    question: "What do Actuators do in IoT?",
    options: [
      "Accept electrical signals and perform physical actions",
      "Convert physical parameters into electrical signals",
      "Store data in the cloud",
      "Analyze network traffic"
    ],
    correct: 0,
    explanation: "Actuators accept electrical signals and perform physical actions."
  },
  {
    id: 122,
    lesson: "Lesson 8",
    topic: "Actuator Types",
    question: "What are examples of Mechanical actuators?",
    options: [
      "Servo motors, Stepper motors (Robotics)",
      "Relays, Solenoids (Smart plugs, locks)",
      "LED displays, Speakers, Buzzers",
      "Cameras, IR sensors"
    ],
    correct: 0,
    explanation: "Mechanical actuators: Servo motors, Stepper motors (Robotics)."
  },
  {
    id: 123,
    lesson: "Lesson 8",
    topic: "Actuator Types",
    question: "What are examples of Switching actuators?",
    options: [
      "Relays, Solenoids (Smart plugs, locks)",
      "Servo motors, Stepper motors (Robotics)",
      "LED displays, Speakers, Buzzers",
      "Accelerometers, Gyroscopes"
    ],
    correct: 0,
    explanation: "Switching actuators: Relays, Solenoids (Smart plugs, locks)."
  },
  {
    id: 124,
    lesson: "Lesson 8",
    topic: "Actuator Types",
    question: "What are examples of Visual/Audio actuators?",
    options: [
      "LED displays, Speakers, Buzzers",
      "Servo motors, Stepper motors",
      "Relays, Solenoids",
      "Pressure, Flow sensors"
    ],
    correct: 0,
    explanation: "Visual/Audio actuators: LED displays, Speakers, Buzzers."
  },
  {
    id: 125,
    lesson: "Lesson 8",
    topic: "Feedback Loop",
    question: "What is the Feedback Loop in IoT?",
    options: [
      "Actuators often paired with sensors to maintain a state (e.g., Thermostat)",
      "A loop for debugging code",
      "A user survey mechanism",
      "A network routing protocol"
    ],
    correct: 0,
    explanation: "Feedback Loop: Often paired with sensors to maintain a state (e.g., Thermostat)."
  },
  {
    id: 126,
    lesson: "Lesson 8",
    topic: "Microcontrollers",
    question: "What are the characteristics of Microcontrollers (MCUs)?",
    options: [
      "Low power, designed for specific tasks, core of most IoT edge devices, run without a full OS",
      "High power, general purpose, require full OS",
      "Only for desktop computers",
      "Cannot connect to networks"
    ],
    correct: 0,
    explanation: "Microcontrollers are low power and designed for specific tasks. They are the core of most IoT edge devices and run without a full OS."
  },
  {
    id: 127,
    lesson: "Lesson 8",
    topic: "MCU Types",
    question: "What is Arduino known for in IoT?",
    options: [
      "Great for prototyping, vast community support",
      "Industrial grade, high performance",
      "Integrated Wi-Fi & Bluetooth, dual-core",
      "Running Machine Learning models"
    ],
    correct: 0,
    explanation: "Arduino: Great for prototyping, vast community support."
  },
  {
    id: 128,
    lesson: "Lesson 8",
    topic: "MCU Types",
    question: "What makes ESP32 the industry favorite for IoT?",
    options: [
      "Integrated Wi-Fi & Bluetooth, dual-core, low cost",
      "Only works with Arduino IDE",
      "Requires external networking modules",
      "Very expensive and power hungry"
    ],
    correct: 0,
    explanation: "ESP32: Integrated Wi-Fi & Bluetooth, dual-core, low cost. The industry favorite for IoT."
  },
  {
    id: 129,
    lesson: "Lesson 8",
    topic: "MCU Types",
    question: "What is STM32 known for in IoT?",
    options: [
      "Industrial grade, high performance ARM Cortex-M cores",
      "Great for prototyping only",
      "Lowest cost option",
      "No support for ARM architecture"
    ],
    correct: 0,
    explanation: "STM32: Industrial grade, high performance ARM Cortex-M cores."
  },
  {
    id: 130,
    lesson: "Lesson 8",
    topic: "Single Board Computers",
    question: "What are Single Board Computers (SBCs)?",
    options: [
      "High processing power, full computers capable of running Linux (or Windows IoT)",
      "Low power microcontrollers only",
      "Cannot run any operating system",
      "Only for gaming applications"
    ],
    correct: 0,
    explanation: "Single Board Computers (SBCs) offer high processing power. They are full computers capable of running Linux (or Windows IoT)."
  },
  {
    id: 131,
    lesson: "Lesson 8",
    topic: "SBC Use Cases",
    question: "What are use cases for Single Board Computers?",
    options: [
      "Gateways, Image Processing, Local Servers",
      "Only simple sensor reading",
      "Cannot be used as servers",
      "Only for educational purposes"
    ],
    correct: 0,
    explanation: "Use Cases: Gateways, Image Processing, Local Servers."
  },
  {
    id: 132,
    lesson: "Lesson 8",
    topic: "SBC Types",
    question: "What is Raspberry Pi known for in IoT?",
    options: [
      "The gold standard. Runs Python scripts, Docker containers, and database servers locally",
      "Cannot run Python",
      "Only for simple LED projects",
      "Requires Windows only"
    ],
    correct: 0,
    explanation: "Raspberry Pi: The gold standard. Runs Python scripts, Docker containers, and database servers locally."
  },
  {
    id: 133,
    lesson: "Lesson 8",
    topic: "Edge AI",
    question: "What are Specialized SBCs like NVIDIA Jetson used for?",
    options: [
      "Run Machine Learning models on-device",
      "Only basic computing tasks",
      "Cannot process AI workloads",
      "Gaming only"
    ],
    correct: 0,
    explanation: "Edge AI: Specialized SBCs (like NVIDIA Jetson) run Machine Learning models on-device."
  },
  {
    id: 134,
    lesson: "Lesson 8",
    topic: "Short Range Connectivity",
    question: "What are Personal Area Networks (PAN) used for?",
    options: [
      "Connect devices within a room or building",
      "Connect cities together",
      "Satellite communication",
      "Underwater communication"
    ],
    correct: 0,
    explanation: "Personal Area Networks (PAN) connect devices within a room or building."
  },
  {
    id: 135,
    lesson: "Lesson 8",
    topic: "Short Range Connectivity",
    question: "What is Bluetooth Low Energy (BLE) known for?",
    options: [
      "Ultra-low power, ubiquitous in wearables",
      "High power consumption",
      "Long range communication",
      "Only for audio devices"
    ],
    correct: 0,
    explanation: "Bluetooth Low Energy (BLE): Ultra-low power, ubiquitous in wearables."
  },
  {
    id: 136,
    lesson: "Lesson 8",
    topic: "Short Range Connectivity",
    question: "What are Zigbee / Z-Wave used for?",
    options: [
      "Mesh networking for Smart Homes (Lights, Sensors)",
      "Cellular communication",
      "Satellite links",
      "Fiber optic connections"
    ],
    correct: 0,
    explanation: "Zigbee / Z-Wave: Mesh networking for Smart Homes (Lights, Sensors)."
  },
  {
    id: 137,
    lesson: "Lesson 8",
    topic: "Short Range Connectivity",
    question: "What is NFC used for in IoT?",
    options: [
      "Very short range, used for provisioning and payments",
      "Long range data transfer",
      "Video streaming",
      "Industrial automation"
    ],
    correct: 0,
    explanation: "NFC: Very short range, used for provisioning and payments."
  },
  {
    id: 138,
    lesson: "Lesson 8",
    topic: "Long Range Connectivity",
    question: "What is Wi-Fi best suited for in IoT?",
    options: [
      "High bandwidth, power hungry. Best for mains-powered devices needing real-time video or large data",
      "Battery-powered remote sensors",
      "Very low power applications",
      "Devices kilometers apart"
    ],
    correct: 0,
    explanation: "Wi-Fi: High bandwidth, power hungry. Best for mains-powered devices needing real-time video or large data."
  },
  {
    id: 139,
    lesson: "Lesson 8",
    topic: "Long Range Connectivity",
    question: "What is LoRaWAN ideal for?",
    options: [
      "Long Range, Low Power. Perfect for agriculture and smart cities where sensors are kilometers apart",
      "High bandwidth video streaming",
      "Real-time gaming",
      "Indoor-only applications"
    ],
    correct: 0,
    explanation: "LoRaWAN: Long Range, Low Power. Perfect for agriculture and smart cities where sensors are kilometers apart."
  },
  {
    id: 140,
    lesson: "Lesson 8",
    topic: "Long Range Connectivity",
    question: "What is Cellular (NB-IoT) used for?",
    options: [
      "Uses existing mobile towers. Excellent coverage and reliability for critical logistics and asset tracking",
      "Short range home automation",
      "Gaming applications",
      "Local file sharing"
    ],
    correct: 0,
    explanation: "Cellular (NB-IoT): Uses existing mobile towers. Excellent coverage and reliability for critical logistics and asset tracking."
  },
  {
    id: 141,
    lesson: "Lesson 8",
    topic: "Power Management",
    question: "What is the Energy Challenge for most IoT devices?",
    options: [
      "Most IoT devices run on batteries and must last for years. Devices often spend 99% of their time in 'Sleep Mode'",
      "IoT devices have unlimited power",
      "All devices use mains power",
      "Power is not a concern for IoT"
    ],
    correct: 0,
    explanation: "Most IoT devices run on batteries and must last for years. Devices often spend 99% of their time in 'Sleep Mode'."
  },
  {
    id: 142,
    lesson: "Lesson 8",
    topic: "Power Management",
    question: "What is Deep Sleep in IoT power management?",
    options: [
      "Shutting down non-essential circuits (Wi-Fi/Radio) when not transmitting",
      "Running all systems at full power",
      "Permanently disabling the device",
      "Increasing transmission power"
    ],
    correct: 0,
    explanation: "Deep Sleep: Shutting down non-essential circuits (Wi-Fi/Radio) when not transmitting."
  },
  {
    id: 143,
    lesson: "Lesson 8",
    topic: "Power Management",
    question: "What is Energy Harvesting in IoT?",
    options: [
      "Solar, piezoelectric (vibration), or RF harvesting to extend life",
      "Using larger batteries",
      "Connecting to power grid",
      "Replacing batteries frequently"
    ],
    correct: 0,
    explanation: "Energy Harvesting: Solar, piezoelectric (vibration), or RF harvesting to extend life."
  },
  {
    id: 144,
    lesson: "Lesson 8",
    topic: "Power Management",
    question: "What is Efficient Code in IoT power management?",
    options: [
      "Writing software that minimizes active CPU cycles",
      "Using more complex algorithms",
      "Running code 24/7",
      "Ignoring power consumption"
    ],
    correct: 0,
    explanation: "Efficient Code: Writing software that minimizes active CPU cycles."
  },
  {
    id: 145,
    lesson: "Lesson 8",
    topic: "IoT Operating Systems",
    question: "What is Bare Metal programming in IoT?",
    options: [
      "No OS. Code runs directly on hardware. Fastest, simplest, but hard to manage complex tasks",
      "Using Linux for all devices",
      "Running Windows on microcontrollers",
      "Cloud-based operating system"
    ],
    correct: 0,
    explanation: "Bare Metal: No OS. Code runs directly on hardware. Fastest, simplest, but hard to manage complex tasks."
  },
  {
    id: 146,
    lesson: "Lesson 8",
    topic: "IoT Operating Systems",
    question: "What are RTOS (FreeRTOS, Zephyr) used for in IoT?",
    options: [
      "Real-Time Operating Systems ensure tasks finish deterministically. Essential for time-critical sensing",
      "General purpose computing",
      "Gaming applications",
      "Desktop office work"
    ],
    correct: 0,
    explanation: "RTOS (FreeRTOS, Zephyr): Real-Time Operating Systems ensure tasks finish deterministically. Essential for time-critical sensing."
  },
  {
    id: 147,
    lesson: "Lesson 8",
    topic: "IoT Operating Systems",
    question: "What are General Purpose OS (Linux - Yocto, Ubuntu Core) used for in IoT?",
    options: [
      "Used on gateways/SBCs. Multi-threaded, supports Python/Node.js, but power hungry",
      "Only for microcontrollers",
      "Cannot run Python or Node.js",
      "Low power consumption"
    ],
    correct: 0,
    explanation: "General Purpose: Linux (Yocto, Ubuntu Core). Used on gateways/SBCs. Multi-threaded, supports Python/Node.js, but power hungry."
  },
  {
    id: 148,
    lesson: "Lesson 8",
    topic: "MQTT Protocol",
    question: "What is MQTT (Message Queuing Telemetry Transport)?",
    options: [
      "The de-facto standard for IoT",
      "A database query language",
      "A hardware interface protocol",
      "A video streaming format"
    ],
    correct: 0,
    explanation: "MQTT (Message Queuing Telemetry Transport) is the de-facto standard for IoT."
  },
  {
    id: 149,
    lesson: "Lesson 8",
    topic: "MQTT Protocol",
    question: "What is the Pub/Sub Model in MQTT?",
    options: [
      "Devices don't talk to each other directly; they talk to a 'Broker'",
      "Devices communicate peer-to-peer",
      "All devices share the same connection",
      "Direct device-to-cloud communication"
    ],
    correct: 0,
    explanation: "Pub/Sub Model: Devices don't talk to each other directly; they talk to a 'Broker'."
  },
  {
    id: 150,
    lesson: "Lesson 8",
    topic: "MQTT Protocol",
    question: "Why is MQTT considered Lightweight?",
    options: [
      "Small packet overhead, perfect for unstable networks",
      "Large file transfers only",
      "Heavy encryption overhead",
      "Requires high bandwidth"
    ],
    correct: 0,
    explanation: "Lightweight: Small packet overhead, perfect for unstable networks."
  },
  {
    id: 151,
    lesson: "Lesson 8",
    topic: "MQTT Protocol",
    question: "What are QoS Levels in MQTT?",
    options: [
      "Quality of Service settings ensure message delivery (Fire & Forget vs. Confirmed)",
      "Quality of Sound for audio devices",
      "Queue of Sensors for data collection",
      "Quantity of Streams for video"
    ],
    correct: 0,
    explanation: "QoS Levels: Quality of Service settings ensure message delivery (Fire & Forget vs. Confirmed)."
  },
  {
    id: 152,
    lesson: "Lesson 8",
    topic: "Other Protocols",
    question: "What is CoAP (Constrained Application Protocol)?",
    options: [
      "Designed to be 'HTTP for simple devices'. Uses UDP instead of TCP for lower overhead. Ideal for very constrained sensor nodes",
      "A video streaming protocol",
      "A database query language",
      "A high-bandwidth protocol for servers"
    ],
    correct: 0,
    explanation: "CoAP (Constrained Application Protocol): Designed to be 'HTTP for simple devices'. Uses UDP instead of TCP for lower overhead. Ideal for very constrained sensor nodes."
  },
  {
    id: 153,
    lesson: "Lesson 8",
    topic: "Other Protocols",
    question: "What is HTTP/REST in IoT context?",
    options: [
      "The standard web protocol. Heavy for small devices, but widely compatible. Often used by Gateways to push aggregated data to the Cloud",
      "A lightweight IoT-specific protocol",
      "Only for mobile applications",
      "Cannot be used with IoT"
    ],
    correct: 0,
    explanation: "HTTP/REST: The standard web protocol. Heavy for small devices, but widely compatible. Often used by Gateways to push aggregated data to the Cloud."
  },
  {
    id: 154,
    lesson: "Lesson 8",
    topic: "Cloud Platforms",
    question: "What are examples of Cloud Platforms for IoT?",
    options: [
      "AWS IoT Core, Azure IoT Hub, and Google Cloud IoT",
      "Microsoft Word, Excel, PowerPoint",
      "Facebook, Twitter, Instagram",
      "VLC, Audacity, GIMP"
    ],
    correct: 0,
    explanation: "Platforms like AWS IoT Core, Azure IoT Hub, and Google Cloud IoT."
  },
  {
    id: 155,
    lesson: "Lesson 8",
    topic: "Cloud Platforms",
    question: "What are Device Shadows in IoT Cloud Platforms?",
    options: [
      "Virtual JSON documents that persist device state even when offline",
      "Physical backups of devices",
      "Device security certificates",
      "User interface themes"
    ],
    correct: 0,
    explanation: "Device Shadows: Virtual JSON documents that persist device state even when offline."
  },
  {
    id: 156,
    lesson: "Lesson 8",
    topic: "Cloud Platforms",
    question: "What are Rules Engines in IoT Cloud Platforms?",
    options: [
      "'If temp > 50, send email' logic without writing server code",
      "Physical hardware rules",
      "Network routing rules only",
      "Database schema definitions"
    ],
    correct: 0,
    explanation: "Rules Engines: 'If temp > 50, send email' logic without writing server code."
  },
  {
    id: 157,
    lesson: "Lesson 8",
    topic: "Cloud Platforms",
    question: "What is Analytics in IoT Cloud Platforms?",
    options: [
      "Storing and visualizing massive streams of sensor data",
      "Device manufacturing only",
      "Physical security monitoring",
      "Employee time tracking"
    ],
    correct: 0,
    explanation: "Analytics: Storing and visualizing massive streams of sensor data."
  },
  {
    id: 158,
    lesson: "Lesson 8",
    topic: "Edge Computing Benefits",
    question: "What is the core concept of Edge Computing in IoT?",
    options: [
      "Instead of sending all data to the cloud, process it locally on the Gateway or Device",
      "Send all data to the cloud for processing",
      "Only store data, never process it",
      "Remove all local processing capabilities"
    ],
    correct: 0,
    explanation: "Instead of sending all data to the cloud, process it locally on the Gateway or Device."
  },
  {
    id: 159,
    lesson: "Lesson 8",
    topic: "Edge Computing Benefits",
    question: "How does Edge Computing improve Latency?",
    options: [
      "Instant decisions (e.g., stopping a machine) without network delay",
      "Adds network delay for security",
      "Slower but more accurate processing",
      "Requires cloud confirmation first"
    ],
    correct: 0,
    explanation: "Latency: Instant decisions (e.g., stopping a machine) without network delay."
  },
  {
    id: 160,
    lesson: "Lesson 8",
    topic: "Edge Computing Benefits",
    question: "How does Edge Computing save Bandwidth?",
    options: [
      "Send only the 'insight' (e.g., 'Person Detected') rather than the full video stream",
      "Send more data for redundancy",
      "Stream all raw data always",
      "Increase cloud storage usage"
    ],
    correct: 0,
    explanation: "Bandwidth: Send only the 'insight' (e.g., 'Person Detected') rather than the full video stream."
  },
  {
    id: 161,
    lesson: "Lesson 8",
    topic: "Edge Computing Benefits",
    question: "How does Edge Computing enhance Privacy?",
    options: [
      "Sensitive data stays local",
      "All data is sent to public clouds",
      "Data is shared with third parties",
      "Privacy is not a concern"
    ],
    correct: 0,
    explanation: "Privacy: Sensitive data stays local."
  },
  {
    id: 162,
    lesson: "Lesson 8",
    topic: "Edge Computing Benefits",
    question: "How does Edge Computing improve Reliability?",
    options: [
      "System works even if internet goes down",
      "Requires constant internet connection",
      "Only works in connected mode",
      "Reliability decreases without cloud"
    ],
    correct: 0,
    explanation: "Reliability: System works even if internet goes down."
  },
  {
    id: 163,
    lesson: "Lesson 8",
    topic: "W3C WoT Architecture",
    question: "What is Thing Description (TD) in W3C WoT Architecture?",
    options: [
      "The core metadata file describing a Thing",
      "A physical description of the device",
      "A user manual",
      "A shipping label"
    ],
    correct: 0,
    explanation: "Thing Description (TD): The core metadata file describing a Thing."
  },
  {
    id: 164,
    lesson: "Lesson 8",
    topic: "W3C WoT Architecture",
    question: "What are Binding Templates in W3C WoT Architecture?",
    options: [
      "How to map abstract interactions to actual protocols (HTTP, MQTT, Modbus)",
      "Physical device bindings",
      "User account templates",
      "Database schema templates"
    ],
    correct: 0,
    explanation: "Binding Templates: How to map abstract interactions to actual protocols (HTTP, MQTT, Modbus)."
  },
  {
    id: 165,
    lesson: "Lesson 8",
    topic: "W3C WoT Architecture",
    question: "What is Scripting API in W3C WoT Architecture?",
    options: [
      "Standardized JavaScript API for application logic",
      "A Python-only interface",
      "Hardware programming interface",
      "Database query interface"
    ],
    correct: 0,
    explanation: "Scripting API: Standardized JavaScript API for application logic."
  },
  {
    id: 166,
    lesson: "Lesson 8",
    topic: "W3C WoT Architecture",
    question: "What is the Security & Privacy component in W3C WoT Architecture?",
    options: [
      "Mechanisms to ensure safe interoperability",
      "Physical security locks",
      "User privacy settings only",
      "Network firewall rules"
    ],
    correct: 0,
    explanation: "Security & Privacy: Mechanisms to ensure safe interoperability."
  }
];

// Shuffle array function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
