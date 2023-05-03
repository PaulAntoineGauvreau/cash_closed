import Cash from './components/cash'
import './App.css';
import { useState } from 'react';

export default function App() {
  const [today] = useState(new Date());
  const [dd] = useState(today.getDate());
  const [mm] = useState(today.getMonth()+1);
  const [yyyy] = useState(today.getFullYear());

  return (
    <div className="App">
      <header className="App-header">
          <h1>Tu as presque terminé : <time dateTime={`${dd}-${mm}-${yyyy}`}>{`${dd} | ${mm} | ${yyyy}`}</time> !</h1>
          
      </header>
      <Cash/>
    </div>
  );
}

