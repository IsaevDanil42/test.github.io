import React from 'react';
import classes from './ExitButton.module.css'

const ExitButton = ({click, ...props}) => {
    return (
        <button {...props}  className={classes.exitButton} onClick={() => click(false)}>  
        </button>
    );
};

export default ExitButton;