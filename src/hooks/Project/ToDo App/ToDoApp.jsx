/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./ToDoApp.css";
import { MdDeleteForever } from "react-icons/md";
import { BsToggle2Off } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { LiaGrinHearts, LiaLaughBeam } from "react-icons/lia";

// const ToDoApp = () => {
//   // const [items, setitems] = useState(() => {
//   //   const rawTodos = localStorage.getItem(reactTodo);
//   //   return JSON.parse(rawTodos);
//   // });
//   const [items, setitems] = useState([]);
//   const [additem, setadditem] = useState("");
//   const [editItem, seteditItem] = useState(null);
//   const [inputEditField, setinputEditField] = useState("");

//   // localStorage.setItem("reactTodo", JSON.stringify(items));

//   return (
//     <div>
//       <Header />
//       <Main
//         additem={additem}
//         setadditem={setadditem}
//         items={items}
//         setitems={setitems}
//         seteditItem={seteditItem}
//         editItem={editItem}
//         inputEditField={inputEditField}
//         setinputEditField={setinputEditField}
//       />
//       <Footer />
//     </div>
//   );
// };

// function Header() {
//   return (
//     <center>
//       <h1>Todo List...!</h1>
//       <p>{new Date().toLocaleString("en-US").replace(",", " -")}</p>
//     </center>
//   );
// }

// function Main({
//   additem,
//   setadditem,
//   items,
//   setitems,
//   seteditItem,
//   editItem,
//   setinputEditField,
//   inputEditField,
// }) {
//   const toggleCheck = (index) => {
//     // console.log(index);
//     const updatedItems = [...items];
//     updatedItems[index].checked = !updatedItems[index].checked;
//     // reassign with opposite with to same variable
//     setitems(updatedItems);
//   };

//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();

//           const trimmedName = additem.trim();
//           if (!trimmedName || items.some((item) => item.name === trimmedName)) {
//             alert("Item is empty or already exists!");
//             setadditem("");
//             return;
//           }

//           const item = {
//             name: trimmedName,
//             checked: false,
//           };

//           setitems((prev) => [...prev, item]);
//           setadditem("");
//         }}
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Add Here..!"
//           value={additem}
//           onChange={(e) => setadditem(e.target.value)}
//         />
//         <button type="submit">ADD task..!</button>
//       </form>
//       <ul>
//         {items.map((eachItem, index) => (
//           <li
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: "space-evenly",
//               alignItems: "center",
//               marginTop: "10px",
//               textDecoration: eachItem.checked ? "line-through" : "none",
//               color: eachItem.checked ? "gray" : "black",
//               backgroundColor: eachItem.checked ? "#4ad2ffff" : "white",
//             }}
//           >
//             {/* <p>{eachItem.name}</p> */}
//             {editItem ? (
//               <>
//                 {eachItem.name}
//                 <input
//                   value={inputEditField}
//                   onChange={(e) => setinputEditField(e.target.value)}
//                   style={{
//                     padding: "3px",
//                     margin: "2px",
//                     height: "auto",
//                     width: "250px",
//                     fontSize: "30px",
//                     color: "blue",
//                   }}
//                   type="text"
//                   placeholder="edit here...!"
//                 />
//                 <button
//                   onClick={() => {
//                     const updated = [...items];
//                     updated[index].name = inputEditField;
//                     setitems(updated);
//                     seteditItem(null); // close edit mode
//                     setinputEditField(""); // clear input
//                   }}
//                 >
//                   Edit...!
//                 </button>
//               </>
//             ) : (
//               <>{eachItem.name}</>
//             )}
//             <span>
//               <span>
//                 <MdDeleteForever
//                   onClick={() => {
//                     console.log(eachItem);

//                     const updatedItems = items.filter(
//                       (deletingitem) => deletingitem !== eachItem
//                     );
//                     setitems(updatedItems);
//                   }}
//                   style={{
//                     color: "red",
//                     cursor: "pointer",
//                     marginRight: "8px",
//                   }}
//                 />
//                 <BsToggle2Off
//                   onClick={() => toggleCheck(index)}
//                   style={{
//                     cursor: "pointer",
//                     color: eachItem.checked ? "#800000" : "#90ee90",
//                   }}
//                 />{" "}
//                 <button
//                   value={editItem}
//                   onClick={() => {
//                     const updatedItems = items.filter(
//                       (editingitem) => editingitem == eachItem
//                     );
//                     setitems(updatedItems);
//                     seteditItem(!editItem);
//                   }}
//                   style={{
//                     marginLeft: "5px",
//                   }}
//                 >
//                   <CiEdit />
//                 </button>
//               </span>
//             </span>
//           </li>
//         ))}
//       </ul>

//       <center style={{ marginTop: "20px" }}>
//         <button onClick={() => setitems([])}>Clear All</button>
//       </center>
//     </>
//   );
// }

