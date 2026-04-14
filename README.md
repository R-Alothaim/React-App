# Flashcards

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

An interactive flashcards application built with React. Create, study, and manage flashcard decks to reinforce your learning through active recall and spaced repetition.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Features

- Interactive card-flipping animation with CSS 3D transforms
- Navigate through flashcard decks with previous/next controls
- Context-based state management for flashcard data
- Custom `useLocalStorage` hook for persistent data
- Clean, responsive UI with CSS custom properties
- Modular component architecture (common, layout, features)
- Barrel exports for clean import paths

---

## Architecture

### Component Hierarchy

```
App
├── FlashcardProvider (Context)
│   ├── Header
│   ├── Home (Page)
│   │   └── FlashcardDeck (Feature)
│   │       └── Card (Common)
│   └── Footer
```

### Project Tree

```
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── common/
│   │   └── Card/
│   │       ├── Card.jsx
│   │       ├── Card.css
│   │       └── index.js
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── index.js
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       ├── Footer.css
│   │       └── index.js
│   └── features/
│       └── FlashcardDeck/
│           ├── FlashcardDeck.jsx
│           ├── FlashcardDeck.css
│           └── index.js
├── hooks/
│   └── useLocalStorage.js
├── context/
│   └── FlashcardContext.js
├── pages/
│   └── Home/
│       ├── Home.jsx
│       ├── Home.css
│       └── index.js
├── services/
├── utils/
├── constants/
│   └── index.js
├── styles/
│   ├── index.css
│   └── variables.css
├── App.jsx
├── App.css
├── index.js
├── reportWebVitals.js
└── setupTests.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/R-Alothaim/Cards-app-React.git
   cd Cards-app-React
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm start`       | Runs the app in development mode                     |
| `npm test`        | Launches the test runner in interactive watch mode    |
| `npm run build`   | Builds the app for production to the `build/` folder |
| `npm run eject`   | Ejects the CRA configuration (one-way operation)     |

---

## Project Structure

| Directory              | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `components/common/`   | Reusable UI components (Card, Button, Modal, etc.)         |
| `components/layout/`   | Structural components (Header, Footer, Sidebar)            |
| `components/features/` | Feature-specific components (FlashcardDeck, QuizMode, etc.)|
| `hooks/`               | Custom React hooks                                         |
| `context/`             | React Context providers for global state                   |
| `pages/`               | Page-level components that compose layouts and features     |
| `services/`            | API calls and external service integrations                 |
| `utils/`               | Helper functions and utilities                              |
| `constants/`           | Application-wide constants and configuration                |
| `styles/`              | Global styles and CSS custom properties                     |
| `assets/`              | Static assets (images, icons, fonts)                        |

Each component follows the **folder-per-component** pattern with a barrel `index.js` for clean imports:

```js
import Card from 'components/common/Card';     // via barrel export
import Header from 'components/layout/Header';  // via barrel export
```

---

## Tech Stack

- **React 18** - UI library with functional components and hooks
- **Create React App 5** - Zero-config build tooling
- **CSS3** - Styling with custom properties (CSS variables) and BEM naming
- **Context API** - Lightweight state management
- **localStorage** - Client-side data persistence

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

**R-Alothaim** - [GitHub](https://github.com/R-Alothaim)
