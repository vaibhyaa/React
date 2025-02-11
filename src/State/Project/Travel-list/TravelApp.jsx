import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "./index.css";


const TravelApp = () => {
  // lfting up the state because this used in child components (Form and packingList)
  const [items, setitems] = useState([]);

  function handleAddItems(newItem) {
    // existingitems refere to the existing items in array becaue after adding new item component re-render so all existing items with new item should display
    // existingitems refers to the most recent state value.
    // or existing array of items

    //better way Functional Update (Recommended)
    setitems((existingitems) => [...existingitems, newItem]);

    //not recommended
    // setitems([...items, newItem])
  }

  function handleDeleteItem(id) {
    setitems((allItems) => allItems.filter((eachItem) => eachItem.id !== id));
  }

  function handleToggleItem(id) {
    setitems((allItems) =>
      allItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //imp points
  // Missing return in arrow function {} block
  // When using {} in an arrow function, you must explicitly return a value.
  // Fix: Use return { ...item, packed: !item.packed } OR remove {} and use () instead.
  // Incorrectly structured ternary operator
  // {} wraps the function body, but the ternary operator doesn't return anything.
  // Fix: Either remove {} or use an explicit return.

  //if you wanted to use {} use like this with return statement otherwise use ()
  // function handleToggleItem(id) {
  //   setitems((allItems) =>
  //     allItems.map((item) =>{
  //       return item.id === id ? { ...item, packed: !item.packed } : item }
  //     )
  //   );
  // }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure want to clear window...?");
    if (confirmed) {
      setitems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteItem={handleDeleteItem}
        packingListItems={items}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default TravelApp;
