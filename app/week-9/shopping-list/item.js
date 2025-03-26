import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li 
      className="p-2 m-5 bg-auto bg-sky-500/50 cursor-pointer hover:bg-sky-700/50"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <p className="text-xl font-bold">{name}</p>
      <p className="text-sm">Buy {quantity} in {category}</p>
    </li> 
  );
};

export default Item;