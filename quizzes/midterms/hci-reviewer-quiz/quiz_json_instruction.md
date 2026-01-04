# **How to Create Your Own Quiz (JSON Format)**

This document explains the JSON structure for the quiz. You can create your own quiz.json file with as many questions as you want. The quiz website will automatically build the questions and the answer pools.

The JSON file should be an array \[ ... \] containing question objects { ... }.

### **1\. Type: multiple-choice**

This type automatically creates its own distractors (wrong answers) by borrowing answers from other multiple-choice questions. You only need to provide the question and the correct answer.

**Structure:**

{  
  "type": "multiple-choice",  
  "question": "Your question text goes here.",  
  "answer": "The single correct answer."  
}

### **2\. Type: fill-in-the-blank**

This type shows a question with \[BLANK\] and creates a "choice pool" of possible answers (all in uppercase) for the user to click. It automatically creates distractors from other fill-in-the-blank questions.

* **Important:** Your question text **must** include \[BLANK\] (all caps) exactly where you want the blank space to appear.

**Structure:**

{  
  "type": "fill-in-the-blank",  
  "question": "Your question with a \[BLANK\] in it.",  
  "answer": "The answer to be filled in"  
}

**Note on Answer-Checking:** The logic is flexible as you asked. It ignores case, symbols, and spaces.

* "USER EXPERIENCE"  
* "user-experience"  
* "User Experience\!"  
  ...are all graded as correct.

### **3\. Type: multi-select**

This is for questions where multiple answers are correct. You must provide all possible options and a list of the correct ones.

**Structure:**

{  
  "type": "multi-select",  
  "question": "Select all that apply.",  
  "options": \[  
    "A possible option",  
    "A correct option",  
    "Another possible option",  
    "Another correct option"  
  \],  
  "answer": \["A correct option", "Another correct option"\]  
}

### **4\. Type: binary-choice**

This is for "one or the other" questions, like True/False, Benefit/Downside, or Desirable/Undesirable.

* Use "statement" for judging a sentence.  
* Use "term" for judging a single word.

**Structure:**

{  
  "type": "binary-choice",  
  "question": "Is the following a Benefit or a Downside?",  
  "statement": "The statement to be judged goes here.",  
  "options": \["Benefit", "Downside"\],  
  "answer": "Downside"  
}

### **5\. Type: matching**

This creates the two-column matching interface with dropdowns.

* "stems": The list of items on the left.  
* "matches": All the possible options that will appear in the dropdowns on the right.  
* "answer": An object where each key is a "stem" and its value is the correct "match".

**Structure:**

{  
  "type": "matching",  
  "question": "Match the term to its definition.",  
  "stems": \[  
    "Term 1",  
    "Term 2"  
  \],  
  "matches": \[  
    "Definition A",  
    "Definition B"  
  \],  
  "answer": {  
    "Term 1": "Definition B",  
    "Term 2": "Definition A"  
  }  
}

### **6\. Type: categorization-sorter**

This creates the drag-and-drop buckets.

* "categories": A list of the bucket names.  
* "items": A list of all draggable items, specifying which category each one *correctly* belongs to.

**Structure:**

{  
  "type": "categorization-sorter",  
  "question": "Drag each item to its correct category.",  
  "categories": \[  
    "Category One",  
    "Category Two"  
  \],  
  "items": \[  
    { "text": "Item A", "category": "Category One" },  
    { "text": "Item B", "category": "Category Two" },  
    { "text": "Item C", "category": "Category One" }  
  \]  
}  