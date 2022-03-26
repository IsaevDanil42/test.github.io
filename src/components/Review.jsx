import React from "react";
import classes from '../styles/Review.module.css'

const Review = ({name,photo,date,text, ...props}) => {
    return(
        <div {...props}>
            <img src={photo} className={classes.photo} />
            <div className={classes.name}><strong>{name}</strong></div>
            <div className={classes.date}>{date}</div>
            <div className={classes.text}>{text}</div>
        </div>
    );
};

export default Review