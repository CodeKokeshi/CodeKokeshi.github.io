// Import flashcard data
const flashcards = [
  {
    id: "iot-definition-1",
    topic: "IoT Definition & Architecture",
    question: "What defines the Internet of Things (IoT)?",
    full: "<p>A <mark>distributed network</mark> of <mark>uniquely identifiable</mark> physical or virtual objects that <mark>sense, communicate, and act</mark> on shared data without requiring constant human interaction, creating <mark>cyber-physical feedback loops</mark>.</p>",
    simple: "<ul><li>Networked smart objects</li><li>Sensing + actuation loops</li><li>Minimal human control</li></ul>",
    keywords: ["definition", "cyber-physical", "objects"]
  },
  {
    id: "iot-definition-2",
    topic: "IoT Definition & Architecture",
    question: "Which layers form the canonical 3-tier IoT architecture?",
    full: "<ul><li><strong>Perception:</strong> Sensors/actuators <mark>capture context</mark>.</li><li><strong>Network:</strong> <mark>Connectivity, routing</mark>, and data transport.</li><li><strong>Application:</strong> Domain logic, dashboards, <mark>decision-making</mark>.</li></ul>",
    simple: "<ul><li>Perception: sense</li><li>Network: move data</li><li>Application: deliver insights</li></ul>",
    keywords: ["perception", "network", "application"]
  },
  {
    id: "iot-definition-3",
    topic: "IoT Definition & Architecture",
    question: "How do 5-layer IoT reference architectures extend the 3-tier stack?",
    full: "<ul><li>Add a <strong>Middleware</strong> layer for <mark>device/service abstraction</mark>, messaging, and analytics.</li><li>Add a <strong>Business</strong> layer to translate IoT insights into <mark>KPIs, compliance</mark>, and enterprise workflows.</li></ul>",
    simple: "<ul><li>Middleware: abstraction + messaging</li><li>Business: KPIs, policy, compliance</li></ul>",
    keywords: ["middleware", "business layer", "reference"]
  },
  {
    id: "iot-definition-4",
    topic: "IoT Definition & Architecture",
    question: "What distinguishes cloud-centric from edge-centric IoT architectures?",
    full: "<ul><li><strong>Cloud-centric:</strong> <mark>Centralized processing</mark>, elastic scale, <mark>higher latency</mark> reliance on WAN.</li><li><strong>Edge-centric:</strong> <mark>On-site analytics/control</mark>, reduced latency and bandwidth, handles <mark>intermittent connectivity</mark>.</li></ul>",
    simple: "<ul><li>Cloud: central, elastic, slower</li><li>Edge: local, fast, resilient</li></ul>",
    keywords: ["cloud", "edge", "latency"]
  },
  {
    id: "features-layers-1",
    topic: "IoT Features & Layers",
    question: "List hallmark features of IoT systems.",
    full: "<ul><li><strong>Massive scale</strong> and <mark>device heterogeneity</mark>.</li><li><strong>Context awareness</strong> through <mark>sensing and metadata</mark>.</li><li><strong>Real-time or near-real-time</strong> responsiveness.</li><li><strong>Autonomy & actuation</strong> based on analytics.</li></ul>",
    simple: "<ul><li>Massive device scale</li><li>Context awareness</li><li>Timely responses</li><li>Autonomous action</li></ul>",
    keywords: ["features", "scale", "autonomy"]
  },
  {
    id: "features-layers-2",
    topic: "IoT Features & Layers",
    question: "What roles does IoT middleware typically provide?",
    full: "<ul><li><mark>Device abstraction</mark> and management APIs.</li><li>Messaging, <mark>publish/subscribe</mark>, and protocol translation.</li><li>Data normalization, filtering, and <mark>stream processing</mark>.</li><li>Security services: <mark>auth, provisioning</mark>, policy enforcement.</li></ul>",
    simple: "<ul><li>Device abstraction APIs</li><li>Protocol translation</li><li>Stream processing</li><li>Security + policy</li></ul>",
    keywords: ["middleware", "abstraction", "messaging"]
  },
  {
    id: "features-layers-3",
    topic: "IoT Features & Layers",
    question: "Compare data-centric and service-centric IoT layering.",
    full: "<ul><li><strong>Data-centric:</strong> Pipelines emphasise <mark>ingestion, storage, analytics</mark>, and data governance.</li><li><strong>Service-centric:</strong> Focus on <mark>reusable services, APIs</mark>, and orchestration supporting business workflows.</li></ul>",
    simple: "<ul><li>Data-centric: pipeline + governance</li><li>Service-centric: reusable APIs</li></ul>",
    keywords: ["data-centric", "service-centric"]
  },
  {
    id: "features-layers-4",
    topic: "IoT Features & Layers",
    question: "Which cross-cutting qualities must be designed into every IoT layer?",
    full: "<ul><li><strong>Security & privacy</strong> (device to application).</li><li><strong>Resilience & fault tolerance</strong>.</li><li><strong>Manageability</strong> (<mark>monitoring, OTA updates</mark>).</li><li><strong>Regulatory compliance</strong> (safety, data residency).</li></ul>",
    simple: "<ul><li>Security + privacy</li><li>Resilience + fault tolerance</li><li>Manageability + updates</li><li>Regulatory compliance</li></ul>",
    keywords: ["cross-cutting", "security", "manageability"]
  },
  {
    id: "ad-hoc-1",
    topic: "Ad Hoc & Sensor Networks",
    question: "What characterises a MANET?",
    full: "<p>Mobile Ad hoc Networks use <mark>self-configuring mobile nodes</mark> communicating over <mark>multi-hop wireless links</mark> without fixed infrastructure, featuring <mark>dynamic topology</mark> and energy-aware routing.</p>",
    simple: "<ul><li>Self-forming mobile nodes</li><li>Multi-hop wireless links</li><li>No fixed infrastructure</li></ul>",
    keywords: ["MANET", "mobile", "multi-hop"]
  },
  {
    id: "ad-hoc-2",
    topic: "Ad Hoc & Sensor Networks",
    question: "How do iMANETs extend MANET capabilities?",
    full: "<ul><li>Integrate <mark>Internet gateways</mark> for wider connectivity.</li><li>Run <mark>delay/disruption tolerant networking (DTN)</mark> when links break.</li><li>Support <mark>QoS-aware routing</mark> for mixed traffic types.</li></ul>",
    simple: "<ul><li>Internet gateway access</li><li>Delay/disruption tolerance</li><li>QoS-aware routing</li></ul>",
    keywords: ["iMANET", "gateway", "DTN"]
  },
  {
    id: "ad-hoc-3",
    topic: "Ad Hoc & Sensor Networks",
    question: "What makes VANETs distinct within ad hoc networking?",
    full: "<ul><li>Nodes are <mark>vehicles and roadside units</mark>.</li><li>High mobility and <mark>predictable paths</mark> (roads).</li><li><mark>Safety-critical latency</mark> demands (V2V, V2I).</li></ul>",
    simple: "<ul><li>Vehicles + roadside units</li><li>Predictable road mobility</li><li>Safety-critical latency</li></ul>",
    keywords: ["VANET", "vehicles", "V2X"]
  },
  {
    id: "ad-hoc-4",
    topic: "Ad Hoc & Sensor Networks",
    question: "Contrast WSNs and SPANs.",
    full: "<ul><li><strong>WSN:</strong> <mark>Dense sensor nodes</mark> forwarding environmental data to sinks.</li><li><strong>SPAN:</strong> <mark>Sparse mobile devices</mark> acting as access points, connecting isolated network segments opportunistically.</li></ul>",
    simple: "<ul><li>WSN: dense sensing mesh</li><li>SPAN: sparse mobile relays</li></ul>",
    keywords: ["WSN", "SPAN", "sensors"]
  },
  {
    id: "standards-protocols-1",
    topic: "IoT Standards & Protocols",
    question: "When would you choose MQTT over CoAP?",
    full: "<ul><li>Use <strong>MQTT</strong> for <mark>reliable pub/sub over TCP</mark> when devices need brokered messaging and QoS levels.</li><li>Use <strong>CoAP</strong> for <mark>RESTful constrained devices over UDP</mark> where low overhead and multicast matter.</li></ul>",
    simple: "<ul><li>MQTT: TCP pub/sub QoS</li><li>CoAP: UDP REST minimal</li></ul>",
    keywords: ["MQTT", "CoAP", "protocol choice"]
  },
  {
    id: "standards-protocols-2",
    topic: "IoT Standards & Protocols",
    question: "What does 6LoWPAN enable?",
    full: "<p>IPv6 over Low-Power Wireless Personal Area Networks <mark>compresses IPv6 headers</mark> and <mark>fragments packets</mark> so <mark>IEEE 802.15.4</mark> radios can participate directly in IP networks.</p>",
    simple: "<ul><li>Compresses IPv6 headers</li><li>Fragments for 802.15.4</li><li>Brings IP to low-power radios</li></ul>",
    keywords: ["6LoWPAN", "IPv6", "802.15.4"]
  },
  {
    id: "standards-protocols-3",
    topic: "IoT Standards & Protocols",
    question: "Which routing protocol targets low-power and lossy IoT networks?",
    full: "<p>RPL (Routing Protocol for Low-Power and Lossy Networks) forms <mark>destination-oriented directed acyclic graphs</mark> with objective functions that optimize for metrics like <mark>energy, latency</mark>, or ETX.</p>",
    simple: "<ul><li>RPL builds DODAGs</li><li>Optimizes LLN metrics</li><li>Supports constrained nodes</li></ul>",
    keywords: ["RPL", "routing", "LLN"]
  },
  {
    id: "standards-protocols-4",
    topic: "IoT Standards & Protocols",
    question: "Name three application protocols standardized for IoT messaging.",
    full: "<ul><li><strong>MQTT</strong> (OASIS) <mark>lightweight publish/subscribe</mark>.</li><li><strong>AMQP 1.0</strong> (OASIS/ISO) <mark>reliable brokered messaging</mark>.</li><li><strong>CoAP</strong> (IETF RFC 7252) <mark>RESTful request/response</mark>.</li></ul>",
    simple: "<ul><li>MQTT (OASIS)</li><li>AMQP 1.0</li><li>CoAP (RFC 7252)</li></ul>",
    keywords: ["AMQP", "messaging", "RFC 7252"]
  },
  {
    id: "internet-standards-1",
    topic: "Internet Standards Lifecycle",
    question: "Outline the Internet standards track stages.",
    full: "<ol><li><strong>Internet-Draft</strong> (expires in 6 months).</li><li><strong>Proposed Standard</strong> (<mark>stable spec</mark>, proof of concept).</li><li><strong>Internet Standard</strong> (<mark>multiple interoperable implementations</mark>, significant deployment).</li></ol>",
    simple: "<ol><li>Internet-Draft</li><li>Proposed Standard</li><li>Internet Standard</li></ol>",
    keywords: ["proposed standard", "internet draft"]
  },
  {
    id: "internet-standards-2",
    topic: "Internet Standards Lifecycle",
    question: "Who coordinates RFC publication?",
    full: "<p>The <mark>RFC Editor</mark> processes, edits, and publishes approved documents, while the <mark>Internet Engineering Steering Group (IESG)</mark> within IETF grants publication approval.</p>",
    simple: "<ul><li>IESG approves drafts</li><li>RFC Editor publishes</li></ul>",
    keywords: ["RFC Editor", "IESG", "IETF"]
  },
  {
    id: "internet-standards-3",
    topic: "Internet Standards Lifecycle",
    question: "What roles do IETF working groups play?",
    full: "<ul><li>Develop <mark>problem statements and Internet-Drafts</mark>.</li><li>Drive <mark>consensus</mark> across vendors and researchers.</li><li>Report to area directors who escalate drafts to IESG.</li></ul>",
    simple: "<ul><li>Author and revise drafts</li><li>Drive community consensus</li><li>Report to area directors</li></ul>",
    keywords: ["working groups", "consensus", "draft"]
  },
  {
    id: "standard-orgs-1",
    topic: "Standard Organizations",
    question: "Summarize IETF's scope in IoT standardization.",
    full: "<ul><li>Focus on <mark>Internet protocols</mark> (e.g., CoRE, 6Lo).</li><li>Publishes <mark>RFCs</mark> defining transport, security, and management.</li><li><mark>Open participation</mark> with rough consensus and running code.</li></ul>",
    simple: "<ul><li>Internet protocol focus</li><li>RFC-based outputs</li><li>Open participation</li></ul>",
    keywords: ["IETF", "CoRE", "6Lo"]
  },
  {
    id: "standard-orgs-2",
    topic: "Standard Organizations",
    question: "What IoT contributions come from IEEE and ETSI?",
    full: "<ul><li><strong>IEEE:</strong> Physical/MAC standards such as <mark>802.15.4</mark>, 802.11ah, Time-Sensitive Networking.</li><li><strong>ETSI:</strong> <mark>M2M service architecture</mark>, NFV, and standards for LPWAN (e.g., DECT-2020 NR).</li></ul>",
    simple: "<ul><li>IEEE: PHY/MAC e.g. 802.15.4</li><li>ETSI: M2M, NFV, LPWAN</li></ul>",
    keywords: ["IEEE", "ETSI", "802.15.4"]
  },
  {
    id: "standard-orgs-3",
    topic: "Standard Organizations",
    question: "What is oneM2M and who supports it?",
    full: "<p>oneM2M is a <mark>global partnership project</mark> (ETSI, ATIS, TIA, TTC, etc.) delivering a <mark>common service layer</mark> for M2M and IoT interoperability across verticals.</p>",
    simple: "<ul><li>Global service layer spec</li><li>Backed by SDO partnership</li><li>Targets cross-vertical reuse</li></ul>",
    keywords: ["oneM2M", "service layer"]
  },
  {
    id: "standard-orgs-4",
    topic: "Standard Organizations",
    question: "Describe NIST's role for IoT.",
    full: "<ul><li>Publishes <mark>cybersecurity frameworks</mark> and baselines (NISTIR 8259 series).</li><li>Develops <mark>reference architectures and testbeds</mark> for smart manufacturing and cyber-physical systems.</li><li>Guides <mark>risk management and privacy engineering</mark> for IoT deployments.</li></ul>",
    simple: "<ul><li>NISTIR security baselines</li><li>Reference architectures/testbeds</li><li>Risk + privacy guidance</li></ul>",
    keywords: ["NIST", "cybersecurity", "framework"]
  },
  {
    id: "interoperability-1",
    topic: "IoT Interoperability",
    question: "List interoperability layers relevant to IoT.",
    full: "<ul><li><strong>Device</strong> (<mark>electrical, mechanical, connectivity</mark>).</li><li><strong>Network</strong> (<mark>routing, addressing</mark>, QoS).</li><li><strong>Data</strong> (<mark>formats, models</mark>).</li><li><strong>Semantic</strong> (<mark>shared meaning, ontologies</mark>).</li></ul>",
    simple: "<ul><li>Device: physical/links align</li><li>Network: routing/addressing</li><li>Data: formats/models</li><li>Semantic: shared meaning</li></ul>",
    keywords: ["device", "semantic", "interoperability"]
  },
  {
    id: "interoperability-2",
    topic: "IoT Interoperability",
    question: "How is semantic interoperability achieved?",
    full: "<ul><li>Adopt <mark>shared ontologies</mark> (SAREF, SOSA/SSN).</li><li>Use <mark>linked data vocabularies</mark> and context metadata.</li><li>Apply <mark>semantic mediation gateways</mark> when ontologies differ.</li></ul>",
    simple: "<ul><li>Shared ontologies (SAREF, SOSA)</li><li>Context-rich vocabularies</li><li>Semantic mediation gateways</li></ul>",
    keywords: ["semantic", "ontology", "SAREF"]
  },
  {
    id: "interoperability-3",
    topic: "IoT Interoperability",
    question: "What strategies mitigate vendor lock-in?",
    full: "<ul><li><mark>Standardized northbound APIs</mark> (REST, MQTT).</li><li><mark>Open data models</mark> (oneM2M, IPSO, LwM2M).</li><li><mark>Federated identity</mark> and open security standards (OAuth 2.0, ACE).</li></ul>",
    simple: "<ul><li>Standard open APIs</li><li>Open data models</li><li>Shared security/identity</li></ul>",
    keywords: ["vendor lock-in", "IPSO", "OAuth"]
  },
  {
    id: "rest-http-1",
    topic: "REST & HTTP in IoT",
    question: "What REST constraints suit IoT?",
    full: "<ul><li><strong>Uniform interface</strong> simplifies device APIs.</li><li><strong>Statelessness</strong> aids <mark>scalability under intermittent connectivity</mark>.</li><li><strong>Layered system</strong> supports <mark>gateways and caches</mark>.</li></ul>",
    simple: "<ul><li>Uniform interface</li><li>Stateless exchanges</li><li>Layered intermediaries</li></ul>",
    keywords: ["REST", "stateless", "uniform interface"]
  },
  {
    id: "rest-http-2",
    topic: "REST & HTTP in IoT",
    question: "Match HTTP methods to typical IoT operations.",
    full: "<ul><li><strong>GET:</strong> <mark>Read sensor observations</mark>.</li><li><strong>POST:</strong> <mark>Create commands or events</mark>.</li><li><strong>PUT:</strong> <mark>Update device configuration</mark>.</li><li><strong>DELETE:</strong> Deregister resources or revoke access.</li></ul>",
    simple: "<ul><li>GET: read state</li><li>POST: trigger action</li><li>PUT: update config</li><li>DELETE: remove resource</li></ul>",
    keywords: ["HTTP", "methods", "CRUD"]
  },
  {
    id: "rest-http-3",
    topic: "REST & HTTP in IoT",
    question: "Why use CoAP observe or Webhooks in IoT?",
    full: "<p>They enable <mark>asynchronous notifications</mark> so constrained devices <mark>push state changes</mark> without clients polling or maintaining long-lived connections.</p>",
    simple: "<ul><li>Push updates without polling</li><li>Suited to constrained clients</li><li>Keeps sessions lightweight</li></ul>",
    keywords: ["observe", "webhook", "async"]
  },
  {
    id: "discovery-1",
    topic: "Service & Resource Discovery",
    question: "How does mDNS/DNS-SD aid local IoT discovery?",
    full: "<p><mark>Multicast DNS</mark> with <mark>DNS Service Discovery</mark> advertises services on local links so devices can discover endpoints by service type <mark>without central registries</mark>.</p>",
    simple: "<ul><li>mDNS advertises locally</li><li>DNS-SD lists service types</li><li>No central registry needed</li></ul>",
    keywords: ["mDNS", "DNS-SD", "local"]
  },
  {
    id: "discovery-2",
    topic: "Service & Resource Discovery",
    question: "What problem does the CoRE Resource Directory solve?",
    full: "<p>It provides a <mark>registry where constrained nodes publish resource links</mark>, enabling clients to locate CoAP resources across <mark>sleepy or intermittently connected networks</mark>.</p>",
    simple: "<ul><li>Directory for CoAP links</li><li>Sleepy nodes register once</li><li>Clients query centrally</li></ul>",
    keywords: ["CoRE", "RD", "CoAP"]
  },
  {
    id: "discovery-3",
    topic: "Service & Resource Discovery",
    question: "Name discovery approaches in large IoT deployments.",
    full: "<ul><li><mark>Directory services</mark> (UDDI-like, oneM2M CSE).</li><li><mark>Publish/subscribe brokers</mark> tracking topic catalogs.</li><li><mark>Semantic discovery</mark> using SPARQL over knowledge graphs.</li></ul>",
    simple: "<ul><li>Directory/catalog services</li><li>Broker topic registries</li><li>Semantic search (SPARQL)</li></ul>",
    keywords: ["directory", "semantic discovery", "catalog"]
  },
  {
    id: "scalability-1",
    topic: "IoT Scalability, Energy & Security",
    question: "Which design patterns improve IoT scalability?",
    full: "<ul><li><mark>Hierarchical clustering</mark> of devices/gateways.</li><li><mark>Event-driven microservices</mark> for ingested data.</li><li><mark>Edge buffering and stream processing</mark> to offload cloud.</li></ul>",
    simple: "<ul><li>Hierarchical clustering</li><li>Event-driven microservices</li><li>Edge buffering/streaming</li></ul>",
    keywords: ["scalability", "clustering", "microservices"]
  },
  {
    id: "scalability-2",
    topic: "IoT Scalability, Energy & Security",
    question: "Give two techniques for energy efficiency in sensor nodes.",
    full: "<ul><li><mark>Duty cycling radios and CPUs</mark> using MAC protocols like TSCH.</li><li><mark>Adaptive sampling</mark> and <mark>in-network aggregation</mark> to reduce transmissions.</li></ul>",
  simple: "<ul><li>Duty-cycle radios</li><li>Adaptive sampling &amp; in-network aggregation</li></ul>",
    keywords: ["energy", "TSCH", "sampling"]
  },
  {
    id: "scalability-3",
    topic: "IoT Scalability, Energy & Security",
    question: "What is a zero-trust security posture for IoT?",
    full: "<ul><li>Continuous <mark>device identity verification</mark> (PKI, attestation).</li><li><mark>Least-privilege access</mark> enforced by microsegmentation.</li><li><mark>Telemetry and anomaly detection</mark> across device lifecycle.</li></ul>",
    simple: "<ul><li>Strong device identity</li><li>Least-privilege zones</li><li>Continuous anomaly watch</li></ul>",
    keywords: ["zero trust", "security", "attestation"]
  },
  {
    id: "hybrid-1",
    topic: "Hybrid Edge–Cloud Architectures",
    question: "Why combine edge and cloud processing?",
    full: "<ul><li>Edge reduces <mark>latency and bandwidth</mark> via local preprocessing.</li><li>Cloud provides <mark>deep analytics, training</mark>, and archival storage.</li><li>Together they sustain <mark>resilience when WAN links fail</mark>.</li></ul>",
    simple: "<ul><li>Edge trims latency</li><li>Cloud scales analytics</li><li>Hybrid boosts resilience</li></ul>",
    keywords: ["edge", "cloud", "latency"]
  },
  {
    id: "hybrid-2",
    topic: "Hybrid Edge–Cloud Architectures",
    question: "Define fog computing in IoT context.",
    full: "<p>A <mark>distributed continuum</mark> where compute, storage, and control extend from cloud to intermediary <mark>fog nodes</mark> close to devices, orchestrated as a <mark>multi-tier platform</mark>.</p>",
    simple: "<ul><li>Continuum cloud→fog→edge</li><li>Distributed compute/storage</li><li>Orchestrated multi-tier control</li></ul>",
    keywords: ["fog", "continuum", "distributed"]
  },
  {
    id: "hybrid-3",
    topic: "Hybrid Edge–Cloud Architectures",
    question: "How do digital twins leverage hybrid architectures?",
    full: "<ul><li>Edge syncs <mark>real-time telemetry</mark> into a cloud-hosted twin model.</li><li>Cloud twin runs <mark>analytics, simulations, and prescriptive maintenance</mark>.</li><li><mark>Bi-directional updates</mark> keep physical and virtual assets aligned.</li></ul>",
    simple: "<ul><li>Edge feeds live telemetry</li><li>Cloud twin runs analytics</li><li>Sync keeps states aligned</li></ul>",
    keywords: ["digital twin", "synchronisation"]
  },
  {
    id: "emerging-trends-1",
    topic: "Emerging IoT Trends",
    question: "What is AIoT and why is it impactful?",
    full: "<p>AIoT fuses <mark>AI models with IoT data streams</mark> to enable <mark>autonomous decision-making</mark>, predictive maintenance, and context-aware services at edge or cloud.</p>",
    simple: "<ul><li>AI models meet IoT data</li><li>Predict + automate decisions</li><li>Works at edge or cloud</li></ul>",
    keywords: ["AIoT", "AI", "autonomous"]
  },
  {
    id: "emerging-trends-2",
    topic: "Emerging IoT Trends",
    question: "How do 5G/6G networks enhance IoT?",
    full: "<ul><li><mark>Network slicing</mark> for differentiated QoS (mMTC, URLLC).</li><li><mark>Ultra-low latency</mark> and edge compute integration.</li><li><mark>Massive device density</mark> with improved energy efficiency (RedCap, grant-free access).</li></ul>",
    simple: "<ul><li>Network slicing profiles</li><li>Ultra-low latency paths</li><li>Massive device density</li></ul>",
    keywords: ["5G", "6G", "slicing"]
  },
  {
    id: "emerging-trends-3",
    topic: "Emerging IoT Trends",
    question: "Explain semantic interoperability roadmaps.",
    full: "<ul><li>Adopt <mark>knowledge graphs</mark> that map across domain ontologies.</li><li>Automate <mark>schema alignment with AI-based semantic mediation</mark>.</li><li>Leverage <mark>W3C WoT Thing Descriptions</mark> for self-describing devices.</li></ul>",
    simple: "<ul><li>Knowledge graphs bridge schemas</li><li>AI-assisted semantic mapping</li><li>W3C WoT self-description</li></ul>",
    keywords: ["semantic", "knowledge graph", "WoT"]
  },
  
  // Abbreviation Questions
  {
    id: "abbrev-1",
    topic: "Standards & Organizations",
    question: "What does IETF stand for?",
    full: "<p><strong>Internet Engineering Task Force</strong> — develops internet standards through RFCs and working groups.</p>",
    simple: "<p>Internet Engineering Task Force</p>",
    keywords: ["IETF", "abbreviation"]
  },
  {
    id: "abbrev-2",
    topic: "Standards & Organizations",
    question: "What does NIST stand for?",
    full: "<p><strong>National Institute of Standards and Technology</strong> — provides security baselines and risk guidance.</p>",
    simple: "<p>National Institute of Standards and Technology</p>",
    keywords: ["NIST", "abbreviation"]
  },
  {
    id: "abbrev-3",
    topic: "Standards & Organizations",
    question: "What does IEEE stand for?",
    full: "<p><strong>Institute of Electrical and Electronics Engineers</strong> — defines 802.15.4, 802.11, and wireless standards.</p>",
    simple: "<p>Institute of Electrical and Electronics Engineers</p>",
    keywords: ["IEEE", "abbreviation"]
  },
  {
    id: "abbrev-4",
    topic: "Standards & Organizations",
    question: "What does W3C stand for?",
    full: "<p><strong>World Wide Web Consortium</strong> — develops Web of Things (WoT) standards.</p>",
    simple: "<p>World Wide Web Consortium</p>",
    keywords: ["W3C", "abbreviation"]
  },
  {
    id: "abbrev-5",
    topic: "IoT Protocols",
    question: "What does MQTT stand for?",
    full: "<p><strong>Message Queuing Telemetry Transport</strong> — lightweight publish/subscribe protocol over TCP.</p>",
    simple: "<p>Message Queuing Telemetry Transport</p>",
    keywords: ["MQTT", "abbreviation"]
  },
  {
    id: "abbrev-6",
    topic: "IoT Protocols",
    question: "What does CoAP stand for?",
    full: "<p><strong>Constrained Application Protocol</strong> — RESTful protocol for constrained devices over UDP.</p>",
    simple: "<p>Constrained Application Protocol</p>",
    keywords: ["CoAP", "abbreviation"]
  },
  {
    id: "abbrev-7",
    topic: "IoT Protocols",
    question: "What does AMQP stand for?",
    full: "<p><strong>Advanced Message Queuing Protocol</strong> — reliable brokered messaging standard.</p>",
    simple: "<p>Advanced Message Queuing Protocol</p>",
    keywords: ["AMQP", "abbreviation"]
  },
  {
    id: "abbrev-8",
    topic: "IoT Networks",
    question: "What does WSN stand for?",
    full: "<p><strong>Wireless Sensor Network</strong> — dense mesh of sensor nodes collecting environmental data.</p>",
    simple: "<p>Wireless Sensor Network</p>",
    keywords: ["WSN", "abbreviation"]
  },
  {
    id: "abbrev-9",
    topic: "IoT Networks",
    question: "What does SPAN stand for?",
    full: "<p><strong>Spontaneous Personal Area Network</strong> — sparse mobile devices acting as opportunistic relays.</p>",
    simple: "<p>Spontaneous Personal Area Network</p>",
    keywords: ["SPAN", "abbreviation"]
  },
  {
    id: "abbrev-10",
    topic: "IoT Networks",
    question: "What does VANET stand for?",
    full: "<p><strong>Vehicular Ad Hoc Network</strong> — vehicles and roadside units with predictable mobility patterns.</p>",
    simple: "<p>Vehicular Ad Hoc Network</p>",
    keywords: ["VANET", "abbreviation"]
  }
];

