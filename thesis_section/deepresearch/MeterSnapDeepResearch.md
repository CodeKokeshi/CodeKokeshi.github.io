# MeterSnap: Technical Validation and Methodological Analysis

MeterSnap consolidates socio-economic justification, tariff validation, AI/ML design decisions, and risk mitigation strategies for the Carmona Water District (CWD) consumer application.[^1] The following sections translate the full deep-research narrative into clean Markdown with complete citations and traceable technical evidence.

## Part 1: Analysis of the MeterSnap Problem Domain

### 1.1 The Socio-Economic Context of "Bill Shock"

Bill shock persists because CWD customers only learn about usage after printed bills arrive, preventing proactive conservation and budget planning.[^1][^3][^4][^5] Government inquiries, media coverage, and humor-driven coping on social platforms all highlight how distrust escalates when invoices suddenly spike.[^4][^5][^6] Nationwide, regulators recorded more than 47,000 billing complaints against a single electric utility, proving the scale of the problem.[^7] Utility pricing is legally expected to remain "just and reasonable" for essential services, making transparency a regulatory mandate rather than a convenience.[^8][^9]

### 1.2 Substantiating Manual Reading Inefficiencies

Traditional analog meters require field staff visits, manual transcription, and repeated inspections to resolve disputes.[^1][^10][^11] Industry analyses estimate that roughly one in ten bills may contain errors from misreads or data-entry issues, and even customer-reported submissions can mirror the same 10% fault rate.[^12] These inefficiencies delay utility cash flow, amplify operational costs, and further erode consumer trust—exactly the conditions that trigger bill shock escalations.[^11][^12]

### 1.3 MeterSnap as an Accessible Smart-Metering Bridge

Replacing legacy meters with advanced metering infrastructure (AMI) is capital-intensive and incomplete across many developing regions.[^1][^13] MeterSnap instead leverages smartphones that already house high-resolution cameras, capable processors, and always-on connectivity, delivering a bring-your-own-device (BYOD) alternative.[^1][^15] By mirroring the most valuable smart-meter feature—real-time consumption data—without the hardware overhaul, the project aligns with fiscal realities while following best practices from recent automatic meter reading (AMR) research.[^17][^20]

## Part 2: Foundational Validation of the Core Application (Alpha 3.2)

Alpha 3.2 is described as a "car without an engine": the UI, storage, and billing logic layers are complete while the machine learning component is pending integration.[^1] Review of the changelog confirms a mature cadence moving from alpha UI builds (2.x) to the fully validated tariff computation stack (3.x).

### 2.1 Carmona Water District Tariff Structure

The application codifies the official Residential/Government tariff schedule that took effect in January 2025, including the Environmental and Sanitary Fee (ESF).[^1]

| Classification      | Minimum (0–10 cu.m.) | 11–20 cu.m. (per cu.m.) | 21–30 cu.m. (per cu.m.) | 31–40 cu.m. (per cu.m.) | 41+ cu.m. (per cu.m.) |
|---------------------|----------------------|-------------------------|-------------------------|-------------------------|-----------------------|
| Residential/Gov't   | ₱238.60 (fixed)      | ₱26.20                 | ₱29.00                 | ₱32.60                 | ₱37.00               |

### 2.2 Bill Calculation Engine Verification

To validate the logic, the team recomputed the documented 29 cu.m. example and matched every subtotal.[^1]

**Input Data**

- Present Reading: 1575
- Previous Reading: 1546
- Total Usage: 29 cu.m.
- ESF Rate: ₱3.50 per cu.m.

| Step | Tariff Tier         | Usage (cu.m.) | Rate (per cu.m.) | Calculation                  | Subtotal |
|------|---------------------|---------------|------------------|-------------------------------|----------|
| 1    | Minimum Charge      | 10            | ₱238.60          | Fixed                        | ₱238.60  |
| 2    | Tier 2 (11–20)      | 10            | ₱26.20           | 10 × 26.20                  | ₱262.00  |
| 3    | Tier 3 (21–30)      | 9             | ₱29.00           | 9 × 29.00                   | ₱261.00  |
| 4    | Water Bill Subtotal | 29            | —                | 238.60 + 262.00 + 261.00     | ₱761.60  |
| 5    | ESF                 | 29            | ₱3.50            | 29 × 3.50                   | ₱101.50  |
| 6    | Total Due           | —             | —                | 761.60 + 101.50              | ₱863.10  |

The parity between expected and computed totals proves that Alpha 3.2 applies the tariff policy faithfully.

## Part 3: Technical Justification of the LeNet-5 Architecture

### 3.1 Task-Specific Fitness

LeNet-5 was created for handwritten digit recognition and powered commercial check-reading deployments, making it nearly identical to MeterSnap's segmented digit task.[^1][^24][^33] Because the OpenCV pipeline crops and normalizes each digit to a 28 × 28 grayscale tile, the inference workload mirrors the MNIST benchmark that LeNet consistently solves above 98% accuracy.[^31]

### 3.2 Comparison with Modern Lightweight Models

Modern alternatives such as MobileNetV2 and EfficientNet are optimized for thousands of ImageNet classes and contain millions of parameters.[^38][^41] A tailored LeNet variant can stay under 0.5 MB once converted to TensorFlow Lite yet still achieve MNIST-level accuracy with as few as 15,000 parameters.[^29][^31][^43] Using MobileNet for a ten-class digit problem would add unnecessary compute, risk overfitting on a custom dataset, and increase the download footprint.[^38][^41]

| Feature          | LeNet-5 (Classic)            | MobileNetV2 (Modern)       | Relevance to MeterSnap |
|------------------|------------------------------|----------------------------|-------------------------|
| Primary Task     | Digit recognition[^24]       | General object detection[^39] | MeterSnap only needs digits |
| Parameters       | ~60k–300k[^35]               | ~3.4M[^41]                 | Smaller models conserve RAM |
| Model Size       | ≈0.17–0.5 MB (TFLite)[^43]   | 3–10 MB                    | Impacts bundle size     |
| Inference Speed  | Near-instant on 28 × 28[^44] | Fast but heavier           | Preserves UX on low-end phones |

### 3.3 Parsimony and Deployment Efficiency

TensorFlow Lite deployment benefits from compact topologies, enabling quantization, low memory pressure, and reduced battery draw on consumer smartphones.[^1][^15] Recent studies also show that LeNet variants remain competitive when hardware-accelerated or integer-optimized, reinforcing the parsimony argument.[^28][^44]

## Part 4: Methodical Review of the Computer Vision Pipeline

MeterSnap's "smart eyes" pipeline cleans and segments images before they reach the lightweight classifier.[^1]

### 4.1 Grayscale Conversion and Noise Reduction

`Imgproc.cvtColor` standardizes captures into single-channel images compatible with LeNet, while Gaussian blur removes high-frequency noise arising from low light, motion, or debris on the meter lens.[^1][^46][^48] These steps uphold OCR best practices long before classification begins.

### 4.2 Adaptive Thresholding for Field Conditions

Adaptive thresholding computes local cutoffs for every pixel neighborhood, overcoming shadows, glare, and reflections that would defeat global thresholds.[^1][^50][^52] This ensures clear binary masks even when a single image contains both harsh sunlight and dark corners.

### 4.3 Contour Analysis for ROI and Digit Isolation

Running `Imgproc.findContours` twice—a coarse pass for the overall display and a fine pass within the cropped region—reduces computation while isolating each digit cleanly.[^1][^53][^55] Sorting contours by the x-axis then reassembles digits in left-to-right order before inference.

| Step      | Function                     | Purpose                    | Rationale |
|-----------|------------------------------|----------------------------|-----------|
| Preprocess| `cvtColor`                   | Enforce grayscale channel  | LeNet expects 28 × 28 × 1 input[^1] |
| Preprocess| `GaussianBlur`               | Suppress noise             | Improves downstream thresholding[^48] |
| Preprocess| `adaptiveThreshold`          | Binarize locally           | Handles mixed lighting[^50] |
| Step 4    | `findContours` (Pass 1)      | Isolate ROI                | Filters out logos/dials[^53] |
| Step 5    | `findContours` (Pass 2)      | Segment digits             | Operates on smaller crop[^55] |
| Step 5    | Sort contours by `x`         | Reassemble reading         | Guarantees correct sequence[^1] |

## Part 5: The "In-Between Digits" Challenge

### 5.1 Defining Transitional Ambiguity

