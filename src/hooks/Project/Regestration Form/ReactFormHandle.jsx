import React, { useState } from "react";

const ReactFormHandle = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNo: "",
  });
  const [userCreated, setUserCreated] = useState(false);

  const [submittedUser, setsubmittedUser] = useState(null);

  return (
    <div>
      <>
        <div>
          <span>
            {/* Conditional rendering is needed because submittedUser is null by default — accessing its properties early would crash the app. */}

            {submittedUser ? (
              <p>
                Hello My name is <b>{submittedUser.firstname}</b>, My Email
                address is <b>{submittedUser.email}</b> and my phone no is{" "}
                <b>{submittedUser.phoneNo}</b>
              </p>
            ) : (
              <p>
                Hello My name is <b>{inputs.firstname}</b>, My Email address is{" "}
                <b>{inputs.email}</b> and my phone no is {" "}
                <b>{inputs.phoneNo}</b>
              </p>
            )}
          </span>
        </div>

        <div>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>

          <div>
            <label>First Name :- </label>
            <input
              name="firstname"
              value={inputs.firstname}
              onChange={(e) =>
                setInputs((prev) => ({
                  // prev will preserve all other state
                  ...prev,
                  [e.target.name]: e.target.value,
                  //hera [] because object name property if it sting need t assign like this
                }))
              }
            />

            <label>Last Name :- </label>
            <input
              name="lastname"
              value={inputs.lastname}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />

            <label>Email :- </label>
            <input
              name="email"
              type="email"
              value={inputs.email}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />

            <label>Password :- </label>
            <input
              name="password"
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />

            <label>Phone Number :- </label>
            <span>+91</span>
            <input
              name="phoneNo"
              value={inputs.phoneNo}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>

          <p style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}>
            By creating an account, you agree to our{" "}
            <a href="#" style={{ color: "#007BFF", textDecoration: "none" }}>
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "#007BFF", textDecoration: "none" }}>
              Privacy Policy
            </a>
            .
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              if (
                inputs.firstname.trim() === "" ||
                inputs.lastname.trim() === ""
              ) {
                alert("Please enter first name and last name");
                return;
              }

              //   const newUser = {
              //     firstName: inputs.firstname,
              //     lastName: inputs.lastname,
              //     email: inputs.email,
              //     phoneNo: inputs.phoneNo,
              //   };
              //   console.log("✅ User created:", newUser);

              console.log("✅ User created:", inputs);

              setsubmittedUser(inputs);

              if (inputs) {
                setUserCreated(true);
              }
              setTimeout(() => {
                setInputs({
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: "",
                  phoneNo: "",
                });
              }, 2000);
			  setTimeout(() => {
				setsubmittedUser(null)
			  }, 5000);
            }}
          >
            {userCreated ? "✅ User Created Successfully!" : "Sign Up"}
          </button>
        </div>
      </>
    </div>
  );
};

export default ReactFormHandle;

// const name = "firstname";
// { [name]: "Vaibhav" }
// // ✅ This will create: { firstname: "Vaibhav" }

// { name: "Vaibhav" }
// ❌ This will create a key literally named "name", not the value inside the variable `name`