const questionOverrides = {
  "standard-orgs-3": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "", answer: "Global", after: " service layer spec" },
        { before: "Backed by ", answer: "SDO", after: " partnership" },
        { before: "Targets cross-", answer: "vertical", after: " reuse" }
      ],
      distractors: ["Regional", "Vendor", "Platform", "Device", "Edge"]
    }
  },
  "standards-protocols-1": {
    types: ["mc"]
  },
  "standards-protocols-2": {
    types: ["ms", "mc"],
    multiSelect: {
      options: [
        { text: "Compresses IPv6 headers", value: "Compresses IPv6 headers", correct: true },
        { text: "Fragments packets for IEEE 802.15.4 frames", value: "Fragments packets for IEEE 802.15.4 frames", correct: true },
        { text: "Brings IP to low-power radios", value: "Brings IP to low-power radios", correct: true },
        { text: "Requires high-bandwidth backbones", value: "Requires high-bandwidth backbones", correct: false },
        { text: "Guarantees end-to-end QoS", value: "Guarantees end-to-end QoS", correct: false }
      ],
      minSelections: 3
    }
  },
  "discovery-3": {
    types: ["ms", "mc"],
    multiSelect: {
      options: [
        { text: "Directory/catalog services", value: "Directory/catalog services", correct: true },
        { text: "Broker topic registries", value: "Broker topic registries", correct: true },
        { text: "Semantic search (SPARQL)", value: "Semantic search (SPARQL)", correct: true },
        { text: "World Wide Web Consortium", value: "World Wide Web Consortium", correct: false },
        { text: "Manual device pairing", value: "Manual device pairing", correct: false },
        { text: "Single perimeter firewall", value: "Single perimeter firewall", correct: false }
      ],
      minSelections: 3
    }
  },
  "scalability-2": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "", answer: "Duty-cycle radios", after: "" },
        { before: "", answer: "Adaptive sampling & in-network aggregation", after: "" }
      ],
      distractors: [
        "Always-on radios",
        "Static sampling",
        "Manual configuration",
        "Polling loops"
      ]
    }
  },
  "scalability-3": {
    types: ["ms", "mc"],
    multiSelect: {
      options: [
        { text: "Strong device identity", value: "Strong device identity", correct: true },
        { text: "Least-privilege zones", value: "Least-privilege zones", correct: true },
        { text: "Continuous anomaly watch", value: "Continuous anomaly watch", correct: true },
        { text: "Implicit trust inside LAN", value: "Implicit trust inside LAN", correct: false },
        { text: "Perimeter-only firewalls", value: "Perimeter-only firewalls", correct: false },
        { text: "Shared guest credentials", value: "Shared guest credentials", correct: false }
      ],
      minSelections: 3
    }
  },
  "abbrev-1": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "I - ", answer: "Internet", after: "" },
        { before: "E - ", answer: "Engineering", after: "" },
        { before: "T - ", answer: "Task", after: "" },
        { before: "F - ", answer: "Force", after: "" }
      ],
      distractors: ["Institute", "Framework", "Federation", "Technology", "Alliance"]
    }
  },
  "abbrev-2": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "N - ", answer: "National", after: "" },
        { before: "I - ", answer: "Institute", after: "" },
        { before: "S - ", answer: "Standards", after: "" },
        { before: "T - ", answer: "Technology", after: "" }
      ],
      distractors: ["International", "Systems", "Services", "Telecommunications", "Framework"]
    }
  },
  "abbrev-3": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "I - ", answer: "Institute", after: "" },
        { before: "E - ", answer: "Electrical", after: "" },
        { before: "E - ", answer: "Electronics", after: "" },
        { before: "E - ", answer: "Engineers", after: "" }
      ],
      distractors: ["Industry", "Energy", "Equipment", "Enterprise", "Researchers"]
    }
  },
  "abbrev-4": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "W - ", answer: "World", after: "" },
        { before: "W - ", answer: "Wide", after: "" },
        { before: "W - ", answer: "Web", after: "" },
        { before: "C - ", answer: "Consortium", after: "" }
      ],
      distractors: ["Wideband", "Council", "Community", "Computing", "Organization"]
    }
  },
  "abbrev-5": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "M - ", answer: "Message", after: "" },
        { before: "Q - ", answer: "Queuing", after: "" },
        { before: "T - ", answer: "Telemetry", after: "" },
        { before: "T - ", answer: "Transport", after: "" }
      ],
      distractors: ["Monitoring", "Queries", "Tactical", "Transfer", "Technology"]
    }
  },
  "abbrev-6": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "C - ", answer: "Constrained", after: "" },
        { before: "A - ", answer: "Application", after: "" },
        { before: "P - ", answer: "Protocol", after: "" }
      ],
      distractors: ["Compact", "Agent", "Platform", "Process", "Channel"]
    }
  },
  "abbrev-7": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "A - ", answer: "Advanced", after: "" },
        { before: "M - ", answer: "Message", after: "" },
        { before: "Q - ", answer: "Queuing", after: "" },
        { before: "P - ", answer: "Protocol", after: "" }
      ],
      distractors: ["Automated", "Messaging", "Queuer", "Platform", "Program"]
    }
  },
  "abbrev-8": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "W - ", answer: "Wireless", after: "" },
        { before: "S - ", answer: "Sensor", after: "" },
        { before: "N - ", answer: "Network", after: "" }
      ],
      distractors: ["Wide", "Signal", "Node", "Service", "Net"]
    }
  },
  "abbrev-9": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "S - ", answer: "Spontaneous", after: "" },
        { before: "P - ", answer: "Personal", after: "" },
        { before: "A - ", answer: "Area", after: "" },
        { before: "N - ", answer: "Network", after: "" }
      ],
      distractors: ["Sensor", "Private", "Access", "Node", "Net"]
    }
  },
  "abbrev-10": {
    types: ["fib", "mc"],
    fillBlank: {
      layout: "list",
      items: [
        { before: "", answer: "Vehicular", after: "" },
        { before: "", answer: "Ad", after: "" },
        { before: "", answer: "Hoc", after: "" },
        { before: "", answer: "Network", after: "" }
      ],
      distractors: ["Vehicle", "Adaptive", "Hybrid", "Node", "Net"]
    }
  }
};

