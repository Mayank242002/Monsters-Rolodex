import React from 'react';

import './Searchbox.css';

function Searchbox(props) {
  return (
    <input
      className='search'
      type='search'
      placeholder={props.placeholder}
      onChange={props.handlechange}
    />
  );
}

export default Searchbox;
