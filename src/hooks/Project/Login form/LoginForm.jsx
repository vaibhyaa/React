import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [inputs, setinputs] = useState({
    Username: "",
    password: "",
  });
  return (
    <>
      <div>
        <h1>Login Form</h1>
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              if (inputs.Username == "" || inputs.password == "") {
                alert("Provide username and password");
                return;
              }

              console.log(inputs);
              setTimeout(() => {
                setinputs({
                  Username: "",
                  password: "",
                });
              }, 2000);
            }}
          >
            <label htmlFor="">Username</label>
            <input
              value={inputs.Username}
              name="Username"
              type="text"
              onChange={(e) =>
                setinputs((prevInputsState) => {
                  return {
                    ...prevInputsState,
                    [e.target.name]: e.target.value,
                  };
                })
              }
            />

            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={(e) =>
                setinputs((prevInputsState) => {
                  console.log(prevInputsState);
                  return {
                    ...prevInputsState,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              //   onChange={(e) =>
              //     setinputs((prevInputsState) => {
              //       console.log(prevInputsState); // ✅ Log the current state
              //       return {
              //         ...prevInputsState,
              //         [e.target.name]: e.target.value,
              //       };
              //     })
              //   }
            />
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

// In JavaScript, when returning an object in an arrow function with a block body ({}), you need to use the return keyword explicitly. Also, object keys computed from a variable need to be inside square brackets [], and you need to return the entire object properly using the spread syntax.

// You should use one pair of curly braces for the arrow function block, and if you're returning an object, wrap the object in parentheses:
