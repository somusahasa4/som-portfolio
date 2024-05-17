import './Hero.scss';
import React, { useState, useEffect } from "react";

function Sitenav() {
  return (
    <section id="hero" className="hero d-flex flex-column align-items-center justify-content-center">

    <h1>Hi, I'm Somasundaram!</h1>
    <h1><Typewriter text="I work as a Technology Architect for Adobe Campaign projects" delay="100" infinite/></h1>
    <a href="#about" className="btn-get-started scrollto"><i className="bi bi-arrow-down-circle-fill"></i></a>
  </section>
    );
}

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) { // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default Sitenav;