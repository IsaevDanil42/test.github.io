import React, { useEffect, useState, useRef } from "react";
import ModalWindow from './UI/modal/ModalWindow';
import MyInput from './UI/input/MyInpit.jsx';
import ExitButton from './UI/button/ExitButton';
import MyButton from './UI/button/MyButton';
import UploadBox from './UI/uploadBox/UploadBox';


const ReviewWindow = ({ modalWindow, setModal, setToastError, setToast }) => {
    const [count, setCount] = useState(0);
    const [names, setNames] = useState('');
    const [review, setReview] = useState('');
    const [upload, setUpload] = useState(false);
    const [validButton, setValidButton] = useState(false);
    const [fileName, setFileName] = useState('');
    const [sizeError, setSizeError] = useState(false);
    const fileInputRef = useRef();

    const handleChange = (e) => {
        setUpload(true);
        if (e.target.files[0].size > 5e+6) {
            setSizeError(true);
            setFileName('');
        } else {
            setSizeError(false)
            console.log(e.target.files[0].name);
            console.log(e.target.files[0].size);
            console.log(e.target.files[0].type);
            setFileName(e.target.files[0].name);
        }
    }


    useEffect(() => {
        if (!names || !names.split(' ').join('').match(/^[a-zA-Zа-яА-Я]+$/)) {
            setValidButton(true)
        } else {
            setValidButton(false)
        }
    }, [names]
    )

    const hideUploadBox = (token) => {
        setUpload(token)
    }


    const sending = () => {
        console.log('Имя: ', names);
        console.log('Отзыв: ', review);
        console.log('Название файла: ', fileName);
        if (names == '' || review == '') {
            setToastError(true)
        }   else {
            setToast(true)
        }
        setNames('');
        setReview('');
        setFileName('');
        setUpload(false);
        setModal(false);
    }



    return (
        <ModalWindow visible={modalWindow} setVisible={setModal} upload={upload} setUpload={setUpload}>
            <h3 className="reviewsHead">Отзыв</h3>
            <ExitButton click={setModal} style={{ position: "absolute", left: "631.46px", top: "26px" }} />
            <h4 className="reviewsLine1">Как вас зовут?</h4>
            <MyInput onChange={e => setNames(e.target.value)} value={names} style={{ position: "absolute", left: "24px", width: "395px", height: "52px", top: "106px" }} type="text" placeholder="Имя Фамилия" />
            <MyButton onClick={() => fileInputRef.current.click()} disabled={validButton} visible={true} style={{ position: "absolute", width: "217px", left: "435px", top: "106px" }}>Загрузить фото</MyButton>
            <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' hidden />
            <UploadBox hide={hideUploadBox} display={upload} fileName={fileName} sizeError={sizeError} />
            <h4 className="reviewsLine2">Все ли вам понравилось?</h4>
            <textarea value={review} className="textarea" maxLength="200" onChange={e => { setCount(e.target.value.length); setReview(e.target.value) }} placeholder="Напишите пару слов о вашем опыте..." ></textarea>
            <button onClick={() => sending()} visible={false} className="reviewButton">Отправить отзыв</button>
            <div> {upload
                ? <div className="iconInfoA" />
                : <div className="iconInfo" />
            }</div>
            <p className="warn">Все отзывы проходят модерацию в течение 2 часов</p>
            <p className="count">{count}/200</p>
        </ModalWindow>
    );
};

export default ReviewWindow;