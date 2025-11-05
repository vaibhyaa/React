import React, { useState } from "react";
import "./Form.css";

const RegestrationForm = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNo, setphoneNe] = useState("");
  const [userCreated, setUserCreated] = useState(false);

  //this is for handle mulipleInputs onchange events for
  //   function handleInputChnage(eventValue) {
  //     // console.log(eventValue.target);
  // 	const {name , value}=eventValue.target
  // 	switch (name) {
  // 		case 'firstname':
  // 			setfirstname(eventValue.target.value)
  // 			break;

  // 		default:
  // 			break;
  // 	}
  //   }

  return (
    <>
      <>
        <div>
          <span>
            <p>
              Hello My name is <b>{firstname}</b> , My Email address is{" "}
              <b>{email}</b> and my phone no is <b>{phoneNo}</b>
            </p>
          </span>
        </div>
        <div>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>
          <div>
            <>
              <label htmlFor="">First NAME :- </label>
              <input
                name="firstname"
                type="text"
                value={firstname}
                required
                onChange={(e) => setfirstname(e.target.value)}
                //   onChange={(e) => handleInputChnage(e)}
              />
            </>
            <>
              <label htmlFor="">Last name :- </label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                required
                onChange={(e) => setlastname(e.target.value)}
              />
            </>
            <>
              <label htmlFor="">Email :-</label>
              <input
                name="email"
                type="email"
                value={email}
                required
                onChange={(e) => setemail(e.target.value)}
              />
            </>{" "}
            <>
              <label htmlFor="">Password :- </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </>{" "}
            <>
              <label htmlFor="">Phone Number :- </label>
              <>
                <>+ 91</>
                <input
                  name="phone"
                  value={phoneNo}
                  onChange={(e) => setphoneNe(e.target.value)}
                />
              </>
            </>
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
              if (firstname.trim() == "" || lastname.trim() == "") {
                alert("add first name and lastname");
                return;
              }
              const newUser = {
                firstName: firstname,
                lastMame: lastname,
                Email: email,
                PhoneNo: phoneNo,
              };
              if (newUser) {
                setUserCreated(true);
              }
              // console.log(newUser);
            }}
          >
            {userCreated ? (
              <>✅ User Created Successfully!</>
            ) : (
              //   {/* style=
              //   {{
              //     color: "green",
              //     marginTop: "10px",
              //     fontWeight: "bold",
              //     fontSize: "16px",
              //   }} */}

              <>Sign Up</>
            )}
          </button>
        </div>
      </>
    </>
  );
};

export default RegestrationForm;
