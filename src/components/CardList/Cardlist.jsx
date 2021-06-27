import React from 'react';
import './Cardlist.css';
import Card from '../Card/Card';

function Cardlist(props) {
  return (
    <div className='Cardlist'>
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster}></Card>;
      })}
    </div>
  );
}

export default Cardlist;