function buildExplanationMarkup(card, type) {
  const override = questionOverrides[card.id];

  let source = "";
  if (type === "ms" && override?.multiSelect?.explanation) {
    source = override.multiSelect.explanation;
  } else if (type === "fib" && override?.fillBlank?.explanation) {
    source = override.fillBlank.explanation;
  } else if (override?.explanation) {
    source = override.explanation;
  } else if (card.full) {
    source = card.full;
  } else {
    source = card.simple || "";
  }

  const stripped = stripHTML(source);
  if (!stripped) {
    return "";
  }
  return formatListMarkup(stripped);
}

// Quiz state
let quizConfig = {
  topic: "all",
  questionCount: 10,
  includeMultipleChoice: true,
  includeFillBlank: true,
  includeMultiSelect: true
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM elements
const quizSetup = document.getElementById("quizSetup");
const quizContainer = document.getElementById("quizContainer");
const quizResults = document.getElementById("quizResults");
const topicSelect = document.getElementById("topicSelect");
const questionCountInput = document.getElementById("questionCount");
const includeMCCheckbox = document.getElementById("includeMultipleChoice");
const includeFIBCheckbox = document.getElementById("includeFillBlank");
const includeMSCheckbox = document.getElementById("includeMultiSelect");
const startQuizBtn = document.getElementById("startQuizBtn");
const restartQuizBtn = document.getElementById("restartQuizBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const questionTypeBadge = document.getElementById("questionTypeBadge");
const questionTopic = document.getElementById("questionTopic");
const questionText = document.getElementById("questionText");
const mcOptionsContainer = document.getElementById("multipleChoiceOptions");
const fibContainer = document.getElementById("fillBlankOptions");
const blankSentence = document.getElementById("blankSentence");
const wordBank = document.getElementById("wordBank");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const feedback = document.getElementById("feedback");
const finalScoreEl = document.getElementById("finalScore");
const totalQuestionsEl = document.getElementById("totalQuestions");
const scorePercentageEl = document.getElementById("scorePercentage");
const correctCountEl = document.getElementById("correctCount");
const incorrectCountEl = document.getElementById("incorrectCount");
const mcCorrectEl = document.getElementById("mcCorrect");
const fibCorrectEl = document.getElementById("fibCorrect");
const msCorrectEl = document.getElementById("msCorrect");
const reviewQuizBtn = document.getElementById("reviewQuizBtn");
const newQuizBtn = document.getElementById("newQuizBtn");
const reviewSection = document.getElementById("reviewSection");
const reviewList = document.getElementById("reviewList");

// Initialize
function init() {
  populateTopics();
  startQuizBtn.addEventListener("click", startQuiz);
  restartQuizBtn.addEventListener("click", () => {
    showSetup();
  });
  submitAnswerBtn.addEventListener("click", submitAnswer);
  nextQuestionBtn.addEventListener("click", nextQuestion);
  reviewQuizBtn.addEventListener("click", showReview);
  newQuizBtn.addEventListener("click", showSetup);
}

function populateTopics() {
  const topics = Array.from(new Set(flashcards.map(c => c.topic)));
  topics.forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    topicSelect.appendChild(opt);
  });
}

