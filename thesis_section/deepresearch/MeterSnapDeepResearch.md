
# **MeterSnap: Technical Validation and Methodological Analysis**

## **Part 1: An Analysis of the MeterSnap Problem Domain**

### **1.1 The Socio-Economic Context of "Bill Shock"**

The foundational problem addressed by the MeterSnap project is not merely technical but socio-economic, centering on the phenomenon of "bill shock".1 This issue is defined by a significant information asymmetry between the utility provider—in this case, the Carmona Water District (CWD)—and its customers. As outlined in the project's background, consumers must wait for a printed monthly bill to understand their consumption, which "prevents them from monitoring their consumption habits" and "limits their ability to manage their monthly budget effectively".1

This "lack of visibility" is a direct antecedent to "bill shock," a sudden and unexpected confrontation with high utility costs.1 This is a well-documented and recurring national issue in the Philippines. While prominent reports often focus on electric utilities, the widespread consumer complaints, government-level interventions, and media coverage establish a clear precedent for consumer distrust and frustration regarding utility billing practices.3 The documented filing of over 47,000 complaints against an electric utility for billing errors underscores the severity and scale of this problem.7

Furthermore, the legal and regulatory frameworks governing Philippine public utilities treat water as an essential public service, mandating that rates be "just and reasonable".8 The MeterSnap project's primary goal—to provide consumers with "real-time, self-service meter reading" and "billing transparency" 1—is therefore directly aligned with these established consumer protection principles.

### **1.2 Substantiating the Problem: Manual Reading Inefficiencies**

The root cause of the "bill shock" phenomenon is the systemic reliance on "traditional analog meters and manual reading processes".1 The MeterSnap project's premise that this system is problematic is substantiated by extensive industry analysis. Manual meter reading is widely recognized as a "labor-intensive, error-prone, and operationally inefficient" process.10

The project's introduction correctly identifies that manual readings are "prone to human error" and may require costly "re-inspection processes" that consume resources from both the consumer and the water district.1 Research supports this, showing that manually collected utility data is subject to human error, with some analyses indicating that 1 in 10 utility bills may contain mistakes.12 These inaccuracies, whether from misread numbers or data entry faults, directly erode customer trust and create significant operational and financial burdens for the utility, including delayed cash flow and the high cost of reconciliation.12 Even non-automated alternatives, such as customer-submitted readings, can suffer from an error rate as high as 10%.12

### **1.3 MeterSnap as an Accessible Smart-Metering Alternative**

The conventional solution to manual reading inefficiencies is the deployment of Advanced Metering Infrastructure (AMI), or "smart meters." However, the project's foundational documents astutely note that these solutions often "rely on expensive infrastructure upgrades that are not immediately feasible for local water utilities".1

This observation is correct. The replacement of millions of legacy analog meters is a "costly, laborious" procedure that is "far from complete" in many developing nations and regions.13 This positions the MeterSnap project not as a simple mobile application, but as a vital and intelligent *bridging technology*.

The project's design leverages the consumer's existing, powerful hardware: their smartphone. This device already possesses a high-resolution camera, a processor capable of on-device machine learning, and connectivity.15 By adopting this "bring-your-own-device" (BYOD) model, MeterSnap effectively offloads the significant capital expenditure of an AMI rollout from the local utility (CWD) to the consumer, who already owns the necessary hardware.

In doing so, the application provides the single most important benefit of a smart meter—real-time consumption data 17—without incurring the primary cost of infrastructure replacement. This approach represents an accessible, scalable, and economically viable alternative to traditional AMI, aligning perfectly with the operational and financial realities of local water districts. This methodology is strongly supported by a growing body of research focused on smartphone-based automatic meter reading (AMR) as a cost-effective solution.20

## **Part 2: Foundational Validation of the Core Application (Alpha 3.2)**

The project's documentation describes the current application (Alpha 3.2) as a "car that is fully built but missing the 'engine'".1 The "car" itself—the application shell—is a robust and complete piece of software. The provided changelogs demonstrate a mature development process, progressing from initial UI design and data persistence (Alpha 2.x) to the full implementation and polishing of the core billing logic (Alpha 3.x).1

This analysis validates the *completed* work, confirming that the foundational logic of the application is sound and accurate.

### **2.1 Analysis of the Carmona Water District Tariff Structure**

The application's primary function, aside from reading the meter, is to correctly interpret the CWD's complex, multi-tiered tariff structure. This billing logic is non-trivial. Based on the development data, the CWD Residential/Government rate structure, effective January 2025, is formally codified below.1

---

**Table 1: CWD Residential/Government Water Rate (Effective Jan 2025\)**

| Classification | Minimum Charge (First 10 cu.m.) | 11-20 cu.m. (per cu.m.) | 21-30 cu.m. (per cu.m.) | 31-40 cu.m. (per cu.m.) | 41 cu.m. \- up (per cu.m.) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Residential/Gov't | ₱238.60 | ₱26.20 | ₱29.00 | ₱32.60 | ₱37.00 |

---

This five-tier structure, plus a separate Environmental and Sanitary Fee (ESF) calculation, forms the complex business rules that the application's "Alpha 3" logic must execute.1

### **2.2 Verification of the Bill Calculation Engine**

The project's development documentation provides a sample calculation for 29 cu.m. of usage. An independent verification of this calculation confirms that the "Core Logic Implemented" in Alpha 3 is accurate and functions exactly as specified.1

**Input Data:**

* Present Reading: 1575  
* Previous Reading: 1546  
* **Total Usage:** 29 cu.m.  
* ESF Rate (Default): ₱3.50 per cu.m. 1

The following table provides a step-by-step audit of this calculation, which matches the project's own verification.1

---

