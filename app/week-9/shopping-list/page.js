"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name
        let cleanedName = item.name
            .split(',')[0]  // Remove everything after comma
            .trim()         // Remove whitespace
            .replace(/[\u{1F600}-\u{1F6FF}]/gu, ''); // Remove emojis
        
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
            <div className="flex">
                <div className="flex-1 max-w-sm mr-8">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 max-w-sm">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}