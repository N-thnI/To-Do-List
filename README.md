# ✅ Day 5: Task Master (Integrated CRUD App)
### Part of the 7-Day Web Dev Project Challenge

A high-performance To-Do application featuring full CRUD capabilities, dual-theme support, and persistent data storage.

## 🛠️ Features
- **Full CRUD:** Create, Read, Update, and Delete tasks seamlessly.
- **Integrated Theme Engine:** Light/Dark mode toggle with persistence (Integrated from Day 2 logic).
- **Persistent Storage:** Uses `localStorage` to save both the task list and user theme preferences.
- **Optimized Performance:** Implements Event Delegation to manage list interactions efficiently.

## 🔒 Security & Best Practices
- **XSS Prevention:** Utilized `textContent` for data injection to prevent script injection attacks.
- **Input Validation:** Added whitespace trimming and empty-field prevention.
- **Modular CSS:** Built using CSS Custom Properties (Variables) for easy theme scalability.

## 🧠 Technical Deep-Dive
- **DOM Manipulation:** `createElement`, `appendChild`, and `parentElement.remove()`.
- **Event Handling:** `keydown` support for a "no-mouse" user experience.
- **Data Segregation:** Managing multiple keys in `localStorage` without data collision.

## 🔗 Demo
[https://github.com/N-thnI/To-Do-List]
