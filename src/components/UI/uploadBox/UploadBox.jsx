import React, { useEffect, useState } from 'react';
import Loader from './loader/Loader'
import classes from './UploadBox.module.css'
import DeleteButton from './loader/DeleteButton';

const UploadBox = ({display, fileName, sizeError, hide}) => {  
    if (!display) return null;

 

    return (
        <div className={classes.main}>
            <div className={classes.fileImg}/>
            {sizeError
                ?<div><p className={classes.SizeError}>Your file is too big!</p><div className={classes.lineError}/><DeleteButton onClick={() => hide(false)}/></div>
                :<div><p className={classes.fileName}>{fileName}</p><div className={classes.line}/><Loader hide={hide}/></div>   
            }
            
        </div>
    );
};

export default UploadBox;