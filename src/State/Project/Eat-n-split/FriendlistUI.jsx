/* eslint-disable react/prop-types */


import SingleFriendUi from "./SingleFriendUi";



const FriendlistUI = ({AllFriend , handleShowSplitBillForm}) => {
  return (
    <div className="friend-list">
      {AllFriend.map((friend) => (
        <SingleFriendUi key={friend.id} friendData={friend} handleShowSplitBillForm={handleShowSplitBillForm}/>
        // <Friend key={friend.id} name={friend.name} image={friend.image} balance={friend.balance} />
      ))}
    </div>
  );
};

export default FriendlistUI;
