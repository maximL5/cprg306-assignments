'use client';
import { useState } from "react";

export default function NewItem() {

    const [itemName, setName] = useState("Item name");

    const [count, setCount] = useState(1);

    const [category, setCategory] = useState("Produce");


    const increment=(event)=>
    {
        event.preventDefault();
        setCount((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));
    };

    const decrement=(event)=>
    {
        event.preventDefault();
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    };

    const handleSubmit = () => {
        alert(`Added item: ${itemName}, Quantity: ${count}, Category: ${category}`);
    };
    

    return(
    <div className="flex flex-col items-center justify-center pt-20">
        <form className=" bg-gray-800 rounded-lg p-5">
            <div className="flex mb-4 items-center justify-center">
            <input className="flex p-2 px-5 text-black rounded-lg" onChange={(e) => setName(e.target.value)} placeholder="Item name" id="itemName" type="text"/>
            </div>

            <div className="flex flex-row items-center mb-5">
                <div className="flex flex-row rounded-lg items-center bg-white">
                    <h1 className="text-l my-2 mx-8 text-black">{count}</h1>
                    <button onClick={decrement} disabled={count === 1} className="bg-gray-400 rounded-lg px-5">-</button>
                    <button onClick={increment} disabled={count === 20} className="bg-blue-400 rounded-lg px-5">+</button>
                </div>
                <select className="flex p-2 px-5 text-black rounded-lg ml-5" onChange={(e) => setCategory(e.target.value)}>
                    <option className="text-black">
                        Produce
                    </option>
                    <option className="text-black">
                        Dairy
                    </option>
                    <option className="text-black">
                        Bakery
                    </option>
                    <option className="text-black">
                        Meat
                    </option>
                    <option className="text-black">
                        Frozen Foods
                    </option>
                    <option className="text-black">
                        Canned Goods
                    </option>
                    <option className="text-black">
                        Dry Goods
                    </option>
                    <option className="text-black">
                        Beverages
                    </option>
                    <option className="text-black">
                        Snacks
                    </option>
                    <option className="text-black">
                        Household
                    </option>
                    <option className="text-black">
                        Other
                    </option>
                </select>
            </div>
            <button onClick={handleSubmit} className="flex items-center justify-center bg-blue-400 rounded-lg px-20 mr-5">+</button>
        </form>
    </div>
    );
};