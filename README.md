# Dev Stack

## About The Project

Dev Stack is a simple and responsive website where users can explore different technologies and create their own technology stack. Users can add technologies to their stack and remove them when needed.

## Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* React Icons
* JSON
* Vite

## Features

* Users can explore different technologies.
* Users can add technologies to their own stack and cannot add the same technology twice.
* Users can remove one technology or remove all technologies from their stack.
* The website is responsive for desktop and mobile devices.
* Toast messages are shown when adding or removing technologies.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component. I used it in the Technologies component to store the technologies selected by the user in their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. In this project, the technology data is imported directly from a JSON file, so I did not need `useEffect` to load the JSON data. I used `useEffect` in the App component for the loading screen.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React update the list correctly when something changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used it in the Your Stack section:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
s
)}

When the stack is empty, it shows the empty stack message. Otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
