/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Travelappindex.css";

// const PackingItem = ({Item , onDeleteItem}) => {
const PackingItem = (props) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={props.Item.packed}
          // This state represents the full list of items (each one has id, description, quantity, packed).
          // Only the parent can directly update this state using setItems.
          // PackingItem doesn’t have the full list, just one item.
          // It cannot update the entire array—it doesn’t have access to setItems.
          // This calls the parent’s handleToggleItem(id).
          // The parent finds that item by ID in the list, toggles .packed, and calls setItems() with the new list.
          // Parent owns the state
          // Child gets data via props
          // Child triggers events (like toggle/delete) via callback functions passed from the parent
          onChange={() => {
            props.onToggleItem(props.Item.id);
          }}
        />
        <span
          style={props.Item.packed ? { textDecoration: "line-through" } : {}}
        >
          {/* {"   "} */}
          {props.Item.quantity} {props.Item.description}
        </span>
        <button onClick={() => props.onDeleteItem(props.Item.id)}>❌</button>
      </li>
    </>
  );
};

export default PackingItem;
