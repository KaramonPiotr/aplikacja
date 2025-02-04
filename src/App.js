import logo1 from './logo.jpg';
import logo2 from './logo2.png';
import logo3 from './logo3.gif'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentImage, setCurrentImage] = useState(logo1);
  const [currentText, setCurrentText] = useState("Czy zostaniesz moją walentynką ???");
  const [buttonSize, setButtonSize] = useState(100); 
  const [fontSize, setFontSize] = useState(16); 

  const handleNoClick = () => {
    setCurrentImage(logo2);
    setCurrentText("Może jednak???");
    setButtonSize(buttonSize + 10); 
    setFontSize(fontSize + 2); 
  };

  const handleYesClick = () => {
    setCurrentImage(logo3);
    setCurrentText("Happi Happi Happi");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{currentText}</h1>
        <img src={currentImage} className="App-logo" alt="logo" />
        <div className="button-container">
          <button className="button-yes" style={{ width: buttonSize, height: buttonSize, fontSize: `${fontSize}px` }} onClick={handleYesClick}>Tak 😍</button>
          <button className="button-no" onClick={handleNoClick}>Nie 😭</button>
        </div>
      </header>
    </div>
  );
}

export default App;