function showSetup() {
  quizSetup.style.display = "flex";
  quizContainer.style.display = "none";
  quizResults.style.display = "none";
  currentQuiz = [];
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
}

function startQuiz() {
  quizConfig.topic = topicSelect.value;
  quizConfig.questionCount = parseInt(questionCountInput.value);
  quizConfig.includeMultipleChoice = includeMCCheckbox.checked;
  quizConfig.includeFillBlank = includeFIBCheckbox.checked;
  quizConfig.includeMultiSelect = includeMSCheckbox.checked;

  if (!quizConfig.includeMultipleChoice && !quizConfig.includeFillBlank && !quizConfig.includeMultiSelect) {
    alert("Please select at least one question type!");
    return;
  }

  generateQuiz();
  if (currentQuiz.length === 0) {
    alert("Couldn't build a quiz with the chosen settings. Try including another topic or question type.");
    return;
  }
  quizSetup.style.display = "none";
  quizContainer.style.display = "flex";
  renderQuestion();
}

function generateQuiz() {
  let pool = [...flashcards];
  if (quizConfig.topic !== "all") {
    pool = pool.filter(c => c.topic === quizConfig.topic);
  }

  pool = shuffleArray(pool);

  const targetCount = Math.min(quizConfig.questionCount, pool.length);
  currentQuiz = [];

  for (const card of pool) {
    if (currentQuiz.length >= targetCount) break;
    const question = createQuestionForCard(card);
    if (question) {
      currentQuiz.push(question);
    }
  }
}

