// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <div className = "columns">
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;