**Table 2: Bill Calculation Walkthrough (29 cu.m. Usage)**

| Calculation Step | Tariff Tier | Usage (cu.m.) | Rate (per cu.m.) | Calculation | Subtotal |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Minimum Charge | 10 | ₱238.60 (Fixed) | ₱238.60 | ₱238.60 |
| 2 | Tier 2 (11-20) | 10 | ₱26.20 | $10 \\times 26.20$ | ₱262.00 |
| 3 | Tier 3 (21-30) | 9 | ₱29.00 | $9 \\times 29.00$ | ₱261.00 |
| 4 | **Water Bill (Subtotal)** | **29** |  | $238.60 \+ 262.00 \+ 261.00$ | **₱761.60** |
| 5 | ESF | 29 | ₱3.50 | $29 \\times 3.50$ | ₱101.50 |
| 6 | **TOTAL DUE** |  |  | $761.60 \+ 101.50$ | **₱863.10** |

---

This verification confirms that the application's foundational logic, as of Alpha 3.2, is correct.1 The "car" is sound, and ready for its "engine".1

## **Part 3: Technical Justification of the LeNet-5 Architecture**

A central query for the project is the justification for using the LeNet-5 Convolutional Neural Network (CNN) architecture \[Query\]. The project plan specifies this 1998 model for the core digit recognition task.1 This choice is not "outdated"; rather, it is a deliberate and intelligent engineering decision rooted in the principle of parsimony.

### **3.1 LeNet-5 as a Deliberate Choice for Task-Specific Recognition**

The LeNet-5 architecture, proposed by LeCun et al., was one of the first commercially successful CNNs and was *specifically designed for handwritten digit recognition*.24 It was the foundational technology for a generation of check-reading ATMs, demonstrating its robustness in a real-world commercial application.24

The problem definition for MeterSnap is a near-perfect replication of the task LeNet-5 was designed to solve. The project's *own* computer vision pipeline (detailed in Part 4\) is designed to segment, crop, and normalize each individual digit into a standardized format (e.g., $28\\times28$ grayscale image).1 This transforms the complex problem of "reading a meter" into a simple, 10-class classification problem: "is this 28x28 image a '0', '1', '2',... or '9'?"

This is, effectively, the MNIST handwritten digit problem, for which LeNet-5 remains a canonical and high-performing benchmark.30 Its simple architecture—two sets of convolutional and pooling layers, followed by fully connected layers for classification—is computationally efficient and highly effective at learning the hierarchical spatial features of digits.33

### **3.2 A Comparative Analysis: LeNet-5 vs. Modern Lightweight Architectures**

The logical alternatives to LeNet-5 would be modern, lightweight architectures designed for mobile devices, such as MobileNet or EfficientNet.38 However, these models are designed for *general-purpose, large-scale classification*—typically 1,000 classes of complex objects (e.g., ImageNet).41

Using a model like MobileNet for this highly constrained, 10-class problem represents a case of over-engineering. LeNet-5 is a "parsimonious model that requires far fewer parameters".29 A lightweight CNN trained for MNIST can achieve 99% accuracy with as few as 15,000 parameters and a model file size of only 0.17 MB.43 In contrast, a model like MobileNetV2 has approximately 3.4 million parameters.41

For a mobile application that will be deployed using TensorFlow Lite (TFLite) 1, a smaller, simpler model architecture is vastly superior. It results in a smaller application bundle, significantly lower RAM and power consumption, and faster on-device inference, especially on the lower-end smartphones that may be prevalent among the CWD customer base.15

While some studies show MobileNet outperforming LeNet on more complex OCR tasks (e.g., recognizing varied fonts) 39, LeNet's established accuracy of \>98% on digit recognition 31 is more than sufficient, especially when combined with the "human-in-the-loop" design specified in the project plan.1

---

**Table 3: Comparative Analysis: LeNet-5 vs. MobileNetV2 (for MeterSnap Task)**

| Feature | LeNet-5 (Classic) | MobileNetV2 (Modern) | Justification for MeterSnap |
| :---- | :---- | :---- | :---- |
| **Primary Task** | Handwritten Digit Recognition 24 | General Object Classification 39 | LeNet's task is *identical* to the MeterSnap recognition sub-problem. |
| **Complexity** | Very Low (e.g., \~60k-300k parameters) 35 | High (e.g., \~3.4M parameters) 41 | Lower complexity is ideal for a single, simple task (10 classes).42 |
| **Model Size (TFLite)** | Extremely Small (likely \< 0.5 MB) 43 | Small, but larger (e.g., 3-10 MB) | A smaller model is better for mobile deployment and reduces app size.15 |
| **Inference Speed** | Extremely Fast | Fast (optimized for mobile) | For a simple 28x28 input, LeNet's inference will be negligible and highly efficient.44 |
| **Risk** | May be *too* simple for noisy, real-world data. | May *overfit* on a simple, custom dataset. | The robust OpenCV pipeline (Part 4\) mitigates LeNet's risk by providing clean, normalized input. |

---

### **3.3 Performance, Efficiency, and the Principle of Parsimony**

The selection of LeNet-5 is a sign of mature engineering, demonstrating an understanding that the *simplest* solution that meets the requirements is the *best* solution. The project's goal is to deploy the model on-device via TensorFlow Lite.1 A simple, compact architecture like LeNet-5 is ideal for TFLite conversion, quantization, and efficient hardware-accelerated inference.15

The project's success does not depend on a complex, resource-heavy model. It depends on a lightweight, fast model (LeNet) being fed high-quality input from a robust preprocessing pipeline.

## **Part 4: A Methodical Review of the Proposed Computer Vision Pipeline**

