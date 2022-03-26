import React from 'react';
import classes from './ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible, upload, setUpload}) => {
    const rootClasses = [classes.modalWindow]
    const rootClassesContent = [classes.modalWindowContent]
    if (visible) {
        rootClasses.push(classes.active);
    }

    if (upload) {
        console.log(rootClassesContent)
        rootClassesContent[0] = classes.content;   
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={rootClassesContent.join(' ')} onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
        </div>
    );
};

export default ModalWindow;