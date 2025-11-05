import { useState } from "react";
import "../ReactTab.css";

export default function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  console.log("RENDER");

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handleTripleInc() {
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    // setLikes((likes) => likes + 1);
    // setLikes((likes) => likes + 1);
    // setLikes((likes) => likes + 1);

    setLikes((likes) => likes + 3);
  }

  // this will reset all when we click on undo (batching practise)
  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log(likes);
    // this will print the likes value before the likes set to zero even though the likes display is after setlikes to zero
  }

  // this will reset all when we click on undo (batching practise for asynch task)
  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((currentState) => !currentState)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}
