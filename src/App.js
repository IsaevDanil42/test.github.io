import { useState } from 'react';
import MyButton from './components/UI/button/MyButton';
import ReviewWindow from './components/ReviewWindow';
import './styles/App.css';
import About from './components/About';
import ReviewsBlock from './components/ReviewsBlock';
import ErrorToast from './components/ErrorToast';
import Toast from './components/Toast';
import pht from './components/data/me.jpg';


function App() {
  const [modalWindow1, setModalWindow] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const [disRightButton, setDisRightButton] = useState(false);
  const [disLeftButton, setDisLeftButton] = useState(true);
  const [toastError, setToastError] = useState (false);
  const [toast, setToast] = useState (false);
  const [me, setMe] = useState(pht);

  console.log(pht);


  const clickRight = () => {
    setCount(count => count + 1);
    setCount1(count1 => count1 + 1);
    if (count1 === 2) {
      setDisRightButton(true)
    }
    else {
      setDisLeftButton(false)
    }
    if (count > 0) {
      setDisLeftButton(false)
    }
  }
  

  const clickLeft = () => {
    setCount(count => count - 1);
    setCount1(count1 => count1 - 1);
    if (count === 1) {
      setDisLeftButton(true)
    } else {
      setDisLeftButton(false)
    }
    if (count1 < 4) {
      setDisRightButton(false)
    }
  }

  return (
    <div className="App">
      <ReviewWindow modalWindow={modalWindow1} setModal={setModalWindow} setToast={setToast} setToastError={setToastError} />
      <div className="head">
        <img className='miniPhoto' scr={me} />
        <div className="headImg"/>
        <h4 className='headText'>Даниил Исаев</h4>
        <MyButton visible={false} style={{ position: "absolute", width: "227px", left: "1133px", top: "32px" }}>Панель управления</MyButton>
      </div>
      <div className="line"></div>
      <div className="body">
        <h1 className="welcome">Добро пожаловать в Академию!</h1>
        <img className='photo' scr={pht} />
        <button disabled={disLeftButton} onClick={() => clickLeft()} className='leftButton'><div className='leftButtonImg'/></button>
        <button disabled={disRightButton} onClick={() => clickRight()} className='rightButton'><div className='rightButtonImg'/></button>
        <About />
        <div className="reviews-block">
          <h2 className="reviews">Отзывы</h2>
          <MyButton visible={true} onClick={() => setModalWindow(true)}>Добавить отзыв</MyButton>
          <ReviewsBlock count={count} count1={count1}/>
        </div>
        <ErrorToast setToastError={setToastError} toastError={toastError}/>
        <Toast setToast={setToast} toast={toast}/>
      </div>
      <div className="footer"><div className="iLink" /><div className="telegram"/><div className="redd"/><div className="vk"/></div>
    </div>
  )
}

export default App;