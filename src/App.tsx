import React from 'react';
import './App.css';
import { System } from './coponents/system/system';
import { generateSmallerProblems, shuffleArray } from './coponents/judge/judge_table';

const App: React.FC = () => {
  const problems = generateSmallerProblems();
  shuffleArray(problems);
  return (
    <div className="App">
      <System problems={problems}/>
    </div>
  );
}

export default App;
