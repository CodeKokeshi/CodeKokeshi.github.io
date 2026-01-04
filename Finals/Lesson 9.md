
---

# Lesson 9: Heuristic Search Algorithms Reviewer

## 1. What Is Heuristic Search?

* 
***Intelligent Shortcuts***: A heuristic is a technique used to solve problems faster than classic methods or to find approximate solutions when exact ones are too costly.


* 
***Speed Over Perfection***: Heuristics prioritize speed, often trading optimality or completeness for a quicker, informed solution.


* 
***Guided Estimation***: It uses a ***heuristic function*** to estimate how close a state is to the goal, intelligently guiding the search.



### Why Do We Need Heuristics?

* 
***Tackling Complexity***: Exhaustive search methods are impractical for many problems with exponentially large search spaces.


* 
***Efficiency Boost***: By focusing on promising paths, heuristics dramatically reduce search time.



---

## 2. Common Heuristic Search Algorithms

### 2.1 Hill Climbing Algorithm

* 
***Greedy Approach***: This algorithm moves step-by-step to states with incrementally better scores.


* 
***Potential Pitfalls***: It can get stuck at ***local maxima***, ***plateaus***, or ***ridges***, which may prevent it from reaching the global optimum.


* 
***Example***: Navigating a car toward a monument by always moving closer to it, though you might get stuck in a traffic loop.



### 2.2 Greedy Best-First Search

* 
***Concept***: This search always expands the node estimated to be closest to the goal.


* 
***Formula***: .


* 
***Pros***: It is very fast and efficient in simple cases.


* 
***Cons***: It can get stuck in loops and is **not optimal**, meaning it may not find the shortest path.



### 2.3 A* Search Algorithm

* 
***Combined Evaluation***:  combines the actual cost incurred so far  and the heuristic estimate to the goal  into a single function:







* 
***Optimality Guarantee***: It guarantees an optimal solution if the heuristic used is ***admissible*** (it never overestimates the true cost).


* 
***Action***: It systematically evaluates paths and always chooses the one with the lowest  to identify the shortest path effectively.



---

## 3. Characteristics of Good Heuristics

* 
***Admissible***: A heuristic should never overestimate the true cost to reach the goal.


* 
***Consistent (Monotonic)***: The estimated cost from a current node to a neighbor, plus that neighbor's heuristic, must be  the current node's heuristic.


* 
***Domain-Specific***: Incorporating knowledge specific to the problem domain enhances search efficiency.



---

## 4. Greedy Algorithms

A paradigm that makes the **locally optimal choice** at each stage with the hope of finding a global optimum.

### When to use a Greedy approach?

A problem must have these two properties:

1. 
***Greedy-choice property***: A global optimum can be reached by selecting a local optimum.


2. 
***Optimal Substructure***: An optimal solution to the problem contains optimal solutions to its subproblems.



---

## 5. Real-World Applications

* 
***GPS Navigation***:  is the backbone for finding the shortest route in services like Google Maps and Waze.


* 
***Robotics***: Used for path planning for autonomous robots in warehouses, such as Amazon Kiva.


* 
***Video Games***: Powers NPC movement and AI pathfinding.


* 
***Network Routing***: Optimizes data packet paths across the internet.



---