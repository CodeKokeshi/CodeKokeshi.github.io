# **Reviewer: The IoT in Practice**

# **Lesson 8.1: Hardware, Software, and the Web of Things**

## **Sensing the World: The "Nerves" of IoT**

# ***Sensors*** convert ***physical parameters*** into ***electrical signals***.

* # ***Environmental***: Temperature, Humidity, Air Quality.

* # ***Motion/Position***: Accelerometers, Gyroscopes, GPS.

* # ***Optical***: Light intensity, Cameras, IR.

* # ***Industrial***: Pressure, Flow, Vibration.

## **Taking Action: The "Muscles" of IoT**

# ***Actuators*** accept ***electrical signals*** and perform ***physical actions***.

* # ***Mechanical***: Servo motors, Stepper motors (Robotics).

* # ***Switching***: Relays, Solenoids (Smart plugs, locks).

* # ***Visual/Audio***: LED displays, Speakers, Buzzers.

# ***Feedback Loop***: Often paired with sensors to ***maintain a state*** (e.g., Thermostat).

## **The Brains: Microcontrollers (MCUs)**

# ***Microcontrollers*** are ***low power*** and designed for ***specific tasks***. They are the core of most ***IoT edge devices*** and run ***without a full OS***.

* # ***Arduino***: Great for ***prototyping***, vast community support.

* # ***ESP32***: Integrated ***Wi-Fi & Bluetooth***, ***dual-core***, low cost. The ***industry favorite*** for IoT.

* # ***STM32***: ***Industrial grade***, ***high performance*** ARM Cortex-M cores.

## **The Computers: SBCs**

# ***Single Board Computers (SBCs)*** offer ***high processing power***. They are ***full computers*** capable of running ***Linux*** (or Windows IoT).

* # ***Use Cases***: ***Gateways***, ***Image Processing***, ***Local Servers***.

* # ***Raspberry Pi***: The ***gold standard***. Runs Python scripts, Docker containers, and database servers locally.

* # ***Edge AI***: ***Specialized SBCs*** (like ***NVIDIA Jetson***) run ***Machine Learning models*** on-device.

## **Connectivity: Short Range**

# ***Personal Area Networks (PAN)*** connect devices within a room or building.

* # ***Bluetooth Low Energy (BLE)***: ***Ultra-low power***, ubiquitous in wearables.

* # ***Zigbee / Z-Wave***: ***Mesh networking*** for ***Smart Homes*** (Lights, Sensors).

* # ***NFC***: ***Very short range***, used for ***provisioning*** and ***payments***.

## **Connectivity: Long Range**

* # ***Wi-Fi***: ***High bandwidth***, ***power hungry***. Best for mains-powered devices needing ***real-time video*** or large data.

* # ***LoRaWAN***: ***Long Range, Low Power***. Perfect for ***agriculture and smart cities*** where sensors are kilometers apart.

* # ***Cellular (NB-IoT)***: Uses existing ***mobile towers***. Excellent ***coverage and reliability*** for ***critical logistics*** and ***asset tracking***.

## **Power Management: The Energy Challenge**

# Most IoT devices run on ***batteries*** and must last for years. Devices often spend ***99%*** of their time in ***"Sleep Mode"***.

* # ***Deep Sleep***: Shutting down ***non-essential circuits*** (Wi-Fi/Radio) when not transmitting.

* # ***Energy Harvesting***: ***Solar***, ***piezoelectric*** (vibration), or ***RF harvesting*** to extend life.

* # ***Efficient Code***: Writing software that ***minimizes active CPU cycles***.

## **IoT Operating Systems**

* # ***Bare Metal***: ***No OS***. Code runs directly on hardware. ***Fastest, simplest***, but hard to manage complex tasks.

* # ***RTOS*** (***FreeRTOS, Zephyr***): ***Real-Time Operating Systems*** ensure tasks ***finish deterministically***. Essential for ***time-critical sensing***.

* # ***General Purpose***: ***Linux*** (Yocto, Ubuntu Core). Used on ***gateways/SBCs***. ***Multi-threaded***, supports Python/Node.js, but ***power hungry***.

## **Software Protocols: MQTT**

# ***MQTT*** (***Message Queuing Telemetry Transport***) is the ***de-facto standard*** for IoT.

* # ***Pub/Sub Model***: Devices don't talk to each other directly; they talk to a ***"Broker"***.

* # ***Lightweight***: ***Small packet overhead***, perfect for ***unstable networks***.

* # ***QoS Levels***: ***Quality of Service*** settings ensure message delivery (***Fire & Forget*** vs. ***Confirmed***).

## **Other Key Protocols**

* # ***CoAP*** (***Constrained Application Protocol***): Designed to be ***"HTTP for simple devices"***. Uses ***UDP*** instead of TCP for ***lower overhead***. Ideal for ***very constrained sensor nodes***.

* # ***HTTP/REST***: The ***standard web protocol***. ***Heavy*** for small devices, but ***widely compatible***. Often used by ***Gateways*** to push ***aggregated data*** to the ***Cloud***.

## **Cloud Platforms: Managing at Scale**

# Platforms like ***AWS IoT Core***, ***Azure IoT Hub***, and ***Google Cloud IoT***.

* # ***Device Shadows***: ***Virtual JSON documents*** that ***persist device state*** even when offline.

* # ***Rules Engines***: ***"If temp \> 50, send email"*** logic without writing server code.

* # ***Analytics***: ***Storing and visualizing*** massive streams of ***sensor data***.

## **Edge Computing: Moving Logic Closer**

# Instead of sending all data to the cloud, process it ***locally*** on the ***Gateway or Device***.

* # ***Latency***: ***Instant decisions*** (e.g., stopping a machine) without network delay.

* # ***Bandwidth***: Send only the ***"insight"*** (e.g., "Person Detected") rather than the ***full video stream***.

* # ***Privacy***: ***Sensitive data stays local***.

* # ***Reliability***: ***System works*** even if internet goes down.

## **W3C WoT Architecture: The Building Blocks**

* # ***Thing Description (TD)***: The ***core metadata file*** describing a Thing.

* # ***Binding Templates***: How to map ***abstract interactions*** to actual protocols (***HTTP, MQTT, Modbus***).

* # ***Scripting API***: ***Standardized JavaScript API*** for application logic.

* # ***Security & Privacy***: ***Mechanisms*** to ensure ***safe interoperability***.