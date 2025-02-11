'use client';
import { useState } from "react";

export default function NewItem() {

    const [count, setCount]=useState(1);

    const increment=()=>
    {
        setCount((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));
    };

    const decrement=()=>
    {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    };

    return(
    <div className="flex flex-row gap-4">
        <button onClick={increment} disabled={count===20} className="bg-blue-400 rounded-lg pl-5 pr-5">+</button>
        <button onClick={decrement} disabled={count===1} className="bg-red-400 rounded-lg pl-5 pr-5">-</button>
        <h1>{count}</h1>
    </div>
    );
};