Analog wheels frequently capture two digits at once (e.g., a "4" rolling into a "5"), producing ambiguous imagery that no model can classify with confidence because the ground truth is itself uncertain.[^1][^56]

### 5.2 Multi-Layered Mitigation Strategy

Relying solely on field collection is impractical; higher-value wheels may take days or weeks to advance.[^57] Instead, MeterSnap layers three tactics: (1) standard augmentations on clean digits (shift, shear, blur), (2) manual labeling whenever transitional frames are observed, and (3) automated prompts in the app's confirmation screen to let humans override low-confidence predictions.[^1][^58][^60]

### 5.3 Generative Data Augmentation Blueprint

State-of-the-art AMR research proposes synthesizing transitional states by stacking digits, blending boundaries, and sliding a crop window driven by a random float.[^57][^61][^62][^63] This method can create infinite, perfectly labeled samples and may be extended with GANs for additional realism.[^65][^67][^68]

| Strategy        | Method                               | Pros                                         | Cons / Risk                                | Recommendation |
|-----------------|--------------------------------------|----------------------------------------------|---------------------------------------------|----------------|
| Manual capture  | Wait for natural rollovers[^1]       | Real images                                  | Operationally infeasible[^57]              | Opportunistic only |
| "Good" tier     | Shift/Scale/Rotate, shear, blur[^58] | Quick robustness gains                       | Cannot create true transitions             | Mandatory baseline |
| "Better" tier   | Manual labeling                      | Human-informed disambiguation                | Still data-sparse                          | Pair with HITL |
| "Best" tier     | Generative augmentation[^61][^62]    | Infinite, labeled transitional states        | Requires scripting or GAN expertise[^65]   | Signature thesis contribution |

## Part 6: Synthesis, Recommendations, and Validation

### 6.1 Human-in-the-Loop (HITL) Integration

Confidence thresholds (e.g., 85%) trigger red highlights on ambiguous digits and pass the recognized string into an editable text field, allowing users to correct transitions instantly.[^1][^56] This design reframes success: the model must be perfect on simple digits and honest about uncertainty on hard ones.

### 6.2 Path Forward

- **Problem statement:** Nationally documented bill shock justifies the socio-economic framing.[^1]
- **Completed work:** Alpha 3.2 faithfully enforces the CWD tariff and ESF policy.[^1]
- **Model choice:** LeNet-5 balances accuracy, size, and on-device performance.[^29][^31]
- **Pipeline:** The OpenCV preprocessing chain ensures clean input for the lightweight CNN.[^1][^46]
- **Strategic risk:** Replace manual transitional capture with a generative augmentation program to deliver the dataset volume the thesis requires.[^57][^61]

By pairing generative data with HITL confirmation, MeterSnap remains technically sound, consumer-aligned, and ready for final machine learning integration.

## References

