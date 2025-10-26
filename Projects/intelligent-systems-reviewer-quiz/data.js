const flashcards = [
  {
    id: "ai-foundations-1",
    topic: "Definition, History & Branches",
    question: "What is Artificial Intelligence?",
    full: "<p>Artificial Intelligence (AI) is the discipline of building <mark>systems that perceive, reason, learn, and act</mark> to achieve goals across varying environments.</p>",
    simple: "<ul><li>Goal-directed systems</li><li>Sense, reason, learn, and act</li><li>Automate cognitive tasks</li></ul>",
    keywords: ["AI", "definition", "intelligence"],
    quiz: {
      type: "multiple",
      prompt: "Which description best captures Artificial Intelligence?",
      options: [
        { label: "Computers executing strictly predefined scripts without adaptation", value: "scripts" },
        { label: "Systems that perceive, reason, learn, and act toward goals", value: "ai" },
        { label: "Mechanical automation with no data processing involved", value: "mechanical" },
        { label: "Any software that stores data in databases", value: "database" }
      ],
      answer: "ai",
      explanation: "AI focuses on goal-directed systems that can sense, reason, learn, and act within their environment."
    }
  },
  {
    id: "ai-foundations-2",
    topic: "Definition, History & Branches",
    question: "Which milestones trace AI's early history?",
    full: "<ul><li><strong>1956 Dartmouth workshop</strong> coined AI as a field.</li><li><strong>1960s symbolic programs</strong> like ELIZA and SHRDLU.</li><li><strong>1980s expert systems boom</strong> in industry.</li><li><strong>2012 deep learning surge</strong> with ImageNet breakthroughs.</li></ul>",
    simple: "<ul><li>1956 Dartmouth launch</li><li>Symbolic pioneers</li><li>Expert systems era</li><li>Deep learning revival</li></ul>",
    keywords: ["history", "Dartmouth", "milestones"],
    quiz: {
      type: "fill",
      prompt: "Complete the statement about AI history.",
      sentence: "The 1956 Dartmouth workshop is often cited as the formal birth of ___ as a research field.",
      answer: "artificial intelligence",
      wordBank: ["artificial intelligence", "data science", "cybernetics", "robotics"],
      explanation: "Researchers at Dartmouth popularised the term \"Artificial Intelligence\" and framed it as a discipline."
    }
  },
  {
    id: "ai-foundations-3",
    topic: "Definition, History & Branches",
    question: "What are core branches of AI research?",
    full: "<ul><li><strong>Symbolic AI:</strong> Logic, planning, expert systems.</li><li><strong>Statistical & machine learning:</strong> Data-driven models.</li><li><strong>Evolutionary & swarm methods:</strong> Population-based search.</li><li><strong>Perception & robotics:</strong> Vision, speech, embodied agents.</li></ul>",
    simple: "<ul><li>Symbolic reasoning</li><li>Machine learning</li><li>Evolutionary computation</li><li>Perception & robotics</li></ul>",
    keywords: ["branches", "symbolic", "machine learning"],
    quiz: {
      type: "multi-select",
      prompt: "Which items are recognised branches of AI research?",
      options: [
        { label: "Symbolic reasoning and knowledge representation", value: "symbolic" },
        { label: "Machine learning and statistical patterning", value: "ml" },
        { label: "Evolutionary computation and swarm intelligence", value: "evo" },
        { label: "Relational database indexing strategies", value: "db" }
      ],
      answers: ["symbolic", "ml", "evo"],
      minSelections: 2,
      explanation: "Symbolic AI, machine learning, and evolutionary approaches are core branches. Database indexing is supporting infrastructure, not an AI branch."
    }
  },
  {
    id: "ml-types-1",
    topic: "Machine Learning Types & Applications",
    question: "What defines supervised learning?",
    full: "<ul><li>Uses <mark>labelled datasets</mark> pairing inputs with target outputs.</li><li>Trains models to <mark>generalise from examples</mark>.</li><li>Evaluates with metrics like accuracy, recall, or RMSE.</li></ul>",
    simple: "<ul><li>Labeled examples</li><li>Predict targets</li><li>Measure accuracy</li></ul>",
    keywords: ["supervised", "labels", "prediction"],
    quiz: {
      type: "fill",
      prompt: "Complete the sentence about supervised learning.",
      sentence: "Supervised learning trains models on ___ datasets with known outcomes.",
      answer: "labelled",
      wordBank: ["labelled", "anonymous", "randomised", "unstructured"],
      explanation: "Supervised algorithms rely on labelled datasets where each input has an associated target."
    }
  },
  {
    id: "ml-types-2",
    topic: "Machine Learning Types & Applications",
    question: "How does unsupervised learning operate?",
    full: "<ul><li>Explores <mark>unlabelled data</mark> to uncover structure.</li><li>Finds clusters, associations, or reduced dimensions.</li><li>Supports anomaly detection and feature learning.</li></ul>",
    simple: "<ul><li>No target labels</li><li>Discovers structure</li><li>Enables clustering</li></ul>",
    keywords: ["unsupervised", "clustering", "structure"],
    quiz: {
      type: "multiple",
      prompt: "Which statement describes unsupervised learning?",
      options: [
        { label: "Discovering latent structure in data without target labels", value: "unsupervised" },
        { label: "Learning a policy purely from reward signals", value: "reinforcement" },
        { label: "Mapping labelled inputs to outputs", value: "supervised" },
        { label: "Executing hard-coded decision rules", value: "rules" }
      ],
      answer: "unsupervised",
      explanation: "Unsupervised methods mine unlabelled data for structure such as clusters or embeddings."
    }
  },
  {
    id: "ml-types-3",
    topic: "Machine Learning Types & Applications",
    question: "What is reinforcement learning?",
    full: "<ul><li>An <mark>agent interacts</mark> with an environment.</li><li>Receives <mark>rewards and penalties</mark>.</li><li>Learns policies that maximise cumulative reward.</li></ul>",
    simple: "<ul><li>Agent + environment</li><li>Reward feedback</li><li>Policy optimisation</li></ul>",
    keywords: ["reinforcement", "agent", "reward"],
    quiz: {
      type: "multiple",
      prompt: "Reinforcement learning focuses on what objective?",
      options: [
        { label: "Maximising cumulative reward through interaction", value: "reward" },
        { label: "Inferring clusters from unlabelled samples", value: "cluster" },
        { label: "Encoding logic rules manually", value: "logic" },
        { label: "Storing records efficiently in a database", value: "storage" }
      ],
      answer: "reward",
      explanation: "Reinforcement learning agents optimise behaviour by maximising cumulative reward signals."
    }
  },
  {
    id: "ml-types-4",
    topic: "Machine Learning Types & Applications",
    question: "Which scenarios align with ML paradigms?",
    full: "<ul><li><strong>Supervised:</strong> Predict claims fraud from labelled cases.</li><li><strong>Unsupervised:</strong> Cluster customers by behaviour.</li><li><strong>Reinforcement:</strong> Train robots via rewards.</li></ul>",
    simple: "<ul><li>Fraud prediction</li><li>Customer clustering</li><li>Reward-driven robotics</li></ul>",
    keywords: ["use cases", "supervised", "unsupervised", "reinforcement"],
    quiz: {
      type: "multi-select",
      prompt: "Select scenarios that exemplify core machine learning paradigms.",
      options: [
        { label: "Labelling tumors as benign or malignant using historical diagnoses", value: "supervised" },
        { label: "Grouping customers into segments without predefined labels", value: "unsupervised" },
        { label: "Training a robot through reward signals to stay balanced", value: "reinforcement" },
        { label: "Producing quarterly reports purely with manual SQL queries", value: "manual" }
      ],
      answers: ["supervised", "unsupervised", "reinforcement"],
      explanation: "The first three options mirror supervised, unsupervised, and reinforcement learning respectively; manual SQL reporting is not an ML paradigm."
    }
  },
  {
    id: "use-cases-1",
    topic: "AI Use Cases in Industry",
    question: "How does AI support business operations?",
    full: "<ul><li><mark>Predictive analytics</mark> for churn, demand, and pricing.</li><li><mark>Intelligent automation</mark> for invoices and service tickets.</li><li><mark>Augmented decision-making</mark> in marketing and finance.</li></ul>",
    simple: "<ul><li>Predict churn & demand</li><li>Automate back office</li><li>Assist strategic decisions</li></ul>",
    keywords: ["business", "operations", "analytics"],
    quiz: {
      type: "multi-select",
      prompt: "Which business applications commonly leverage AI?",
      options: [
        { label: "Customer churn prediction dashboards", value: "churn" },
        { label: "Dynamic pricing that reacts to market signals", value: "pricing" },
        { label: "Invoice classification with natural language processing", value: "invoices" },
        { label: "Manual spreadsheet macros maintained by hand", value: "macros" }
      ],
      answers: ["churn", "pricing", "invoices"],
      explanation: "Churn prediction, dynamic pricing, and invoice classification are AI-enabled workflows; hand-maintained macros are not."
    }
  },
  {
    id: "use-cases-2",
    topic: "AI Use Cases in Industry",
    question: "How is AI transforming healthcare?",
    full: "<ul><li><mark>Computer vision diagnostics</mark> triage medical imaging.</li><li><mark>Predictive models</mark> flag deteriorating patients.</li><li><mark>NLP summarisation</mark> accelerates clinical documentation.</li></ul>",
    simple: "<ul><li>Image-based triage</li><li>Risk prediction</li><li>Clinical NLP</li></ul>",
    keywords: ["healthcare", "diagnostics", "clinical"],
    quiz: {
      type: "multiple",
      prompt: "Which healthcare use case relies heavily on computer vision?",
      options: [
        { label: "Radiology image triage for prioritising scans", value: "radiology" },
        { label: "Automating insurance claim approvals", value: "claims" },
        { label: "Scheduling operating rooms", value: "scheduling" },
        { label: "Maintaining inventory labels", value: "inventory" }
      ],
      answer: "radiology",
      explanation: "Radiology triage applies computer vision to medical images, while the other tasks lean on different techniques."
    }
  },
  {
    id: "use-cases-3",
    topic: "AI Use Cases in Industry",
    question: "How does AI optimise logistics?",
    full: "<ul><li><mark>Predictive demand forecasting</mark> informs inventory and staffing.</li><li><mark>Route optimisation</mark> reduces fuel burn and delivery delays.</li><li><mark>Computer vision</mark> tracks packages and quality.</li></ul>",
    simple: "<ul><li>Forecast demand</li><li>Optimise routing</li><li>Track goods visually</li></ul>",
    keywords: ["logistics", "routing", "forecasting"],
    quiz: {
      type: "fill",
      prompt: "Finish the statement about logistics AI.",
      sentence: "AI-driven demand forecasting helps reduce unexpected ___ and overstocks in supply chains.",
      answer: "stockouts",
      wordBank: ["stockouts", "warehouses", "budgets", "suppliers"],
      explanation: "Forecasting models aim to cut unexpected stockouts while also minimising overstocking."
    }
  },
  {
    id: "pipeline-1",
    topic: "ML Pipeline & Challenges",
    question: "What stages form an ML pipeline?",
    full: "<ul><li><mark>Ingest</mark> data and define scope.</li><li><mark>Prepare</mark>: clean, label, and engineer features.</li><li><mark>Model</mark>: train and validate.</li><li><mark>Deploy</mark> to production.</li><li><mark>Monitor</mark> & iterate.</li></ul>",
    simple: "<ul><li>Ingest</li><li>Prepare</li><li>Model</li><li>Deploy</li><li>Monitor</li></ul>",
    keywords: ["pipeline", "stages", "lifecycle"],
    quiz: {
      type: "multi-select",
      prompt: "Which steps are essential in a modern ML pipeline?",
      options: [
        { label: "Data ingestion and understanding", value: "ingest" },
        { label: "Feature engineering and data preparation", value: "prepare" },
        { label: "Model training and validation", value: "model" },
        { label: "Manual PDF printing of reports", value: "print" },
        { label: "Deployment with ongoing monitoring", value: "deploy" }
      ],
      answers: ["ingest", "prepare", "model", "deploy"],
      explanation: "Pipelines iterate through ingest, prepare, model, and deploy/monitor phases; manual printing is unrelated."
    }
  },
  {
    id: "pipeline-2",
    topic: "ML Pipeline & Challenges",
    question: "What challenges threaten data quality?",
    full: "<ul><li><mark>Missing or imbalanced labels</mark>.</li><li><mark>Concept drift</mark> when distributions shift.</li><li><mark>Data silos and governance</mark> constraints.</li></ul>",
    simple: "<ul><li>Missing labels</li><li>Concept drift</li><li>Siloed datasets</li></ul>",
    keywords: ["data quality", "drift", "imbalance"],
    quiz: {
      type: "multiple",
      prompt: "Which issue is a common data quality risk in ML pipelines?",
      options: [
        { label: "Concept drift changing feature distributions", value: "drift" },
        { label: "Having too many well-labelled samples", value: "abundance" },
        { label: "Perfectly balanced datasets forever", value: "perfect" },
        { label: "Immutable business processes", value: "process" }
      ],
      answer: "drift",
      explanation: "Concept drift erodes model performance as data distributions evolve."
    }
  },
  {
    id: "pipeline-3",
    topic: "ML Pipeline & Challenges",
    question: "Why is production monitoring critical?",
    full: "<ul><li><mark>Detects drift</mark> and data anomalies early.</li><li><mark>Tracks performance</mark> vs. business KPIs.</li><li><mark>Supports governance</mark> with audit trails.</li></ul>",
    simple: "<ul><li>Catch drift</li><li>Track KPIs</li><li>Provide auditability</li></ul>",
    keywords: ["monitoring", "production", "governance"],
    quiz: {
      type: "fill",
      prompt: "Complete the thought on monitoring.",
      sentence: "Production monitoring surfaces data drift and model ___ before they harm outcomes.",
      answer: "degradation",
      wordBank: ["degradation", "creation", "duplication", "advertising"],
      explanation: "Monitoring spots degradation so teams can retrain or recalibrate models."
    }
  },
  {
    id: "training-1",
    topic: "Model Training & Optimisation",
    question: "What loop drives model training?",
    full: "<ul><li><mark>Initialise</mark> parameters.</li><li><mark>Forward propagate</mark> to compute loss.</li><li><mark>Backpropagate gradients</mark>.</li><li><mark>Update weights</mark> via optimiser.</li><li>Repeat until convergence.</li></ul>",
    simple: "<ul><li>Initialise weights</li><li>Forward + loss</li><li>Backprop + update</li></ul>",
    keywords: ["training", "backprop", "optimiser"],
    quiz: {
      type: "fill",
      prompt: "Fill in the blank about training loops.",
      sentence: "Gradient-based training repeatedly updates model weights using computed ___ steps.",
      answer: "gradient",
      wordBank: ["gradient", "inventory", "marketing", "static"],
      explanation: "Gradients drive the parameter updates that minimise loss."
    }
  },
  {
    id: "training-2",
    topic: "Model Training & Optimisation",
    question: "How does regularisation help?",
    full: "<ul><li>Penalises <mark>overly complex models</mark>.</li><li>Improves <mark>generalisation</mark>.</li><li>Includes L1, L2, dropout, and early stopping.</li></ul>",
    simple: "<ul><li>Controls complexity</li><li>Boosts generalisation</li><li>L1/L2/dropout</li></ul>",
    keywords: ["regularisation", "generalisation", "overfitting"],
    quiz: {
      type: "multiple",
      prompt: "What is the purpose of regularisation techniques?",
      options: [
        { label: "Reduce overfitting by penalising complexity", value: "overfit" },
        { label: "Increase training loss without reason", value: "increase" },
        { label: "Ensure data is always linearly separable", value: "linear" },
        { label: "Replace validation datasets", value: "validation" }
      ],
      answer: "overfit",
      explanation: "Regularisation constrains models to prevent overfitting and improve generalisation."
    }
  },
  {
    id: "training-3",
    topic: "Model Training & Optimisation",
    question: "What strategies tune hyperparameters?",
    full: "<ul><li><mark>Grid and random search</mark> explore combinations.</li><li><mark>Bayesian optimisation</mark> models the search space.</li><li><mark>Hyperband</mark> and early stopping prune poor trials.</li></ul>",
    simple: "<ul><li>Grid/random search</li><li>Bayesian optimisation</li><li>Hyperband pruning</li></ul>",
    keywords: ["hyperparameters", "tuning", "optimisation"],
    quiz: {
      type: "multi-select",
      prompt: "Select recognised hyperparameter optimisation strategies.",
      options: [
        { label: "Random search over parameter ranges", value: "random" },
        { label: "Bayesian optimisation with surrogate models", value: "bayes" },
        { label: "Hyperband with early-stopping brackets", value: "hyperband" },
        { label: "Copying parameters from unrelated projects without testing", value: "copy" }
      ],
      answers: ["random", "bayes", "hyperband"],
      explanation: "Random search, Bayesian optimisation, and Hyperband are established tuning strategies; blind copying is risky."
    }
  },
  {
    id: "feature-1",
    topic: "Feature Engineering & Selection",
    question: "What activities compose feature engineering?",
    full: "<ul><li><mark>Transform raw data</mark> into informative signals.</li><li><mark>Encode</mark> categorical variables.</li><li><mark>Create interaction terms</mark> or aggregates.</li></ul>",
    simple: "<ul><li>Transform raw signals</li><li>Encode categories</li><li>Create interactions</li></ul>",
    keywords: ["feature engineering", "encoding", "transforms"],
    quiz: {
      type: "multiple",
      prompt: "Which task is part of feature engineering?",
      options: [
        { label: "Converting timestamps into day-of-week indicators", value: "timestamps" },
        { label: "Choosing quarterly revenue targets", value: "targets" },
        { label: "Negotiating software licenses", value: "licenses" },
        { label: "Designing office layouts", value: "layouts" }
      ],
      answer: "timestamps",
      explanation: "Transforming timestamps into signals is a classic feature engineering step."
    }
  },
  {
    id: "feature-2",
    topic: "Feature Engineering & Selection",
    question: "How can we select informative features?",
    full: "<ul><li><mark>Filter methods</mark> (mutual information, chi-square).</li><li><mark>Wrapper methods</mark> (recursive elimination).</li><li><mark>Embedded methods</mark> (LASSO, tree importance).</li></ul>",
    simple: "<ul><li>Filter scores</li><li>Wrapper search</li><li>Embedded penalties</li></ul>",
    keywords: ["feature selection", "filter", "embedded"],
    quiz: {
      type: "multi-select",
      prompt: "Which techniques perform feature selection?",
      options: [
        { label: "Mutual information scoring", value: "mutual" },
        { label: "Recursive feature elimination", value: "rfe" },
        { label: "L1-penalised linear models", value: "l1" },
        { label: "Randomly duplicating columns", value: "duplicate" }
      ],
      answers: ["mutual", "rfe", "l1"],
      explanation: "Filter, wrapper, and embedded methods all support feature selection; random duplication does not."
    }
  },
  {
    id: "feature-3",
    topic: "Feature Engineering & Selection",
    question: "Why use dimensionality reduction?",
    full: "<ul><li><mark>Compresses high-dimensional data</mark> into informative components.</li><li><mark>Improves model efficiency</mark> and visualisation.</li><li>Examples include PCA and autoencoders.</li></ul>",
    simple: "<ul><li>Reduce dimensionality</li><li>Speed training</li><li>Reveal structure</li></ul>",
    keywords: ["dimensionality", "PCA", "compression"],
    quiz: {
      type: "fill",
      prompt: "Complete the sentence on dimensionality reduction.",
      sentence: "Principal Component Analysis projects data into fewer ___ while preserving variance.",
      answer: "dimensions",
      wordBank: ["dimensions", "servers", "budgets", "dashboards"],
      explanation: "PCA finds orthogonal dimensions that capture maximal variance."
    }
  },
  {
    id: "ethics-1",
    topic: "AI Ethics & Governance",
    question: "Which principles guide responsible AI?",
    full: "<ul><li><mark>Fairness</mark> and inclusivity.</li><li><mark>Transparency</mark> and explainability.</li><li><mark>Accountability</mark> with human oversight.</li><li><mark>Privacy</mark> and data protection.</li></ul>",
    simple: "<ul><li>Fair</li><li>Transparent</li><li>Accountable</li><li>Privacy-aware</li></ul>",
    keywords: ["ethics", "fairness", "transparency"],
    quiz: {
      type: "multi-select",
      prompt: "Select principles that underpin responsible AI programs.",
      options: [
        { label: "Fairness and non-discrimination", value: "fairness" },
        { label: "Human accountability and oversight", value: "accountability" },
        { label: "Transparency and explainability", value: "transparency" },
        { label: "Ignoring privacy regulations for speed", value: "ignore" }
      ],
      answers: ["fairness", "accountability", "transparency"],
      explanation: "Responsible AI emphasises fairness, accountability, and transparency while respecting privacy."
    }
  },
  {
    id: "ethics-2",
    topic: "AI Ethics & Governance",
    question: "How can we mitigate bias?",
    full: "<ul><li><mark>Diverse data collection</mark> and audits.</li><li><mark>Fairness constraints</mark> or reweighing methods.</li><li><mark>Human review</mark> of critical decisions.</li></ul>",
    simple: "<ul><li>Diverse data</li><li>Fairness-aware training</li><li>Human oversight</li></ul>",
    keywords: ["bias", "fairness", "mitigation"],
    quiz: {
      type: "multiple",
      prompt: "Which practice helps mitigate algorithmic bias?",
      options: [
        { label: "Auditing models with demographic performance slices", value: "audit" },
        { label: "Removing all evaluation processes", value: "remove" },
        { label: "Training only on majority-class examples", value: "majority" },
        { label: "Hiding model behaviour from stakeholders", value: "hide" }
      ],
      answer: "audit",
      explanation: "Bias mitigation requires auditing and acting on disparate performance across groups."
    }
  },
  {
    id: "ethics-3",
    topic: "AI Ethics & Governance",
    question: "What supports AI governance?",
    full: "<ul><li><mark>Policies and risk assessments</mark>.</li><li><mark>Model documentation</mark> and lineage tracking.</li><li><mark>Cross-functional review boards</mark>.</li></ul>",
    simple: "<ul><li>Policies & risk reviews</li><li>Documentation</li><li>Governance councils</li></ul>",
    keywords: ["governance", "policies", "documentation"],
    quiz: {
      type: "fill",
      prompt: "Fill in the governance statement.",
      sentence: "AI governance frameworks rely on documented model lineage and clear ___ ownership.",
      answer: "accountability",
      wordBank: ["accountability", "advertising", "hardware", "parking"],
      explanation: "Governance assigns accountability for decisions and maintains documentation."
    }
  },
  {
    id: "trends-1",
    topic: "Emerging Trends & Future",
    question: "What is AutoML?",
    full: "<ul><li><mark>Automates</mark> parts of the ML lifecycle.</li><li>Searches feature pipelines and model architectures.</li><li>Helps teams prototype faster with guardrails.</li></ul>",
    simple: "<ul><li>Automated ML workflow</li><li>Searches models/pipelines</li><li>Accelerates experimentation</li></ul>",
    keywords: ["AutoML", "automation", "workflow"],
    quiz: {
      type: "multiple",
      prompt: "AutoML platforms primarily aim to do what?",
      options: [
        { label: "Automate model and pipeline search to accelerate development", value: "automate" },
        { label: "Eliminate the need for data altogether", value: "no-data" },
        { label: "Replace all human experts permanently", value: "replace" },
        { label: "Operate only on handwritten rule sets", value: "rules" }
      ],
      answer: "automate",
      explanation: "AutoML automates model and pipeline exploration so teams can iterate faster with oversight."
    }
  },
  {
    id: "trends-2",
    topic: "Emerging Trends & Future",
    question: "What defines generative AI?",
    full: "<ul><li><mark>Models that create new content</mark> such as text, images, or code.</li><li>Learn <mark>probability distributions</mark> over training data.</li><li>Include transformers, diffusion, and GANs.</li></ul>",
    simple: "<ul><li>Create novel content</li><li>Model data distributions</li><li>Transformers, diffusion, GANs</li></ul>",
    keywords: ["generative AI", "transformers", "GAN"],
    quiz: {
      type: "fill",
      prompt: "Complete the statement on generative AI.",
      sentence: "Generative AI models learn data distributions so they can synthesize new ___ that resemble the training set.",
      answer: "content",
      wordBank: ["content", "hardware", "passwords", "warehouses"],
      explanation: "Generative models produce new content—text, images, audio—that mirrors learned distributions."
    }
  },
  {
    id: "trends-3",
    topic: "Emerging Trends & Future",
    question: "Which AI trends are emerging?",
    full: "<ul><li><mark>Foundation models</mark> adapted via prompt engineering.</li><li><mark>Responsible AI tooling</mark> for monitoring and compliance.</li><li><mark>Edge AI</mark> for on-device intelligence.</li></ul>",
    simple: "<ul><li>Foundation models</li><li>Responsible AI ops</li><li>Edge deployment</li></ul>",
    keywords: ["trends", "foundation models", "edge"],
    quiz: {
      type: "multi-select",
      prompt: "Identify emerging trends in the AI ecosystem.",
      options: [
        { label: "Adoption of foundation models with prompt tuning", value: "foundation" },
        { label: "Responsible AI monitoring platforms", value: "responsible" },
        { label: "On-device edge inference acceleration", value: "edge" },
        { label: "Exclusive reliance on manual rule-based systems", value: "manual" }
      ],
      answers: ["foundation", "responsible", "edge"],
      explanation: "Foundation models, responsible AI tooling, and edge inference are accelerating; manual-only systems are declining."
    }
  }
];
