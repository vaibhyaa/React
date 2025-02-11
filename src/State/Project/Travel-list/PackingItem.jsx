/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const PackingItem = (props) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={props.Item.packed}
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
