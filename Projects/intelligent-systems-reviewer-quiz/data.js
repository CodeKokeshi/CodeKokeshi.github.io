// Flashcards Data
const flashcardsData = [
    // AI Definition and Basics
    {
        question: "What is Artificial Intelligence (AI)?",
        answer: "The simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. It encompasses any machine that exhibits traits associated with a human mind, such as learning and problem-solving."
    },
    {
        question: "What are the three core traits of AI systems?",
        answer: "1. Simulation of human intelligence\n2. Ability to think like humans\n3. Capacity for learning and problem-solving"
    },
    {
        question: "What is Machine Learning (ML)?",
        answer: "Algorithms that allow systems to learn from data, identify patterns, and make decisions with minimal human intervention."
    },
    {
        question: "What is Deep Learning (DL)?",
        answer: "A subset of ML that uses neural networks with many layers (layered neural networks) to learn complex patterns from large amounts of data, such as images and speech."
    },
    {
        question: "What is Natural Language Processing (NLP)?",
        answer: "Enables computers to understand, interpret, and generate human language. Powers chatbots, translation, and sentiment analysis."
    },
    {
        question: "What is Computer Vision (CV)?",
        answer: "Allows computers to 'see' and interpret visual information from images and videos, used in facial recognition and autonomous navigation."
    },
    {
        question: "What are Expert Systems?",
        answer: "Systems that mimic human decision-making using extensive knowledge bases and predefined rules to solve complex problems, often used for diagnostics."
    },
    {
        question: "What is Generative AI?",
        answer: "A branch of AI focused on creating novel, original content (e.g., text, images, audio) rather than just analyzing existing data."
    },
    
    // ML Types
    {
        question: "What is Supervised Learning?",
        answer: "The algorithm learns from labeled data, which includes both the input and the desired output (an 'answer key'). Used for classification and regression tasks."
    },
    {
        question: "What is Unsupervised Learning?",
        answer: "The algorithm explores unlabeled data to discover hidden patterns or structures without prior guidance. Used for clustering and anomaly detection."
    },
    {
        question: "What is Reinforcement Learning?",
        answer: "An 'agent' learns to make decisions by performing actions in an environment and receiving rewards or penalties (learning by 'trial and error'). Common in robotics and game-playing AI."
    },
    
    // ML Pipeline
    {
        question: "What are the 5 key stages of an ML Pipeline?",
        answer: "1. Problem Definition\n2. Data Collection & Preparation\n3. Feature Engineering\n4. Model Training & Evaluation\n5. Deployment & Monitoring"
    },
    {
        question: "What is Feature Engineering?",
        answer: "Transforming raw data into valuable, relevant features (inputs) that better represent the underlying problem, thereby improving model performance."
    },
    {
        question: "What is the purpose of the Problem Definition stage?",
        answer: "Clearly defining the business goal and the success metrics for the model."
    },
    {
        question: "What happens in the Deployment & Monitoring stage?",
        answer: "Launching the model into a production environment and tracking its health and accuracy over time (e.g., for 'model drift')."
    },
    
    // Model Training
    {
        question: "What is Model Training?",
        answer: "The process of teaching an algorithm to recognize patterns by iteratively adjusting its internal parameters (weights) to minimize predictive errors."
    },
    {
        question: "What are the three data sets used in ML?",
        answer: "1. Training Set - builds the model\n2. Validation Set - tunes the model\n3. Test Set - gives an unbiased final performance check"
    },
    {
        question: "What is Overfitting?",
        answer: "When the model learns the training data's noise and details too closely, leading to poor generalization on new, unseen data."
    },
    {
        question: "What is Underfitting?",
        answer: "When the model is too simple to capture the underlying data patterns."
    },
    {
        question: "What is Cross-Validation?",
        answer: "A systematic resampling technique (e.g., K-fold) used to reliably estimate model performance and stability."
    },
    {
        question: "What is Regularization?",
        answer: "Adds a penalty to complex models (e.g., L1, L2), constraining parameters to prevent overfitting."
    },
    {
        question: "What is Transfer Learning?",
        answer: "Using a pre-trained model (trained on a massive dataset) as a starting point and fine-tuning it on a smaller, specific dataset."
    },
    {
        question: "What is Hyperparameter Tuning?",
        answer: "Optimizing the model's external configuration settings (e.g., learning rate) using methods like Grid Search or Random Search."
    },
    
    // Feature Engineering Details
    {
        question: "What are the three main Feature Selection methods?",
        answer: "1. Filter Methods - based on statistical measures before training\n2. Wrapper Methods - use a model to wrap the selection process\n3. Embedded Methods - integrated within model training"
    },
    {
        question: "What is Normalization & Scaling in feature transformation?",
        answer: "Adjusting the range of features (e.g., Min-Max scaling to 0-1) to improve model learning."
    },
    {
        question: "What is Encoding in feature transformation?",
        answer: "Converting categorical data to numerical form (e.g., One-Hot Encoding)."
    },
    {
        question: "What is Feature Extraction?",
        answer: "Reducing dimensionality while preserving important information (e.g., using PCA - Principal Component Analysis)."
    },
    
    // Applications
    {
        question: "Name 4 applications of ML in Healthcare.",
        answer: "1. Disease diagnosis\n2. Drug discovery\n3. Personalized treatment plans\n4. Medical image analysis (X-rays, MRIs)"
    },
    {
        question: "Name 3 applications of ML in Finance.",
        answer: "1. Fraud detection\n2. Algorithmic trading\n3. Credit scoring"
    },
    {
        question: "Name 3 applications of ML in Retail.",
        answer: "1. Recommendation engines\n2. Inventory management\n3. Customer behavior prediction"
    },
    {
        question: "What AI technologies power self-driving cars?",
        answer: "Machine Learning and Computer Vision for autonomous navigation and predictive maintenance."
    },
    
    // Business Use Cases
    {
        question: "How does AI improve Customer Service in business?",
        answer: "AI-powered chatbots and conversational AI handle inquiries 24/7, reducing wait times and operational costs."
    },
    {
        question: "How does AI help with Fraud Detection?",
        answer: "AI analyzes vast datasets in real-time to detect suspicious patterns, combat fraud, and prevent cyber attacks."
    },
    {
        question: "What is Predictive Maintenance?",
        answer: "AI analyzes sensor data from machinery to predict equipment failures before they happen, preventing costly breakdowns."
    },
    {
        question: "How does AI enable Personalized Marketing?",
        answer: "AI analyzes user behavior to deliver customized content and product recommendations, boosting engagement."
    },
    
    // Healthcare Use Cases
    {
        question: "How does AI assist in Medical Image Analysis?",
        answer: "AI algorithms analyze medical images (X-rays, MRIs) to detect subtle anomalies like early-stage cancer, often with high precision."
    },
    {
        question: "How does AI accelerate Drug Discovery?",
        answer: "AI rapidly sifts through vast datasets of chemical compounds to identify potential drug candidates, accelerating research."
    },
    {
        question: "What is Robotic Surgery and its benefits?",
        answer: "AI-assisted systems (e.g., da Vinci) enhance surgical precision, reduce invasiveness, and can lead to faster patient recovery."
    },
    
    // Logistics Use Cases
    {
        question: "How does AI improve warehouse operations?",
        answer: "AI-powered robots automate order fulfillment (picking and packing), operating 24/7 with high speed and accuracy."
    },
    {
        question: "How does AI help with Inventory Management?",
        answer: "AI and IoT devices provide precise inventory tracking, enabling sophisticated demand forecasting and preventing stockouts."
    },
    {
        question: "What is Dynamic Shipment Prioritization?",
        answer: "AI optimizes shipping by consolidating orders, maximizing truck space, and cutting logistic costs."
    },
    
    // Ethics
    {
        question: "What is Bias in AI systems?",
        answer: "AI systems can learn, perpetuate, and even amplify existing human biases present in their training data, leading to unfair or discriminatory outcomes."
    },
    {
        question: "What are the Privacy concerns in AI?",
        answer: "AI often requires extensive data collection, raising significant concerns about individual privacy, data misuse, and security breaches."
    },
    {
        question: "What is the Accountability challenge in AI?",
        answer: "Determining who is responsible when an AI makes a mistake (accountability) is a major challenge in AI ethics."
    },
    {
        question: "What is Transparency in AI?",
        answer: "Understanding how a complex 'black box' model arrived at its decision. It's crucial for trust and debugging."
    },
    {
        question: "What are AI Hallucinations?",
        answer: "AI models, especially generative ones, can produce 'hallucinations' – plausible but factually incorrect or nonsensical outputs. This necessitates human oversight."
    },
    
    // History
    {
        question: "Who proposed the Turing Test and when?",
        answer: "Alan Turing in the 1950s with his paper 'Computing Machinery and Intelligence'."
    },
    {
        question: "What happened during the AI Winter?",
        answer: "In the 1960s-70s, initial optimism faded due to limitations, leading to reduced funding for AI research."
    },
    {
        question: "What characterized AI in the 1980s?",
        answer: "Rise of rule-based Expert Systems for specific problem-solving."
    },
    {
        question: "What shift occurred in AI during 1990s-2000s?",
        answer: "Focus shifted to statistical, data-driven approaches with Machine Learning becoming prominent."
    },
    {
        question: "What defines the 2010s-Present AI era?",
        answer: "Deep Learning Boom - advances in neural networks, big data, and computational power fuel rapid progress."
    },
    
    // Trends
    {
        question: "What is AutoML?",
        answer: "Automated Machine Learning - tools and platforms that automate the end-to-end process of applying machine learning, making ML more accessible to non-experts."
    },
    {
        question: "Name 4 types of content Generative AI can create.",
        answer: "1. Text (e.g., GPT-4)\n2. Images (e.g., DALL-E)\n3. Audio and Music\n4. Synthetic Data (to train other AI models)"
    },
    
    // Pipeline Challenges
    {
        question: "What are the 3 core challenges in ML Pipelines?",
        answer: "1. Complexity & Scale - handling massive data volumes\n2. Lack of Modularity - bundled workflows hinder collaboration\n3. Manual Processes - slow iteration, errors, and poor reproducibility"
    },
    {
        question: "Why is an ML Pipeline important?",
        answer: "It's an automated sequence of steps that takes data from collection to deployment, ensuring efficiency, reproducibility, and scalability."
    }
];

