/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  // local state that stores input field temporarily
  // redux ≠ form state
  const [username, setUsername] = useState("");

  // Gives access to Redux dispatch
  // Used to send actions to the store
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) {
      return;
    }

    // Sends data to Redux
    dispatch(updateName(username));
    setUsername("");
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-4 max-w-sm"
    >
      <p className="text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="
        rounded-full border border-stone-200 px-4 py-2 text-sm transition-all placeholder:text-stone-400
         focus:outline-none focus:ring focus:ring-yellow-200 
         bg-white shadow-sm md:px-6 md:py-3
        "
      />

      {username !== "" && (
        <div className="mt-2">
          <Button>ADD USER</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
