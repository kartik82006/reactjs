# Today's Learning: Babel & React Compilation

**Date:** June 11, 2024  
**Day:** Tuesday

## Key Takeaways

- Babel converts JSX and ES6 in React code (like `<h1>Hello</h1>`) into plain JavaScript (`React.createElement` calls).
- This means what I write in `main.jsx` (not needing Babel itself) gets transformed so browsers can run it.

**Example:**
```jsx
// JSX in main.jsx
const element = <h1>Hello, world!</h1>;

// Babel output
const element = React.createElement('h1', null, 'Hello, world!');
```

**Summary:**  
Understanding Babel helps me see how React works under the hood and why modern syntax needs compiling.
