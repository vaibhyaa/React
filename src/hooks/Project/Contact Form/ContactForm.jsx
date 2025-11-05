import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [inputs, setinputs] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [user, setuser] = useState({});
  const [getUser, setgetUser] = useState(null);
  return (
    <>
      <h1>Contace Form</h1>
      <div>
        <>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={inputs.username}
            type="text"
            required
            autoComplete="off"
            onChange={(e) => {
              setinputs((previousState) => ({
                ...previousState,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </>
        <>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={inputs.email}
            type="email"
            required
            autoComplete="off"
            onChange={(e) => {
              setinputs((previousState) => ({
                ...previousState,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </>
        <>
          <label htmlFor="">Message</label>
          <textarea
            value={inputs.message}
            onChange={(e) => {
              setinputs((previousState) => ({
                ...previousState,
                [e.target.name]: e.target.value,
              }));
            }}
            name="message"
            rows="5"
          ></textarea>
        </>
      </div>
      <div>
        <button
          onClick={() => {
            if (inputs.username === "" || inputs.email === "") {
              alert("Provide values");
              return;
            }
            setuser(inputs);
            console.log(inputs);
            // instantly it will not show user data because setuser in async task for that just print inputs values as object which we are submitting
            // setTimeout(() => {
            //   console.log(user);
            // }, 1000);
            setinputs({
              username: "",
              email: "",
              message: "",
            });
          }}
        >
          Submit data
        </button>
        <button
          onClick={() => {
            setgetUser(user);
          }}
        >
          Show user data:-
        </button>
        {getUser && (
          <div>
            <p>
              So the user data: Name: <strong>{getUser.username}</strong> and
              Email: <strong>{getUser.email}</strong>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
