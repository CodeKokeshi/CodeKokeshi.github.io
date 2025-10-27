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
    simple: "<ul><li>Duty-cycle radios</li><li>Adaptive sampling</li><li>In-network aggregation</li></ul>",
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
  }
];

const topicFilter = document.getElementById("topicFilter");
const searchInput = document.getElementById("searchInput");
const flashcardEl = document.getElementById("flashcard");
const progressStatsEl = document.getElementById("progressStats");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const againBtn = document.getElementById("againBtn");
const goodBtn = document.getElementById("goodBtn");
const easyBtn = document.getElementById("easyBtn");
const modeSimpleBtn = document.getElementById("modeSimpleBtn");
const modeFullBtn = document.getElementById("modeFullBtn");
const modeHighlightBtn = document.getElementById("modeHighlightBtn");

const STORAGE_KEY = "iot-flashcard-progress";

let activeDeck = [...flashcards];
let currentIndex = 0;
let isFlipped = false;
let progress = loadProgress();
let displayMode = "simple"; // "simple", "full", or "highlighted"

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error("Failed to load progress", error);
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save progress", error);
  }
}

function initFilterOptions() {
  const topics = Array.from(new Set(flashcards.map(card => card.topic)));
  const fragment = document.createDocumentFragment();
  const allOption = document.createElement("option");
  allOption.value = "__all";
  allOption.textContent = "All topics";
  fragment.appendChild(allOption);
  topics.forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    fragment.appendChild(opt);
  });
  topicFilter.appendChild(fragment);
  topicFilter.value = "__all";
}

function filterDeck() {
  const topicValue = topicFilter.value;
  const searchValue = searchInput.value.trim().toLowerCase();

  activeDeck = flashcards.filter(card => {
    const matchesTopic = topicValue === "__all" || card.topic === topicValue;
    if (!matchesTopic) {
      return false;
    }
    if (!searchValue) {
      return true;
    }
    const haystack = [card.question, card.answer, ...(card.keywords || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(searchValue);
  });

  if (!activeDeck.length) {
    flashcardEl.innerHTML = "<div class=\"flashcard-face\"><p>No cards match the current filters. Try broadening your search.</p></div>";
    progressStatsEl.textContent = "0 cards filtered.";
    return;
  }

  currentIndex = 0;
  isFlipped = false;
  renderFlashcard();
  updateProgressStats();
}

function renderFlashcard() {
  const card = activeDeck[currentIndex];
  if (!card) {
    return;
  }
  flashcardEl.classList.toggle("flipped", isFlipped);
  
  let answer = card.simple;
  if (displayMode === "full") {
    answer = card.full.replace(/<mark>/g, "").replace(/<\/mark>/g, "");
  } else if (displayMode === "highlighted") {
    answer = card.full;
  }
  
  flashcardEl.innerHTML = `
    <div class="flashcard-face front">
      <h3>${card.topic}</h3>
      <h2>${card.question}</h2>
    </div>
    <div class="flashcard-face back">
      <h3>${card.topic}</h3>
      ${answer}
    </div>
  `;
  flashcardEl.dataset.cardId = card.id;
}

function updateProgressStats() {
  const card = activeDeck[currentIndex];
  const total = activeDeck.length;
  const knownCounts = Object.values(progress).reduce(
    (acc, value) => {
      if (value === "again") acc.again += 1;
      if (value === "good") acc.good += 1;
      if (value === "easy") acc.easy += 1;
      return acc;
    },
    { again: 0, good: 0, easy: 0 }
  );

  const currentScore = card ? progress[card.id] : null;
  const statusText = card ? `Card ${currentIndex + 1} of ${total}` : "";
  const scoreText = currentScore ? ` | Marked: ${currentScore.toUpperCase()}` : "";

  progressStatsEl.textContent = `${statusText}${scoreText} | Deck scores — Again: ${knownCounts.again}, Good: ${knownCounts.good}, Easy: ${knownCounts.easy}`;
}

function flipCard() {
  if (!activeDeck.length) {
    return;
  }
  isFlipped = !isFlipped;
  flashcardEl.classList.toggle("flipped", isFlipped);
}

function showNext() {
  if (!activeDeck.length) {
    return;
  }
  currentIndex = (currentIndex + 1) % activeDeck.length;
  isFlipped = false;
  renderFlashcard();
  updateProgressStats();
}

function showPrev() {
  if (!activeDeck.length) {
    return;
  }
  currentIndex = (currentIndex - 1 + activeDeck.length) % activeDeck.length;
  isFlipped = false;
  renderFlashcard();
  updateProgressStats();
}

function recordConfidence(score) {
  const card = activeDeck[currentIndex];
  if (!card) {
    return;
  }
  progress[card.id] = score;
  saveProgress();
  updateProgressStats();
  showNext();
}

function shuffleDeck() {
  for (let i = flashcards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
  filterDeck();
}

function resetProgress() {
  if (!window.confirm("Reset all progress marks?")) {
    return;
  }
  progress = {};
  saveProgress();
  updateProgressStats();
}

function setDisplayMode(mode) {
  displayMode = mode;
  modeSimpleBtn.classList.toggle("active", mode === "simple");
  modeFullBtn.classList.toggle("active", mode === "full");
  modeHighlightBtn.classList.toggle("active", mode === "highlighted");
  renderFlashcard();
}

flashcardEl.addEventListener("click", flipCard);
flashcardEl.addEventListener("keypress", event => {
  if (event.code === "Space" || event.key === "Enter") {
    event.preventDefault();
    flipCard();
  }
});

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
flipBtn.addEventListener("click", flipCard);
shuffleBtn.addEventListener("click", shuffleDeck);
resetProgressBtn.addEventListener("click", resetProgress);
againBtn.addEventListener("click", () => recordConfidence("again"));
goodBtn.addEventListener("click", () => recordConfidence("good"));
easyBtn.addEventListener("click", () => recordConfidence("easy"));
modeSimpleBtn.addEventListener("click", () => setDisplayMode("simple"));
modeFullBtn.addEventListener("click", () => setDisplayMode("full"));
modeHighlightBtn.addEventListener("click", () => setDisplayMode("highlighted"));
topicFilter.addEventListener("change", filterDeck);
searchInput.addEventListener("input", filterDeck);

document.addEventListener("keydown", event => {
  if (event.target === searchInput) {
    return;
  }
  if (event.key === "ArrowRight") {
    showNext();
  } else if (event.key === "ArrowLeft") {
    showPrev();
  } else if (event.code === "Space") {
    event.preventDefault();
    flipCard();
  }
});

initFilterOptions();
filterDeck();
renderFlashcard();
updateProgressStats();