// Quiz Questions Data
const quizQuestions = {
    multipleChoice: [
        {
            question: "What is the primary purpose of Supervised Learning?",
            options: [
                "To discover hidden patterns in unlabeled data",
                "To learn from labeled data with known outputs",
                "To make decisions through trial and error",
                "To generate new content"
            ],
            correct: 1,
            explanation: "Supervised Learning uses labeled data (with known outputs) to train algorithms for classification and regression tasks."
        },
        {
            question: "Which AI branch focuses on understanding and generating human language?",
            options: [
                "Computer Vision",
                "Robotics",
                "Natural Language Processing",
                "Expert Systems"
            ],
            correct: 2,
            explanation: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language."
        },
        {
            question: "What decade saw the rise of Deep Learning?",
            options: [
                "1950s",
                "1980s",
                "1990s-2000s",
                "2010s-Present"
            ],
            correct: 3,
            explanation: "The 2010s-Present era is characterized by the Deep Learning Boom, with advances in neural networks and big data."
        },
        {
            question: "Which stage comes FIRST in an ML Pipeline?",
            options: [
                "Model Training",
                "Feature Engineering",
                "Problem Definition",
                "Deployment & Monitoring"
            ],
            correct: 2,
            explanation: "Problem Definition is the first stage, where you clearly define the business goal and success metrics."
        },
        {
            question: "What is the main characteristic of Unsupervised Learning?",
            options: [
                "Uses labeled data",
                "Learns through rewards and penalties",
                "Discovers patterns in unlabeled data",
                "Requires human supervision at every step"
            ],
            correct: 2,
            explanation: "Unsupervised Learning explores unlabeled data to discover hidden patterns without prior guidance."
        },
        {
            question: "Which problem occurs when a model is too simple?",
            options: [
                "Overfitting",
                "Underfitting",
                "Regularization",
                "Cross-validation"
            ],
            correct: 1,
            explanation: "Underfitting occurs when the model is too simple to capture the underlying data patterns."
        },
        {
            question: "What does Transfer Learning involve?",
            options: [
                "Training a model from scratch",
                "Using a pre-trained model and fine-tuning it",
                "Transferring data between databases",
                "Moving models to production"
            ],
            correct: 1,
            explanation: "Transfer Learning uses a pre-trained model as a starting point and fine-tunes it on a smaller, specific dataset."
        },
        {
            question: "Which technique helps prevent overfitting by adding penalties?",
            options: [
                "Feature Engineering",
                "Regularization",
                "Data Collection",
                "Model Deployment"
            ],
            correct: 1,
            explanation: "Regularization (e.g., L1, L2) adds a penalty to complex models to prevent overfitting."
        },
        {
            question: "What is the purpose of the Test Set in ML?",
            options: [
                "To build the model",
                "To tune hyperparameters",
                "To give an unbiased final performance check",
                "To collect more data"
            ],
            correct: 2,
            explanation: "The Test Set provides an unbiased final performance check on unseen data."
        },
        {
            question: "Which AI application is most relevant for self-driving cars?",
            options: [
                "Natural Language Processing",
                "Computer Vision",
                "Expert Systems",
                "Sentiment Analysis"
            ],
            correct: 1,
            explanation: "Computer Vision allows cars to 'see' and interpret their environment for autonomous navigation."
        },
        {
            question: "What does AutoML stand for?",
            options: [
                "Automatic Mobile Learning",
                "Automated Machine Learning",
                "Advanced Model Library",
                "Artificial Model Logic"
            ],
            correct: 1,
            explanation: "AutoML stands for Automated Machine Learning, which automates the end-to-end ML process."
        },
        {
            question: "Who proposed the famous Turing Test?",
            options: [
                "John McCarthy",
                "Marvin Minsky",
                "Alan Turing",
                "Geoffrey Hinton"
            ],
            correct: 2,
            explanation: "Alan Turing proposed the Turing Test in his 1950 paper 'Computing Machinery and Intelligence'."
        },
        {
            question: "What is the main focus of Generative AI?",
            options: [
                "Analyzing existing data",
                "Creating novel, original content",
                "Detecting anomalies",
                "Optimizing algorithms"
            ],
            correct: 1,
            explanation: "Generative AI focuses on creating novel, original content like text, images, and audio."
        },
        {
            question: "Which feature selection method is integrated within model training?",
            options: [
                "Filter Methods",
                "Wrapper Methods",
                "Embedded Methods",
                "Manual Selection"
            ],
            correct: 2,
            explanation: "Embedded Methods integrate feature selection within the model training process itself."
        },
        {
            question: "What is 'model drift'?",
            options: [
                "When a model moves to production",
                "When model accuracy degrades over time",
                "When a model is overfitting",
                "When features are extracted"
            ],
            correct: 1,
            explanation: "Model drift refers to the degradation of model accuracy over time, which is monitored during deployment."
        }
    ],
    
    multiSelect: [
        {
            question: "Which of the following are types of Machine Learning? (Select all that apply)",
            options: [
                "Supervised Learning",
                "Unsupervised Learning",
                "Reinforcement Learning",
                "Distributed Learning"
            ],
            correct: [0, 1, 2],
            explanation: "The three core types of ML are Supervised, Unsupervised, and Reinforcement Learning."
        },
        {
            question: "Which are valid stages of an ML Pipeline? (Select all that apply)",
            options: [
                "Problem Definition",
                "Feature Engineering",
                "Social Media Marketing",
                "Model Training & Evaluation"
            ],
            correct: [0, 1, 3],
            explanation: "Problem Definition, Feature Engineering, and Model Training & Evaluation are all key stages of an ML Pipeline."
        },
        {
            question: "Which of these are applications of ML in Healthcare? (Select all that apply)",
            options: [
                "Disease diagnosis",
                "Drug discovery",
                "Video game design",
                "Personalized treatment plans"
            ],
            correct: [0, 1, 3],
            explanation: "ML in Healthcare is used for disease diagnosis, drug discovery, and personalized treatment plans."
        },
        {
            question: "Which are ethical concerns in AI? (Select all that apply)",
            options: [
                "Bias and Fairness",
                "Privacy and Data Security",
                "Hardware costs",
                "Accountability and Transparency"
            ],
            correct: [0, 1, 3],
            explanation: "Key ethical concerns include Bias, Privacy, and Accountability in AI systems."
        },
        {
            question: "Which techniques help optimize model training? (Select all that apply)",
            options: [
                "Cross-Validation",
                "Regularization",
                "Data deletion",
                "Hyperparameter Tuning"
            ],
            correct: [0, 1, 3],
            explanation: "Cross-Validation, Regularization, and Hyperparameter Tuning all help optimize model training."
        },
        {
            question: "Which are branches of AI? (Select all that apply)",
            options: [
                "Machine Learning",
                "Deep Learning",
                "Quantum Computing",
                "Natural Language Processing"
            ],
            correct: [0, 1, 3],
            explanation: "ML, Deep Learning, and NLP are all branches of AI. Quantum Computing is a different field."
        },
        {
            question: "What can Generative AI create? (Select all that apply)",
            options: [
                "Text",
                "Images",
                "Hardware components",
                "Audio and Music"
            ],
            correct: [0, 1, 3],
            explanation: "Generative AI can create text, images, audio, and synthetic data, but not physical hardware."
        },
        {
            question: "Which are feature transformation techniques? (Select all that apply)",
            options: [
                "Normalization & Scaling",
                "Encoding",
                "Model deployment",
                "Binning"
            ],
            correct: [0, 1, 3],
            explanation: "Normalization, Encoding, and Binning are all feature transformation techniques."
        },
        {
            question: "Which are challenges in ML Pipelines? (Select all that apply)",
            options: [
                "Complexity & Scale",
                "Lack of Modularity",
                "Too much automation",
                "Manual Processes"
            ],
            correct: [0, 1, 3],
            explanation: "Complexity, Lack of Modularity, and Manual Processes are core challenges in ML Pipelines."
        },
        {
            question: "Which datasets are used in model training? (Select all that apply)",
            options: [
                "Training Set",
                "Validation Set",
                "Production Set",
                "Test Set"
            ],
            correct: [0, 1, 3],
            explanation: "The three datasets used are Training, Validation, and Test sets."
        }
    ],
    
    fillInTheBlank: [
        {
            question: "AI is the _____ of human intelligence in machines.",
            answer: "simulation",
            caseSensitive: false,
            explanation: "AI refers to the simulation of human intelligence in machines."
        },
        {
            question: "Deep Learning uses neural networks with many _____ to learn complex patterns.",
            answer: "layers",
            caseSensitive: false,
            explanation: "Deep Learning uses layered neural networks (many layers) to process complex data."
        },
        {
            question: "In Supervised Learning, the algorithm learns from _____ data.",
            answer: "labeled",
            caseSensitive: false,
            explanation: "Supervised Learning requires labeled data with known outputs."
        },
        {
            question: "Reinforcement Learning involves learning through _____ and error.",
            answer: "trial",
            caseSensitive: false,
            explanation: "Reinforcement Learning is based on trial and error with rewards/penalties."
        },
        {
            question: "_____ occurs when a model learns training data too closely and doesn't generalize well.",
            answer: "overfitting",
            caseSensitive: false,
            explanation: "Overfitting happens when the model learns noise instead of patterns."
        },
        {
            question: "The _____ Test was proposed by Alan Turing to measure machine intelligence.",
            answer: "turing",
            caseSensitive: false,
            explanation: "The Turing Test evaluates a machine's ability to exhibit intelligent behavior."
        },
        {
            question: "Feature _____ is the process of transforming raw data into meaningful features.",
            answer: "engineering",
            caseSensitive: false,
            explanation: "Feature Engineering creates valuable inputs for ML models."
        },
        {
            question: "_____ Learning uses a pre-trained model as a starting point.",
            answer: "transfer",
            caseSensitive: false,
            explanation: "Transfer Learning leverages existing trained models for new tasks."
        },
        {
            question: "AI hallucinations are plausible but factually _____ outputs.",
            answer: "incorrect",
            caseSensitive: false,
            alternativeAnswers: ["wrong", "false"],
            explanation: "AI hallucinations produce incorrect or nonsensical information."
        },
        {
            question: "Computer Vision allows computers to _____ and interpret visual information.",
            answer: "see",
            caseSensitive: false,
            explanation: "Computer Vision enables machines to 'see' like humans do."
        },
        {
            question: "_____ AI focuses on creating novel, original content.",
            answer: "generative",
            caseSensitive: false,
            explanation: "Generative AI creates new content rather than analyzing existing data."
        },
        {
            question: "Regularization adds a _____ to complex models to prevent overfitting.",
            answer: "penalty",
            caseSensitive: false,
            explanation: "Regularization penalizes model complexity to improve generalization."
        },
        {
            question: "The 2010s-Present era is known as the Deep Learning _____.",
            answer: "boom",
            caseSensitive: false,
            explanation: "Recent years have seen explosive growth in Deep Learning capabilities."
        },
        {
            question: "AutoML automates the _____-to-_____ process of machine learning.",
            answer: "end",
            caseSensitive: false,
            alternativeAnswers: ["start", "beginning"],
            explanation: "AutoML automates the entire ML process from start to finish."
        },
        {
            question: "Expert Systems use extensive _____ bases and predefined rules.",
            answer: "knowledge",
            caseSensitive: false,
            explanation: "Expert Systems rely on knowledge bases to make decisions."
        }
    ],
    
    abbreviations: [
        {
            question: "AI",
            answer: "Artificial Intelligence",
            explanation: "AI stands for Artificial Intelligence - the simulation of human intelligence in machines."
        },
        {
            question: "ML",
            answer: "Machine Learning",
            explanation: "ML stands for Machine Learning - algorithms that learn from data."
        },
        {
            question: "DL",
            answer: "Deep Learning",
            explanation: "DL stands for Deep Learning - neural networks with many layers."
        },
        {
            question: "NLP",
            answer: "Natural Language Processing",
            explanation: "NLP stands for Natural Language Processing - understanding and generating human language."
        },
        {
            question: "CV",
            answer: "Computer Vision",
            explanation: "CV stands for Computer Vision - interpreting visual information."
        },
        {
            question: "AutoML",
            answer: "Automated Machine Learning",
            explanation: "AutoML stands for Automated Machine Learning - automating the ML process."
        },
        {
            question: "PCA",
            answer: "Principal Component Analysis",
            explanation: "PCA stands for Principal Component Analysis - a dimensionality reduction technique."
        },
        {
            question: "IoT",
            answer: "Internet of Things",
            explanation: "IoT stands for Internet of Things - connected devices sharing data."
        }
    ]
};
