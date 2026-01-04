This document provides a detailed review of the **K-Nearest Neighbors (KNN)** algorithm, covering its principles, distance metrics, and practical applications as outlined in the Lesson 8 Reviewer.

---

# Lesson 8: K-Nearest Neighbors (KNN) Reviewer

## 1. What is K-Nearest Neighbors (KNN)?

***K-Nearest Neighbors (KNN)*** is a ***Supervised Learning*** algorithm.

* 
***Supervised Learning***: A versatile machine learning algorithm primarily used for both ***classification and regression*** tasks.


* 
***Non-Parametric & Lazy***: It is ***non-parametric***, meaning it makes no underlying assumptions about data distribution. It is also a ***"lazy learner"*** because it memorizes the entire dataset instead of performing explicit model training.


* 
***Prediction by Distance***: Predictions are made by identifying and analyzing the ***"K" closest data points*** to a new, unclassified input to form a local estimate.



---

## 2. Why Use KNN? The Power of Distance

KNN operates on the fundamental principle that ***similar things exist in close distance*** within a feature space.

* It is incredibly ***intuitive and accessible*** because it assumes inherent similarity between nearby data points.


* It is remarkably ***easy to understand and implement***, even for beginners.


* It is highly effective for tasks like ***pattern recognition***, building ***recommendation engines***, and supporting ***data-driven decision-making***.



---

## 3. How Does KNN Work? Step-by-Step

The process follows these core steps:

1. 
***Choose K***: Select the number of nearest neighbors (K) to consider for prediction.


2. 
***Calculate Distances***: Measure the distance from the new data point to all training data points.


3. 
***Identify Neighbors***: Find the ***K data points with the smallest distances*** (the closest neighbors).


4. ***Classify or Regress***:
* For ***classification***, the new point takes the ***majority class*** of its K neighbors.


* For ***regression***, it takes the ***average value*** of the neighbors.





---

## 4. Distance Metrics Formulas

### 4.1 Euclidean Distance

The ***Euclidean Distance*** represents the ***shortest straight-line distance*** between two points. It is most commonly used for numerical data like floating-point or integer values.

* 
***Definition***: Think of it as the shortest path you would walk directly from one point to another.


* ***Formula***: The distance  between points  and  is:






* 
***Derivation***: This formula is derived from the ***Pythagorean Theorem*** (), where the distance is the hypotenuse of a right-angled triangle formed by the difference in coordinates.



### 4.2 Manhattan Distance

Also known as ***"taxicab distance"*** or ***"city block distance,"*** this represents the total distance traveled if you could only move along horizontal and vertical lines like a city grid.

* ***Formula***: The Manhattan Distance  between two points is:





* 
***Absolute Value***: This ensures the distance is ***always positive***, regardless of direction.


* 
***Usage***: Often used in ***clustering algorithms*** or when a distance metric between datasets is needed in a grid-like path.



### 4.3 Minkowski Distance

***Minkowski distance*** is a flexible ***"family of distances"*** that includes both Euclidean and Manhattan distances as special cases.

* ***General Formula***:






* When ***p = 1***, it becomes ***Manhattan Distance***.


* When ***p = 2***, it becomes ***Euclidean Distance***.



---

## 5. Detailed Steps: Working with KNN

1. 
***Selecting the optimal value of K***: K is the number of neighbors considered during prediction.


2. 
***Calculating distance***: Euclidean distance is widely used to measure similarity between the target and training data points.


3. 
***Finding Nearest Neighbors***: Identify the  data points with the smallest distances.


4. ***Voting or Averaging***:
* 
***Classification***: Uses ***majority voting*** where the algorithm picks the category that appears most among neighbors.


* 
***Regression***: Takes the ***average of the values*** of those K neighbors to predict the value for the new point.





---

## 6. Real-World Applications of KNN

* 
***Medical Diagnosis***: Classifying tumors as benign or malignant based on patient data.


* 
***Recommendation Systems***: Suggesting movies or products based on preferences of similar individuals.


* 
***Fraud Detection***: Identifying unusual transactions by comparing patterns to known legitimate or fraudulent activities.


* 
***Image Recognition***: Categorizing objects by finding similarities to labeled image data.



---

## 7. Advantages & Disadvantages of KNN

| ***Advantages*** | ***Disadvantages*** |
| --- | --- |
| <br>***Simplicity & Flexibility***: Intuitive, easy to implement, and makes no data distribution assumptions.

 | <br>***Computational Cost***: Can be expensive during prediction for large datasets.

 |
| <br>***Handles Complexity***: Works with multi-class problems and complex decision boundaries.

 | <br>***Feature Scaling Needed***: Requires data normalization or standardization for optimal performance.

 |
| <br>***No Training Phase***: As a "lazy learner," the data itself is the model; no explicit training model is created.

 | <br>***Curse of Dimensionality***: Performance degrades with high-dimensional data as distances become less meaningful.

 |

---

Would you like me to help you solve a practice problem calculating Euclidean and Manhattan distances for a set of data points?