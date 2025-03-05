import React from 'react';
import ItemList from './item-list';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 m-5 bg-auto bg-sky-500/50">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-sm">Buy {quantity} in {category}</p>
    </li> 
  );
};

export default Item;
