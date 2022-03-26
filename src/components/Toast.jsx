import React, { useEffect } from "react";
import classes from '../styles/Toast.module.css'

const Toast = ({toast, setToast}) => {
    const rootClasses = [classes.Toast];

    useEffect (() => {
    if(toast) {
        rootClasses.pop()
        rootClasses.push(classes.active)
        setToast(false)
    }}, [toast]
    )

    return(
        <div className={rootClasses} />
    );
};

export default Toast;