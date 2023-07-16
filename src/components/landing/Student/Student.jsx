import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";


const Student = () => {
  return (
    <section className="section content" id="student">
      <div className="section__header">
        <h2 className="section__title">Студент</h2>
      </div>
      <AboutMe />
      <Portfolio />
    </section>
  )
};

export default Student;
