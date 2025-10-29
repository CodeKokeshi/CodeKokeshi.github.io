// HCI Reviewer Flashcards & Quiz
// Source: HCI_Source-Reviewer.md
// Quiz types: Multiple Choice, Fill in the Blanks, Multi-select, Categorization Sorter, Benefit/Downside, Attribution Matching, Definition Matching, Two-Column Sorter

// --- Flashcards ---
const flashcards = [
  {
    front: "What is Interaction Design?",
    back: "Designing interactive products to support the way people communicate and interact in their everyday and working lives."
  },
  {
    front: "What is the key question of Interaction Design?",
    back: "How do you optimize the users' interactions with a system so that they support the users' activities in effective, useful, usable and pleasurable ways?"
  },
  {
    front: "Name three Academic Disciplines that contribute to Interaction Design.",
    back: "Ergonomics, Psychology/Cognitive Science, Computer Science/Software Engineering, Social Sciences, Engineering, Informatics, Design."
  },
  {
    front: "Name two Design Practices that contribute to Interaction Design.",
    back: "Graphic Design, Product Design, Artist-Design, Industrial Design, Film Industry."
  },
  {
    front: "What is a Multidisciplinary Team in Interaction Design?",
    back: "A team drawing on the skill sets of engineers, designers, programmers, psychologists, anthropologists, sociologists, artists, etc."
  },
  {
    front: "Benefit of multidisciplinary teams?",
    back: "More ideas generated, more creative and original designs."
  },
  {
    front: "Downside of multidisciplinary teams?",
    back: "Can be costly and lead to communication difficulties due to different terminology."
  },
  {
    front: "What is User Experience (UX)?",
    back: "All aspects of the end user's interaction with the company, its services, and its products. (Nielsen & Norman, 2014)"
  },
  {
    front: "What is the core principle of UX?",
    back: "One cannot design a user experience, only design for a user experience."
  },
  {
    front: "What is the goal of UX according to Don Norman (2004)?",
    back: "Build joy and excitement, pleasure and fun, and beauty to people's lives."
  },
  {
    front: "What is Accessibility in HCI?",
    back: "The extent to which an interactive product is accessible by as many people as possible."
  },
  {
    front: "What is Inclusiveness in HCI?",
    back: "Being fair, open, and equal to everyone. Accommodate the widest possible number of people."
  },
  {
    front: "What are the three types of impairment in HCI?",
    back: "Sensory, Physical, Cognitive."
  },
  {
    front: "What are the three categories of impairment in HCI?",
    back: "Permanent, Temporary, Situational."
  },
  {
    front: "List the six Usability Goals.",
    back: "Effectiveness, Efficiency, Safety, Utility, Learnability, Memorability."
  },
  {
    front: "List three Desirable UX Goals.",
    back: "Satisfying, Fun, Enjoyable, Engaging, Challenging, Rewarding, Supporting creativity."
  },
  {
    front: "List three Undesirable UX Goals.",
    back: "Boring, Frustrating, Unpleasant, Annoying, Making one feel stupid."
  },
  {
    front: "List the five Design Principles.",
    back: "Visibility, Feedback, Constraint, Consistency, Affordance."
  },
  {
    front: "What is Visibility in design?",
    back: "The more visible functions are, the more likely users will know what to do next."
  },
  {
    front: "What is Feedback in design?",
    back: "Sending back information about what action has been done and what has been accomplished."
  },
  {
    front: "What is Constraint in design?",
    back: "Restricting the kinds of user interaction that can take place at a given moment."
  },
  {
    front: "What is Consistency in design?",
    back: "Designing interfaces to have similar operations and use similar elements for similar tasks."
  },
  {
    front: "What is Affordance in design?",
    back: "An attribute of an object that allows people to know how to use it. To give a clue."
  }
];

// ...existing code for flashcard navigation and rendering...

// --- Quiz Questions ---
const quizQuestions = [
  // Multiple Choice
  {
    type: "multiple-choice",
    question: "Which of the following is NOT an Academic Discipline contributing to Interaction Design?",
    options: ["Ergonomics", "Psychology", "Product Design", "Computer Science"],
    answer: 2
  },
  // Fill in the Blank
  {
    type: "fill-blank",
    question: "Interaction Design is about optimizing the users' _______ with a system.",
    answer: "interactions"
  },
  // Multi-select
  {
    type: "multi-select",
    question: "Select all Design Practices that contribute to Interaction Design.",
    options: ["Graphic Design", "Product Design", "Ergonomics", "Industrial Design", "Film Industry"],
    answers: [0,1,3,4]
  },
  // Categorization Sorter
  {
    type: "categorization-sorter",
    question: "Drag each term into the correct category for Interaction Design.",
    buckets: ["Academic Disciplines", "Design Practices", "Interdisciplinary Fields"],
    terms: ["Graphic Design", "HCI", "Ergonomics", "CSCW", "Psychology", "Product Design"],
    correct: {
      "Academic Disciplines": ["Ergonomics", "Psychology"],
      "Design Practices": ["Graphic Design", "Product Design"],
      "Interdisciplinary Fields": ["HCI", "CSCW"]
    }
  },
  // Benefit/Downside
  {
    type: "benefit-downside",
    question: "Is this a BENEFIT or a DOWNSIDE of multidisciplinary teams?",
    statements: [
      { text: "Leads to more ideas being generated and more creative, original designs.", answer: "Benefit" },
      { text: "Can be costly and lead to communication difficulties due to different terminology.", answer: "Downside" }
    ]
  },
  // Attribution Matching
  {
    type: "attribution-matching",
    question: "Match the expert to their key concept or quote.",
    columnA: ["Don Norman (1988)", "Jakob Nielsen & Don Norman (2014)", "Jesse Garrett", "Don Norman (2004)"],
    columnB: [
      "Defined UX as 'all aspects of the end user's interaction...'",
      "Used car controls to explain the 'Visibility' principle.",
      "Said we must 'build joy and excitement, pleasure and fun' into products.",
      "Stated that 'Even a ketchup bottle has a user experience.'"
    ],
    correct: [1,0,3,2]
  },
  // Definition Matching
  {
    type: "definition-matching",
    question: "Match the Design Principle to its correct definition.",
    columnA: ["Visibility", "Feedback", "Constraint", "Consistency", "Affordance"],
    columnB: [
      "Sending back information about what action has been done...",
      "An attribute of an object that allows people to know how to use it...",
      "The more visible functions are, the more likely users will know what to do...",
      "Restricting the kinds of user interaction that can take place...",
      "Designing interfaces to have similar operations for similar tasks..."
    ],
    correct: [2,0,3,4,1]
  },
  // Two-Column Sorter
  {
    type: "two-column-sorter",
    question: "Classify the following UX Goal as 'Desirable' or 'Undesirable'.",
    terms: ["Engaging", "Boring"],
    correct: ["Desirable", "Undesirable"]
  }
];

// ...existing code for quiz rendering and logic...

// You would implement rendering and logic for each quiz type here, similar to your IS/IoT reviewer apps.
