import React, { useEffect } from "react";
import classes from '../styles/ErrorToast.module.css'

const ErrorToast = ({toastError, setToastError}) => {
    const rootClasses = [classes.ErrorToast];
    useEffect (() => {
        if(toastError) {  
            rootClasses.pop()
            rootClasses.push(classes.active)
            setToastError(false)
        }}, [toastError]
        )

    return(
        <div className={rootClasses} />
    );
};

export default ErrorToast;