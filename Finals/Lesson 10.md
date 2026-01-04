
---

# Lesson 10: Genetic Algorithm Reviewer

## 1. What is a Genetic Algorithm?

***Genetic algorithms (GAs)*** are branches of **evolutionary computing**, a subset of artificial intelligence where solutions evolve over time to solve specific problems or fit certain parameters.

* 
**Definition**: A search technique used to find true or approximate solutions to optimization and search problems.


* 
**Inspiration**: Techniques are inspired by **natural evolution**, including inheritance, mutation, selection, and crossover.


* 
**Implementation**: GAs typically use an array of bits or characters to represent **chromosomes**.



---

## 2. Key Terms

Understanding these biological analogies is essential to mastering Genetic Algorithms:

* 
***Population***: The set of all current individuals (potential solutions).


* 
***Chromosome***: An array of bits or characters representing a solution.


* 
***Gene***: A single unit or bit within a chromosome.


* 
***Fitness***: A score representing how well an individual solves the problem.


* 
***Selection***: Choosing the best individuals to reproduce.


* 
***Crossover***: Exchanging genes between two parents to create offspring.


* 
***Mutation***: Randomly changing genes to maintain diversity.



---

## 3. Process Flow

The algorithm follows a cyclical process until an optimal solution is reached:

1. 
**Start**.


2. 
**Initialization**: Create the initial population randomly.


3. 
**Evaluation**: Determine the **fitness** of each individual in the population.


4. 
**Loop (Repeat until termination/convergence)**:


* 
**Selection**: Select the best-ranking individuals to serve as parents.


* 
**Crossover**: Mate parents and exchange genes to create offspring.


* 
**Mutation**: Randomly modify genes in offspring to maintain diversity.


* 
**Create New Population**: Calculate the fitness of the offspring and replace the worst-ranked part of the old population.




5. 
**Check Termination**: If the end condition is met, **stop**; if not, loop back to repeat the process.



---

## 4. Foundation of Genetic Algorithms

GAs are based on the behavior of biological populations competing for resources:

* Individuals in a population **compete and mate**.


* The **fittest individuals** are more successful and create more offspring.


* Genes from the fittest parents propagate, sometimes creating offspring that are **better than either parent**.


* Consequently, each successive generation becomes **more suited** to its environment.



---

## 5. Operators of Genetic Algorithms

### 5.1 Selection Operator

This operator gives preference to individuals with high fitness scores, allowing them to pass their genes to the next generation.

### 5.2 Crossover Operator

Represents mating between two individuals.

* Crossover sites are chosen randomly.


* Genes are exchanged at these sites to create a completely new individual (offspring).


* **Example**:
* **Parent 1**: A B | **C D** | E F G H 


* **Parent 2**: F G | **H A** | D B E A 


* 
**Offspring**: F G H B C D E A (resulting from gene exchange) 





### 5.3 Mutation Operator

This operator inserts **random genes** into offspring.

* 
**Goal**: To maintain diversity in the population and avoid **premature convergence** (getting stuck at a sub-optimal solution).


* **Example**:
* 
**Before Mutation**: F G H B C D E A 


* 
**After Mutation**: F G **M** B C D E **N** (Random genes 'M' and 'N' inserted) 





---
