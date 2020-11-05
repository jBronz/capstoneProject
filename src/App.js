import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '6947ae0effb1401bcafdcca39b0351bb2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  //const instruction = "Click the icon on the to start recording.";
  const [statementTranslation, startTrans] = useState([]);
  const[endLanguage, secondLang] = useState([]);
  const[endTranslation, secondTrans] = useState([]);
  //const langs = {"de":"German", "en": "English"};
;  useEffect(()=> {
    alanBtn({
      key: alanKey,
      onCommand: ({command, text, response,tranLang}) => {
        if(command ==='sendData'){
          startTrans(text);
          secondLang(tranLang);
          secondTrans(response.translated);
        }
          if(command ==='sendPhrase'){
            startTrans(text);
          }
          if(command ==='sendLang'){
            secondLang(tranLang);
            console.log(endLanguage);
          }
      }

    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
      </header>
    <div>
    <div id="root"></div>
    <section>
			<article id="english-box">
        <a className="cardText">
          {statementTranslation}
        </a>
				<p className="defaultLang">English (Default Language)</p>
			</article>
			<article id="spanish-box">
				<p id="languages">
        {endLanguage}
				</p>
        <p className ="translated" >{endTranslation}</p>
      </article>    
		</section>
		<footer>
			<p>Copyright &copy; 2020 All rights reserved</p>
		</footer>
  </div>    
  </div>
  );
}

export default App;
