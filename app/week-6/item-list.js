'use client';
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = () => {
    if (sortBy === "name") {
      return items.slice().sort((item1, item2) => item1.name.localeCompare(item2.name));
    } else if (sortBy === "category") {
      return items.slice().sort((item1, item2) => item1.category.localeCompare(item2.category));
    }
    return items;
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
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}