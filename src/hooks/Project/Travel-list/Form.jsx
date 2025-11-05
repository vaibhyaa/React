/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Travelappindex.css";

const Form = ({ onAddItems }) => {
  // const numArry=[1,2,3,4,5,6,7,8,9,10]
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // (another way to handle formSubmit)
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(e);
  //   if (!description) {
  //     return ;
  //   }
  //   const newItem={description , quantity , packed:false , id: Date.now()};
  //   console.log(newItem);
  //   handleAddItems(newItem)
  //   //after submitting set descrition and quantity to default state
  //   setDescription('')
  //   setquantity()
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // Prevent default form submission behavior
    // Without e.preventDefault() → The form would reload the whole page.
    // With e.preventDefault() → The form submits without reloading the whole page .

    // we can also listen onClick for button when we click button for form submission form will get submitted and it will not work for enter ..
    // <Button onClick={handleSubmit}>ADD....</Button>
    // If you're worried about form submission via "Enter" vs. clicking a button, using <form onSubmit={handleSubmit}> is better than attaching onClick to the button alone.

    // Ensure description is not empty
    if (!description) {
      alert("Description cannot be empty!");
      return null;
      // If we didnt return anything here then we will get the alert but obj still gets created so we have to rertun something/null to exit before creating object.
      // However, returning JSX like <h1>Need object</h1> does nothing inside an event handler. React won’t render that return value.
      //  You should just return null or nothing
    }

    // Create a new item object
    const newItem = {
      description, // Item description
      quantity: quantity || 0, // Default quantity to 0 if not provided
      packed: false, // Default packed status
      id: Date.now(), // Unique identifier
    };
    // console.log(newItem); // Log the new item for debugging

    // Add the created new item object to the function /list
    onAddItems(newItem);

    // Reset form fields
    setDescription(""); // Clear the description
    setQuantity(""); // Reset quantity to default state
  }

  // (IMP) Ihis function are made to understand onChange evenets AND we can also pass the inline function in onChange event (this two function are for understanding the onChange for description and quantity)
  // function handleOnChange(e) {
  // //   console.log(e.target.value);
  // //   for this we are getting error  ( always Update state based on current state )
  // //   e.target.value, which is unrelated to the previous state.
  // //   setDescription((e)=>e.target.value)
  // //   always use this
  // setDescription(e.target.value);
  // }

  // function handleQuantity(e) {
  //   // e.target.value always a string
  //   // so we need to convert it to num because we want that in number
  //    setQuantity(Number(e.target.value))
  // }

  return (
    <>
      {/* select box input box and button  */}
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip...?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option> */}

          {/* {
            numArry.map((eachNum)=>(
              <>
              <option value={eachNum}>{eachNum}</option>
              </>
            ))
          } */}
          {Array.from({ length: 10 }, (_, i) => i + 1).map((eachNum) => (
            <option key={eachNum} value={eachNum}>
              {eachNum}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Type..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD ITEM...!</button>
      </form>
    </>
  );
};

export default Form;

// What this does:
// if (!description) checks if the description is empty, undefined, or null.
// If it is empty, it:
// Shows an alert.
// Executes return; — this immediately exits the function, so no item gets created and nothing else runs.

// ✅ So YES — if the description is empty:
// You do not continue past that point.
// The newItem object does not get created.
// onAddItems() is not called.
// The form fields are not reset.
// Nothing is added to the list.

// ❌ What would happen if you didn't use return;?
// If you remove the return line, this would happen:
// You’d still see the alert.
// But the function would continue running.
// An object with an empty description would be created and added — which you don’t want.
// So this would be a bug — your check is good!
