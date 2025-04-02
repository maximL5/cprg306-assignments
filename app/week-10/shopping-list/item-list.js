import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {  // Add onItemSelect to props
  const [sortBy, setSortBy] = useState("name");

  const sortItems = () => {
    const sortedItems = [...items];
    if (sortBy === "name") {
      return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }
    return sortedItems;
  };

  const sortedItems = sortItems();

  return (
    <div>
      <div>
        <button
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "cyan" : "white" }}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "cyan" : "white" }}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item 
            key={item.id} 
            {...item} 
            onSelect={() => onItemSelect(item)}  // Pass onSelect prop
          />
        ))}
      </ul>
    </div>
  );
}