import React from "react";
import classes from "./AboutMe.module.css";
import photo from "../../../images/igor-palych.jpg";

const AboutMe = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <h3 className={classes.description__name}>Игорь Палыч</h3>
        <span className={classes.description__specialty}>Фронтенд-разработчик, 51 год</span>
        <p className={classes.description__paragraph}>Родился в Кишинёве, живу в Москве. У меня жена, взрослый сын и две кошки.</p>
        <p className={classes.description__paragraph}>Играю на гитаре, занимаюсь боксом, хожу в походы.</p>
        <p className={classes.description__paragraph}>Всегда был предпринимателем. С 2018 по 2022 год работал в школе учителем географии. Знания и навыки фронтенд-разработчика нужны для бизнеса, который сейчас строю.</p>
        <div className={classes.description__links}>
          <a className={classes.description__link} href="https://vk.com/id146235759" target="_blank" rel="noreferrer">ВКонтакте</a>
        </div>
      </div>
      <img className={classes.photo} src={photo} alt="Фотография Игоря Палыча." />
    </div >
  )
};

export default AboutMe;