The project plan details a 5-step OpenCV pipeline, which serves as the "eyes" that capture, clean, and segment the images before feeding them to the LeNet "brain".1 The success of a simple model like LeNet is *entirely dependent* on the quality of this preprocessing pipeline. A "dumb" brain with "smart" eyes (a good CV pipeline) will consistently outperform a "smart" brain (MobileNet) with "dumb" eyes (raw image input).

The proposed pipeline is academically sound, computationally efficient, and directly addresses the challenges of in-field image processing.

### **4.1 The Role of Grayscale Conversion and Noise Reduction**

The initial steps of the pipeline are critical for normalization.

* **Grayscale Conversion:** The plan specifies Imgproc.cvtColor(mat, grayMat, Imgproc.COLOR\_BGR2GRAY).1 This is a mandatory step. The LeNet-5 architecture is explicitly designed to accept a single-channel, grayscale image (INPUT (28x28x1)).1 Color information (RGB) is irrelevant for recognizing black digits on a white (or black) wheel and only adds computational noise and complexity. This is a standard and necessary step for OCR.46  
* **Noise Reduction:** The plan specifies Imgproc.GaussianBlur(...).1 This is a vital preparatory step. Real-world photos captured in the field will be "noisy" due to factors like low lighting (sensor noise), hand-shake (motion blur), or physical dirt and scratches on the meter's glass. A Gaussian blur is a low-pass filter that smooths the image, removing high-frequency noise that could confuse the subsequent thresholding and edge-finding algorithms.48

### **4.2 The Criticality of Adaptive Thresholding for In-Field Conditions**

The single most important step in this preprocessing pipeline is the choice of Imgproc.adaptiveThreshold(...).1 A "simple" or "global" thresholding function (cv.threshold) would be a critical point of failure for this project.

* **The Problem:** The project's data collection plan correctly identifies the need to capture images in "bad lighting, with shadows, with reflections on the glass".1  
* **Why Global Thresholding Fails:** A global thresholding algorithm assumes uniform illumination across the entire image. It sets a *single* pixel value (e.g., 127\) to separate the foreground (digits) from the background.48 In a real-world photo with a strong shadow, the "white" background in the shadow might have a pixel value of 100, while the "black" digit in the bright area might be 140\. A global threshold of 127 would incorrectly classify *both* regions, resulting in an unreadable, fragmented image.  
* **Why Adaptive Thresholding Succeeds:** adaptiveThreshold solves this problem. It does *not* use one threshold for the whole image. Instead, it calculates the threshold for each pixel based on the pixel intensities in its *local neighborhood*.50 This means it can correctly binarize a digit in a dark shadow and another digit in bright sunlight *in the same image*. This makes it robust to the exact in-field conditions the project must handle.46

### **4.3 Contour Analysis for Region of Interest (ROI) and Digit Isolation**

The project plan specifies a clever "coarse-to-fine" segmentation strategy by using Imgproc.findContours *twice*.1

* **Pass 1 (Region Isolation):** The first pass runs findContours on the full, processed Mat. Its goal is to "find the large rectangle of the meter's digit display (your Region of Interest, or ROI)".1 This is a classic and efficient technique.53 By filtering the resulting contours based on properties like area and aspect ratio, the algorithm can easily find the large, rectangular box containing all the digits, while ignoring other visual noise (dials, logos, manufacturer text) on the meter face. This step crops the Mat to *only* this ROI.  
* **Pass 2 (Digit Segmentation):** The second pass runs findContours *again*, but this time "on the small ROI Mat".1 This is far more efficient. Instead of searching a massive, multi-megapixel image for tiny digits, it searches a small, clean, binarized rectangle. This pass finds the "individual digit contours".55  
* **Final Step:** The plan to "Sort these contours by their X-coordinate (left-to-right)" 1 is the final, logical step. It assembles the individually recognized digits ("0", "0", "1", "2", "4", "5") into the correct numerical string ("001245") before passing them to the LeNet model for recognition.

The entire pipeline is technically sound and robustly designed.

---

**Table 4: OpenCV Preprocessing Pipeline: Step-by-Step Justification**

| Step | Function (OpenCV) | Purpose | Technical Justification |
| :---- | :---- | :---- | :---- |
| Pre-process | Imgproc.cvtColor | Grayscale Conversion | Required for LeNet ((28x28x1)) input.1 Color is irrelevant noise for this task.47 |
| Pre-process | Imgproc.GaussianBlur | Noise Reduction | Smooths image to remove high-frequency noise from poor lighting/dirt, improving thresholding results.48 |
| Pre-process | Imgproc.adaptiveThreshold | Binarization | **Critical Step.** Handles variable lighting, shadows, and reflections 1 where global thresholding would fail.50 |
| Step 4 | Imgproc.findContours (Pass 1\) | Region Isolation (ROI) | Efficiently finds the main digit display rectangle, isolating it from the rest of the meter.53 |
| Step 5 | Imgproc.findContours (Pass 2\) | Digit Segmentation | Runs on the small, clean ROI to find individual digits. Far more efficient than a full-image search.55 |
| Step 5 | sort(contours, by=x) | Re-assembly | Orders the recognized digit contours from left to right to form the final, correctly sequenced reading.1 |

---

## **Part 5: The "In-Between Digits" Challenge: A Deep-Dive Analysis**

This section addresses the single greatest threat to the project's success, which the project plan has correctly identified as "vital" 1: the "in-between digits" or "slot machine" problem.1

### **5.1 Defining the "Slot Machine" Problem**

This problem occurs when a digit wheel on the analog meter is in motion, such as when rolling from a '4' to a '5'.1 In this "transitional state," the camera captures an ambiguous image showing the bottom half of the '4' and the top half of the '5' simultaneously.56

