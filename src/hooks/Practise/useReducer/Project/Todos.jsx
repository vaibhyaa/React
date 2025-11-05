import React, { useReducer, useState } from "react";

// That action object usually has two parts:
// type → describes what kind of update you want.
// payload → carries the extra data needed for the update.

const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  TOGGLE_TODO: "toggle-todo",
};

const Todos = () => {
  const [todos, dispatch] = useReducer(
    (todos, action) => {
      switch (action.type) {
        case ACTIONS.ADD_TODO:
          return [
            ...todos,
            {
              id: Date.now(),
              name: action.payload.name,
              status: "incomplete",
            },
          ];
        case ACTIONS.REMOVE_TODO:
          return todos.filter((todo) => todo.id !== action.payload.eachnameid);
        case ACTIONS.TOGGLE_TODO:
          return todos.map((todo) =>
            todo.id === action.payload.eachnameid
              ? {
                  ...todo,
                  status:
                    todo.status === "incomplete" ? "completed" : "incomplete",
                }
              : todo
          );
      }
    },
    [{ id: Date.now(), name: "dskjvnlksd", status: "incomplete" }]
  );
  const [todoname, settodoname] = useState("");
  console.log(todos);

  return (
    <>
      <center>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({
                type: ACTIONS.ADD_TODO,
                payload: { name: todoname },
              });
              settodoname("");
            }}
          >
            <label htmlFor="">Name:-</label>
            <input
              type="text"
              value={todoname}
              onChange={(e) => settodoname(e.target.value)}
            />
          </form>
          <ul>
            {todos.map((eachname) => {
              return (
                <li key={eachname.id} className="todo-item">
                  <span
                    style={{
                      color: eachname.status === "incomplete" ? "red" : "green",
                    }}
                  >
                    {eachname.name}
                  </span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { eachnameid: eachname.id },
                      })
                    }
                  >
                    TOGGLE
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: ACTIONS.REMOVE_TODO,
                        payload: { eachnameid: eachname.id },
                      })
                    }
                  >
                    ❌
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </center>
    </>
  );
};

export default Todos;
