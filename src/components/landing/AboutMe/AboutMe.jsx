import React from "react";
import classes from "./AboutMe.module.css";
import photo from "../../../images/igor-palych.jpg";

const AboutMe = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <h3 className={classes.name}>Игорь Палыч</h3>
        <span className={classes.specialty}>Фронтенд-разработчик, 51 год</span>
        <p className={classes.paragraph}>Родился в Кишинёве, живу в Москве. У меня жена, взрослый сын и две кошки.</p>
        <p className={classes.paragraph}>Играю на гитаре, занимаюсь боксом, хожу в походы.</p>
        <p className={classes.paragraph}>Всегда был предпринимателем. С 2018 по 2022 год работал в школе учителем географии. Знания и навыки фронтенд-разработчика нужны для бизнеса, который сейчас строю.</p>
        <div className={classes.links}>
          <a className={classes.link} href="https://vk.com/id146235759" target="_blank" rel="noreferrer">ВКонтакте</a>
        </div>
      </div>
      <img className={classes.photo} src={photo} alt="Фотография Игоря Палыча." />
    </div >
  )
};

export default AboutMe;