function createQuestionForCard(card) {
  const allowedTypes = getAllowedQuestionTypes(card);
  if (!allowedTypes.length) {
    return null;
  }
  const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  if (type === "mc") {
    return generateMultipleChoice(card);
  }
  if (type === "fib") {
    return generateFillBlank(card);
  }
  if (type === "ms") {
    return generateMultiSelect(card);
  }
  return null;
}

function getAllowedQuestionTypes(card) {
  const override = questionOverrides[card.id];
  let types = override?.types ? [...override.types] : ["mc"];

  return types.filter(type => {
    if (type === "mc") {
      return quizConfig.includeMultipleChoice;
    }
    if (type === "fib") {
      const hasTemplate = !!override?.fillBlank;
      return quizConfig.includeFillBlank && (hasTemplate || !override?.types);
    }
    if (type === "ms") {
      return quizConfig.includeMultiSelect && !!override?.multiSelect;
    }
    return false;
  });
}

function generateMultipleChoice(card) {
  const correctValue = stripHTML(card.simple);

  const wrongPool = flashcards.filter(c => c.id !== card.id);
  const crossTopicPool = wrongPool.filter(c => c.topic !== card.topic);
  const wrongAnswers = [];

  shuffleArray(crossTopicPool).some(candidate => {
    if (wrongAnswers.length >= 3) return true;
    const value = stripHTML(candidate.simple);
    if (!wrongAnswers.includes(value)) {
      wrongAnswers.push(value);
    }
    return false;
  });

  if (wrongAnswers.length < 3) {
    shuffleArray(wrongPool).forEach(candidate => {
      if (wrongAnswers.length >= 3) return;
      const value = stripHTML(candidate.simple);
      if (!wrongAnswers.includes(value)) {
        wrongAnswers.push(value);
      }
    });
  }

  const options = shuffleArray([
    { value: correctValue, label: formatListMarkup(correctValue), isCorrect: true },
    ...wrongAnswers.slice(0, 3).map(value => ({
      value,
      label: formatListMarkup(value),
      isCorrect: false
    }))
  ]);

  return {
    type: "mc",
    card,
    question: card.question,
    options,
    correctAnswer: correctValue,
    explanation: buildExplanationMarkup(card, "mc"),
    userAnswer: null,
    isCorrect: false
  };
}

