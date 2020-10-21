import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '6947ae0effb1401bcafdcca39b0351bb2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  //const instruction = "Click the icon on the bottom right to start recording.";
  const [statementTranslation, startTrans] = useState([]);
  const[endLanguage, secondLang] = useState([]);
  const[endTranslation, secondTrans] = useState([]);
  //const langs = {"de":"German", "en": "English"};
;  useEffect(()=> {
    alanBtn({
      key: alanKey,
      onCommand: ({command, text, response,lang}) => {
        if(command === 'testCommand') {
            alert('This code works');
            
        }
        if(command ==='sendData'){
          startTrans(text);
          switch(lang){
            case "de":
              secondLang("German");
              break;
              case "fr":
                secondLang("French");
                break;
                case "ru":
                  secondLang("Russian");
                break;
                case "es":
                  secondLang("Spanish");
                break;
                case "en":
                  secondLang("English");
                break;
          }
          secondTrans(response.translated);
          console.log(response);
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
