// Flashcards Data
const flashcardsData = [
    // IoT Basics
    {
        question: "What is IoT (Internet of Things)?",
        answer: "The network of interconnected devices embedded with sensors, software, and communication capabilities that collect and exchange data."
    },
    {
        question: "What are the three main levels of IoT Architecture?",
        answer: "1. Device-Level: Sensors and edge devices\n2. Network-Level: Communication technologies (WSN, LPWAN)\n3. Cloud/Fog Architecture: Cloud platforms for data processing and fog/edge computing for local processing"
    },
    {
        question: "What are the 4 key features of IoT systems?",
        answer: "1. Connectivity - devices communicate via Internet/networks\n2. Sensing - gathering data from environment\n3. Data Processing - analyzing collected data\n4. Automation - triggering actions based on conditions"
    },
    {
        question: "What are the 3 primary layers of IoT Systems?",
        answer: "1. Device Layer - physical hardware (sensors, actuators)\n2. Network Layer - communication protocols (Wi-Fi, Zigbee, LPWAN)\n3. Service/Application Layer - cloud and edge platforms for data processing"
    },
    
    // Ad Hoc Networks
    {
        question: "What are Ad Hoc Networks?",
        answer: "Decentralized, wireless networks formed spontaneously without any fixed infrastructure like routers. Nodes communicate directly in a multi-hop fashion."
    },
    {
        question: "What is MANET?",
        answer: "Mobile Ad Hoc Network - an ad hoc network where nodes are mobile, autonomous, and self-configuring. Used in emergency response or military applications."
    },
    {
        question: "What is iMANET?",
        answer: "Internet-based MANET - a hybrid network that combines a wired network (like the Internet) and a wireless MANET, allowing mobile nodes to communicate with global servers."
    },
    {
        question: "What is VANET?",
        answer: "Vehicular Ad Hoc Network - a type of MANET where the nodes are vehicles and roadside devices, forming temporary networks to exchange traffic and safety data."
    },
    {
        question: "What is WSN?",
        answer: "Wireless Sensor Network - networks of specialized, widely spaced sensors that track and document the physical state of the surroundings (e.g., temperature, humidity) and send data to a central point."
    },
    {
        question: "What is SPAN?",
        answer: "SmartPhone Ad Hoc Network - uses existing hardware on smartphones (Wi-Fi and Bluetooth) to create peer-to-peer (P2P) networks without cellular infrastructure."
    },
    
    // IoT Protocols
    {
        question: "What is MQTT?",
        answer: "Message Queue Telemetry Transport - a lightweight publish/subscribe messaging protocol ideal for resource-constrained devices and high-latency or unreliable networks."
    },
    {
        question: "What is CoAP?",
        answer: "Constrained Application Protocol - a web transfer protocol optimized for low-power, lossy networks (LLNs) and constrained nodes. Similar to HTTP but much lighter."
    },
    {
        question: "What is 6LoWPAN?",
        answer: "Enables IPv6 communication for small, low-power devices over wireless technologies like IEEE 802.15.4 (which Zigbee uses)."
    },
    {
        question: "What is RPL?",
        answer: "Routing Protocol for Low-Power and Lossy Networks - a routing protocol designed specifically for efficient and reliable data routing in LLNs."
    },
    {
        question: "What are Zigbee and Thread?",
        answer: "Low-power, mesh networking protocols used for device-to-device communication in smart homes and industrial settings."
    },
    
    // Internet Standards
    {
        question: "What are Internet Standards?",
        answer: "Normative specifications that define the technologies for the Internet's operation, ensuring interoperability across different systems and devices."
    },
    {
        question: "What are the 3 stages of the Internet Standards Lifecycle?",
        answer: "1. Internet Draft - initial proposal for community review\n2. Proposed Standard - more mature and stable draft\n3. Internet Standard - final stage after widespread adoption"
    },
    {
        question: "What are RFCs?",
        answer: "Request for Comments - the official publication series for all Internet standards and protocols."
    },
    {
        question: "What is IETF?",
        answer: "Internet Engineering Task Force - the organization that develops and maintains core Internet protocols (like TCP/IP)."
    },
    {
        question: "What is IESG?",
        answer: "Internet Engineering Steering Group - the body within the IETF that has the authority to approve final standards."
    },
    
    // Standard Organizations
    {
        question: "What does IEEE focus on in IoT?",
        answer: "Defines architectural frameworks (e.g., IEEE P2413) and foundational network protocols (e.g., IEEE 802 series for Ethernet & Wi-Fi)."
    },
    {
        question: "What does ETSI focus on?",
        answer: "European Telecommunication Standards Institute - focuses on critical radio technologies (like NB-IoT, LTE-M) and semantic interoperability (SAREF)."
    },
    {
        question: "What is oneM2M?",
        answer: "A global partnership focused on creating a common service layer for M2M and IoT, ensuring cross-industry compatibility."
    },
    {
        question: "What does NIST provide for IoT?",
        answer: "National Institute of Standards and Technology - a US agency that provides essential cybersecurity guidelines and promotes trustworthy IoT ecosystems."
    },
    
    // Interoperability
    {
        question: "What is IoT Interoperability?",
        answer: "The ability of diverse IoT devices, systems, and platforms to seamlessly communicate and work together within the same ecosystem."
    },
    {
        question: "What is Device Interoperability?",
        answer: "Enabling different brands of physical devices (e.g., lights, thermostats) to be controlled via a single, unified application or hub."
    },
    {
        question: "What is Network Interoperability?",
        answer: "Ensuring devices can reliably communicate across varied connectivity standards (e.g., Wi-Fi, Bluetooth, Zigbee, LPWAN)."
    },
    {
        question: "What is Data Interoperability?",
        answer: "Employing standardized data formats (such as JSON or XML) to ensure consistent structuring and processing of information."
    },
    {
        question: "What is Semantic Interoperability?",
        answer: "The highest level of interoperability; ensuring a shared understanding of data meaning and context, allowing autonomous systems to interpret and act on information correctly."
    },
    
    // REST Architecture
    {
        question: "What is REST?",
        answer: "Representational State Transfer - an architectural style for designing networked applications. It enables scalable, stateless web services using standard HTTP protocols."
    },
    {
        question: "What is the Client-Server Separation constraint in REST?",
        answer: "Decoupling the user interface (client) from the data storage (server) improves portability and scalability."
    },
    {
        question: "What is Statelessness in REST?",
        answer: "Every client request must contain all necessary information for the server to fulfill it. The server does not store client session state."
    },
    {
        question: "What is Cacheability in REST?",
        answer: "Responses must define themselves as cacheable or non-cacheable to improve network efficiency."
    },
    {
        question: "What are the 4 main HTTP Methods (verbs)?",
        answer: "1. GET - Retrieve data\n2. POST - Create new data\n3. PUT/PATCH - Update existing data\n4. DELETE - Remove data"
    },
    
    // Service Discovery
    {
        question: "What is Service Discovery in IoT?",
        answer: "The mechanism that allows IoT devices to dynamically locate and connect to required services (e.g., sensors, actuators, APIs) without manual configuration."
    },
    {
        question: "What is Local Discovery?",
        answer: "Operates within a limited network using zero-configuration (zeroconf) protocols like mDNS (multicast DNS) and DNS-SD, allowing devices to find peers without a central server."
    },
    {
        question: "What is Large-Scale Discovery?",
        answer: "Spans thousands of devices and multiple networks. Emerging solutions use Verifiable Distributed Hash Tables (DSRs) for secure, global discovery."
    },
    {
        question: "What is Cluster-Based Discovery?",
        answer: "A lightweight, energy-efficient approach for low-power networks. Queries are sent only to a 'clusterhead' node, which maintains a local registry, reducing network-wide broadcasts and saving power."
    },
    
    // Scalability, Energy, Security
    {
        question: "What is the Scalability challenge in IoT?",
        answer: "Handling growth from thousands to millions of devices without performance degradation. Addressed with architectures that support self-configuration and distributed node abstractions."
    },
    {
        question: "What is Energy Efficiency in IoT?",
        answer: "A critical challenge for Low-Power, Lossy Networks (LLNs), where battery-operated devices need to minimize energy consumption to extend operational life."
    },
    {
        question: "How does Cluster-Based Service Discovery help with energy?",
        answer: "It reduces network traffic by 30-50% by avoiding network-wide 'flood' queries and limiting lookups to a local clusterhead, saving energy."
    },
    {
        question: "What are the Security challenges in IoT?",
        answer: "Sharing sensitive data across heterogeneous devices introduces complex security concerns including data tampering, impersonation, and unauthorized access."
    },
    {
        question: "What are Decentralized Service Registries (DSRs)?",
        answer: "Cryptographically secure registries (using Distributed Hash Tables) that use signature chains to mitigate impersonation and data tampering risks."
    },
    
    // Hybrid Architectures
    {
        question: "What are Hybrid Architectures in IoT?",
        answer: "Hierarchical models that combine the benefits of edge computing and cloud computing for optimal performance."
    },
    {
        question: "What does the Edge Layer do in Hybrid Architecture?",
        answer: "Performs fast, local discovery and processing. It mediates, aggregates, and filters data close to the source, reducing latency and network load."
    },
    {
        question: "What does the Cloud Layer do in Hybrid Architecture?",
        answer: "Provides global coordination, large-scale analytics, and long-term data storage."
    },
    {
        question: "What are the benefits of Hybrid Architecture?",
        answer: "Enables real-time local control (at the edge) while still leveraging the power of global data analysis (in the cloud)."
    },
    
    // Emerging Trends
    {
        question: "How is AI being integrated into IoT?",
        answer: "Standards will evolve to support advanced AI capabilities at the edge and in the cloud for smarter, autonomous decisions in IoT systems."
    },
    {
        question: "What will 5G/6G bring to IoT?",
        answer: "Ultra-fast, low-latency, and massive connectivity required for real-time IoT applications and massive device deployments."
    },
    {
        question: "What is Semantic Interoperability as an emerging trend?",
        answer: "The expansion of standards to enable true semantic understanding of data (its meaning and context), fostering smarter, context-aware applications."
    },
    {
        question: "What is Ambient IoT?",
        answer: "An emerging ecosystem of billions of self-powered sensor nodes that harvest naturally available energy sources (light, thermal, kinetic), reducing dependency on batteries."
    },
    
    // Additional Technical Details
    {
        question: "What is LLN?",
        answer: "Low-Power, Lossy Network - networks where devices have limited power and communication may be unreliable or have high packet loss."
    },
    {
        question: "What is LPWAN?",
        answer: "Low-Power Wide-Area Network - a communication technology designed for long-range transmission with minimal power consumption, ideal for IoT devices."
    },
    {
        question: "What is mDNS?",
        answer: "Multicast DNS - a zero-configuration protocol that allows devices to find each other on a local network without a central DNS server."
    },
    {
        question: "What is the publish/subscribe pattern in MQTT?",
        answer: "A messaging pattern where publishers send messages to topics, and subscribers receive messages from topics they're interested in, without direct connection between them."
    },
    {
        question: "What is IEEE 802.15.4?",
        answer: "A wireless standard that specifies the physical and MAC layers for low-rate wireless personal area networks (LR-WPANs), used by Zigbee and 6LoWPAN."
    },
    {
        question: "What is fog computing?",
        answer: "A distributed computing paradigm that extends cloud computing to the edge of the network, providing local processing and storage for faster response times and reduced bandwidth usage."
    },
    {
        question: "What are actuators in IoT?",
        answer: "Devices that receive signals from the IoT system and perform physical actions in response, such as motors, valves, or switches."
    },
    {
        question: "What is M2M communication?",
        answer: "Machine-to-Machine communication - direct communication between devices using wired or wireless channels without human intervention."
    }
];

