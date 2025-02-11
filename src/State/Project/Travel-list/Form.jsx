/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = ({onAddItems}) => {
  // const numArry=[1,2,3,4,5,6,7,8,9,10]
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1)


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
    // Without e.preventDefault() → The form would reload the page.
    // With e.preventDefault() → The form submits without reloading.

    // Ensure description is not empty
    if (!description) {
      alert("Description cannot be empty!");
      return;
    }
  
    // Create a new item object
    const newItem = {
      description, // Item description
      quantity: quantity || 0, // Default quantity to 0 if not provided
      packed: false, // Default packed status
      id: Date.now(), // Unique identifier
    };
  
    console.log(newItem); // Log the new item for debugging
  
    // Add the created new item object to the function /list
    onAddItems(newItem);
  
    // Reset form fields
    setDescription(""); // Clear the description
    setQuantity(""); // Reset quantity to default state
  }
  

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
      <form className="add-form"   onSubmit={handleSubmit}>
        <h3>What do you need for your trip...?</h3>
        <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>

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
          onChange={(e)=>setDescription(e.target.value)}
        />
        <button>ADD ITEM...!</button>
      </form>
    </>
  );
};

export default Form;
