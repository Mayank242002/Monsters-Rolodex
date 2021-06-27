import React from 'react';
import { useState, useEffect } from 'react';
import Cardlist from './components/CardList/Cardlist';

import './App.css';
import Searchbox from './components/Searchbox/Searchbox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users#').then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  const filteredmonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  function handlechange(e) {
    setSearchfield(e.target.value);
  }

  return (
    <div className='App'>
      <h1>Monsters Rolodex </h1>
      <Searchbox placeholder='search monsters' handlechange={handlechange} />
      <Cardlist monsters={filteredmonsters}></Cardlist>
    </div>
  );
}
export default App;
