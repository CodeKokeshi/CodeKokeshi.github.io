# **Fog Computing**

**Lesson 7**

## **Architecture Layers**

The ecosystem is organized into the following levels:

* ***Cloud-Layer***: ***Cloud/Data-Center***  
* ***Fog-Layer***: ***Fog-Nodes***  
* ***Edge-Layer***: ***Edge-Gateway***, ***Edge-Devices***

## **What is Fog Computing?**

1. ***Decentralized Architecture***: Extending ***cloud capabilities*** to the ***network edge***, enabling powerful ***local processing***.  
2. ***Cisco's Vision (2014)***: Coined to describe computing ***"close to the ground"*** — near where ***data is generated***.  
3. ***Faster Processing***: Handles data ***closer to its source***, significantly ***reducing latency*** and ***improving responsiveness***.

## **Why Fog Computing? Cloud's Limitations**

* ***High Latency***: ***Cloud computing*** suffers from ***delays***, hindering ***real-time applications***.  
* ***Bandwidth Bottlenecks***: ***Centralized processing*** creates ***network congestion*** unsuitable for ***time-sensitive IoT*** and ***industrial systems***.  
* ***Increased Security Risks***: Data traveling ***long distances*** to ***centralized clouds*** faces more ***exposure*** and ***potential threats***.

## **Fog vs. Cloud Computing**

* ***Latency***:  
  * ***Fog***: ***Low latency*** for immediate responses.  
  * ***Cloud***: ***High latency*** due to distance.  
* ***Location***:  
  * ***Fog***: ***Nodes*** at ***local network edge***, close to ***data sources***.  
  * ***Cloud***: ***Centralized servers*** located remotely.  
* ***Data Hops***:  
  * ***Fog***: Processes data in ***one hop*** or very few.  
  * ***Cloud***: Requires ***multiple hops***, increasing delay.  
* ***Security***:  
  * ***Fog***: ***Enhanced security*** by ***localizing sensitive data***.  
  * ***Cloud***: More ***vulnerable*** due to longer data travel.

## **Fog Computing Architecture Overview**

* ***Cloud Data Centers***: ***Centralized analytics***, ***long-term storage***, and ***control***.  
* ***Fog Nodes***: ***Local servers/gateways*** for ***computation and buffering***.  
* ***Edge Devices***: ***Sensors, cameras, and actuators*** collecting data.

## **Core Characteristics of Fog Computing**

* ***Low Latency***: Processes data close to the source for ***fast response***.  
* ***Proximity***: ***Fog nodes*** operate near ***IoT devices***.  
* ***Real-Time Processing***: Supports ***instant or near-instant analytics***.  
* ***Distributed Architecture***: Uses many ***small nodes*** instead of one ***central server***.

## **Real-World Applications of Fog Computing**

* ***Industrial IoT***: ***Real-time monitoring and control*** of ***manufacturing equipment*** for optimal efficiency.  
* ***Smart Cities***: Enhancing ***traffic light management*** and ***public safety systems*** with ***ultra-low latency responses***. (Example Locations: Zapote 3, Barangay Hall, Paseo Verde, Real Condominium, Maricielo Villas).  
* ***Autonomous Vehicles***: ***Immediate processing*** of ***sensor data*** crucial for ***navigation, collision avoidance, and safety***.  
* ***Content Delivery***: ***Netflix's edge caching infrastructure*** reduces ***streaming delays*** and ***conserves network bandwidth***.

## **Advantages of Fog Computing**

* ***Reduced Cloud Data***: Less data sent to the cloud, lowering ***bandwidth usage*** and ***network congestion***.  
* ***Improved Response Times***: Critical for ***mission-critical and safety applications*** where every millisecond counts.  
* ***Enhanced Privacy & Security***: ***Localizing sensitive processing*** minimizes ***data exposure*** and bolsters security.  
* ***Efficient Scaling***: Scales effectively across a ***vast number of connected devices*** in diverse environments.

## **Fog Computing and Emerging Technologies**

* ***AI & Machine Learning***: Integration for ***smarter, predictive edge analytics*** and ***decision-making***.  
* ***Blockchain***: Enables ***secure, decentralized data management*** and ***trust*** at the edge.  
* ***5G Networks***: Supports ***ultra-low latency*** and ***massive IoT connectivity***, leveraging ***5G's capabilities***.

***Scale of Connectivity:*** ***Thousands*** (Cloud Data Centers), ***Millions*** (Fog Nodes), ***Billions*** (Edge Devices).

## **Network Communication Models**

* ***Without Fog Computing***: ***Sensors*** \-\> ***Relay Node*** \-\> ***Cloud Application Platform***. ***Raw Data*** travels the entire path.  
* ***With Fog Computing***: ***Sensors*** \-\> ***Fog Node*** (Query/Control) \-\> ***Cloud Application Platform***. Utilizes ***Data Subscription with MQTT***.

## **The Future of Fog Computing**

***Fog computing*** is not just a concept; it's a vital component shaping the future of ***connected technologies***.

* ***Essential Role***: Crucial for the rapidly expanding ***Internet of Things*** and ***real-time applications***.  
* ***Hybrid Architectures***: ***Synergistic with cloud computing***, creating ***optimal performance*** through ***hybrid models***.  
* ***Industry Transformation***: Poised to ***revolutionize industries*** by enabling ***smarter, faster, and more secure edge computing***.

***The Fog is Lifting: Bringing the power of the cloud closer to where it truly matters most — at the edge of innovation.***