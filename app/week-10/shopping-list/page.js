"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useAuth } from "../auth-context";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useAuth();

    useEffect(() => {
        const loadItems = async () => {
            if (user?.uid) {
                const shoppingList = await getItems(user.uid);
                setItems(shoppingList);
            }
        };
        loadItems();
    }, [user?.uid]);

    const handleAddItem = async (newItem) => {
        if (!user?.uid) return;
        
        const itemId = await addItem(user.uid, newItem);
        if (itemId) {
            setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
        }
    };

    const handleItemSelect = (item) => {
        let cleanedName = item.name
            .split(',')[0]  
            .trim()         
            .replace(/[😀-🛿]/gu, ''); 
        
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