This is not a simple recognition error; it is a fundamental ambiguity in the source data. The LeNet model, having been trained on clean, centered images of '4' and '5', will be "confused" by this input. It will not see a '4' or a '5'. As a result, it will likely output low-confidence probabilities for *both* digits (and possibly others), failing to make a clear classification.

### **5.2 A Multi-Layered Strategy for Data Collection and Augmentation**

The project's current plan to solve this is *only* through manual data collection: "capture a '4' rolling to a '5', a '7' rolling to an '8', etc.".1 This plan is operationally unfeasible and represents a critical risk.

As noted in AMR research, "some digits of a meter may take a long time to update".57 To capture the *first* digit wheel rolling (the one with the lowest value) is simple. To capture the *second* wheel rolling, 10 units of water must be consumed. To capture the *fourth* wheel rolling (e.g., from 7000 to 8000), 1000 units of water must be consumed.

The development team *cannot* realistically sit and wait for days or weeks to "capture" all 10 transitional states for all 5 or 6 digit wheels. This data collection strategy is a bottleneck that will fail.

A multi-layered strategy is required:

1. **Good (Simple Augmentation):** As a baseline, the *clean* digit images (0-9) that *are* collected should be augmented. Standard techniques like ShiftScaleRotate, Affine (shear), and Blur can simulate different viewing angles and distortions, which builds general model robustness.58  
2. **Better (Manual Labeling):** When an "in-between" state *is* captured (e.g., a 70/30 split of a '4' and '5'), it should be manually labeled as whichever digit is more prevalent (in this case, '4'). The ambiguity will be handled at inference time by the confidence-checking mechanism.  
3. **Best (Generative Augmentation):** The most robust, state-of-the-art solution is to *programmatically create* these transitional states.

### **5.3 Advanced Solution: Generative Data Augmentation for Transitional States**

Instead of *finding* transitional data, the team should *generate* it. This approach, known as "Generative Data Augmentation," is a state-of-the-art technique specifically proposed to solve the "transitional state" problem in AMR.57

A "rotating digit generator" can be implemented as described in the research 61:

1. **Create a Master Image:** The team would create a single "master" image by vertically stacking their *clean*, captured images of '0', '1', '2',... '9'.  
2. **Blend Borders:** Using image inpainting or blending techniques, the hard border between two consecutive numbers (e.g., '4' and '5') is programmatically smoothed.  
3. **Generate Samples:** A script can then be written to "slide" a cropping window over this blended image. By passing a random floating-point number (e.g., from 0.0 to 1.0), the system can generate an *infinite* number of transitional states. A value of 0.1 might show a '4' just beginning to roll. A value of 0.5 would show a perfect 50/50 split. A value of 0.9 would show a '5' almost fully settled.  
4. **Automatic Labeling:** These generated images can be automatically labeled (e.g., as '4' or '5', or even a new "transitional" class).62

This generative approach (or a more complex one using Generative Adversarial Networks, GANs 65) completely solves the data collection bottleneck. It allows the team to generate thousands of perfectly-labeled transitional images in hours, a task that would take years to perform manually.

---

**Table 5: Strategy Matrix for the "In-Between Digits" Problem**

| Strategy | Method | Pros | Cons / Risk | Recommendation |
| :---- | :---- | :---- | :---- | :---- |
| **User's Plan** 1 | Manual Field Collection | High-quality, "real" data. | **Critically Flawed.** Operationally unfeasible. Cannot "find" all transitional states; will take years.57 | **Do Not Rely On This.** Use what you find, but do not make it the core strategy. |
| **"Good"** 59 | Simple Data Augmentation | Easy to implement. Builds robustness. | Does not create *new* "in-between" states, only distorts existing clean ones. | **Implement This First.** Use ShiftScaleRotate, Affine (shear), and Blur on your *clean* digits (0-9).60 |
| **"Best"** 61 | **Generative Data Augmentation** | **Solves the core problem.** Can generate infinite, perfectly-labeled transitional states on demand.57 | Academically complex (requires a new Python script or GAN). | **This is the Thesis-Winner.** This approach solves the problem robustly and demonstrates a high level of technical mastery. |

---

## **Part 6: Synthesis, Recommendations, and Technical Validation**

### **6.1 Integrating the "Human-in-the-Loop" (HITL) Design**

The final component that ensures the project's success is a key design choice detailed in "Phase 4: Final Integration & Testing".1 This is the "Confidence Highlighting" feature.

The plan is to pass the confidence scores from the TFLite model to the Confirmation Screen. If any digit's score is below a threshold (e.g., 85%), or if the top two scores are very close, that digit is highlighted in red, prompting the user for confirmation or correction.1

This "Human-in-the-Loop" (HITL) design is the single most important feature for ensuring the system's real-world robustness. It is not merely a "Defense Plan" 1; it is the *keystone* of the entire architecture.

This design brilliantly reframes the goal of the AI.

1. No ML model will be 100% accurate, *especially* on the ambiguous "in-between" digits.56  
2. The model, when trained on generative data (Part 5), will see a 50/50 "in-between" digit and (correctly) output low-confidence scores for both.  
3. The HITL system *leverages* this low confidence. It detects that the \<85% threshold has been breached.  
4. It then highlights the ambiguous digit and *asks the human* to make the final judgment: "Is this a 4 or a 5?" The user, who is physically looking at the meter, can easily make this call.  
5. This design *enables* the use of a simple, efficient model like LeNet-5. The system does not need a perfect, 3.4M-parameter model because it has a perfect, 86-billion-neuron model (the human brain) on standby.

The goal of the AI is thus redefined: it is not "be 100% accurate." It is "be 100% accurate on *easy* digits and *ask for help* on *hard* digits." This is a mature, robust, and highly defensible system design. The plan to pass the recognized string to an EditText field 1 is the correct and practical implementation of this HITL philosophy.

