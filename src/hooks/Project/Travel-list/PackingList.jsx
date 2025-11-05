/* eslint-disable react/prop-types */

import { useState } from "react";
import "./Travelappindex.css";
import PackingItem from "./PackingItem";

// const packingListItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 2, packed: false },
//   { id: 4, description: "Tshirt", quantity: 12, packed: true },
//   { id: 5, description: "shirt", quantity: 10, packed: true },
// ];

const PackingList = ({
  packingListItems,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setsortBy] = useState("input");
  const [showPacked, setShowPacked] = useState(false);

  // Using (prev) => !prev ensures we always use the latest state value
  function handlePackedItem() {
    setShowPacked((previousPackedStatus) => !previousPackedStatus); // Toggle packed list view
  }

  //ALWAYS AN ARRAY
  // Avoids accidental mutation of packingListItems
  let sortedItems = [...packingListItems];

  //this is for to show packed items only

  if (sortBy === "input") {
    sortedItems = packingListItems;
  }

  if (sortBy === "description") {
    sortedItems = packingListItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    //this will show packed items first and then all items
    sortedItems = packingListItems.slice().sort((a, b) => b.packed - a.packed);
  } else {
    // this is for either only packed item or all items
    sortedItems = showPacked
      ? sortedItems.filter((eachItem) => eachItem.packed) // Show only packed items
      : sortedItems; // Show all items
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((Item) => (
            <PackingItem
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
              Item={Item}
              key={Item.id}
            />
          ))}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
            <option value="input">Sort By input</option>
            <option value="description">Sort By description</option>
            <option value="packed">Sort By packed status</option>
          </select>
          <>
            <button onClick={handlePackedItem}>
              {showPacked ? "Show All Items" : "Show Packed Items"}
            </button>
            <button onClick={onClearList}>Clear List</button>
          </>
        </div>
      </div>
    </>
  );
};

export default PackingList;
