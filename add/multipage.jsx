// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './Product';
import TodoApp from './TodoApp';
import Counter from './Counter';

function Home() {
  return <h2>Welcome to React Fundamentals</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/product">Product</Link> | 
        <Link to="/todo">To-Do</Link> | 
        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product name="Laptop" price="999" description="High performance laptop" />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/counter" element={<Counter initialCount={0} />} />
      </Routes>
    </Router>
  );
}

export default App;
