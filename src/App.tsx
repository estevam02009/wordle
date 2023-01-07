import React, { useEffect, useState } from 'react'
import './App.css';
//import Letter from './components/Letter';
import { Word } from './components/Word';
import { WordEntry } from './components/WordEntry';
//import { AccuracyEnum } from './utilities/accuracy.util';

function App() {

  const [wordGuess, setWordGuess] = useState('')

  return (
    <div>
      <WordEntry onGuessEntered={(guess) => setWordGuess(guess)} />
      <Word isWordEvaluated={false} guessWordValue={wordGuess} />
    </div>
  );
}

export default App;
