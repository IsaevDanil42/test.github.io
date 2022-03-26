import React, { useEffect, useState } from "react";
import data from './data/data.json';
import Review from './Review';
import classes from '../styles/ReviewBlock.module.css';
import image0 from './data/buba.png'
import image1 from './data/default.svg'
import image2 from './data/urina.png'
import image3 from './data/dmitry.png'

const ReviewsBlock = ({ count, count1 }) => {
    const [imageA, setImageA] = useState(image0);
    const [imageB, setImageB] = useState(image1);
    const rootClasses = [classes.style1];

    if (count == 0) {
        rootClasses.pop();
        rootClasses.push(classes.style1);
    } else if (count == 1) {
        rootClasses.pop();
        rootClasses.push(classes.style2);
    } else if (count == 2) {
        rootClasses.pop();
        rootClasses.push(classes.style3);
    }

    useEffect(() => {
        if (count == 0) {
            setImageA(image0);
            rootClasses.pop();
            rootClasses.push(classes.style1);
        } else if (count == 1) {
            setImageA(image1);
            rootClasses.pop();
            rootClasses.push(classes.style2);
        } else if (count == 2) {
            setImageA(image2);
            rootClasses.pop();
            rootClasses.push(classes.style3);
        }
    }, [count])

    useEffect(() => {
        if (count + 1 == 1) {
            setImageB(image1)
        } else if (count + 1 == 2) {
            setImageB(image2)
        } else if (count + 1 == 3) {
            setImageB(image3)
        }
    }, [count1])

    return (
        <div>
            <Review photo={imageA} text={data[count].text} date={data[count].date} name={data[count].name} style={{ position: "absolute", width: "519px", height: "279px", left: "80px", top: "182px", background: "#F5F5F5", "border-radius": "2px" }} />
            <Review photo={imageB} text={data[count1].text} date={data[count1].date} name={data[count1].name} style={{ position: "absolute", width: "519px", height: "279px", left: "623px", top: "182px", background: "#F5F5F5", "border-radius": "2px" }} />
            <div className={rootClasses.join(' ')} />
        </div>
    );
};

export default ReviewsBlock;