const ToDoApp = () => {
  const [items, setitems] = useState([]); //this state is for todo list item
  const [additem, setadditem] = useState(""); //this state for additem
  const [editItem, seteditItem] = useState(null); //this state is for selecting item for which we want to edit
  const [inputEditField, setinputEditField] = useState(""); //this state for edit value input field

  return (
    <div>
      <Header />
      <Main
        additem={additem}
        setadditem={setadditem}
        items={items}
        setitems={setitems}
        editItem={editItem}
        seteditItem={seteditItem}
        inputEditField={inputEditField}
        setinputEditField={setinputEditField}
      />
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <center>
      <h1>Todo List...!</h1>
      <p>{new Date().toLocaleString("en-US").replace(",", " -")}</p>
    </center>
  );
}

function Main({
  additem,
  setadditem,
  items,
  setitems,
  editItem,
  seteditItem,
  inputEditField,
  setinputEditField,
}) {
  // // const toggleCheck = (index) => {
  // //   const updatedItems = [...items];
  // //   updatedItems[index].checked = !updatedItems[index].checked;
  // //   setitems(updatedItems);
  // // };

  // const handleEditSubmit = (index) => {
  //   const updatedItems = [...items];
  //   updatedItems[index].name = inputEditField.trim();
  //   setitems(updatedItems);
  //   seteditItem(null);
  //   setinputEditField("");
  // };

  return (
    <>
      {/* Add Task Form */}
      <form
        // here in this form we add the task
        onSubmit={(e) => {
          e.preventDefault();
          const trimmedName = additem.trim();
          if (!trimmedName || items.some((item) => item.name === trimmedName)) {
            alert("Item is empty or already exists!");
            setadditem("");
            return;
          }

          const newItem = {
            name: trimmedName,
            checked: false,
          };

          setitems([...items, newItem]);
          setadditem("");
        }}
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   alignItems: "center",
        //   gap: "10px",
        //   marginBottom: "15px",
        // }}
      >
        <input
          type="text"
          placeholder="Add task here..."
          value={additem}
          onChange={(e) => setadditem(e.target.value)}
        />
        <button type="submit">ADD Task</button>
      </form>

      {/* Task List */}
      {/* here we display the task */}
      <ul>
        {items.map((eachItem, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
              padding: "8px",
              textDecoration: eachItem.checked ? "line-through" : "none",
              color: eachItem.checked ? "gray" : "black",
              backgroundColor: eachItem.checked ? "#4ad2ffff" : "#f2f2f2",
              borderRadius: "5px",
            }}
          >
            {editItem === index ? (
              <>
                <p>{eachItem.name}</p>
                <input
                  type="text"
                  value={inputEditField}
                  onChange={(e) => setinputEditField(e.target.value)}
                  // style={{
                  //   padding: "4px",
                  //   fontSize: "18px",
                  //   width: "200px",
                  // }}
                  placeholder="Edit here..."
                />
                <button
                  onClick={() => {
                    const updatedItems = [...items];
                    const trimmed = inputEditField.trim();
                    if (!trimmed) return alert("Task name cannot be empty!");
                    updatedItems[index].name = inputEditField.trim();
                    setitems(updatedItems);
                    seteditItem(null);
                    setinputEditField("");
                  }}
                >
                  Save
                </button>
                <button onClick={() => seteditItem(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{eachItem.name}</span>
                <span>
                  <MdDeleteForever
                    onClick={() => {
                      const updatedItems = items.filter((_, i) => i !== index);
                      setitems(updatedItems);
                    }}
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginRight: "8px",
                    }}
                  />
                  <BsToggle2Off
                    onClick={(index) => {
                      const updatedItems = [...items];
                      updatedItems[index].checked =
                        !updatedItems[index].checked;
                      setitems(updatedItems);
                    }}
                    style={{
                      cursor: "pointer",
                      color: eachItem.checked ? "#800000" : "#90ee90",
                      marginRight: "8px",
                    }}
                  />
                  <button
                    onClick={() => {
                      seteditItem(index);
                      setinputEditField(eachItem.name);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <CiEdit />
                  </button>
                </span>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Clear All */}
      {/* when their are atsks then only we can see the button otherwise  no button */}
      {items.length > 0 && (
        <center style={{ marginTop: "20px" }}>
          <button onClick={() => setitems([])}>Clear All</button>
        </center>
      )}
    </>
  );
}

function Footer() {
  return (
    <>
      <footer
        // style={{
        //   backgroundColor: "#f1f1f1",
        //   padding: "10px",
        //   textAlign: "center",
        //   color: "#333",
        //   marginTop: "20px",
        // }}
      >
        © 2025 MyWebsite. All rights reserved.
      </footer>
    </>
  );
}

export default ToDoApp;
