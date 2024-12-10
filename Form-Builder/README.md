# Interactive Form Builder

An interactive form builder built with React that allows users to create custom forms with drag-and-drop functionality. The project includes features like form component libraries, preview mode, form validation, and JSON schema generation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Preview](#preview)
- [To-Do](#to-do)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Drag-and-Drop**: Build forms by dragging and dropping components like text fields, select dropdowns, radio buttons, etc.
- **Component Library**: Ready-to-use field components.
- **Preview Mode**: Test forms before using them.
- **Form Validation**: Validate forms with custom rules using libraries like Zod.
- **JSON Schema Generation**: Automatically generate a JSON schema for created forms.
- **Optimized Performance**: React.memo and useMemo are used for optimization.
- **Persisted State**: Retains the form state during sessions using local storage.

### Bonus Features (Planned):

- Form templates
- Form response visualization
- Conditional logic in forms

---

## Tech Stack

- **Frontend**: React
- **Drag-and-Drop**: react-beautiful-dnd
- **Styling**: CSS
- **Validation**: Zod
- **Testing**: Jest (optional, for unit tests)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- [Git](https://git-scm.com/) installed

### Installation

1. Clone the repository:
   git clone https://github.com/SavitarN/Form-Builder.git

2. Navigate to the project directory:
   cd form-builder

3. Install Dependencies:
   npm install

4. Start the development server:
   npm run dev

#Folder Structure:

src/
├── components/
│ ├── FormBuilder/
│ │ ├── FormBuilder.jsx
│ │ ├── FieldLibrary.jsx
│ │ ├── FieldRenderer.jsx
│ └── Shared/
│ ├── Button.jsx
│ └── Input.jsx
├── pages/
│ └── FormBuilderPage.jsx
├── styles/
│ ├── global.css
│ ├── formBuilder.css
├── utils/
│ └── reorder.js
├── App.jsx
└── main.jsx
