import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [itemName, setName] = useState("");
    const [count, setCount] = useState(1);
    const [category, setCategory] = useState("Produce");

    const increment = (event) => {
        event.preventDefault();
        setCount((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));
    };

    const decrement = (event) => {
        event.preventDefault();
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`, // Generates a unique ID
            name: itemName,
            quantity: count,
            category: category,
        };
        onAddItem(newItem);
        setName("");
        setCount(1);
        setCategory("Produce");
    };

    return (
        <div className="flex flex-col items-center justify-center pt-20">
            <form className="bg-gray-800 rounded-lg p-5" onSubmit={handleSubmit}>
                <div className="flex mb-4 items-center justify-center">
                    <input className="flex p-2 px-5 text-black rounded-lg"
                        onChange={(e) => setName(e.target.value)}
                        value={itemName}
                        id="itemName"
                        type="text"
                        placeholder="Enter item name"
                    />
                </div>

                <div className="flex flex-row items-center mb-5">
                    <div className="flex flex-row rounded-lg items-center bg-white">
                        <h1 className="text-l my-2 mx-8 text-black">{count}</h1>
                        <button onClick={decrement} disabled={count === 1} className="bg-gray-400 rounded-lg px-5">-</button>
                        <button onClick={increment} disabled={count === 20} className="bg-blue-400 rounded-lg px-5">+</button>
                    </div>
                    <select className="flex p-2 px-5 text-black rounded-lg ml-5"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        <option>Produce</option>
                        <option>Dairy</option>
                        <option>Bakery</option>
                        <option>Meat</option>
                        <option>Frozen Foods</option>
                        <option>Canned Goods</option>
                        <option>Dry Goods</option>
                        <option>Beverages</option>
                        <option>Snacks</option>
                        <option>Household</option>
                        <option>Other</option>
                    </select>
                </div>
                <button type="submit" className="flex items-center justify-center bg-blue-400 rounded-lg px-20 mr-5">
                    +
                </button>
            </form>
        </div>
    );
}
