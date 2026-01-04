// ===== FLASHCARDS DATA =====
const flashcardsData = [
    // Interaction Design Basics
    {
        question: "What is Interaction Design?",
        answer: "Designing interactive products to support the way people communicate and interact in their everyday and working lives."
    },
    {
        question: "What is HCI (Human-Computer Interaction)?",
        answer: "An interdisciplinary field concerned with the design, evaluation, and implementation of interactive computing systems for human use."
    },
    {
        question: "What are the main goals of Interaction Design?",
        answer: "To optimize users' interactions with a system so that they support the users' activities in effective, useful, usable, and pleasurable ways."
    },
    {
        question: "What are Usability Goals?",
        answer: "Effectiveness, Efficiency, Safety, Utility, Learnability, and Memorability - criteria for evaluating how well a system performs."
    },
    {
        question: "What are User Experience Goals?",
        answer: "Desirable aspects like satisfying, enjoyable, engaging, pleasurable, exciting, entertaining, helpful, motivating, aesthetically pleasing, supportive of creativity, rewarding, and emotionally fulfilling."
    },
    {
        question: "What is Effectiveness (Usability Goal)?",
        answer: "How good a system is at doing what it is supposed to do - measuring whether users can accomplish their goals."
    },
    {
        question: "What is Efficiency (Usability Goal)?",
        answer: "The way a system supports users in carrying out their tasks - minimizing steps and time required."
    },
    {
        question: "What is Safety (Usability Goal)?",
        answer: "Protecting users from dangerous conditions and undesirable situations, including error prevention and recovery mechanisms."
    },
    {
        question: "What is Utility (Usability Goal)?",
        answer: "The extent to which the system provides the right kind of functionality so that users can do what they need or want to do."
    },
    {
        question: "What is Learnability (Usability Goal)?",
        answer: "How easy a system is to learn to use - enabling users to get started quickly and become competent."
    },
    {
        question: "What is Memorability (Usability Goal)?",
        answer: "How easy a system is to remember how to use once learned - especially important for systems used infrequently."
    },
    
    // Design Principles
    {
        question: "What is Visibility in Design?",
        answer: "The more visible functions are, the more likely users will be able to know what to do next - making controls and actions discoverable."
    },
    {
        question: "What is Feedback in Design?",
        answer: "Sending back information about what action has been done and what has been accomplished, allowing users to continue with the activity."
    },
    {
        question: "What are Constraints in Design?",
        answer: "Restricting the kind of user interaction that can take place at a given moment, guiding users to appropriate actions."
    },
    {
        question: "What is Consistency in Design?",
        answer: "Designing interfaces to have similar operations and use similar elements for achieving similar tasks."
    },
    {
        question: "What is Affordance?",
        answer: "An attribute of an object that allows people to know how to use it - the perceived and actual properties that determine how the thing could be used."
    },
    
    // Cognitive Aspects
    {
        question: "What is Attention in Cognitive Processing?",
        answer: "The cognitive resource for selecting things to concentrate on at a point in time from the mass of stimuli around us."
    },
    {
        question: "What is Perception in Cognitive Processing?",
        answer: "How information is acquired from the environment via the different sense organs and transformed into experiences."
    },
    {
        question: "What is Memory in Cognitive Processing?",
        answer: "The cognitive process of encoding, storing, and retrieving information, including short-term and long-term memory."
    },
    {
        question: "What is Learning in Cognitive Processing?",
        answer: "The accumulation of skills and knowledge that would be impossible to achieve without memory."
    },
    {
        question: "What is Reading, Speaking, and Listening?",
        answer: "Cognitive processes involving the use of language, which can place different demands on cognitive resources."
    },
    {
        question: "What is Problem-solving in Cognitive Processing?",
        answer: "Thinking about and reasoning through a problem, involving reflective cognition."
    },
    
    // Research Methods
    {
        question: "What are the main Data Gathering Techniques?",
        answer: "Interviews, Questionnaires, Observations, and studying documentation - used to collect data about users and their needs."
    },
    {
        question: "What is a Persona?",
        answer: "A rich description of a typical user of the product, including goals, characteristics, and scenarios - used to guide design decisions."
    },
    {
        question: "What is a Scenario?",
        answer: "An informal narrative story describing human activities or tasks, used to explore and discuss design ideas."
    },
    {
        question: "What is a Use Case?",
        answer: "A detailed description of the interaction between a user and a system to achieve a particular goal."
    },
    {
        question: "What are Essential Use Cases?",
        answer: "Abstract use cases that describe user intentions and system responsibilities without specifying implementation details."
    },
    
    // Prototyping
    {
        question: "What is a Low-Fidelity Prototype?",
        answer: "A simple, often paper-based representation of a design used for quick testing of concepts and ideas."
    },
    {
        question: "What is a High-Fidelity Prototype?",
        answer: "A computer-based interactive prototype that looks and behaves more like the final product."
    },
    {
        question: "What are the benefits of Prototyping?",
        answer: "Enables stakeholders to interact with envisioned product, encourages reflection, facilitates team communication, and identifies problems early."
    },
    
    // Evaluation
    {
        question: "What is Usability Testing?",
        answer: "An evaluation method where representative users perform tasks with a system while observers watch and take notes."
    },
    {
        question: "What is Heuristic Evaluation?",
        answer: "An inspection method where experts evaluate a system against established usability principles (heuristics)."
    },
    {
        question: "What are Nielsen's 10 Usability Heuristics?",
        answer: "Visibility of system status, Match between system and real world, User control and freedom, Consistency and standards, Error prevention, Recognition rather than recall, Flexibility and efficiency, Aesthetic and minimalist design, Help users recognize and recover from errors, Help and documentation."
    },
    
    // Interaction Types
    {
        question: "What is Instructing as an Interaction Type?",
        answer: "Users issue instructions to a system through commands, selections, or data entry."
    },
    {
        question: "What is Conversing as an Interaction Type?",
        answer: "Users have a dialog with a system, like chatbots or voice assistants."
    },
    {
        question: "What is Manipulating as an Interaction Type?",
        answer: "Users interact with objects in a virtual or physical space by manipulating them, like drag-and-drop."
    },
    {
        question: "What is Exploring as an Interaction Type?",
        answer: "Users move through a virtual or physical environment to discover and learn."
    },
    {
        question: "What is Responding as an Interaction Type?",
        answer: "The system initiates and the user responds, like alerts, notifications, or prompts."
    }
];

