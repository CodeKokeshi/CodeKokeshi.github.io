
---

Lesson 7: Collaborative Filtering Reviewer 

1. Introduction to Collaborative Filtering 

1.1 Core Concept 

The fundamental logic behind collaborative filtering is built on user similarity:

* If an item is **liked by both Alice and Bob**, it implies they are **Similar Users**.


* Consequently, if Alice likes a new item, that item can be **recommended to Bob**.


* This process is formally known as **Collaborative learning**.



---

2. What is a Recommendation System? 

Websites collect data from users to predict their likes and dislikes, allowing them to recommend preferred content. These systems suggest items and ideas tailored to a user's specific way of thinking.

2.1 Two Types of Recommendation Systems 

1. 
**Collaborative Filtering**: Recommends items based on **similarity measures** between users and/or items.


2. 
**Content-Based Recommendation**: A supervised machine learning approach that uses a classifier to distinguish between **interesting and uninteresting items** for a specific user.



---

3. What is Collaborative Filtering? 

In this system, the focus is on finding similar users rather than analyzing item features. Users are classified into **clusters of similar types**, and recommendations are made based on the preferences of that cluster.

3.1 4 Types of Collaborative Filtering 

* 
***Memory-Based*** 


* 
***Model-Based*** 


* 
***Hybrid*** 


* 
***Deep Learning*** 



3.2 Collaborative Filtering Visually 

The visual flow typically follows these steps:

* Identify **similar users**.


* If **User A** buys an item and **User B** buys a similar item, the system identifies the pattern.


* The system then generates a recommendation (e.g., recommending "COLA").



---

4. Measuring Similarity in Collaborative Filtering 

Similarity is measured by looking at how users rate different movies across a dataset:

| Users | Movie 1 | Movie 2 | Movie 3 | Movie 4 |
| --- | --- | --- | --- | --- |
| **User 1** | 5 | 4 |  | 5 |
| **User 2** |  | 4 | 1 | 3 |
| **User 3** |  |  |  |  |
| **User 4** | 1 | 2 |  | 2 |
| <br>(Note: Data derived from source )

 |  |  |  |  |

---

5. Rounding the Data 

To make comparisons easier, data is often rounded into binary values:

* Ratings **below 3** are assigned as **0**.


* Ratings **above 3** are assigned as **1**.



**Example of Rounded Data:** 

| Users | Movie 1 | Movie 2 | Movie 3 | Movie 4 |
| --- | --- | --- | --- | --- |
| **User 1** | 1 | 1 |  | 1 |
| **User 2** |  | 1 |  | 1 |
| **User 3** |  | 0 |  | 0 |
| **User 4** | 0 | 0 |  |  |
| <br>(Note: Data derived from source )

 |  |  |  |  |

---

6. Normalizing Ratings 

Normalizing involves taking a user's **average rating** and subtracting it from all their given ratings. This results in positive or negative values that help classify users into similar clusters.

6.1 Step-by-Step Example 

1. 
**Compute Average Rating**: If a user rated three movies as 4, 5, and 2, their average is: 






2. 
**Subtract Average from Each Rating**: 


* 
**Movie 1**:  


* 
**Movie 2**:  


* 
**Movie 3**:  




3. 
**Use Results**: These **normalized ratings** are used for final analysis instead of raw data.



---