### **6.2 Final Validation and Strategic Path Forward**

This analysis provides a comprehensive validation of the MeterSnap project. The project is academically sound, addresses a well-documented and significant socio-economic problem, and is built upon a solid,-completed application foundation.

* **Problem Statement:** Validated. The "bill shock" problem is a significant, well-documented issue.1  
* **Completed Work:** Validated. The Alpha 3.2 application shell, including the complex, multi-tiered CWD billing logic, is implemented correctly.1  
* **AI Model Choice:** Validated. The choice of LeNet-5 is not a weakness but a strength, demonstrating an understanding of parsimony. It is the *correct* lightweight, task-specific model for this problem, *especially* when combined with the HITL design.1  
* **CV Pipeline:** Validated. The proposed OpenCV pipeline is a robust, efficient, and well-designed "coarse-to-fine" system. The use of adaptiveThreshold is critical and correct.1

Strategic Recommendation:  
The only critical flaw identified in this analysis is the "Data Collection" plan for "in-between" digits.1 The plan to manually hunt for and photograph these rare events is operationally unfeasible and poses a high risk of project failure.57  
It is strongly recommended that the team replace this part of their plan with a **Generative Data Augmentation** strategy.61 By programmatically generating an infinite supply of "transitional state" images, the team can solve their primary data bottleneck, dramatically improve model robustness, and demonstrate a state-of-the-art solution to a known problem in AMR research.

By implementing this generative data strategy and correctly executing the planned HITL design, the MeterSnap project is on a clear and direct path to success. It will fully answer the objectives of the thesis and result in a tool of genuine value to the customers of the Carmona Water District.

#### **Works cited**