function generateMultiSelect(card) {
  const override = questionOverrides[card.id]?.multiSelect;
  if (!override) {
    return null;
  }

  const options = shuffleArray(
    override.options.map(option => ({
      value: option.value,
      label: formatListMarkup(option.text || option.value),
      isCorrect: !!option.correct
    }))
  );

  const correctAnswers = options.filter(opt => opt.isCorrect).map(opt => opt.value);
  const requiredSelections = correctAnswers.length;

  return {
    type: "ms",
    card,
    question: card.question,
    options,
    correctAnswers,
    requiredSelections,
    minSelections: 1,
    explanation: buildExplanationMarkup(card, "ms"),
    userAnswer: new Set(),
    isCorrect: false
  };
}

function generateConfiguredFillBlank(card, config) {
  const blankedWords = config.items.map(item => item.answer);
  const itemsHtml = config.items.map((item, idx) => {
    const before = item.before ? escapeHtml(item.before) : "";
    const after = item.after ? escapeHtml(item.after) : "";
    return `${before}<span class="blank-slot" data-index="${idx}">___</span>${after}`;
  });

  const sentenceWithBlanks = wrapListItems(itemsHtml, config.layout || "list");

  const distractorPool = (config.distractors || []).filter(word => !blankedWords.includes(word));
  const allWords = shuffleArray([...blankedWords, ...distractorPool]);

  return {
    type: "fib",
    card,
    question: config.prompt || card.question,
    sentenceWithBlanks,
    blankedWords,
    allWords,
    explanation: buildExplanationMarkup(card, "fib"),
    userAnswer: new Array(blankedWords.length).fill(null),
    isCorrect: false
  };
}

function generateFillBlank(card) {
  const override = questionOverrides[card.id];
  if (override?.fillBlank) {
    return generateConfiguredFillBlank(card, override.fillBlank);
  }

  const text = stripHTML(card.simple);
  if (!text) return null;

  const words = splitIntoWords(text);
  const questionWords = splitIntoWords(card.question.toLowerCase());
  const questionWordSet = new Set(questionWords);
  const fillerWords = new Set(["data", "service", "centric", "iot", "devices", "network", "system"]);

  const meaningfulWords = words.filter(w => {
    const lowerW = w.toLowerCase();
    return w.length > 5 && !questionWordSet.has(lowerW) && !fillerWords.has(lowerW);
  });

  const candidateWords = meaningfulWords.length >= 2
    ? meaningfulWords
    : words.filter(w => {
        const lowerW = w.toLowerCase();
        return w.length > 4 && !questionWordSet.has(lowerW) && !fillerWords.has(lowerW);
      });

  if (!candidateWords.length) return null;

  const selection = shuffleArray(candidateWords);
  const numBlanks = Math.min(Math.max(2, Math.floor(candidateWords.length * 0.4)), 3);
  const blankedWords = selection.slice(0, numBlanks);

  const lines = text.split(/\n+/).map(line => line.trim()).filter(Boolean);
  const replacementsUsed = new Array(blankedWords.length).fill(false);

  const linesWithBlanks = lines.map(line => {
    let lineHtml = escapeHtml(line);
    for (let idx = 0; idx < blankedWords.length; idx++) {
      if (replacementsUsed[idx]) continue;
      const word = blankedWords[idx];
      const regex = new RegExp(`\\b${escapeRegex(word)}\\b`, "i");
      if (regex.test(lineHtml)) {
        replacementsUsed[idx] = true;
        lineHtml = lineHtml.replace(regex, `<span class="blank-slot" data-index="${idx}">___</span>`);
      }
    }
    return lineHtml;
  });

  if (!replacementsUsed.every(Boolean)) {
    return null;
  }

  const distractors = flashcards
    .filter(c => c.id !== card.id)
    .flatMap(c => splitIntoWords(stripHTML(c.simple)))
    .filter(w => w.length > 3 && !blankedWords.includes(w));

  const allWords = shuffleArray([...blankedWords, ...distractors.slice(0, 3)]);

  return {
    type: "fib",
    card,
    question: card.question,
    sentenceWithBlanks: wrapListItems(linesWithBlanks, "list"),
    blankedWords,
    allWords,
    explanation: buildExplanationMarkup(card, "fib"),
    userAnswer: new Array(blankedWords.length).fill(null),
    isCorrect: false
  };
}