// ===== QUIZ QUESTIONS DATA =====
const quizQuestionsData = [
    {
        type: 'multiple-choice',
        question: "Which field is defined as 'Designing interactive products to support the way people communicate and interact in their everyday and working lives.'?",
        options: ['Interaction Design', 'Human-Computer Interaction', 'User Experience Design', 'Interface Design'],
        answer: 'Interaction Design',
        category: 'Interaction Design Basics'
    },
    {
        type: 'fill-in-blank',
        question: "Interaction Design asks the key question: 'How do you [BLANK] the users' interactions with a system... so that they support the users' activities in effective, useful, usable and pleasurable ways?'",
        answer: 'OPTIMIZE',
        category: 'Interaction Design Basics'
    },
    {
        type: 'multi-select',
        question: "Which of the following are Usability Goals? (Select all that apply)",
        options: ['Effectiveness', 'Enjoyable', 'Efficiency', 'Satisfying', 'Safety', 'Entertaining', 'Learnability'],
        answer: ['Effectiveness', 'Efficiency', 'Safety', 'Learnability'],
        category: 'Usability Goals'
    },
    {
        type: 'multi-select',
        question: "Group A: Which aspects describe DESIRABLE user experiences? (Select all that apply)",
        options: ['Satisfying', 'Frustrating', 'Enjoyable', 'Annoying', 'Engaging', 'Unpleasant'],
        answer: ['Satisfying', 'Enjoyable', 'Engaging'],
        category: 'User Experience Goals'
    },
    {
        type: 'multi-select',
        question: "Group B: Which aspects describe DESIRABLE user experiences? (Select all that apply)",
        options: ['Pleasurable', 'Boring', 'Exciting', 'Confusing', 'Entertaining', 'Tedious'],
        answer: ['Pleasurable', 'Exciting', 'Entertaining'],
        category: 'User Experience Goals'
    },
    {
        type: 'drag-match',
        question: "Match each Usability Goal with its correct definition:",
        pairs: [
            {
                stem: 'Effectiveness',
                match: 'How good a system is at doing what it is supposed to do'
            },
            {
                stem: 'Efficiency',
                match: 'The way a system supports users in carrying out their tasks'
            },
            {
                stem: 'Safety',
                match: 'Protecting users from dangerous conditions and undesirable situations'
            },
            {
                stem: 'Utility',
                match: 'Extent to which system provides the right kind of functionality'
            },
            {
                stem: 'Learnability',
                match: 'How easy a system is to learn to use'
            },
            {
                stem: 'Memorability',
                match: 'How easy a system is to remember how to use once learned'
            }
        ],
        category: 'Usability Goals'
    },
    {
        type: 'drag-match',
        question: "Match each Design Principle with its description:",
        pairs: [
            {
                stem: 'Visibility',
                match: 'Making functions more discoverable so users know what to do next'
            },
            {
                stem: 'Feedback',
                match: 'Sending information about what action has been done'
            },
            {
                stem: 'Constraints',
                match: 'Restricting user interaction to guide appropriate actions'
            },
            {
                stem: 'Consistency',
                match: 'Using similar operations and elements for similar tasks'
            },
            {
                stem: 'Affordance',
                match: 'Properties that show how an object could be used'
            }
        ],
        category: 'Design Principles'
    },
    {
        type: 'categorization',
        question: "Part 1: Drag each term into its correct category (Academic Disciplines, Design Practices, or Interdisciplinary Fields):",
        categories: ['Academic Disciplines', 'Design Practices', 'Interdisciplinary Fields'],
        items: [
            { text: 'Ergonomics', category: 'Academic Disciplines' },
            { text: 'Graphic Design', category: 'Design Practices' },
            { text: 'Human-Computer Interaction (HCI)', category: 'Interdisciplinary Fields' },
            { text: 'Psychology/Cognitive Science', category: 'Academic Disciplines' },
            { text: 'Product Design', category: 'Design Practices' },
            { text: 'Computer-Supported Cooperative Work (CSCW)', category: 'Interdisciplinary Fields' }
        ],
        category: 'HCI Disciplines'
    },
    {
        type: 'categorization',
        question: "Part 2: Drag each term into its correct category:",
        categories: ['Academic Disciplines', 'Design Practices', 'Interdisciplinary Fields'],
        items: [
            { text: 'Design', category: 'Academic Disciplines' },
            { text: 'Artist-Design', category: 'Design Practices' },
            { text: 'Human Factors (HF)', category: 'Interdisciplinary Fields' },
            { text: 'Informatics', category: 'Academic Disciplines' },
            { text: 'Industrial Design', category: 'Design Practices' },
            { text: 'Information Systems', category: 'Interdisciplinary Fields' }
        ],
        category: 'HCI Disciplines'
    },
    {
        type: 'drag-match',
        question: "Match each Cognitive Process with its description:",
        pairs: [
            {
                stem: 'Attention',
                match: 'Selecting things to concentrate on from the mass of stimuli'
            },
            {
                stem: 'Perception',
                match: 'Acquiring information from environment via sense organs'
            },
            {
                stem: 'Memory',
                match: 'Encoding, storing, and retrieving information'
            },
            {
                stem: 'Learning',
                match: 'Accumulation of skills and knowledge'
            }
        ],
        category: 'Cognitive Aspects'
    },
    {
        type: 'multiple-choice',
        question: "Which evaluation method involves experts checking a system against established usability principles?",
        options: ['Heuristic Evaluation', 'Usability Testing', 'A/B Testing', 'Focus Groups'],
        answer: 'Heuristic Evaluation',
        category: 'Evaluation Methods'
    },
    {
        type: 'fill-in-blank',
        question: "A [BLANK] is a rich description of a typical user of the product, including goals, characteristics, and scenarios.",
        answer: 'PERSONA',
        category: 'Research Methods'
    },
    {
        type: 'multi-select',
        question: "Which of the following are Data Gathering Techniques? (Select all that apply)",
        options: ['Interviews', 'Coding', 'Questionnaires', 'Debugging', 'Observations', 'Compilation', 'Studying Documentation'],
        answer: ['Interviews', 'Questionnaires', 'Observations', 'Studying Documentation'],
        category: 'Research Methods'
    },
    {
        type: 'multiple-choice',
        question: "What is the main benefit of Low-Fidelity Prototypes?",
        options: [
            'Quick and cheap to create for early concept testing',
            'Looks exactly like the final product',
            'Can be deployed to production',
            'Requires extensive coding'
        ],
        answer: 'Quick and cheap to create for early concept testing',
        category: 'Prototyping'
    },
    {
        type: 'drag-match',
        question: "Match each Interaction Type with its description:",
        pairs: [
            {
                stem: 'Instructing',
                match: 'Users issue commands or instructions to a system'
            },
            {
                stem: 'Conversing',
                match: 'Users have a dialog with a system like chatbots'
            },
            {
                stem: 'Manipulating',
                match: 'Users interact by manipulating objects in virtual space'
            },
            {
                stem: 'Exploring',
                match: 'Users move through environments to discover and learn'
            }
        ],
        category: 'Interaction Types'
    },
    {
        type: 'multi-select',
        question: "Which are examples of UNDESIRABLE user experiences? (Select all that apply)",
        options: ['Frustrating', 'Engaging', 'Annoying', 'Satisfying', 'Boring', 'Exciting', 'Confusing'],
        answer: ['Frustrating', 'Annoying', 'Boring', 'Confusing'],
        category: 'User Experience Goals'
    },
    {
        type: 'fill-in-blank',
        question: "The design principle of [BLANK] refers to properties of an object that show how it could be used.",
        answer: 'AFFORDANCE',
        category: 'Design Principles'
    },
    {
        type: 'categorization',
        question: "Categorize these evaluation methods:",
        categories: ['Inspection Methods', 'Testing with Users', 'Analytics'],
        items: [
            { text: 'Heuristic Evaluation', category: 'Inspection Methods' },
            { text: 'Usability Testing', category: 'Testing with Users' },
            { text: 'Click Tracking', category: 'Analytics' },
            { text: 'Cognitive Walkthrough', category: 'Inspection Methods' },
            { text: 'A/B Testing', category: 'Testing with Users' },
            { text: 'Heat Maps', category: 'Analytics' }
        ],
        category: 'Evaluation Methods'
    },
    {
        type: 'multiple-choice',
        question: "According to Nielsen's heuristics, which principle states 'Users should not have to wonder whether different words, situations, or actions mean the same thing'?",
        options: [
            'Consistency and standards',
            'Visibility of system status',
            'Match between system and real world',
            'User control and freedom'
        ],
        answer: 'Consistency and standards',
        category: 'Usability Heuristics'
    },
    {
        type: 'drag-match',
        question: "Match each term with its description:",
        pairs: [
            {
                stem: 'Scenario',
                match: 'Informal narrative story describing human activities or tasks'
            },
            {
                stem: 'Use Case',
                match: 'Detailed description of interaction to achieve a particular goal'
            },
            {
                stem: 'Persona',
                match: 'Rich description of a typical user with goals and characteristics'
            }
        ],
        category: 'Research Methods'
    }
];