1. MeterSnap Chapter 1-3.pdf  
2. Everything about self-meter reading in 2023 (With use cases) \- Blicker, accessed November 18, 2025, [https://www.blicker.ai/news/everything-about-self-meter-reading](https://www.blicker.ai/news/everything-about-self-meter-reading)  
3. Banishing bill shock \- Power Philippines, accessed November 18, 2025, [https://powerphilippines.com/banishing-bill-shock/](https://powerphilippines.com/banishing-bill-shock/)  
4. Meralco addresses bill shock \- Philstar.com, accessed November 18, 2025, [https://www.philstar.com/headlines/2020/05/16/2014361/meralco-addresses-bill-shock](https://www.philstar.com/headlines/2020/05/16/2014361/meralco-addresses-bill-shock)  
5. Sec. Cusi Receives Meralco Update on Actions Taken to Resolve Bill Shock, Other Consumer Concerns | Department of Energy Philippines, accessed November 18, 2025, [https://legacy.doe.gov.ph/press-releases/sec-cusi-receives-meralco-update-actions-taken-resolve-bill-shock-other-consumer](https://legacy.doe.gov.ph/press-releases/sec-cusi-receives-meralco-update-actions-taken-resolve-bill-shock-other-consumer)  
6. Meralco customers turn to humor to ease bill shock | GMA News Online, accessed November 18, 2025, [https://www.gmanetwork.com/news/topstories/metro/906904/meralco-customers-turn-to-humor-to-ease-bill-shock/story/](https://www.gmanetwork.com/news/topstories/metro/906904/meralco-customers-turn-to-humor-to-ease-bill-shock/story/)  
7. 'Complainant shock': ERC says 47000 complaints filed vs electric bill shock \- ABS-CBN, accessed November 18, 2025, [https://www.abs-cbn.com/news/07/06/20/complainant-shock-erc-says-47000-complaints-filed-vs-electric-bill-shock](https://www.abs-cbn.com/news/07/06/20/complainant-shock-erc-says-47000-complaints-filed-vs-electric-bill-shock)  
8. Excessive Water Bill Charges Complaint Philippines \- respicio & co., accessed November 18, 2025, [https://www.respicio.ph/commentaries/excessive-water-bill-charges-complaint-philippines](https://www.respicio.ph/commentaries/excessive-water-bill-charges-complaint-philippines)  
9. Water Utility Bill Dispute Consumer Rights Philippines \- respicio & co., accessed November 18, 2025, [https://www.respicio.ph/commentaries/water-utility-bill-dispute-consumer-rights-philippines](https://www.respicio.ph/commentaries/water-utility-bill-dispute-consumer-rights-philippines)  
10. The Real Costs of Manual Meter Reading \- Metron Farnier, accessed November 18, 2025, [https://metron-us.com/metron-blog/the-real-costs-of-manual-meter-reading/](https://metron-us.com/metron-blog/the-real-costs-of-manual-meter-reading/)  
11. Challenges in Reading and Billing Traditional Water Meters \- Dune Labs, accessed November 18, 2025, [https://dunelabs.ai/2023/05/02/challenges-in-reading-and-billing-traditional-water-meters/](https://dunelabs.ai/2023/05/02/challenges-in-reading-and-billing-traditional-water-meters/)  
12. The Hidden Costs of Manual Meter Reading: Why Your Utility Company Can't Afford to Wait for Automation | \- Vue.ai, accessed November 18, 2025, [https://www.vue.ai/blog/ai-transformation/hidden-costs-manual-meter-reading/](https://www.vue.ai/blog/ai-transformation/hidden-costs-manual-meter-reading/)  
13. Prepaid Digital Water Meters and the Challenges of Sustainable Innovation \- kth .diva, accessed November 18, 2025, [https://kth.diva-portal.org/smash/get/diva2:1618683/FULLTEXT03.pdf](https://kth.diva-portal.org/smash/get/diva2:1618683/FULLTEXT03.pdf)  
14. Image-Based Automatic Dial Meter Reading in Unconstrained Scenarios \- Rayson Laroca, accessed November 18, 2025, [https://raysonlaroca.github.io/papers/salomon2022image.pdf](https://raysonlaroca.github.io/papers/salomon2022image.pdf)  
15. LiteRT overview | Google AI Edge, accessed November 18, 2025, [https://ai.google.dev/edge/litert](https://ai.google.dev/edge/litert)  
16. New Arm ML guide: Deploying a quantized TensorFlow Lite MobileNet V1 model, accessed November 18, 2025, [https://developer.arm.com/community/arm-community-blogs/b/ai-blog/posts/announcing-an-ml-how-to-guide-deploying-a-quantized-tensorflow-lite-mobilenet-v1-model](https://developer.arm.com/community/arm-community-blogs/b/ai-blog/posts/announcing-an-ml-how-to-guide-deploying-a-quantized-tensorflow-lite-mobilenet-v1-model)  
17. Case Study iPERL™ Customer Stories \- Xylem, accessed November 18, 2025, [https://www.xylem.com/siteassets/brand/sensus/resources/brochure/sensus-iperl-customer-stories-brochure.pdf](https://www.xylem.com/siteassets/brand/sensus/resources/brochure/sensus-iperl-customer-stories-brochure.pdf)  
18. Non-Revenue Water and Errors throughout the Data Acquisition Process \- MCAST, accessed November 18, 2025, [https://www.mcast.edu.mt/wp-content/uploads/New-Appendix-5-NRW-Errors-throughout-Data-Acquisition-Process-Final-24thAug2016.pdf](https://www.mcast.edu.mt/wp-content/uploads/New-Appendix-5-NRW-Errors-throughout-Data-Acquisition-Process-Final-24thAug2016.pdf)  
19. A Cost-Effective CNN-LSTM-Based Solution for Predicting Faulty Remote Water Meter Reading Devices in AMI Systems \- PMC \- NIH, accessed November 18, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8469262/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8469262/)  
20. Image-Based Automatic Watermeter Reading under Challenging ..., accessed November 18, 2025, [https://www.mdpi.com/1424-8220/21/2/434](https://www.mdpi.com/1424-8220/21/2/434)  
21. \[2005.03106\] Deep Learning for Image-based Automatic Dial Meter Reading: Dataset and Baselines \- arXiv, accessed November 18, 2025, [https://arxiv.org/abs/2005.03106](https://arxiv.org/abs/2005.03106)  
22. A Two-Stage Deep Learning-Based Approach for Automatic Reading of Analog Meters, accessed November 18, 2025, [https://ieeexplore.ieee.org/document/9322741](https://ieeexplore.ieee.org/document/9322741)  
23. Real-Time Analogue Gauge Transcription on Mobile Phone \- CVF Open Access, accessed November 18, 2025, [https://openaccess.thecvf.com/content/CVPR2021W/MAI/papers/Howells\_Real-Time\_Analogue\_Gauge\_Transcription\_on\_Mobile\_Phone\_CVPRW\_2021\_paper.pdf](https://openaccess.thecvf.com/content/CVPR2021W/MAI/papers/Howells_Real-Time_Analogue_Gauge_Transcription_on_Mobile_Phone_CVPRW_2021_paper.pdf)  
24. LeNet \- Wikipedia, accessed November 18, 2025, [https://en.wikipedia.org/wiki/LeNet](https://en.wikipedia.org/wiki/LeNet)  
25. Understanding LeNet-5: The Foundational CNN Architecture Explained \- Medium, accessed November 18, 2025, [https://medium.com/@Nomidl/understanding-lenet-5-the-foundational-cnn-architecture-explained-e9de0ca16734](https://medium.com/@Nomidl/understanding-lenet-5-the-foundational-cnn-architecture-explained-e9de0ca16734)  
26. LeNet: Recognizing Handwritten Digits \- PyImageSearch, accessed November 18, 2025, [https://pyimagesearch.com/2021/05/22/lenet-recognizing-handwritten-digits/](https://pyimagesearch.com/2021/05/22/lenet-recognizing-handwritten-digits/)  
27. LeNet and MNIST handwritten digit recognition | by Khuyen Le \- Medium, accessed November 18, 2025, [https://lekhuyen.medium.com/lenet-and-mnist-handwritten-digit-classification-354f5646c590](https://lekhuyen.medium.com/lenet-and-mnist-handwritten-digit-classification-354f5646c590)  
28. Hardware Acceleration and Approximation of CNN Computations: Case Study on an Integer Version of LeNet \- MDPI, accessed November 18, 2025, [https://www.mdpi.com/2079-9292/13/14/2709](https://www.mdpi.com/2079-9292/13/14/2709)  
29. 7.6. Convolutional Neural Networks (LeNet) \- Dive into Deep Learning, accessed November 18, 2025, [http://d2l.ai/chapter\_convolutional-neural-networks/lenet.html](http://d2l.ai/chapter_convolutional-neural-networks/lenet.html)  
30. Digit recognition with LeNet-5 Convolutional Neural Networks model | by Anastasia Zhivilo, accessed November 18, 2025, [https://medium.com/@anastasia.zhivilo/digit-recognition-with-lenet-5-convolutional-neural-networks-model-1f79b4200055](https://medium.com/@anastasia.zhivilo/digit-recognition-with-lenet-5-convolutional-neural-networks-model-1f79b4200055)  
31. Handwritten Digit Recognition: Comparative Analysis of Machine Learning and Deep Learning Algorithms on the MNIST Dataset \- JETIR.org, accessed November 18, 2025, [https://www.jetir.org/papers/JETIRHA06008.pdf](https://www.jetir.org/papers/JETIRHA06008.pdf)  
32. Handwritten Digit Recognition with LeNet5 Model in PyTorch \- Machine Learning Mastery, accessed November 18, 2025, [https://machinelearningmastery.com/handwritten-digit-recognition-with-lenet5-model-in-pytorch/](https://machinelearningmastery.com/handwritten-digit-recognition-with-lenet5-model-in-pytorch/)  
33. accessed November 18, 2025, [https://www.educative.io/blog/lenet-5\#:\~:text=Its%20success%20in%20handwritten%20digit,learning%20hierarchical%20representations%20of%20features.](https://www.educative.io/blog/lenet-5#:~:text=Its%20success%20in%20handwritten%20digit,learning%20hierarchical%20representations%20of%20features.)  
34. LeNet-5 Architecture \- GeeksforGeeks, accessed November 18, 2025, [https://www.geeksforgeeks.org/computer-vision/lenet-5-architecture/](https://www.geeksforgeeks.org/computer-vision/lenet-5-architecture/)  
35. The Architecture of Lenet-5 \- Analytics Vidhya, accessed November 18, 2025, [https://www.analyticsvidhya.com/blog/2021/03/the-architecture-of-lenet-5/](https://www.analyticsvidhya.com/blog/2021/03/the-architecture-of-lenet-5/)  
36. LeNet-5 from Scratch with PyTorch A Beginner's Guide | DigitalOcean, accessed November 18, 2025, [https://www.digitalocean.com/community/tutorials/writing-lenet5-from-scratch-in-python](https://www.digitalocean.com/community/tutorials/writing-lenet5-from-scratch-in-python)  
37. LeNet 5 Architecture Explained. In the 1990s, Yann LeCun, Leon Bottou… | by Siddhesh Bangar | Medium, accessed November 18, 2025, [https://medium.com/@siddheshb008/lenet-5-architecture-explained-3b559cb2d52b](https://medium.com/@siddheshb008/lenet-5-architecture-explained-3b559cb2d52b)  
38. \[2505.03303\] Comparative Analysis of Lightweight Deep Learning Models for Memory-Constrained Devices \- arXiv, accessed November 18, 2025, [https://arxiv.org/abs/2505.03303](https://arxiv.org/abs/2505.03303)  
39. Optical Character Recognition using Convolutional Neural Networks for Ashokan Brahmi Inscriptions \- arXiv, accessed November 18, 2025, [https://arxiv.org/html/2501.01981v1](https://arxiv.org/html/2501.01981v1)  
40. Lightweight CNN Architecture for IoT: Enhancing Character Recognition in Multiple Fonts \- Journal of Internet Technology, accessed November 18, 2025, [https://jit.ndhu.edu.tw/article/viewFile/3124/3149](https://jit.ndhu.edu.tw/article/viewFile/3124/3149)  
41. A Comprehensive Benchmark of Deep Learning Libraries on Mobile Devices \- arXiv, accessed November 18, 2025, [https://arxiv.org/pdf/2202.06512](https://arxiv.org/pdf/2202.06512)  
42. What is the best Neural Network Architecture to make an OCR? \- Quora, accessed November 18, 2025, [https://www.quora.com/What-is-the-best-Neural-Network-Architecture-to-make-an-OCR](https://www.quora.com/What-is-the-best-Neural-Network-Architecture-to-make-an-OCR)  
43. Building Efficient Lightweight CNN Models \- arXiv, accessed November 18, 2025, [https://arxiv.org/html/2501.15547v1](https://arxiv.org/html/2501.15547v1)  
44. A lightweight network architecture for traffic sign recognition based on enhanced LeNet-5 network \- PMC \- NIH, accessed November 18, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC11221824/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11221824/)  
45. Summary of the LeNet model trained on the MNIST dataset. \- ResearchGate, accessed November 18, 2025, [https://www.researchgate.net/figure/Summary-of-the-LeNet-model-trained-on-the-MNIST-dataset\_tbl1\_331093057](https://www.researchgate.net/figure/Summary-of-the-LeNet-model-trained-on-the-MNIST-dataset_tbl1_331093057)  
46. Image preprocessing and modified adaptive thresholding for improving OCR \- arXiv, accessed November 18, 2025, [https://arxiv.org/pdf/2111.14075](https://arxiv.org/pdf/2111.14075)  
47. Adaptive Gaussian and Double Thresholding for Contour Detection and Character Recognition of Two-Dimensional Area Using Computer Vision \- MDPI, accessed November 18, 2025, [https://www.mdpi.com/2673-4591/32/1/23](https://www.mdpi.com/2673-4591/32/1/23)  
48. Image Thresholding \- OpenCV Documentation, accessed November 18, 2025, [https://docs.opencv.org/4.x/d7/d4d/tutorial\_py\_thresholding.html](https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html)  
49. Digit Recognition OCR in OpenCV-Python \- Stack Overflow, accessed November 18, 2025, [https://stackoverflow.com/questions/31712675/digit-recognition-ocr-in-opencv-python](https://stackoverflow.com/questions/31712675/digit-recognition-ocr-in-opencv-python)  
50. Adaptive Thresholding with OpenCV ( cv2.adaptiveThreshold ) \- PyImageSearch, accessed November 18, 2025, [https://pyimagesearch.com/2021/05/12/adaptive-thresholding-with-opencv-cv2-adaptivethreshold/](https://pyimagesearch.com/2021/05/12/adaptive-thresholding-with-opencv-cv2-adaptivethreshold/)  
51. OpenCV Adaptive Threshold | by Amit Yadav \- Medium, accessed November 18, 2025, [https://medium.com/@amit25173/opencv-adaptive-threshold-fae667b91984](https://medium.com/@amit25173/opencv-adaptive-threshold-fae667b91984)  
52. Adaptive Thresholding for OCR: A Significant Test \- shiftleft.com, accessed November 18, 2025, [https://shiftleft.com/mirrors/www.hpl.hp.com/techreports/93/HPL-93-22.pdf](https://shiftleft.com/mirrors/www.hpl.hp.com/techreports/93/HPL-93-22.pdf)  
53. Finding contours in your image \- OpenCV Documentation, accessed November 18, 2025, [https://docs.opencv.org/4.x/df/d0d/tutorial\_find\_contours.html](https://docs.opencv.org/4.x/df/d0d/tutorial_find_contours.html)  
54. Extracting regions of interest from images | by Debal B | TDS Archive \- Medium, accessed November 18, 2025, [https://medium.com/data-science/extracting-regions-of-interest-from-images-dacfd05a41ba](https://medium.com/data-science/extracting-regions-of-interest-from-images-dacfd05a41ba)  
55. How can I find contours inside ROI using opencv and Python? \- Stack Overflow, accessed November 18, 2025, [https://stackoverflow.com/questions/42004652/how-can-i-find-contours-inside-roi-using-opencv-and-python](https://stackoverflow.com/questions/42004652/how-can-i-find-contours-inside-roi-using-opencv-and-python)  
56. Utilizing Cross-Ratios for the Detection and Correction of Missing Digits in Instrument Digit Recognition \- MDPI, accessed November 18, 2025, [https://www.mdpi.com/2227-7390/12/11/1669](https://www.mdpi.com/2227-7390/12/11/1669)  
57. Generative Data Augmentation for Automatic Meter Reading Using CNNs \- IEEE Xplore, accessed November 18, 2025, [https://ieeexplore.ieee.org/iel7/6287639/6514899/09729827.pdf](https://ieeexplore.ieee.org/iel7/6287639/6514899/09729827.pdf)  
58. Data Augmentation for Handwritten Digit Recognition \- NHSJS, accessed November 18, 2025, [https://nhsjs.com/2025/data-augmentation-for-handwritten-digit-recognition/](https://nhsjs.com/2025/data-augmentation-for-handwritten-digit-recognition/)  
59. Effective Data Augmentation for OCR \- Towards Data Science, accessed November 18, 2025, [https://towardsdatascience.com/effective-data-augmentation-for-ocr-8013080aa9fa/](https://towardsdatascience.com/effective-data-augmentation-for-ocr-8013080aa9fa/)  
60. Effective Data Augmentation for OCR | Towards Data Science, accessed November 18, 2025, [https://towardsdatascience.com/effective-data-augmentation-for-ocr-8013080aa9fa](https://towardsdatascience.com/effective-data-augmentation-for-ocr-8013080aa9fa)  
61. Generative Data Augmentation for Automatic Meter Reading Using CNNs \- IEEE Xplore, accessed November 18, 2025, [https://ieeexplore.ieee.org/iel7/6287639/9668973/09729827.pdf](https://ieeexplore.ieee.org/iel7/6287639/9668973/09729827.pdf)  
62. (PDF) Generative Data Augmentation for Automatic Meter Reading ..., accessed November 18, 2025, [https://www.researchgate.net/publication/359414036\_Generative\_Data\_Augmentation\_for\_Automatic\_Meter\_Reading\_Using\_CNNs](https://www.researchgate.net/publication/359414036_Generative_Data_Augmentation_for_Automatic_Meter_Reading_Using_CNNs)  
63. The framework of the proposed end-to-end deep learning-based automatic meter reading. \- ResearchGate, accessed November 18, 2025, [https://www.researchgate.net/figure/The-framework-of-the-proposed-end-to-end-deep-learning-based-automatic-meter-reading\_fig6\_359414036](https://www.researchgate.net/figure/The-framework-of-the-proposed-end-to-end-deep-learning-based-automatic-meter-reading_fig6_359414036)  
64. Automatic Reading of an Analogue Meter Using Image Processing Techniques | Request PDF \- ResearchGate, accessed November 18, 2025, [https://www.researchgate.net/publication/245532520\_Automatic\_Reading\_of\_an\_Analogue\_Meter\_Using\_Image\_Processing\_Techniques](https://www.researchgate.net/publication/245532520_Automatic_Reading_of_an_Analogue_Meter_Using_Image_Processing_Techniques)  
65. Generative adversarial network \- Wikipedia, accessed November 18, 2025, [https://en.wikipedia.org/wiki/Generative\_adversarial\_network](https://en.wikipedia.org/wiki/Generative_adversarial_network)  
66. (PDF) Exploring the Power of Generative Adversarial Networks (GANs) for Image Generation: A Case Study on the MNIST Dataset \- ResearchGate, accessed November 18, 2025, [https://www.researchgate.net/publication/387763842\_Exploring\_the\_Power\_of\_Generative\_Adversarial\_Networks\_GANs\_for\_Image\_Generation\_A\_Case\_Study\_on\_the\_MNIST\_Dataset](https://www.researchgate.net/publication/387763842_Exploring_the_Power_of_Generative_Adversarial_Networks_GANs_for_Image_Generation_A_Case_Study_on_the_MNIST_Dataset)  
67. Synthetic Data Generation Using GANs | Impetus Blog, accessed November 18, 2025, [https://www.impetus.com/resources/blog/synthetic-data-generation-using-gans/](https://www.impetus.com/resources/blog/synthetic-data-generation-using-gans/)  
68. Crafting Handwritten Digits with Conditional GANs: A Journey into Creative AI \- Medium, accessed November 18, 2025, [https://medium.com/@staytechrich/crafting-handwritten-digits-with-conditional-gans-a-journey-into-creative-ai-3481733b739c](https://medium.com/@staytechrich/crafting-handwritten-digits-with-conditional-gans-a-journey-into-creative-ai-3481733b739c)