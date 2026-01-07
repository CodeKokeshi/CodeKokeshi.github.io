// Comprehensive Exam Data - Lessons 6-10
// All questions are multiple choice with 4 options

const examQuestions = [
  // ====== LESSON 6: Decision Trees and Ensemble Learning ======
  
  // Decision Tree Basics
  {
    id: 1,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What is a Decision Tree in machine learning?",
    options: [
      "A tool that helps make decisions by mapping out different choices and their possible outcomes",
      "A linear regression model that predicts continuous values",
      "A clustering algorithm that groups similar data points",
      "A neural network with tree-like structure"
    ],
    correct: 0,
    explanation: "A Decision Tree helps us make decisions by mapping out different choices and their possible outcomes. It is used in machine learning for tasks like classification and prediction."
  },
  {
    id: 2,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What does the Root node in a Decision Tree do?",
    options: [
      "Provides the final prediction",
      "Asks the first question representing the whole dataset",
      "Connects different branches together",
      "Removes unnecessary nodes"
    ],
    correct: 1,
    explanation: "The Root Node is the starting point representing the whole dataset and asks the first question to begin the decision-making process."
  },
  {
    id: 3,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What are Leaf nodes in a Decision Tree?",
    options: [
      "Nodes that ask questions based on data features",
      "The starting point of the tree",
      "End points where the final decision or prediction is made",
      "Lines connecting different nodes"
    ],
    correct: 2,
    explanation: "Leaf Nodes are end points of the tree where the final decision or prediction is made."
  },
  {
    id: 4,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What is Pruning in the context of Decision Trees?",
    options: [
      "Adding more branches to improve accuracy",
      "The removal of subnodes at the end of every node",
      "Creating new leaf nodes",
      "Merging similar branches together"
    ],
    correct: 1,
    explanation: "Pruning is the removal of subnodes at the end of every node to prevent overfitting and simplify the tree."
  },
  {
    id: 5,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "Which of the following is a proven algorithm for building Decision Trees?",
    options: [
      "K-Means",
      "ID3",
      "Linear Regression",
      "Naive Bayes"
    ],
    correct: 1,
    explanation: "ID3, C4.5, and CART are industry-standard algorithms for building Decision Trees with decades of reliable performance."
  },
  {
    id: 6,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What type of outcomes do Classification Trees predict?",
    options: [
      "Continuous numerical values",
      "Categorical outcomes like spam or not spam",
      "Time series data",
      "Image classifications only"
    ],
    correct: 1,
    explanation: "Classification Trees are used for predicting categorical outcomes, such as identifying spam or not spam, by classifying data into predefined categories."
  },
  {
    id: 7,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What type of outcomes do Regression Trees predict?",
    options: [
      "Binary outcomes (yes/no)",
      "Categorical labels",
      "Continuous numerical outcomes like house prices",
      "Text classifications"
    ],
    correct: 2,
    explanation: "Regression Trees are used for predicting continuous outcomes, such as house prices, providing numerical predictions based on input features."
  },
  {
    id: 8,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What is an advantage of Decision Trees?",
    options: [
      "They always provide the most accurate predictions",
      "They are easy to understand and visualize",
      "They never overfit the data",
      "They require extensive data preprocessing"
    ],
    correct: 1,
    explanation: "Decision Trees are easy to understand and their visual nature makes the decision-making process easy to follow, allowing even non-experts to understand the logic."
  },
  {
    id: 9,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "What is a major disadvantage of Decision Trees?",
    options: [
      "They cannot handle categorical data",
      "They are too simple to capture patterns",
      "They may overfit if trees are too deep",
      "They require feature scaling"
    ],
    correct: 2,
    explanation: "If trees are too deep, they may memorize training data instead of learning general patterns, leading to overfitting."
  },
  {
    id: 10,
    lesson: "Lesson 6",
    topic: "Decision Trees",
    question: "Which statement about Decision Trees is TRUE?",
    options: [
      "They require feature scaling like normalization",
      "They can only be used for classification",
      "They handle non-linear relationships effectively",
      "They are stable and small data changes don't affect them"
    ],
    correct: 2,
    explanation: "Decision Trees effectively capture complex, non-linear relationships between features and outcomes, and do not require feature scaling."
  },

  // Ensemble Learning
  {
    id: 11,
    lesson: "Lesson 6",
    topic: "Ensemble Learning",
    question: "What is Ensemble Learning?",
    options: [
      "Using only one powerful model for predictions",
      "Using many small models and combining their results",
      "Training a single neural network",
      "Using only decision trees"
    ],
    correct: 1,
    explanation: "Ensemble learning uses many small models instead of just one. While individual models might not be strong, putting their results together provides a more accurate answer."
  },
  {
    id: 12,
    lesson: "Lesson 6",
    topic: "Ensemble Learning",
    question: "What is Bagging (Bootstrap Aggregating)?",
    options: [
      "Models are trained sequentially to fix previous errors",
      "Models are trained independently on different random subsets of training data",
      "Only one model is trained on the entire dataset",
      "Models are trained to minimize loss function"
    ],
    correct: 1,
    explanation: "Bagging involves training models independently on different random subsets of training data, then combining results by averaging (regression) or voting (classification)."
  },
  {
    id: 13,
    lesson: "Lesson 6",
    topic: "Ensemble Learning",
    question: "What is Boosting in Ensemble Learning?",
    options: [
      "Models are trained independently in parallel",
      "Models are trained sequentially; each new model focuses on fixing errors made by previous ones",
      "All models are given equal weight",
      "Only strong models are used"
    ],
    correct: 1,
    explanation: "Boosting involves training models sequentially, where each new model focuses on fixing errors made by the previous ones."
  },
  {
    id: 14,
    lesson: "Lesson 6",
    topic: "Ensemble Learning",
    question: "What is the first step in the Bagging process?",
    options: [
      "Create final predictions by combining models",
      "Multiple subsets are created from the original dataset with equal tuples",
      "Train models sequentially",
      "Apply pruning to the trees"
    ],
    correct: 1,
    explanation: "In Step 1 of Bagging, multiple subsets are created from the original dataset with equal tuples, selecting observations with replacement."
  },
  {
    id: 15,
    lesson: "Lesson 6",
    topic: "Ensemble Learning",
    question: "How are models trained in the Bagging process?",
    options: [
      "Sequentially, one after another",
      "In parallel and independently",
      "Only the best model is trained",
      "Models share parameters during training"
    ],
    correct: 1,
    explanation: "In Bagging, each model is learned in parallel and independently on different subsets of data."
  },

  // Random Forests
  {
    id: 16,
    lesson: "Lesson 6",
    topic: "Random Forests",
    question: "What is Random Forest?",
    options: [
      "A single decision tree with random splits",
      "An algorithm that uses many decision trees for better predictions",
      "A clustering algorithm",
      "A linear regression model"
    ],
    correct: 1,
    explanation: "Random Forest is an algorithm that uses many decision trees for better predictions, combining their results for more accurate outcomes."
  },
  {
    id: 17,
    lesson: "Lesson 6",
    topic: "Random Forests",
    question: "How does Random Forest differ from regular Bagging?",
    options: [
      "It uses only one tree",
      "It adds feature randomness where each split considers only random feature subsets",
      "It doesn't use random data subsets",
      "It requires all features at each split"
    ],
    correct: 1,
    explanation: "Random Forests add feature randomness, where each split considers only random feature subsets to maximize tree diversity, unlike regular Bagging."
  },
  {
    id: 18,
    lesson: "Lesson 6",
    topic: "Random Forests",
    question: "How does Random Forest make predictions for classification?",
    options: [
      "Uses the average of all tree predictions",
      "Uses majority voting from all trees",
      "Uses only the best performing tree",
      "Uses the median value"
    ],
    correct: 1,
    explanation: "For classification, Random Forest uses majority voting, where the most common prediction among all trees is selected as the final answer."
  },
  {
    id: 19,
    lesson: "Lesson 6",
    topic: "Random Forests",
    question: "How does Random Forest make predictions for regression?",
    options: [
      "Uses majority voting",
      "Uses the median of all predictions",
      "Uses the average of all tree predictions",
      "Uses only the first tree's prediction"
    ],
    correct: 2,
    explanation: "For regression tasks, Random Forest uses the average of all tree predictions to produce the final numerical output."
  },
  {
    id: 20,
    lesson: "Lesson 6",
    topic: "Random Forests",
    question: "Why does Random Forest work well?",
    options: [
      "It uses only the most important features",
      "Random data and features help avoid overfitting",
      "It requires minimal training data",
      "It always finds the optimal solution"
    ],
    correct: 1,
    explanation: "Random data and features help avoid overfitting and make predictions more trustworthy by creating diverse trees that generalize better."
  },

  // Boosting Algorithms
  {
    id: 21,
    lesson: "Lesson 6",
    topic: "Boosting",
    question: "What is the main characteristic of Boosting algorithms?",
    options: [
      "They train all models simultaneously",
      "They combine multiple weak learners to create a strong learner",
      "They use only strong learners",
      "They don't adjust weights"
    ],
    correct: 1,
    explanation: "Boosting combines multiple weak learners to create a strong learner, with weak models trained in series to correct the errors of predecessors."
  },
  {
    id: 22,
    lesson: "Lesson 6",
    topic: "Boosting",
    question: "What happens to misclassified examples in Boosting?",
    options: [
      "They are removed from the dataset",
      "They receive lower weights",
      "They receive higher weights for the next iteration",
      "They are ignored"
    ],
    correct: 2,
    explanation: "Misclassified examples receive higher weights for the next iteration, so subsequent models focus more on difficult cases."
  },
  {
    id: 23,
    lesson: "Lesson 6",
    topic: "Boosting",
    question: "Which of the following is a Boosting algorithm?",
    options: [
      "K-Means",
      "AdaBoost",
      "K-Nearest Neighbors",
      "Linear Regression"
    ],
    correct: 1,
    explanation: "AdaBoost (Adaptive Boosting) is a boosting algorithm that focuses on challenging examples by assigning weights to data points and using weighted voting."
  },
  {
    id: 24,
    lesson: "Lesson 6",
    topic: "Boosting",
    question: "What is XGBoost known for?",
    options: [
      "Being the slowest boosting algorithm",
      "Using optimizations like tree pruning, regularization, and parallel processing",
      "Only working with categorical data",
      "Not preventing overfitting"
    ],
    correct: 1,
    explanation: "XGBoost (Extreme Gradient Boosting) uses optimizations like tree pruning, regularization, and parallel processing for efficient models."
  },
  {
    id: 25,
    lesson: "Lesson 6",
    topic: "Boosting",
    question: "What is CatBoost specialized for?",
    options: [
      "Image processing",
      "Time series forecasting",
      "Handling categorical features natively without extensive preprocessing",
      "Natural language processing only"
    ],
    correct: 2,
    explanation: "CatBoost specializes in handling categorical features natively without extensive preprocessing, making it ideal for datasets with many categorical variables."
  },

  // Applications
  {
    id: 26,
    lesson: "Lesson 6",
    topic: "Applications",
    question: "Which ensemble method is commonly used in financial services for predicting credit risk?",
    options: [
      "K-Means Clustering",
      "Random Forests",
      "Linear Regression",
      "Naive Bayes"
    ],
    correct: 1,
    explanation: "Random Forests are used in financial services to predict credit risk for millions of loan applicants, helping reduce defaults."
  },
  {
    id: 27,
    lesson: "Lesson 6",
    topic: "Applications",
    question: "What is a typical application of AdaBoost?",
    options: [
      "Stock price prediction",
      "Face detection and spam filtering",
      "Weather forecasting",
      "Database indexing"
    ],
    correct: 1,
    explanation: "AdaBoost is commonly used for face detection and spam filtering, where it focuses on challenging examples using weighted weak learners."
  },
  {
    id: 28,
    lesson: "Lesson 6",
    topic: "Applications",
    question: "Which ensemble method is best suited for E-commerce recommendation systems with categorical data?",
    options: [
      "Linear Regression",
      "CatBoost",
      "K-Means",
      "PCA"
    ],
    correct: 1,
    explanation: "CatBoost is particularly well-suited for E-commerce and recommendation systems because it handles categorical data natively."
  },

  // ====== LESSON 7: Collaborative Filtering ======
  
  {
    id: 29,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "What is the fundamental logic behind Collaborative Filtering?",
    options: [
      "Items with similar features should be recommended",
      "If an item is liked by both Alice and Bob, they are similar users",
      "Only popular items should be recommended",
      "Users should only see items they've previously viewed"
    ],
    correct: 1,
    explanation: "The fundamental logic is based on user similarity: if an item is liked by both Alice and Bob, it implies they are similar users, so items Alice likes can be recommended to Bob."
  },
  {
    id: 30,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "What is a Recommendation System?",
    options: [
      "A system that only shows popular items",
      "A system that predicts user likes/dislikes and recommends preferred content",
      "A database of user preferences",
      "A search engine for products"
    ],
    correct: 1,
    explanation: "Websites collect data from users to predict their likes and dislikes, allowing them to recommend preferred content tailored to a user's specific way of thinking."
  },
  {
    id: 31,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "What is Content-Based Recommendation?",
    options: [
      "A system based on similar users' preferences",
      "A supervised ML approach using a classifier to distinguish interesting and uninteresting items",
      "A system that recommends random items",
      "A system based only on item popularity"
    ],
    correct: 1,
    explanation: "Content-Based Recommendation is a supervised machine learning approach that uses a classifier to distinguish between interesting and uninteresting items for a specific user."
  },
  {
    id: 32,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "What does Collaborative Filtering focus on?",
    options: [
      "Analyzing item features",
      "Finding similar users rather than analyzing item features",
      "Price comparison",
      "Item categories only"
    ],
    correct: 1,
    explanation: "In Collaborative Filtering, the focus is on finding similar users rather than analyzing item features. Users are classified into clusters of similar types."
  },
  {
    id: 33,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "Which is a type of Collaborative Filtering?",
    options: [
      "Feature-Based",
      "Memory-Based",
      "Price-Based",
      "Category-Based"
    ],
    correct: 1,
    explanation: "The four types of Collaborative Filtering are: Memory-Based, Model-Based, Hybrid, and Deep Learning."
  },
  {
    id: 34,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "In the rounding process for similarity measurement, how are ratings below 3 assigned?",
    options: [
      "Assigned as 1",
      "Assigned as 0",
      "Assigned as -1",
      "Left unchanged"
    ],
    correct: 1,
    explanation: "To make comparisons easier, ratings below 3 are assigned as 0, while ratings above 3 are assigned as 1."
  },
  {
    id: 35,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "What does normalizing ratings involve?",
    options: [
      "Multiplying all ratings by 2",
      "Taking a user's average rating and subtracting it from all their given ratings",
      "Converting all ratings to percentages",
      "Removing outlier ratings"
    ],
    correct: 1,
    explanation: "Normalizing involves taking a user's average rating and subtracting it from all their given ratings, resulting in positive or negative values that help classify users into similar clusters."
  },
  {
    id: 36,
    lesson: "Lesson 7",
    topic: "Collaborative Filtering",
    question: "What is the purpose of normalizing ratings in Collaborative Filtering?",
    options: [
      "To make all ratings positive",
      "To help classify users into similar clusters",
      "To remove low ratings",
      "To increase all ratings"
    ],
    correct: 1,
    explanation: "Normalized ratings result in positive or negative values that help classify users into similar clusters for better recommendation accuracy."
  },

  // ====== LESSON 8: K-Nearest Neighbors (KNN) ======
  
  {
    id: 37,
    lesson: "Lesson 8",
    topic: "KNN Basics",
    question: "What type of learning algorithm is K-Nearest Neighbors (KNN)?",
    options: [
      "Unsupervised Learning",
      "Supervised Learning",
      "Reinforcement Learning",
      "Semi-supervised Learning"
    ],
    correct: 1,
    explanation: "K-Nearest Neighbors (KNN) is a Supervised Learning algorithm used for both classification and regression tasks."
  },
  {
    id: 38,
    lesson: "Lesson 8",
    topic: "KNN Basics",
    question: "Why is KNN called a 'lazy learner'?",
    options: [
      "It takes a long time to train",
      "It memorizes the entire dataset instead of performing explicit model training",
      "It only uses a small portion of data",
      "It requires extensive preprocessing"
    ],
    correct: 1,
    explanation: "KNN is a 'lazy learner' because it memorizes the entire dataset instead of performing explicit model training, making predictions only when needed."
  },
  {
    id: 39,
    lesson: "Lesson 8",
    topic: "KNN Basics",
    question: "What does 'non-parametric' mean in the context of KNN?",
    options: [
      "It has many parameters to tune",
      "It makes no underlying assumptions about data distribution",
      "It requires parameter optimization",
      "It has no parameters"
    ],
    correct: 1,
    explanation: "Non-parametric means KNN makes no underlying assumptions about data distribution, making it flexible for various data patterns."
  },
  {
    id: 40,
    lesson: "Lesson 8",
    topic: "KNN Basics",
    question: "What fundamental principle does KNN operate on?",
    options: [
      "Opposite things are far apart",
      "Similar things exist in close distance within a feature space",
      "All data points are equally important",
      "Distance doesn't matter"
    ],
    correct: 1,
    explanation: "KNN operates on the principle that similar things exist in close distance within a feature space, assuming inherent similarity between nearby data points."
  },
  {
    id: 41,
    lesson: "Lesson 8",
    topic: "KNN Process",
    question: "What is the first step in the KNN algorithm?",
    options: [
      "Calculate distances to all points",
      "Choose K (the number of nearest neighbors)",
      "Classify the new point",
      "Find the closest neighbor"
    ],
    correct: 1,
    explanation: "The first step is to choose K, which is the number of nearest neighbors to consider for prediction."
  },
  {
    id: 42,
    lesson: "Lesson 8",
    topic: "KNN Process",
    question: "After choosing K and calculating distances, what is the next step in KNN?",
    options: [
      "Stop the algorithm",
      "Identify the K data points with the smallest distances",
      "Remove outliers",
      "Normalize the data"
    ],
    correct: 1,
    explanation: "After calculating distances, the next step is to find the K data points with the smallest distances (the closest neighbors)."
  },
  {
    id: 43,
    lesson: "Lesson 8",
    topic: "KNN Process",
    question: "How does KNN make predictions for classification tasks?",
    options: [
      "Takes the average value of neighbors",
      "Uses the majority class of its K neighbors",
      "Uses the median class",
      "Uses only the closest neighbor"
    ],
    correct: 1,
    explanation: "For classification, KNN uses majority voting where the new point takes the majority class of its K neighbors."
  },
  {
    id: 44,
    lesson: "Lesson 8",
    topic: "KNN Process",
    question: "How does KNN make predictions for regression tasks?",
    options: [
      "Uses majority voting",
      "Uses the median value",
      "Takes the average value of the neighbors",
      "Uses the maximum value"
    ],
    correct: 2,
    explanation: "For regression, KNN takes the average value of the K neighbors to produce a numerical prediction."
  },

  // Distance Metrics
  {
    id: 45,
    lesson: "Lesson 8",
    topic: "Distance Metrics",
    question: "What does Euclidean Distance represent?",
    options: [
      "The longest path between two points",
      "The shortest straight-line distance between two points",
      "The city block distance",
      "The angular distance"
    ],
    correct: 1,
    explanation: "Euclidean Distance represents the shortest straight-line distance between two points, like walking directly from one point to another."
  },
  {
    id: 46,
    lesson: "Lesson 8",
    topic: "Distance Metrics",
    question: "What theorem is the Euclidean Distance formula derived from?",
    options: [
      "Bayes' Theorem",
      "Pythagorean Theorem",
      "Central Limit Theorem",
      "Fermat's Theorem"
    ],
    correct: 1,
    explanation: "The Euclidean Distance formula is derived from the Pythagorean Theorem (a² + b² = c²), where the distance is the hypotenuse."
  },
  {
    id: 47,
    lesson: "Lesson 8",
    topic: "Distance Metrics",
    question: "What is Manhattan Distance also known as?",
    options: [
      "Straight-line distance",
      "Taxicab distance or city block distance",
      "Angular distance",
      "Euclidean distance"
    ],
    correct: 1,
    explanation: "Manhattan Distance is also known as 'taxicab distance' or 'city block distance' because it represents the distance traveled along a grid-like path."
  },
  {
    id: 48,
    lesson: "Lesson 8",
    topic: "Distance Metrics",
    question: "What is unique about Minkowski Distance?",
    options: [
      "It only works in 2D space",
      "It's a family of distances that includes both Euclidean and Manhattan as special cases",
      "It's only used for categorical data",
      "It's the fastest to compute"
    ],
    correct: 1,
    explanation: "Minkowski distance is a flexible 'family of distances' where p=1 gives Manhattan Distance and p=2 gives Euclidean Distance."
  },
  {
    id: 49,
    lesson: "Lesson 8",
    topic: "Distance Metrics",
    question: "When p=2 in Minkowski Distance, what distance does it become?",
    options: [
      "Manhattan Distance",
      "Euclidean Distance",
      "Chebyshev Distance",
      "Cosine Distance"
    ],
    correct: 1,
    explanation: "When p=2 in the Minkowski Distance formula, it becomes Euclidean Distance."
  },
  {
    id: 50,
    lesson: "Lesson 8",
    topic: "Distance Metrics",
    question: "When p=1 in Minkowski Distance, what distance does it become?",
    options: [
      "Manhattan Distance",
      "Euclidean Distance",
      "Hamming Distance",
      "Cosine Distance"
    ],
    correct: 0,
    explanation: "When p=1 in the Minkowski Distance formula, it becomes Manhattan Distance."
  },

  // KNN Applications
  {
    id: 51,
    lesson: "Lesson 8",
    topic: "KNN Applications",
    question: "Which is a real-world application of KNN in healthcare?",
    options: [
      "Scheduling appointments",
      "Classifying tumors as benign or malignant",
      "Managing patient records",
      "Billing patients"
    ],
    correct: 1,
    explanation: "KNN is used in medical diagnosis to classify tumors as benign or malignant based on patient data by finding similar historical cases."
  },
  {
    id: 52,
    lesson: "Lesson 8",
    topic: "KNN Applications",
    question: "How is KNN used in recommendation systems?",
    options: [
      "By randomly selecting items",
      "By suggesting movies or products based on preferences of similar individuals",
      "By only showing popular items",
      "By analyzing item prices"
    ],
    correct: 1,
    explanation: "KNN is used in recommendation systems to suggest movies or products by finding users with similar preferences and recommending what they liked."
  },
  {
    id: 53,
    lesson: "Lesson 8",
    topic: "KNN Applications",
    question: "What KNN application helps detect fraudulent transactions?",
    options: [
      "Clustering transactions by amount",
      "Identifying unusual transactions by comparing patterns to known legitimate or fraudulent activities",
      "Blocking all large transactions",
      "Random transaction sampling"
    ],
    correct: 1,
    explanation: "Fraud detection uses KNN to identify unusual transactions by comparing patterns to known legitimate or fraudulent activities."
  },

  // KNN Advantages and Disadvantages
  {
    id: 54,
    lesson: "Lesson 8",
    topic: "KNN Pros and Cons",
    question: "What is an advantage of KNN?",
    options: [
      "It's very fast for large datasets",
      "It's simple, flexible, and makes no data distribution assumptions",
      "It doesn't require feature scaling",
      "It works best in high dimensions"
    ],
    correct: 1,
    explanation: "KNN is intuitive, easy to implement, and makes no data distribution assumptions, making it flexible for various problems."
  },
  {
    id: 55,
    lesson: "Lesson 8",
    topic: "KNN Pros and Cons",
    question: "What is a disadvantage of KNN?",
    options: [
      "It can't handle multi-class problems",
      "It can be computationally expensive during prediction for large datasets",
      "It requires extensive training time",
      "It only works with numerical data"
    ],
    correct: 1,
    explanation: "KNN can be computationally expensive during prediction for large datasets because it needs to calculate distances to all training points."
  },
  {
    id: 56,
    lesson: "Lesson 8",
    topic: "KNN Pros and Cons",
    question: "Why does KNN require feature scaling?",
    options: [
      "To make the algorithm faster",
      "For optimal performance since features with larger scales can dominate distance calculations",
      "To reduce memory usage",
      "It doesn't require feature scaling"
    ],
    correct: 1,
    explanation: "KNN requires data normalization or standardization for optimal performance because features with larger scales can dominate the distance calculations."
  },
  {
    id: 57,
    lesson: "Lesson 8",
    topic: "KNN Pros and Cons",
    question: "What is the 'curse of dimensionality' in KNN?",
    options: [
      "Too many neighbors slow down the algorithm",
      "Performance degrades with high-dimensional data as distances become less meaningful",
      "The algorithm uses too much memory",
      "Training takes too long"
    ],
    correct: 1,
    explanation: "The curse of dimensionality refers to KNN's performance degrading with high-dimensional data as distances become less meaningful in high dimensions."
  },
  {
    id: 58,
    lesson: "Lesson 8",
    topic: "KNN Pros and Cons",
    question: "What advantage does KNN have regarding its training phase?",
    options: [
      "It trains very quickly",
      "As a 'lazy learner,' the data itself is the model with no explicit training",
      "It requires minimal data",
      "It automatically selects features"
    ],
    correct: 1,
    explanation: "As a 'lazy learner,' KNN has no training phase - the data itself is the model, and no explicit training model is created."
  },

  // ====== LESSON 9: Heuristic Search Algorithms ======
  
  {
    id: 59,
    lesson: "Lesson 9",
    topic: "Heuristic Search",
    question: "What is a heuristic in problem-solving?",
    options: [
      "An exact solution method",
      "A technique to solve problems faster or find approximate solutions when exact ones are costly",
      "A random search method",
      "A brute-force approach"
    ],
    correct: 1,
    explanation: "A heuristic is a technique used to solve problems faster than classic methods or to find approximate solutions when exact ones are too costly."
  },
  {
    id: 60,
    lesson: "Lesson 9",
    topic: "Heuristic Search",
    question: "What do heuristics prioritize?",
    options: [
      "Optimality over speed",
      "Speed over perfection, often trading optimality for quicker solutions",
      "Completeness over accuracy",
      "Memory efficiency over speed"
    ],
    correct: 1,
    explanation: "Heuristics prioritize speed, often trading optimality or completeness for a quicker, informed solution."
  },
  {
    id: 61,
    lesson: "Lesson 9",
    topic: "Heuristic Search",
    question: "What does a heuristic function do?",
    options: [
      "Finds the exact solution",
      "Estimates how close a state is to the goal",
      "Searches all possible states",
      "Randomly selects the next state"
    ],
    correct: 1,
    explanation: "A heuristic function estimates how close a state is to the goal, intelligently guiding the search toward promising paths."
  },
  {
    id: 62,
    lesson: "Lesson 9",
    topic: "Heuristic Search",
    question: "Why do we need heuristics in search problems?",
    options: [
      "To guarantee optimal solutions",
      "Because exhaustive search methods are impractical for exponentially large search spaces",
      "To use less memory",
      "To make problems more complex"
    ],
    correct: 1,
    explanation: "Exhaustive search methods are impractical for many problems with exponentially large search spaces, so heuristics dramatically reduce search time by focusing on promising paths."
  },

  // Hill Climbing
  {
    id: 63,
    lesson: "Lesson 9",
    topic: "Hill Climbing",
    question: "What type of approach does Hill Climbing use?",
    options: [
      "Breadth-first approach",
      "Greedy approach moving to states with incrementally better scores",
      "Random walk approach",
      "Depth-first approach"
    ],
    correct: 1,
    explanation: "Hill Climbing uses a greedy approach, moving step-by-step to states with incrementally better scores."
  },
  {
    id: 64,
    lesson: "Lesson 9",
    topic: "Hill Climbing",
    question: "What is a potential pitfall of Hill Climbing?",
    options: [
      "It's too slow",
      "It can get stuck at local maxima, plateaus, or ridges",
      "It uses too much memory",
      "It always finds the global optimum"
    ],
    correct: 1,
    explanation: "Hill Climbing can get stuck at local maxima, plateaus, or ridges, which may prevent it from reaching the global optimum."
  },

  // Greedy Best-First Search
  {
    id: 65,
    lesson: "Lesson 9",
    topic: "Greedy Best-First Search",
    question: "What does Greedy Best-First Search always expand?",
    options: [
      "The node with the lowest actual cost",
      "The node estimated to be closest to the goal",
      "A random node",
      "The first node found"
    ],
    correct: 1,
    explanation: "Greedy Best-First Search always expands the node estimated to be closest to the goal using the heuristic function h(n)."
  },
  {
    id: 66,
    lesson: "Lesson 9",
    topic: "Greedy Best-First Search",
    question: "What is a disadvantage of Greedy Best-First Search?",
    options: [
      "It's too slow",
      "It can get stuck in loops and is not optimal",
      "It uses too much memory",
      "It requires extensive preprocessing"
    ],
    correct: 1,
    explanation: "Greedy Best-First Search can get stuck in loops and is not optimal, meaning it may not find the shortest path."
  },

  // A* Search
  {
    id: 67,
    lesson: "Lesson 9",
    topic: "A* Search",
    question: "What does the function f(n) represent in A* Search?",
    options: [
      "Only the heuristic estimate",
      "The combination of actual cost g(n) and heuristic estimate h(n)",
      "Only the actual cost incurred",
      "The number of nodes expanded"
    ],
    correct: 1,
    explanation: "In A* Search, f(n) = g(n) + h(n), combining the actual cost incurred so far g(n) and the heuristic estimate to the goal h(n)."
  },
  {
    id: 68,
    lesson: "Lesson 9",
    topic: "A* Search",
    question: "What does g(n) represent in A* Search?",
    options: [
      "Heuristic estimate to the goal",
      "Actual cost from start to node n",
      "Total estimated cost",
      "Number of steps"
    ],
    correct: 1,
    explanation: "g(n) represents the actual cost incurred from the start node to the current node n."
  },
  {
    id: 69,
    lesson: "Lesson 9",
    topic: "A* Search",
    question: "What does h(n) represent in A* Search?",
    options: [
      "Actual cost from start",
      "Heuristic estimate from node n to the goal",
      "Total path cost",
      "Number of neighbors"
    ],
    correct: 1,
    explanation: "h(n) represents the heuristic estimate of the cost from node n to the goal."
  },
  {
    id: 70,
    lesson: "Lesson 9",
    topic: "A* Search",
    question: "When does A* guarantee an optimal solution?",
    options: [
      "Always",
      "If the heuristic is admissible (never overestimates)",
      "Never",
      "Only for small problems"
    ],
    correct: 1,
    explanation: "A* guarantees an optimal solution if the heuristic used is admissible, meaning it never overestimates the true cost."
  },
  {
    id: 71,
    lesson: "Lesson 9",
    topic: "A* Search",
    question: "How does A* choose which path to explore?",
    options: [
      "Randomly",
      "Always chooses the path with the lowest f(n) value",
      "Chooses the most recent path",
      "Explores all paths equally"
    ],
    correct: 1,
    explanation: "A* systematically evaluates paths and always chooses the one with the lowest f(n) = g(n) + h(n) to identify the shortest path effectively."
  },

  // Heuristic Characteristics
  {
    id: 72,
    lesson: "Lesson 9",
    topic: "Heuristic Characteristics",
    question: "What does it mean for a heuristic to be 'admissible'?",
    options: [
      "It always overestimates the cost",
      "It never overestimates the true cost to reach the goal",
      "It gives random estimates",
      "It only works for specific problems"
    ],
    correct: 1,
    explanation: "An admissible heuristic never overestimates the true cost to reach the goal, ensuring optimality in algorithms like A*."
  },
  {
    id: 73,
    lesson: "Lesson 9",
    topic: "Heuristic Characteristics",
    question: "What does it mean for a heuristic to be 'consistent' (monotonic)?",
    options: [
      "It gives the same value for all nodes",
      "The estimated cost from current node to neighbor plus neighbor's heuristic ≤ current node's heuristic",
      "It increases monotonically",
      "It's always zero"
    ],
    correct: 1,
    explanation: "A consistent (monotonic) heuristic ensures that the estimated cost from a current node to a neighbor, plus that neighbor's heuristic, must be ≤ the current node's heuristic."
  },
  {
    id: 74,
    lesson: "Lesson 9",
    topic: "Heuristic Characteristics",
    question: "Why should heuristics be domain-specific?",
    options: [
      "To make them more complex",
      "Incorporating knowledge specific to the problem domain enhances search efficiency",
      "To make them slower",
      "It's not important to be domain-specific"
    ],
    correct: 1,
    explanation: "Incorporating knowledge specific to the problem domain enhances search efficiency by providing better estimates and guidance."
  },

  // Greedy Algorithms
  {
    id: 75,
    lesson: "Lesson 9",
    topic: "Greedy Algorithms",
    question: "What is the main characteristic of a Greedy Algorithm?",
    options: [
      "It explores all possible solutions",
      "It makes the locally optimal choice at each stage",
      "It backtracks when needed",
      "It uses dynamic programming"
    ],
    correct: 1,
    explanation: "A Greedy Algorithm makes the locally optimal choice at each stage with the hope of finding a global optimum."
  },
  {
    id: 76,
    lesson: "Lesson 9",
    topic: "Greedy Algorithms",
    question: "What is the 'greedy-choice property'?",
    options: [
      "The algorithm is fast",
      "A global optimum can be reached by selecting a local optimum",
      "All choices are equally good",
      "The algorithm uses minimal memory"
    ],
    correct: 1,
    explanation: "The greedy-choice property means that a global optimum can be reached by selecting a local optimum at each step."
  },
  {
    id: 77,
    lesson: "Lesson 9",
    topic: "Greedy Algorithms",
    question: "What is 'optimal substructure' in greedy algorithms?",
    options: [
      "The algorithm has minimal code",
      "An optimal solution to the problem contains optimal solutions to its subproblems",
      "The structure uses optimal memory",
      "The algorithm is optimally fast"
    ],
    correct: 1,
    explanation: "Optimal substructure means an optimal solution to the problem contains optimal solutions to its subproblems."
  },

  // Applications
  {
    id: 78,
    lesson: "Lesson 9",
    topic: "Applications",
    question: "Which algorithm is the backbone for GPS navigation services like Google Maps?",
    options: [
      "Hill Climbing",
      "A* Search",
      "Greedy Best-First",
      "Random Search"
    ],
    correct: 1,
    explanation: "A* is the backbone for finding the shortest route in GPS navigation services like Google Maps and Waze."
  },
  {
    id: 79,
    lesson: "Lesson 9",
    topic: "Applications",
    question: "Where are heuristic search algorithms used in robotics?",
    options: [
      "Only for robot vision",
      "For path planning for autonomous robots in warehouses",
      "Only for robot assembly",
      "For robot maintenance"
    ],
    correct: 1,
    explanation: "Heuristic search algorithms are used for path planning for autonomous robots in warehouses, such as Amazon Kiva robots."
  },
  {
    id: 80,
    lesson: "Lesson 9",
    topic: "Applications",
    question: "How are heuristic algorithms used in video games?",
    options: [
      "For graphics rendering only",
      "For NPC movement and AI pathfinding",
      "For sound effects",
      "For saving game progress"
    ],
    correct: 1,
    explanation: "Heuristic algorithms power NPC (Non-Player Character) movement and AI pathfinding in video games."
  },

  // ====== LESSON 10: Genetic Algorithms ======
  
  {
    id: 81,
    lesson: "Lesson 10",
    topic: "Genetic Algorithms",
    question: "What are Genetic Algorithms?",
    options: [
      "A type of neural network",
      "A search technique inspired by natural evolution",
      "A clustering algorithm",
      "A sorting algorithm"
    ],
    correct: 1,
    explanation: "Genetic algorithms are search techniques used to find true or approximate solutions to optimization problems, inspired by natural evolution."
  },
  {
    id: 82,
    lesson: "Lesson 10",
    topic: "Genetic Algorithms",
    question: "What branch of AI do Genetic Algorithms belong to?",
    options: [
      "Machine Learning",
      "Evolutionary Computing",
      "Deep Learning",
      "Expert Systems"
    ],
    correct: 1,
    explanation: "Genetic algorithms are branches of evolutionary computing, a subset of artificial intelligence where solutions evolve over time."
  },
  {
    id: 83,
    lesson: "Lesson 10",
    topic: "Genetic Algorithms",
    question: "Which natural process inspires Genetic Algorithms?",
    options: [
      "Photosynthesis",
      "Natural evolution including inheritance, mutation, selection, and crossover",
      "Chemical reactions",
      "Gravitational force"
    ],
    correct: 1,
    explanation: "Techniques in GAs are inspired by natural evolution, including inheritance, mutation, selection, and crossover."
  },

  // GA Terms
  {
    id: 84,
    lesson: "Lesson 10",
    topic: "GA Terms",
    question: "What is a Population in Genetic Algorithms?",
    options: [
      "A single solution",
      "The set of all current individuals (potential solutions)",
      "The best solution found",
      "The number of iterations"
    ],
    correct: 1,
    explanation: "Population is the set of all current individuals (potential solutions) in a genetic algorithm."
  },
  {
    id: 85,
    lesson: "Lesson 10",
    topic: "GA Terms",
    question: "What is a Chromosome in Genetic Algorithms?",
    options: [
      "A fitness score",
      "An array of bits or characters representing a solution",
      "A generation counter",
      "A mutation rate"
    ],
    correct: 1,
    explanation: "A Chromosome is an array of bits or characters representing a solution in the genetic algorithm."
  },
  {
    id: 86,
    lesson: "Lesson 10",
    topic: "GA Terms",
    question: "What is a Gene in Genetic Algorithms?",
    options: [
      "A complete solution",
      "A single unit or bit within a chromosome",
      "A fitness function",
      "A population"
    ],
    correct: 1,
    explanation: "A Gene is a single unit or bit within a chromosome in a genetic algorithm."
  },
  {
    id: 87,
    lesson: "Lesson 10",
    topic: "GA Terms",
    question: "What is Fitness in Genetic Algorithms?",
    options: [
      "The number of genes",
      "A score representing how well an individual solves the problem",
      "The size of the population",
      "The mutation rate"
    ],
    correct: 1,
    explanation: "Fitness is a score representing how well an individual solves the problem - higher fitness means better solution."
  },
  {
    id: 88,
    lesson: "Lesson 10",
    topic: "GA Terms",
    question: "What is Selection in Genetic Algorithms?",
    options: [
      "Randomly picking individuals",
      "Choosing the best individuals to reproduce",
      "Removing bad solutions",
      "Sorting the population"
    ],
    correct: 1,
    explanation: "Selection is the process of choosing the best individuals (based on fitness) to reproduce and pass their genes to the next generation."
  },
  {
    id: 89,
    lesson: "Lesson 10",
    topic: "GA Terms",
    question: "What is Crossover in Genetic Algorithms?",
    options: [
      "Deleting genes",
      "Exchanging genes between two parents to create offspring",
      "Copying a parent exactly",
      "Randomly changing genes"
    ],
    correct: 1,
    explanation: "Crossover is the process of exchanging genes between two parents to create offspring with characteristics from both."
  },
  {
    id: 90,
    lesson: "Lesson 10",
    topic: "GA Terms",
    question: "What is Mutation in Genetic Algorithms?",
    options: [
      "Copying genes exactly",
      "Randomly changing genes to maintain diversity",
      "Removing genes",
      "Sorting genes"
    ],
    correct: 1,
    explanation: "Mutation is the process of randomly changing genes to maintain diversity in the population and avoid premature convergence."
  },

  // GA Process
  {
    id: 91,
    lesson: "Lesson 10",
    topic: "GA Process",
    question: "What is the first step in the Genetic Algorithm process?",
    options: [
      "Selection",
      "Initialization - create the initial population randomly",
      "Crossover",
      "Mutation"
    ],
    correct: 1,
    explanation: "The first step after starting is Initialization, where the initial population is created randomly."
  },
  {
    id: 92,
    lesson: "Lesson 10",
    topic: "GA Process",
    question: "What happens after initialization in a Genetic Algorithm?",
    options: [
      "Stop immediately",
      "Evaluation - determine the fitness of each individual",
      "Mutation",
      "Selection"
    ],
    correct: 1,
    explanation: "After initialization, the algorithm evaluates the fitness of each individual in the population."
  },
  {
    id: 93,
    lesson: "Lesson 10",
    topic: "GA Process",
    question: "In the GA loop, what happens after Selection?",
    options: [
      "Stop the algorithm",
      "Crossover - mate parents and exchange genes",
      "Initialize new population",
      "Evaluate fitness"
    ],
    correct: 1,
    explanation: "After selection, crossover occurs where selected parents mate and exchange genes to create offspring."
  },
  {
    id: 94,
    lesson: "Lesson 10",
    topic: "GA Process",
    question: "What happens after Crossover in the GA loop?",
    options: [
      "Stop the algorithm",
      "Mutation - randomly modify genes in offspring",
      "Selection",
      "Initialization"
    ],
    correct: 1,
    explanation: "After crossover, mutation occurs where genes in offspring are randomly modified to maintain diversity."
  },
  {
    id: 95,
    lesson: "Lesson 10",
    topic: "GA Process",
    question: "When does a Genetic Algorithm stop?",
    options: [
      "After one iteration",
      "When the termination/convergence condition is met",
      "After 10 iterations",
      "When mutation occurs"
    ],
    correct: 1,
    explanation: "The algorithm checks the termination condition and stops if met; otherwise, it loops back to repeat the process."
  },

  // GA Foundation
  {
    id: 96,
    lesson: "Lesson 10",
    topic: "GA Foundation",
    question: "What happens to the fittest individuals in a GA population?",
    options: [
      "They are removed",
      "They are more successful and create more offspring",
      "They remain unchanged",
      "They are mutated more"
    ],
    correct: 1,
    explanation: "The fittest individuals are more successful and create more offspring, passing their advantageous genes to the next generation."
  },
  {
    id: 97,
    lesson: "Lesson 10",
    topic: "GA Foundation",
    question: "Can offspring in a GA be better than either parent?",
    options: [
      "No, offspring are always worse",
      "Yes, genes from fittest parents can create offspring better than either parent",
      "Offspring are always identical to parents",
      "Offspring are always average of parents"
    ],
    correct: 1,
    explanation: "Genes from the fittest parents propagate, sometimes creating offspring that are better than either parent through beneficial gene combinations."
  },
  {
    id: 98,
    lesson: "Lesson 10",
    topic: "GA Foundation",
    question: "What happens to successive generations in a Genetic Algorithm?",
    options: [
      "They become weaker",
      "They become more suited to their environment",
      "They remain the same",
      "They become more random"
    ],
    correct: 1,
    explanation: "Consequently, each successive generation becomes more suited to its environment as beneficial traits accumulate."
  },

  // GA Operators
  {
    id: 99,
    lesson: "Lesson 10",
    topic: "Selection Operator",
    question: "What does the Selection Operator do?",
    options: [
      "Randomly selects any individuals",
      "Gives preference to individuals with high fitness scores",
      "Selects the worst individuals",
      "Selects individuals for deletion"
    ],
    correct: 1,
    explanation: "The Selection Operator gives preference to individuals with high fitness scores, allowing them to pass their genes to the next generation."
  },
  {
    id: 100,
    lesson: "Lesson 10",
    topic: "Crossover Operator",
    question: "What does the Crossover Operator represent?",
    options: [
      "Death of individuals",
      "Mating between two individuals",
      "Mutation",
      "Selection"
    ],
    correct: 1,
    explanation: "The Crossover Operator represents mating between two individuals, where genes are exchanged to create offspring."
  },
  {
    id: 101,
    lesson: "Lesson 10",
    topic: "Crossover Operator",
    question: "How are crossover sites chosen?",
    options: [
      "Always at the middle",
      "Randomly",
      "At the beginning only",
      "At the end only"
    ],
    correct: 1,
    explanation: "Crossover sites are chosen randomly, and genes are exchanged at these sites to create a completely new individual (offspring)."
  },
  {
    id: 102,
    lesson: "Lesson 10",
    topic: "Mutation Operator",
    question: "What is the goal of the Mutation Operator?",
    options: [
      "To copy parents exactly",
      "To maintain diversity and avoid premature convergence",
      "To remove bad genes",
      "To speed up the algorithm"
    ],
    correct: 1,
    explanation: "The Mutation Operator inserts random genes into offspring to maintain diversity in the population and avoid premature convergence (getting stuck at sub-optimal solutions)."
  },
  {
    id: 103,
    lesson: "Lesson 10",
    topic: "Mutation Operator",
    question: "What is 'premature convergence' that mutation helps prevent?",
    options: [
      "Finding the solution too quickly",
      "Getting stuck at a sub-optimal solution",
      "Taking too long to converge",
      "Not converging at all"
    ],
    correct: 1,
    explanation: "Premature convergence means getting stuck at a sub-optimal solution before exploring better alternatives. Mutation helps prevent this by maintaining diversity."
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
