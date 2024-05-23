import React, { useState, useEffect, Component } from "react";

class Sitenav extends Component {
  render() {
  let data = this.props.data;
  return (
    <section id="hero" className="hero d-flex flex-column align-items-center justify-content-center">
        <h1>{data.hero.h1}</h1>
        <h2><Typewriter text={data.hero.typewritingText} delay="100" infinite/></h2>
        <a href="#sitenav" className="btn-get-started scrollto"><i className="bi bi-arrow-down-circle-fill"></i></a>
  </section>
    )
  }
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