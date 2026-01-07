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
