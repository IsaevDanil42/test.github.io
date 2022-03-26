import React, { Children } from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, visible, ...props}) => {
    const rootClassesImg = []
    const rootClassesText = [classes.text]
    if (visible) {
        rootClassesImg.push(classes.img);
        rootClassesText.pop();
        rootClassesText.push(classes.textWithIcon);
    }

    return (
        <button {...props} className={classes.myBtn} >
          <div className={rootClassesImg}></div>
          <p className={rootClassesText}>{children}</p>
        </button>
    );
};

export default MyButton;