// Quiz Questions Data
const quizQuestions = {
    multipleChoice: [
        {
            question: "What is the primary purpose of IoT?",
            options: [
                "To replace human workers",
                "To interconnect devices for data collection and exchange",
                "To increase internet speed",
                "To store data in the cloud"
            ],
            correct: 1,
            explanation: "IoT refers to the network of interconnected devices that collect and exchange data."
        },
        {
            question: "Which layer of IoT architecture includes sensors and edge devices?",
            options: [
                "Network Layer",
                "Application Layer",
                "Device Layer",
                "Cloud Layer"
            ],
            correct: 2,
            explanation: "The Device Layer includes physical hardware like sensors and edge devices."
        },
        {
            question: "What type of network is MANET?",
            options: [
                "A fixed infrastructure network",
                "A mobile, self-configuring ad hoc network",
                "A cloud-based network",
                "A wired network"
            ],
            correct: 1,
            explanation: "MANET (Mobile Ad Hoc Network) is mobile, autonomous, and self-configuring without fixed infrastructure."
        },
        {
            question: "Which protocol is lightweight and uses publish/subscribe messaging?",
            options: [
                "HTTP",
                "FTP",
                "MQTT",
                "SMTP"
            ],
            correct: 2,
            explanation: "MQTT is a lightweight publish/subscribe messaging protocol ideal for IoT devices."
        },
        {
            question: "What does REST stand for?",
            options: [
                "Remote State Transfer",
                "Representational State Transfer",
                "Resource State Transport",
                "Reliable Service Transfer"
            ],
            correct: 1,
            explanation: "REST stands for Representational State Transfer, an architectural style for web services."
        },
        {
            question: "Which HTTP method is used to retrieve data?",
            options: [
                "POST",
                "GET",
                "PUT",
                "DELETE"
            ],
            correct: 1,
            explanation: "GET is the HTTP method used to retrieve data from a resource."
        },
        {
            question: "What organization approves final Internet standards?",
            options: [
                "IEEE",
                "IETF",
                "IESG",
                "NIST"
            ],
            correct: 2,
            explanation: "IESG (Internet Engineering Steering Group) has the authority to approve final standards."
        },
        {
            question: "Which is the highest level of IoT interoperability?",
            options: [
                "Device Interoperability",
                "Network Interoperability",
                "Data Interoperability",
                "Semantic Interoperability"
            ],
            correct: 3,
            explanation: "Semantic Interoperability ensures shared understanding of data meaning and context."
        },
        {
            question: "What does Cluster-Based Discovery help reduce?",
            options: [
                "Device costs",
                "Network traffic and energy consumption",
                "Data storage needs",
                "Processing power requirements"
            ],
            correct: 1,
            explanation: "Cluster-Based Discovery reduces network traffic by 30-50% and saves energy."
        },
        {
            question: "What is the main benefit of Hybrid Architecture?",
            options: [
                "Lower costs only",
                "Real-time local control with global data analysis",
                "Simpler implementation",
                "Reduced device count"
            ],
            correct: 1,
            explanation: "Hybrid Architecture combines real-time edge processing with cloud-based global analytics."
        },
        {
            question: "Which organization focuses on cybersecurity guidelines for IoT?",
            options: [
                "IEEE",
                "ETSI",
                "NIST",
                "oneM2M"
            ],
            correct: 2,
            explanation: "NIST provides essential cybersecurity guidelines for IoT ecosystems."
        },
        {
            question: "What does Ambient IoT use for power?",
            options: [
                "Traditional batteries only",
                "Nuclear energy",
                "Harvested energy from light, thermal, and kinetic sources",
                "Solar panels only"
            ],
            correct: 2,
            explanation: "Ambient IoT harvests naturally available energy sources to reduce battery dependency."
        },
        {
            question: "Which network type is used by vehicles to exchange traffic data?",
            options: [
                "MANET",
                "VANET",
                "SPAN",
                "WSN"
            ],
            correct: 1,
            explanation: "VANET (Vehicular Ad Hoc Network) is used by vehicles and roadside devices."
        },
        {
            question: "What is CoAP optimized for?",
            options: [
                "High-bandwidth networks",
                "Video streaming",
                "Low-power, lossy networks",
                "File transfers"
            ],
            correct: 2,
            explanation: "CoAP is optimized for low-power, lossy networks (LLNs) and constrained devices."
        },
        {
            question: "What constraint requires REST requests to contain all necessary information?",
            options: [
                "Client-Server Separation",
                "Statelessness",
                "Cacheability",
                "Uniform Interface"
            ],
            correct: 1,
            explanation: "Statelessness requires each request to contain all information needed by the server."
        }
    ],
    
    multiSelect: [
        {
            question: "Which are key features of IoT systems? (Select all that apply)",
            options: [
                "Connectivity",
                "Sensing",
                "Data Processing",
                "Manual Configuration"
            ],
            correct: [0, 1, 2],
            explanation: "The key features of IoT are Connectivity, Sensing, Data Processing, and Automation."
        },
        {
            question: "Which are types of Ad Hoc Networks? (Select all that apply)",
            options: [
                "MANET",
                "VANET",
                "HTTP",
                "SPAN"
            ],
            correct: [0, 1, 3],
            explanation: "MANET, VANET, and SPAN are all types of Ad Hoc Networks."
        },
        {
            question: "Which are IoT communication protocols? (Select all that apply)",
            options: [
                "MQTT",
                "CoAP",
                "Windows",
                "Zigbee"
            ],
            correct: [0, 1, 3],
            explanation: "MQTT, CoAP, and Zigbee are all IoT communication protocols."
        },
        {
            question: "What are the stages of the Internet Standards Lifecycle? (Select all that apply)",
            options: [
                "Internet Draft",
                "Proposed Standard",
                "Beta Version",
                "Internet Standard"
            ],
            correct: [0, 1, 3],
            explanation: "The three stages are Internet Draft, Proposed Standard, and Internet Standard."
        },
        {
            question: "Which are dimensions of IoT Interoperability? (Select all that apply)",
            options: [
                "Device Interoperability",
                "Network Interoperability",
                "Hardware Interoperability",
                "Semantic Interoperability"
            ],
            correct: [0, 1, 3],
            explanation: "The four dimensions are Device, Network, Data, and Semantic Interoperability."
        },
        {
            question: "Which are core constraints of REST? (Select all that apply)",
            options: [
                "Client-Server Separation",
                "Statelessness",
                "High Bandwidth",
                "Cacheability"
            ],
            correct: [0, 1, 3],
            explanation: "Core REST constraints include Client-Server Separation, Statelessness, and Cacheability."
        },
        {
            question: "Which HTTP methods are used for CRUD operations? (Select all that apply)",
            options: [
                "GET",
                "POST",
                "CONNECT",
                "DELETE"
            ],
            correct: [0, 1, 3],
            explanation: "GET, POST, PUT/PATCH, and DELETE are the main HTTP methods for CRUD operations."
        },
        {
            question: "Which are major IoT standard organizations? (Select all that apply)",
            options: [
                "IETF",
                "IEEE",
                "NASA",
                "ETSI"
            ],
            correct: [0, 1, 3],
            explanation: "IETF, IEEE, ETSI, oneM2M, and NIST are major IoT standard organizations."
        },
        {
            question: "What are challenges in IoT systems? (Select all that apply)",
            options: [
                "Scalability",
                "Energy Efficiency",
                "High costs only",
                "Security"
            ],
            correct: [0, 1, 3],
            explanation: "Key challenges include Scalability, Energy Efficiency, and Security."
        },
        {
            question: "What are emerging trends in IoT? (Select all that apply)",
            options: [
                "AI Integration",
                "5G/6G Integration",
                "Reduced connectivity",
                "Ambient IoT"
            ],
            correct: [0, 1, 3],
            explanation: "Emerging trends include AI Integration, 5G/6G, Semantic Interoperability, and Ambient IoT."
        }
    ],
    
    fillInTheBlank: [
        {
            question: "IoT refers to the network of _____ devices that collect and exchange data.",
            answer: "interconnected",
            caseSensitive: false,
            explanation: "IoT is the network of interconnected devices with sensors and communication capabilities."
        },
        {
            question: "Ad Hoc Networks are formed _____ without any fixed infrastructure.",
            answer: "spontaneously",
            caseSensitive: false,
            explanation: "Ad Hoc Networks form spontaneously without requiring fixed infrastructure like routers."
        },
        {
            question: "MQTT uses a _____/subscribe messaging pattern.",
            answer: "publish",
            caseSensitive: false,
            explanation: "MQTT uses a publish/subscribe messaging pattern for lightweight communication."
        },
        {
            question: "REST stands for Representational _____ Transfer.",
            answer: "state",
            caseSensitive: false,
            explanation: "REST stands for Representational State Transfer."
        },
        {
            question: "The _____ method is used to retrieve data in HTTP.",
            answer: "get",
            caseSensitive: false,
            explanation: "GET is the HTTP method used to retrieve data from a resource."
        },
        {
            question: "_____ Interoperability is the highest level, ensuring shared understanding of data meaning.",
            answer: "semantic",
            caseSensitive: false,
            explanation: "Semantic Interoperability ensures systems understand data meaning and context."
        },
        {
            question: "Cluster-Based Discovery reduces network traffic by _____-50%.",
            answer: "30",
            caseSensitive: false,
            explanation: "Cluster-Based Service Discovery reduces network traffic by 30-50%."
        },
        {
            question: "_____ Architecture combines edge and cloud computing benefits.",
            answer: "hybrid",
            caseSensitive: false,
            explanation: "Hybrid Architecture combines edge computing and cloud computing."
        },
        {
            question: "VANET nodes are _____ and roadside devices.",
            answer: "vehicles",
            caseSensitive: false,
            explanation: "VANET (Vehicular Ad Hoc Network) consists of vehicles and roadside devices."
        },
        {
            question: "Ambient IoT devices harvest _____ from natural sources.",
            answer: "energy",
            caseSensitive: false,
            explanation: "Ambient IoT harvests energy from light, thermal, and kinetic sources."
        },
        {
            question: "REST requires that each request be _____, containing all necessary information.",
            answer: "stateless",
            caseSensitive: false,
            alternativeAnswers: ["complete", "self-contained"],
            explanation: "REST's statelessness constraint requires each request to be self-contained."
        },
        {
            question: "6LoWPAN enables _____ communication for small, low-power devices.",
            answer: "ipv6",
            caseSensitive: false,
            explanation: "6LoWPAN enables IPv6 communication over low-power wireless networks."
        },
        {
            question: "The _____ Layer in IoT includes physical hardware like sensors.",
            answer: "device",
            caseSensitive: false,
            explanation: "The Device Layer contains the physical hardware components of IoT systems."
        },
        {
            question: "CoAP is optimized for _____-power, lossy networks.",
            answer: "low",
            caseSensitive: false,
            explanation: "CoAP (Constrained Application Protocol) is designed for low-power networks."
        },
        {
            question: "The _____ layer performs fast, local processing in Hybrid Architecture.",
            answer: "edge",
            caseSensitive: false,
            explanation: "The Edge Layer handles fast, local discovery and processing."
        }
    ],
    
    abbreviations: [
        {
            question: "IoT",
            answer: "Internet of Things",
            explanation: "IoT stands for Internet of Things - the network of interconnected devices."
        },
        {
            question: "MANET",
            answer: "Mobile Ad Hoc Network",
            explanation: "MANET stands for Mobile Ad Hoc Network - a self-configuring wireless network."
        },
        {
            question: "VANET",
            answer: "Vehicular Ad Hoc Network",
            explanation: "VANET stands for Vehicular Ad Hoc Network - networks formed by vehicles."
        },
        {
            question: "WSN",
            answer: "Wireless Sensor Network",
            explanation: "WSN stands for Wireless Sensor Network - networks of distributed sensors."
        },
        {
            question: "MQTT",
            answer: "Message Queue Telemetry Transport",
            explanation: "MQTT stands for Message Queue Telemetry Transport - a lightweight messaging protocol."
        },
        {
            question: "CoAP",
            answer: "Constrained Application Protocol",
            explanation: "CoAP stands for Constrained Application Protocol - optimized for IoT devices."
        },
        {
            question: "REST",
            answer: "Representational State Transfer",
            explanation: "REST stands for Representational State Transfer - an architectural style for web services."
        },
        {
            question: "IETF",
            answer: "Internet Engineering Task Force",
            explanation: "IETF stands for Internet Engineering Task Force - develops Internet protocols."
        },
        {
            question: "RFC",
            answer: "Request for Comments",
            explanation: "RFC stands for Request for Comments - the official publication series for Internet standards."
        },
        {
            question: "LPWAN",
            answer: "Low-Power Wide-Area Network",
            explanation: "LPWAN stands for Low-Power Wide-Area Network - designed for long-range, low-power IoT communication."
        },
        {
            question: "LLN",
            answer: "Low-Power Lossy Network",
            explanation: "LLN stands for Low-Power, Lossy Network - networks with limited power and unreliable communication."
        },
        {
            question: "NIST",
            answer: "National Institute of Standards and Technology",
            explanation: "NIST stands for National Institute of Standards and Technology - provides cybersecurity guidelines."
        },
        {
            question: "SPAN",
            answer: "SmartPhone Ad Hoc Network",
            explanation: "SPAN stands for SmartPhone Ad Hoc Network - P2P networks using smartphone hardware."
        },
        {
            question: "mDNS",
            answer: "multicast DNS",
            explanation: "mDNS stands for multicast DNS - enables zero-configuration device discovery."
        }
    ]
};
