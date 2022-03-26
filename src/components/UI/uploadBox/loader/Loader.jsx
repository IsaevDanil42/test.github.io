import React from "react";
import classes from './Loader.module.css';
import Delayed from './Delayed';
import DeleteButton from "./DeleteButton";

const Loader =({hide}) => {
    return (
        <div>
            <div  className={classes.lineLoad}/>
            <div  className={classes.load}/>
            <Delayed waitBeforeShow={2001}><DeleteButton onClick={() => hide(false)} /></Delayed>
        </div>
    );
};

export default Loader;