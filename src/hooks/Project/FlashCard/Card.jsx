import React, { useState } from "react";
import "./Cardcss.css";

const questions = [
  {
    id: 101,
    question: "What language is react based on ?",
    answer: "Javascript",
  },
  {
    id: 102,
    question: "What are the building blocks of react app ?",
    answer: "component",
  },
  {
    id: 103,
    question:
      "What is the name of the syntex we use to describe UI in REACT APP?",
    answer: "Jsx",
  },
  {
    id: 104,
    question: "How to pass data from parent comp. to child comp. ?",
    answer: "props",
  },
  {
    id: 105,
    question: "HOw to give component memory ?",
    answer: "usestate hook",
  },
];

const Card = () => {
  const [selectedId, setselectedId] = useState(null);

  function handleClick(id) {
    // this is normal when we click one card it will open when we click other card it will close previous one and show clicked one
    // setselectedId(id);

    // this is for when we click one card it will open and when we click again on same card  it will close that card
    // and also when we click next card it will close the previous one and open the current one.
    setselectedId(id === selectedId ? null : id);
  }
  return (
    <div>
      <ul>
        {questions.map((eachQue) => (
          <li
            key={eachQue.id}
            // className="card-with-rectangle"
            className={`${
              eachQue.id === selectedId ? "card-active" : "card-with-rectangle"
            }`}
            onClick={() => handleClick(eachQue.id)}
          >
            {selectedId === eachQue.id ? eachQue.answer : eachQue.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

// how caod flow happens
/*
step 0:-
Initial State
selectedId is initially null.
React renders the component for the first time.
In this render, all cards show questions (selectedId !== id)
at first no card is selected so selectedId state value is null


step 1:-
when we click on one card throught event handler onClick the handleClick function is called so id is clicked card id is passed in handleClick function an then its checks the conditions. if selected / clicked card id which we got is same as selected id (first selected id was null) if not the it assign the clicked card id 
handleClick(103) → setselectedId(103)

step 2 : -
State Update is Scheduled
React does not update the state immediately\
setselectedId(103) tells React: "Please update the state to 103
This schedules a re-render, which React will run soon after the current event loop
React batches updates for performance. So the render doesn’t happen immediately, but right after the current code finishes

step 3:- 
React Triggers Re-render
Now selectedId === 103, so:The card with id = 103 shows the answer.
All others show question

step 4:-
Resulting UI
Card 103: ✅ Answer is shown.
Other cards: ❓ Questions are shown.

*/
