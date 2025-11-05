/* eslint-disable react/prop-types */

import SingleFriendUi from "./SingleFriendUi";

const FriendlistUI = ({ AllFriend, onSelection, selectedFriend }) => {
  // console.log(selectedFriend);

  return (
    <div className="friend-list">
      {AllFriend.map((friend) => (
        // <li key={friend.id}>
        <SingleFriendUi
          key={friend.id}
          friendData={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
        // </li>
      ))}
    </div>
  );
};

export default FriendlistUI;
