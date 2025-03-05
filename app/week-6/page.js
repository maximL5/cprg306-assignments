import React from "react";
import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
    return (
    <>
    <h1 className="p-2 text-3xl font-bold">
        Shopping List
    </h1>
      <ItemList />
    </>
    );
  };