[^1]: MeterSnap Project Team. (2025). *MeterSnap Chapter 1-3*. Internal project documentation.
[^2]: Blicker. (2023). *Everything about self-meter reading in 2023 (with use cases)*. Retrieved November 18, 2025, from https://www.blicker.ai/news/everything-about-self-meter-reading
[^3]: Power Philippines. (2023). *Banishing bill shock*. Retrieved November 18, 2025, from https://powerphilippines.com/banishing-bill-shock/
[^4]: The Philippine Star. (2020, May 16). *Meralco addresses bill shock*. Retrieved November 18, 2025, from https://www.philstar.com/headlines/2020/05/16/2014361/meralco-addresses-bill-shock
[^5]: Department of Energy Philippines. (2020). *Sec. Cusi receives Meralco update on actions taken to resolve bill shock, other consumer concerns*. Retrieved November 18, 2025, from https://legacy.doe.gov.ph/press-releases/sec-cusi-receives-meralco-update-actions-taken-resolve-bill-shock-other-consumer
[^6]: GMA News Online. (2024). *Meralco customers turn to humor to ease bill shock*. Retrieved November 18, 2025, from https://www.gmanetwork.com/news/topstories/metro/906904/meralco-customers-turn-to-humor-to-ease-bill-shock/story/
[^7]: ABS-CBN News. (2020, July 6). *"Complainant shock": ERC says 47,000 complaints filed vs. electric bill shock*. Retrieved November 18, 2025, from https://www.abs-cbn.com/news/07/06/20/complainant-shock-erc-says-47000-complaints-filed-vs-electric-bill-shock
[^8]: Respicio & Co. (2023). *Excessive water bill charges complaint Philippines*. Retrieved November 18, 2025, from https://www.respicio.ph/commentaries/excessive-water-bill-charges-complaint-philippines
[^9]: Respicio & Co. (2023). *Water utility bill dispute consumer rights Philippines*. Retrieved November 18, 2025, from https://www.respicio.ph/commentaries/water-utility-bill-dispute-consumer-rights-philippines
[^10]: Metron Farnier. (2022). *The real costs of manual meter reading*. Retrieved November 18, 2025, from https://metron-us.com/metron-blog/the-real-costs-of-manual-meter-reading/
[^11]: Dune Labs. (2023, May 2). *Challenges in reading and billing traditional water meters*. Retrieved November 18, 2025, from https://dunelabs.ai/2023/05/02/challenges-in-reading-and-billing-traditional-water-meters/
[^12]: Vue.ai. (2024). *The hidden costs of manual meter reading: Why your utility company can't afford to wait for automation*. Retrieved November 18, 2025, from https://www.vue.ai/blog/ai-transformation/hidden-costs-manual-meter-reading/
[^13]: KTH Royal Institute of Technology. (2021). *Prepaid digital water meters and the challenges of sustainable innovation*. Retrieved November 18, 2025, from https://kth.diva-portal.org/smash/get/diva2:1618683/FULLTEXT03.pdf
[^14]: Laroca, R. (2022). *Image-based automatic dial meter reading in unconstrained scenarios*. Retrieved November 18, 2025, from https://raysonlaroca.github.io/papers/salomon2022image.pdf
[^15]: Google AI Edge. (2025). *LiteRT overview*. Retrieved November 18, 2025, from https://ai.google.dev/edge/litert
[^16]: Arm. (2023). *New Arm ML guide: Deploying a quantized TensorFlow Lite MobileNet V1 model*. Retrieved November 18, 2025, from https://developer.arm.com/community/arm-community-blogs/b/ai-blog/posts/announcing-an-ml-how-to-guide-deploying-a-quantized-tensorflow-lite-mobilenet-v1-model
[^17]: Xylem. (2021). *Case study: iPERL™ customer stories*. Retrieved November 18, 2025, from https://www.xylem.com/siteassets/brand/sensus/resources/brochure/sensus-iperl-customer-stories-brochure.pdf
[^18]: Malta College of Arts, Science & Technology. (2016). *Non-revenue water and errors throughout the data acquisition process*. Retrieved November 18, 2025, from https://www.mcast.edu.mt/wp-content/uploads/New-Appendix-5-NRW-Errors-throughout-Data-Acquisition-Process-Final-24thAug2016.pdf
[^19]: Rahayu, D., et al. (2021). A cost-effective CNN-LSTM-based solution for predicting faulty remote water meter reading devices in AMI systems. *Sensors, 21*(17). https://pmc.ncbi.nlm.nih.gov/articles/PMC8469262/
[^20]: Zhang, S., et al. (2021). Image-based automatic watermeter reading under challenging conditions. *Sensors, 21*(2). https://www.mdpi.com/1424-8220/21/2/434
[^21]: Li, Y., et al. (2020). Deep learning for image-based automatic dial meter reading: Dataset and baselines. *arXiv preprint* arXiv:2005.03106.
[^22]: Zhao, C., et al. (2020). A two-stage deep learning-based approach for automatic reading of analog meters. *IEEE Transactions on Instrumentation and Measurement*. https://ieeexplore.ieee.org/document/9322741
[^23]: Howells, C., et al. (2021). Real-time analogue gauge transcription on mobile phone. In *CVPR 2021 Workshops*. https://openaccess.thecvf.com/content/CVPR2021W/MAI/papers/Howells_Real-Time_Analogue_Gauge_Transcription_on_Mobile_Phone_CVPRW_2021_paper.pdf
[^24]: Wikipedia contributors. (2025). *LeNet*. In *Wikipedia*. Retrieved November 18, 2025, from https://en.wikipedia.org/wiki/LeNet
[^25]: Nomidl, A. (2024). *Understanding LeNet-5: The foundational CNN architecture explained*. Medium. https://medium.com/@Nomidl/understanding-lenet-5-the-foundational-cnn-architecture-explained-e9de0ca16734
[^26]: PyImageSearch. (2021, May 22). *LeNet: Recognizing handwritten digits*. https://pyimagesearch.com/2021/05/22/lenet-recognizing-handwritten-digits/
[^27]: Le, K. (2023). *LeNet and MNIST handwritten digit recognition*. Medium. https://lekhuyen.medium.com/lenet-and-mnist-handwritten-digit-classification-354f5646c590
[^28]: MDPI Electronics. (2024). Hardware acceleration and approximation of CNN computations: Case study on an integer version of LeNet. https://www.mdpi.com/2079-9292/13/14/2709
[^29]: Zhang, A., Lipton, Z. C., Li, M., & Smola, A. J. (2021). *Dive into deep learning: Chapter 7.6 Convolutional neural networks (LeNet)*. http://d2l.ai/chapter_convolutional-neural-networks/lenet.html
[^30]: Zhivilo, A. (2021). *Digit recognition with LeNet-5 convolutional neural networks model*. Medium. https://medium.com/@anastasia.zhivilo/digit-recognition-with-lenet-5-convolutional-neural-networks-model-1f79b4200055
[^31]: JETIR. (2021). Handwritten digit recognition: Comparative analysis of machine learning and deep learning algorithms on the MNIST dataset. https://www.jetir.org/papers/JETIRHA06008.pdf
[^32]: Machine Learning Mastery. (2022). *Handwritten digit recognition with LeNet5 model in PyTorch*. https://machinelearningmastery.com/handwritten-digit-recognition-with-lenet5-model-in-pytorch/
[^33]: Educative. (2024). *LeNet-5 success in handwritten digit recognition*. https://www.educative.io/blog/lenet-5
[^34]: GeeksforGeeks. (2023). *LeNet-5 architecture*. https://www.geeksforgeeks.org/computer-vision/lenet-5-architecture/
[^35]: Analytics Vidhya. (2021). *The architecture of LeNet-5*. https://www.analyticsvidhya.com/blog/2021/03/the-architecture-of-lenet-5/
[^36]: DigitalOcean. (2023). *LeNet-5 from scratch with PyTorch: A beginner's guide*. https://www.digitalocean.com/community/tutorials/writing-lenet5-from-scratch-in-python
[^37]: Bangar, S. (2022). *LeNet-5 architecture explained*. Medium. https://medium.com/@siddheshb008/lenet-5-architecture-explained-3b559cb2d52b
[^38]: Li, P., et al. (2025). Comparative analysis of lightweight deep learning models for memory-constrained devices. *arXiv preprint* arXiv:2505.03303.
[^39]: Patil, S., et al. (2025). Optical character recognition using convolutional neural networks for Ashokan Brahmi inscriptions. *arXiv preprint* arXiv:2501.01981.
[^40]: Journal of Internet Technology. (2024). Lightweight CNN architecture for IoT: Enhancing character recognition in multiple fonts. https://jit.ndhu.edu.tw/article/viewFile/3124/3149
[^41]: Chen, X., et al. (2022). A comprehensive benchmark of deep learning libraries on mobile devices. *arXiv preprint* arXiv:2202.06512.
[^42]: Quora contributors. (2025). *What is the best neural network architecture to make an OCR?* Retrieved November 18, 2025, from https://www.quora.com/What-is-the-best-Neural-Network-Architecture-to-make-an-OCR
[^43]: Wang, H., et al. (2025). Building efficient lightweight CNN models. *arXiv preprint* arXiv:2501.15547.
[^44]: Nguyen, T., et al. (2024). A lightweight network architecture for traffic sign recognition based on enhanced LeNet-5. *IEEE Access*. https://pmc.ncbi.nlm.nih.gov/articles/PMC11221824/
[^45]: ResearchGate. (2023). *Summary of the LeNet model trained on the MNIST dataset*. https://www.researchgate.net/figure/Summary-of-the-LeNet-model-trained-on-the-MNIST-dataset_tbl1_331093057
[^46]: ArXiv. (2021). Image preprocessing and modified adaptive thresholding for improving OCR. https://arxiv.org/pdf/2111.14075
[^47]: MDPI Sensors. (2021). Adaptive Gaussian and double thresholding for contour detection and character recognition of two-dimensional area using computer vision. https://www.mdpi.com/2673-4591/32/1/23
[^48]: OpenCV Documentation. (2025). *Image thresholding*. https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html
[^49]: Stack Overflow. (2015). *Digit recognition OCR in OpenCV-Python*. https://stackoverflow.com/questions/31712675/digit-recognition-ocr-in-opencv-python
[^50]: PyImageSearch. (2021, May 12). *Adaptive thresholding with OpenCV (cv2.adaptiveThreshold)*. https://pyimagesearch.com/2021/05/12/adaptive-thresholding-with-opencv-cv2-adaptivethreshold/
[^51]: Yadav, A. (2022). *OpenCV adaptive threshold*. Medium. https://medium.com/@amit25173/opencv-adaptive-threshold-fae667b91984
[^52]: Hewlett-Packard Laboratories. (1993). *Adaptive thresholding for OCR: A significant test* (HPL-93-22). https://shiftleft.com/mirrors/www.hpl.hp.com/techreports/93/HPL-93-22.pdf
[^53]: OpenCV Documentation. (2025). *Finding contours in your image*. https://docs.opencv.org/4.x/df/d0d/tutorial_find_contours.html
[^54]: Debal, B. (2021). *Extracting regions of interest from images*. Medium. https://medium.com/data-science/extracting-regions-of-interest-from-images-dacfd05a41ba
[^55]: Stack Overflow. (2017). *How can I find contours inside ROI using OpenCV and Python?* https://stackoverflow.com/questions/42004652/how-can-i-find-contours-inside-roi-using-opencv-and-python
[^56]: MDPI Mathematics. (2024). Utilizing cross-ratios for the detection and correction of missing digits in instrument digit recognition. https://www.mdpi.com/2227-7390/12/11/1669
[^57]: IEEE Xplore. (2022). Generative data augmentation for automatic meter reading using CNNs. https://ieeexplore.ieee.org/iel7/6287639/6514899/09729827.pdf
[^58]: NHSJS. (2025). *Data augmentation for handwritten digit recognition*. https://nhsjs.com/2025/data-augmentation-for-handwritten-digit-recognition/
[^59]: Towards Data Science. (2024). *Effective data augmentation for OCR*. https://towardsdatascience.com/effective-data-augmentation-for-ocr-8013080aa9fa/
[^60]: Towards Data Science. (2024). *Effective data augmentation for OCR*. https://towardsdatascience.com/effective-data-augmentation-for-ocr-8013080aa9fa
[^61]: IEEE Xplore. (2022). Generative data augmentation for automatic meter reading using CNNs. https://ieeexplore.ieee.org/iel7/6287639/9668973/09729827.pdf
[^62]: ResearchGate. (2022). *Generative data augmentation for automatic meter reading using CNNs*. https://www.researchgate.net/publication/359414036_Generative_Data_Augmentation_for_Automatic_Meter_Reading_Using_CNNs
[^63]: ResearchGate. (2022). *The framework of the proposed end-to-end deep learning-based automatic meter reading*. https://www.researchgate.net/figure/The-framework-of-the-proposed-end-to-end-deep-learning-based-automatic-meter-reading_fig6_359414036
[^64]: ResearchGate. (2013). *Automatic reading of an analogue meter using image processing techniques*. https://www.researchgate.net/publication/245532520_Automatic_Reading_of_an_Analogue_Meter_Using_Image_Processing_Techniques
[^65]: Wikipedia contributors. (2025). *Generative adversarial network*. In *Wikipedia*. Retrieved November 18, 2025, from https://en.wikipedia.org/wiki/Generative_adversarial_network
[^66]: ResearchGate. (2024). Exploring the power of generative adversarial networks for image generation: A case study on the MNIST dataset. https://www.researchgate.net/publication/387763842_Exploring_the_Power_of_Generative_Adversarial_Networks_GANs_for_Image_Generation_A_Case_Study_on_the_MNIST_Dataset
[^67]: Impetus. (2023). *Synthetic data generation using GANs*. https://www.impetus.com/resources/blog/synthetic-data-generation-using-gans/
[^68]: StayTechRich. (2024). *Crafting handwritten digits with conditional GANs*. Medium. https://medium.com/@staytechrich/crafting-handwritten-digits-with-conditional-gans-a-journey-into-creative-ai-3481733b739c
