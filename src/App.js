import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '6947ae0effb1401bcafdcca39b0351bb2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  const [statementTranslation, startTrans] = useState([]);
  const[endLanguage, secondLang] = useState([]);
  const[endTranslation, secondTrans] = useState([]);
  const langs = {"de":"German", "en": "English"};
;  useEffect(()=> {
    alanBtn({
      key: alanKey,
      onCommand: ({command, text, response,tranLang}) => {
        if(command === 'testCommand') {
            alert('This code works');

        }
        if(command ==='sendData'){
          startTrans(text);
          secondLang(tranLang);
          secondTrans(response.translated);
        }
      }

    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>
          {statementTranslation}
        </a>
        <a>
          {endLanguage}
        </a>
        <a>
          {endTranslation}
        </a>
      </header>
    </div>
  );
}

export default App;