function stripHTML(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  
  // Add line breaks before list items for better separation
  temp.querySelectorAll("li").forEach(li => {
    li.insertAdjacentText("beforebegin", "\n");
  });

  let text = temp.textContent || temp.innerText || "";
  text = text.replace(/\r/g, "");

  const lines = text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);

  return lines.join("\n");
}

function cleanWord(word) {
  // Remove all non-alphanumeric characters
  return word.replace(/[^a-zA-Z0-9]/g, "").trim();
}

function splitIntoWords(text) {
  // Split by pipe, spaces, colons, slashes, and other delimiters
  return text
    .split(/[\s|:\/,;\-]+/)
    .map(w => cleanWord(w))
    .filter(w => w.length > 3);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatListMarkup(text) {
  if (!text) return "";
  const segments = text
    .split(/\n+/)
    .map(segment => segment.trim())
    .filter(Boolean);

  if (segments.length <= 1) {
    return `<span>${escapeHtml(segments[0] || text)}</span>`;
  }

  const items = segments.map(segment => `<li>${escapeHtml(segment.replace(/^[-*•]\s*/, ""))}</li>`);
  return `<ul>${items.join("")}</ul>`;
}

function wrapListItems(items, layout = "list") {
  if (layout === "list") {
    return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  }
  return items.join(" ");
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderQuestion() {
  const q = currentQuiz[currentQuestionIndex];
  
  progressFill.style.width = `${((currentQuestionIndex + 1) / currentQuiz.length) * 100}%`;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;

  const typeLabels = {
    mc: "Multiple Choice",
    fib: "Fill in the Blanks",
    ms: "Multi-Select"
  };

  questionTypeBadge.textContent = typeLabels[q.type] || "Quiz";
  questionTopic.textContent = q.card.topic;
  
  if (q.type === "ms" && q.requiredSelections) {
    questionText.textContent = `${q.question} (Select ${q.requiredSelections} answers)`;
  } else {
    questionText.textContent = q.question;
  }
  
  feedback.style.display = "none";
  submitAnswerBtn.disabled = true;
  submitAnswerBtn.style.display = "inline-block";
  nextQuestionBtn.style.display = "none";

  if (q.type === "mc") {
    renderMultipleChoice(q);
  } else if (q.type === "ms") {
    renderMultiSelect(q);
  } else {
    renderFillBlank(q);
  }
}

function renderMultipleChoice(q) {
  mcOptionsContainer.style.display = "flex";
  fibContainer.style.display = "none";
  mcOptionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "mc-option";
    div.innerHTML = opt.label;
    div.dataset.index = idx;
    div.dataset.option = opt.value;
    div.addEventListener("click", () => selectMCOption(idx));
    mcOptionsContainer.appendChild(div);
  });
}

function selectMCOption(idx) {
  const q = currentQuiz[currentQuestionIndex];
  q.userAnswer = q.options[idx].value;

  document.querySelectorAll(".mc-option").forEach(opt => opt.classList.remove("selected"));
  const selectedOption = document.querySelector(`.mc-option[data-index="${idx}"]`);
  if (selectedOption) {
    selectedOption.classList.add("selected");
  }

  submitAnswerBtn.disabled = false;
}

function renderMultiSelect(q) {
  mcOptionsContainer.style.display = "flex";
  fibContainer.style.display = "none";
  mcOptionsContainer.innerHTML = "";

  if (!(q.userAnswer instanceof Set)) {
    q.userAnswer = new Set(q.userAnswer || []);
  }

  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "mc-option multi";
    div.innerHTML = opt.label;
    div.dataset.index = idx;
    div.dataset.option = opt.value;
    if (q.userAnswer.has(opt.value)) {
      div.classList.add("selected");
    }
    div.addEventListener("click", () => toggleMultiSelectOption(idx));
    mcOptionsContainer.appendChild(div);
  });

  updateMultiSelectState();
}

function toggleMultiSelectOption(idx) {
  const q = currentQuiz[currentQuestionIndex];
  const option = q.options[idx];
  if (!option) return;

  if (!(q.userAnswer instanceof Set)) {
    q.userAnswer = new Set();
  }

  if (q.userAnswer.has(option.value)) {
    q.userAnswer.delete(option.value);
  } else {
    q.userAnswer.add(option.value);
  }

  const optionElement = document.querySelector(`.mc-option[data-index="${idx}"]`);
  if (optionElement) {
    optionElement.classList.toggle("selected", q.userAnswer.has(option.value));
  }

  updateMultiSelectState();
}

function updateMultiSelectState() {
  const q = currentQuiz[currentQuestionIndex];
  const selectedCount = q.userAnswer instanceof Set ? q.userAnswer.size : 0;
  submitAnswerBtn.disabled = selectedCount < (q.minSelections || 1);
}

function renderFillBlank(q) {
  mcOptionsContainer.style.display = "none";
  fibContainer.style.display = "block";
  
  blankSentence.innerHTML = q.sentenceWithBlanks;
  wordBank.innerHTML = "";
  
  q.userAnswer = new Array(q.blankedWords.length).fill(null);
  selectedFIBWord = null;
  selectedFIBChip = null;
  selectedBlankSlot = null;

  q.allWords.forEach(word => {
    const chip = document.createElement("div");
    chip.className = "word-chip";
    chip.textContent = word;
    chip.dataset.word = word;
    chip.addEventListener("click", () => selectWord(word, chip));
    wordBank.appendChild(chip);
  });

  document.querySelectorAll(".blank-slot").forEach(slot => {
    slot.addEventListener("click", () => {
      const idx = parseInt(slot.dataset.index);
      const q = currentQuiz[currentQuestionIndex];
      
      if (q.userAnswer[idx]) {
        // Remove word from this blank
        const word = q.userAnswer[idx];
        q.userAnswer[idx] = null;
        slot.textContent = "___";
        slot.classList.remove("filled");
        slot.classList.remove("correct", "incorrect", "active");

        const chip = Array.from(wordBank.querySelectorAll(".word-chip"))
          .find(c => c.dataset.word === word && c.classList.contains("used"));
        if (chip) {
          chip.classList.remove("used");
        }
        checkFIBComplete();
      } else {
        // Select this blank to fill
        document.querySelectorAll(".blank-slot").forEach(s => s.classList.remove("active"));
        slot.classList.add("active");
        selectedBlankSlot = slot;
        
        // If a word is already selected, fill immediately
        if (selectedFIBWord && selectedFIBChip) {
          q.userAnswer[idx] = selectedFIBWord;
          slot.textContent = selectedFIBWord;
          slot.classList.add("filled");
          slot.classList.remove("active");
          selectedFIBChip.classList.add("used");
          selectedFIBChip.classList.remove("selected");
          
          selectedBlankSlot = null;
          selectedFIBWord = null;
          selectedFIBChip = null;
          
          checkFIBComplete();
        }
      }
    });
  });
}

let selectedFIBWord = null;
let selectedFIBChip = null;
let selectedBlankSlot = null;

