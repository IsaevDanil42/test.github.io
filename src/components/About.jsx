import React from "react";
import classes from '../styles/About.module.css';

const About = () => {
    return (
        <div className={classes.main}>
            <h3 className={classes.name}>Даниил Исаев</h3>
            <p className={classes.myBD}>10.06.1998</p>
            <div className={classes.infoA}><strong>Город:</strong> Томск</div>
            <div className={classes.infoB}><strong>Пол: </strong>мужчина</div>
            <div className={classes.male}/>
            <div className={classes.infoC}><strong>Возраст: </strong>23</div>
            <div className={classes.infoD}><strong>О себе:</strong> Всем привет! Меня зовут Данил, мне 23 года. Люблю книги, компьютерные игры, хорошую компанию и острую курочку из kfc. Всегда мечтал связать свою жизнь с программированием. Верю, что моя мечта исполнится, т.к. я готов приложить к этому все усилия. <br/><br/> Это так глупо. У меня не получилось вставить своё фото сюда.</div>
            <div className={classes.dogFood}/>
            <div className={classes.infoE}><strong>Домашнее животное:</strong> нет :c</div>
        </div>
    );
};

export default About;