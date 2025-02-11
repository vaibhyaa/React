import { useState } from "react";
import ButtonUi from "./ButtonUi";
import FormAddFriendUi from "./FormAddFriendUi";
import FormSplitBillUi from "./FormSplitBillUi";
import FriendlistUI from "./FriendlistUI";
import "./index.css";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

const Eat_n_SplitApp = () => {
  const [showAddFriendForm, setshowAddFriendForm] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null)

  const [friend, setfriend] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
  ]);

  // event handler function for state change
  function handleShowAddFriendForm() {
    setshowAddFriendForm((showPreviousState) => !showPreviousState);
  }

  function handleShowSplitBillForm(friend) {
    // setshowSplitBillForm((showPreviousState) => !showPreviousState);
    setSelectedFriend(friend)
  }

  // event handler function for adding new friend erceive from form and display in ui
  function handleAddFriend(newFriend) {
    setfriend((currentAllFriend) => [...currentAllFriend, newFriend]);

    //after subbmiting the friend this will hode the form and again if we wanted to add friend we can click add friend button
    setshowAddFriendForm(false);
  }

  return (
    <>
      <div className="eat-n-split">
        {/* <Friend /> */}
        <>
          <div className="friend-list-container">
            <FriendlistUI AllFriend={friend} handleShowSplitBillForm={handleShowSplitBillForm}/>
            <ButtonUi
              onClickForAddFriend={handleShowAddFriendForm}
            >
              {showAddFriendForm ? "CLOSE" : "ADD FRIEND"}
            </ButtonUi>
          </div>
          {/* if showAddFriend is true then show thos Form of adding friend  */}
          {showAddFriendForm && (
            <FormAddFriendUi onClickhandleAddFriend={handleAddFriend} />
          )}
        </>
        <>
          {selectedFriend && (
            <FormSplitBillUi onClickSplitBillForm={handleShowSplitBillForm} />
          )}
        </>
      </div>
    </>
  );
};

export default Eat_n_SplitApp;