function selectWord(word, chip) {
  if (chip.classList.contains("used")) return;
  
  // Highlight selected word
  document.querySelectorAll(".word-chip").forEach(c => c.classList.remove("selected"));
  chip.classList.add("selected");
  
  selectedFIBWord = word;
  selectedFIBChip = chip;
  
  // If a blank is already selected, fill it immediately
  if (selectedBlankSlot) {
    const q = currentQuiz[currentQuestionIndex];
    const idx = parseInt(selectedBlankSlot.dataset.index);
    
    q.userAnswer[idx] = word;
    selectedBlankSlot.textContent = word;
    selectedBlankSlot.classList.add("filled");
    selectedBlankSlot.classList.remove("active");
    chip.classList.add("used");
    chip.classList.remove("selected");
    
    selectedBlankSlot = null;
    selectedFIBWord = null;
    selectedFIBChip = null;
    
    checkFIBComplete();
  }
}

function checkFIBComplete() {
  const q = currentQuiz[currentQuestionIndex];
  const allFilled = q.userAnswer.every(a => a !== null);
  submitAnswerBtn.disabled = !allFilled;
}

function submitAnswer() {
  const q = currentQuiz[currentQuestionIndex];

  if (q.type === "mc") {
    q.isCorrect = q.userAnswer === q.correctAnswer;

    document.querySelectorAll(".mc-option").forEach(opt => {
      opt.classList.add("disabled");
      const value = opt.dataset.option;
      if (value === q.correctAnswer) {
        opt.classList.add("correct");
      }
      if (value === q.userAnswer && value !== q.correctAnswer) {
        opt.classList.add("incorrect");
      }
    });
  } else if (q.type === "ms") {
    const selectedValues = Array.from(q.userAnswer instanceof Set ? q.userAnswer : new Set());
    const correctSet = new Set(q.correctAnswers);
    q.isCorrect = selectedValues.length === correctSet.size && selectedValues.every(value => correctSet.has(value));

    document.querySelectorAll(".mc-option").forEach(opt => {
      opt.classList.add("disabled");
      const value = opt.dataset.option;
      if (correctSet.has(value)) {
        opt.classList.add("correct");
      }
      if (selectedValues.includes(value) && !correctSet.has(value)) {
        opt.classList.add("incorrect");
      }
    });
  } else {
    q.isCorrect = q.userAnswer.every((word, idx) => {
      const normalize = (w) => (w || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      return normalize(word) === normalize(q.blankedWords[idx]);
    });

    document.querySelectorAll(".blank-slot").forEach((slot, idx) => {
      if (q.userAnswer[idx]) {
        const normalize = (w) => (w || "").toLowerCase().replace(/[^a-z0-9]/g, "");
        if (normalize(q.userAnswer[idx]) === normalize(q.blankedWords[idx])) {
          slot.classList.add("correct");
        } else {
          slot.classList.add("incorrect");
        }
      }
    });

    document.querySelectorAll(".word-chip").forEach(chip => {
      chip.style.pointerEvents = "none";
    });
  }

  if (q.isCorrect) {
    score++;
  }

  const answerLabel = q.isCorrect ? "Answer" : "Correct answer";
  let answerMarkup = "";
  if (q.type === "mc") {
    answerMarkup = formatListMarkup(q.correctAnswer);
  } else if (q.type === "ms") {
    answerMarkup = formatListMarkup(q.correctAnswers.join("\n"));
  } else {
    answerMarkup = wrapListItems(q.blankedWords.map(word => escapeHtml(word)), "list");
  }

  const answerSection = answerMarkup
    ? `<div class="feedback-answer"><strong>${answerLabel}:</strong> ${answerMarkup}</div>`
    : "";
  const explanationSection = q.explanation
    ? `<div class="feedback-explanation">${q.explanation}</div>`
    : "";

  feedback.style.display = "block";
  feedback.className = `feedback ${q.isCorrect ? "correct" : "incorrect"}`;
  feedback.innerHTML = `
    <div class="feedback-summary">${q.isCorrect ? "✓ Correct!" : "✗ Incorrect."}</div>
    ${answerSection}
    ${explanationSection}
  `.trim();

  submitAnswerBtn.style.display = "none";
  nextQuestionBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.style.display = "none";
  quizResults.style.display = "flex";
  reviewSection.style.display = "none";

  const mcQuestions = currentQuiz.filter(q => q.type === "mc");
  const msQuestions = currentQuiz.filter(q => q.type === "ms");
  const fibQuestions = currentQuiz.filter(q => q.type === "fib");
  const mcCorrect = mcQuestions.filter(q => q.isCorrect).length;
  const msCorrect = msQuestions.filter(q => q.isCorrect).length;
  const fibCorrect = fibQuestions.filter(q => q.isCorrect).length;
  const incorrect = currentQuiz.length - score;
  const percentage = currentQuiz.length ? Math.round((score / currentQuiz.length) * 100) : 0;

  finalScoreEl.textContent = score;
  totalQuestionsEl.textContent = currentQuiz.length;
  scorePercentageEl.textContent = `${percentage}%`;
  correctCountEl.textContent = score;
  incorrectCountEl.textContent = incorrect;
  mcCorrectEl.textContent = `${mcCorrect}/${mcQuestions.length || 0}`;
  fibCorrectEl.textContent = `${fibCorrect}/${fibQuestions.length || 0}`;
  msCorrectEl.textContent = `${msCorrect}/${msQuestions.length || 0}`;
}

function showReview() {
  reviewSection.style.display = "block";
  reviewList.innerHTML = "";

  currentQuiz.forEach((q, idx) => {
    const div = document.createElement("div");
    div.className = `review-item ${q.isCorrect ? "correct" : "incorrect"}`;
    
    let answerHTML = "";
    if (q.type === "mc") {
      const userMarkup = q.userAnswer ? formatListMarkup(q.userAnswer) : "<span>Not answered</span>";
      const correctMarkup = formatListMarkup(q.correctAnswer);
      answerHTML = `
        <div><span class="review-label">Your answer:</span><span class="review-value ${q.isCorrect ? "correct" : "incorrect"}">${userMarkup}</span></div>
        ${!q.isCorrect ? `<div><span class="review-label">Correct:</span><span class="review-value correct">${correctMarkup}</span></div>` : ""}
      `;
    } else if (q.type === "ms") {
      const selections = Array.from(q.userAnswer instanceof Set ? q.userAnswer : q.userAnswer || []);
      const userMarkup = selections.length ? formatListMarkup(selections.join("\n")) : "<span>Not answered</span>";
      const correctMarkup = formatListMarkup(q.correctAnswers.join("\n"));
      answerHTML = `
        <div><span class="review-label">Your answer:</span><span class="review-value ${q.isCorrect ? "correct" : "incorrect"}">${userMarkup}</span></div>
        ${!q.isCorrect ? `<div><span class="review-label">Correct:</span><span class="review-value correct">${correctMarkup}</span></div>` : ""}
      `;
    } else {
      const userMarkup = q.userAnswer.length ? wrapListItems(q.userAnswer.map(word => escapeHtml(word || "")), "list") : "<span>Not answered</span>";
      const correctMarkup = wrapListItems(q.blankedWords.map(word => escapeHtml(word)), "list");
      answerHTML = `
        <div><span class="review-label">Your answer:</span><span class="review-value ${q.isCorrect ? "correct" : "incorrect"}">${userMarkup}</span></div>
        ${!q.isCorrect ? `<div><span class="review-label">Correct:</span><span class="review-value correct">${correctMarkup}</span></div>` : ""}
      `;
    }
    
    const explanationHTML = q.explanation
      ? `<div class="review-explanation"><span class="review-label">Why:</span><div class="review-value">${q.explanation}</div></div>`
      : "";

    div.innerHTML = `
      <div class="review-question">Q${idx + 1}: ${escapeHtml(q.question)}</div>
      <div class="review-details">
        ${answerHTML}
        <div><span class="review-label">Topic:</span><span class="review-value">${escapeHtml(q.card.topic)}</span></div>
        ${explanationHTML}
      </div>
    `;
    reviewList.appendChild(div);
  });
}

init();
