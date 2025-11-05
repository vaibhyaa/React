import { useState } from "react";
import ButtonUi from "./ButtonUi";
import FormAddFriendUi from "./FormAddFriendUi";
import FormSplitBillUi from "./FormSplitBillUi";
import FriendlistUI from "./FriendlistUI";
import "./Eat-n-splitindex.css";

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
  // this state is for when we create one friend in addfriend form then it shoudl reflect in friendui list
  // two componenets required this state formaddfriendui and friendlistui
  const [friend, setfriend] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: 0,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 0,
    },
  ]);

  const [showAddFriendForm, setshowAddFriendForm] = useState(false); //this state for opening form for addfried
  const [selectedFriend, setselectedFriend] = useState(null); //this state is for openeing split bill for that selectedfriend

  // event handler function for showaddfriendform state change
  function handleShowAddFriendForm() {
    setshowAddFriendForm((showPreviousState) => !showPreviousState);
  }

  // event handler function for adding new friend received from addfriendform and display in ui
  function handleAddFriend(newFriend) {
    setfriend((currentAllFriend) => [...currentAllFriend, newFriend]);
    //after subbmiting the friend this will hode the form and again if we wanted to add friend we can click add friend button

    // this will change the state and close the form of addfriend
    // setshowAddFriendForm(false);
  }

  // function handleSelection(friendSelectedFromUser) {
  //   setselectedFriend(
  //     (currentFriendState) =>
  //       // friendState is state value can be null or can be value of selected friend (e.g 1st friend )
  //       // then we click on second friend and we got the selectedFriend From User so that state will change and 2no friend id gets
  //       // sometimes we click on the same friend even if it was selected so for that we close that form(i.e null value )
  //       currentFriendState?.id === friendSelectedFromUser.id
  //         ? null
  //         : friendSelectedFromUser,

  //     // this is for when we select friend for split bill we should close the addfriend form no needed
  //     setshowAddFriendForm(false)
  //   );
  // }

  function handleSelection(friendSelectedFromUser) {
    setselectedFriend((currentFriendState) =>
      currentFriendState?.id === friendSelectedFromUser.id
        ? null
        : friendSelectedFromUser
    );

    // Close the Add Friend form if it was open
    setshowAddFriendForm(false);
  }

  function handleSplitBill(value) {
    // console.log(value);

    setfriend((friend) =>
      friend.map((eachFriend) =>
        eachFriend.id === selectedFriend.id
          ? { ...eachFriend, balance: eachFriend.balance + value }
          : eachFriend
      )
    );
    setTimeout(() => {
      setselectedFriend(null);
    }, 1500);
  }

  return (
    <>
      <div className="eat-n-split">
        <div className="friend-list-container">
          <FriendlistUI
            AllFriend={friend}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          <ButtonUi onClickprops={handleShowAddFriendForm}>
            {/* when we clock on this button state update funcion is getting ececuted 
              so if i click on btton the statevalue changes to true and form will open and button show close text 
              if i click back again it will close the form (i.e state value if false ) and button text become add friend 
              */}
            {showAddFriendForm ? "CLOSE" : "ADD FRIEND"}
          </ButtonUi>
        </div>
        {/* here are the two condidtions written  after clicking what button which form will open */}
        {/* if showAddFriend is true then show thos Form of adding friend  */}
        {showAddFriendForm && (
          <FormAddFriendUi onClickhandleAddFriend={handleAddFriend} />
        )}
        <>
          {/* if we haven't select any friend for bil split so how can we open the form for billsplit 
        we lick on the friend with whom we want to split bill 
        */}
          {selectedFriend && (
            <FormSplitBillUi
              key={selectedFriend.id}
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </>
      </div>
    </>
  );
};

export default Eat_n_SplitApp;
