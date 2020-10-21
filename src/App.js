import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '6947ae0effb1401bcafdcca39b0351bb2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  useEffect(()=> {
    alanBtn({
      key: alanKey,
      onCommand: ({command}) => {
        if(command === 'testCommand') {
            alert('This code works');

        }

      }

    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To Start Translation Click Button
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
