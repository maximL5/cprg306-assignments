"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import { auth } from "../_utils/firebase";

export default function Page() {
    const [items, setItems] = useState("");
    const [selectedItemName, setSelectedItemName] = useState("");

    const useShoppingList = () => {
        const [items, setItems] = useState([]);
      
        const loadItems = async () => {
          if (!auth.currentUser) return; // Ensure user is logged in
      
          try {
            const userId = auth.currentUser.uid;
            const shoppingList = await getItems(userId);
            setItems(shoppingList);
          } catch (error) {
            console.error("Error loading items:", error);
          }
        };
      
        useEffect(() => {
          loadItems();
        }, []);
      
        return { items, loadItems };
      };
      
      const handleAddItem = async (newItem) => {
        if (!auth.currentUser) return; // Ensure the user is logged in
    
        try {
            const userId = auth.currentUser.uid;
            const itemId = await addItem(userId, newItem); // Add item to Firestore
    
            if (itemId) {
                setItems([...items, { id: itemId, ...newItem }]); // Add item to state
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
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