# IoT Reviewer & Quiz

An interactive web application for studying Internet of Things concepts through flashcards and comprehensive quizzes.

## Features

### 📚 Flashcard Reviewer
- **Interactive flip cards** - Click to reveal answers
- **Progress tracking** - Track which cards you've recalled or not
- **Recall rating system** - Mark cards as "Recalled" or "Not Recalled"
- **Shuffle option** - Randomize card order for better learning
- **Navigation** - Move forward and backward through cards
- **Persistent progress** - Your ratings are saved in browser storage
- **60+ flashcards** covering all IoT topics

### 🎯 Quiz System
Four question types to test your knowledge:
1. **Multiple Choice Questions (MCQ)** - Select the correct answer (15 questions)
2. **Multi-Select Questions** - Choose all correct answers (10 questions)
3. **Fill in the Blanks** - Type the missing word (15 questions)
4. **Define Abbreviations** - Expand acronyms like IoT, MQTT, CoAP, VANET, etc. (14 questions)

### Quiz Features:
- **Customizable quiz setup** - Choose question types and quantity
- **Instant feedback** - See if you're correct immediately
- **Detailed explanations** - Learn from each answer
- **Score tracking** - View your performance
- **Answer review** - Review all questions after completion
- **Time tracking** - See how long you took
- **Quiz history** - Track your progress over time

### 📊 Statistics Dashboard
- Track flashcard recall rates
- View quiz performance metrics
- Monitor your learning progress
- See average and best scores
- Reset functionality for fresh starts

## Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling with gradients, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5** - UI components and responsive grid
- **Bootstrap Icons** - Beautiful iconography
- **Local Storage** - Persistent data storage

## Topics Covered

Based on Lessons 1-4 of Internet of Things:

1. **IoT Fundamentals** - Definition, architecture, and layers
2. **Ad Hoc Networks** - MANET, VANET, WSN, SPAN, iMANET
3. **IoT Protocols** - MQTT, CoAP, 6LoWPAN, RPL, Zigbee, Thread
4. **Internet Standards** - RFCs, IETF lifecycle, standard organizations
5. **Interoperability** - Device, Network, Data, and Semantic levels
6. **REST Architecture** - Core constraints and HTTP methods
7. **Service Discovery** - Local, large-scale, and cluster-based approaches
8. **IoT Challenges** - Scalability, energy efficiency, security
9. **Hybrid Architectures** - Edge-cloud integration
10. **Emerging Trends** - AI integration, 5G/6G, Ambient IoT

## File Structure

```
iot-reviewer-quiz/
│
├── index.html          # Main HTML structure
├── styles.css          # Custom styles and animations
├── data.js             # Flashcard and quiz question data
├── app.js              # Application logic and interactivity
├── IOT_Reviewer.md     # Source material (course notes)
└── README.md           # This file
```

## How to Use

1. **Open `index.html`** in any modern web browser
2. **Flashcards Tab**:
   - Click cards to flip and view answers
   - Rate your recall with the buttons below
   - Use navigation to move between cards
   - Shuffle for randomized learning
3. **Quiz Tab**:
   - Click "Start Quiz"
   - Configure your quiz settings
   - Answer questions and get instant feedback
   - Review your results and learn from mistakes
4. **Stats Tab**:
   - View your progress metrics
   - Track improvement over time

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Requires JavaScript enabled and supports localStorage.

## Learning Tips

1. **Use flashcards first** to familiarize yourself with IoT concepts
2. **Mark honestly** - rating cards accurately helps track real progress
3. **Take multiple quizzes** to reinforce learning
4. **Review wrong answers** - the explanations help solidify understanding
5. **Mix question types** for comprehensive practice
6. **Track your stats** to see improvement over time
7. **Focus on abbreviations** - IoT has many important acronyms to memorize

## Key IoT Concepts Covered

- **Network Types**: MANET, VANET, WSN, SPAN
- **Protocols**: MQTT, CoAP, 6LoWPAN, RPL, Zigbee
- **Architecture**: Device, Network, and Service layers
- **Standards**: IETF, IEEE, ETSI, oneM2M, NIST
- **Interoperability**: Device, Network, Data, Semantic
- **REST**: Client-Server, Statelessness, Cacheability
- **Discovery**: Local, Large-scale, Cluster-based
- **Challenges**: Scalability, Energy, Security
- **Trends**: AI, 5G/6G, Ambient IoT

## Data Persistence

- Flashcard ratings are saved automatically
- Quiz history is stored locally
- Stats persist across browser sessions
- Use "Reset" buttons to start fresh
- Uses unique keys to avoid conflicts with other quizzes

## Credits

Content based on **Internet of Things (IoT)** course materials (Lessons 1-4).

---

**Happy Learning! 🚀🌐**
