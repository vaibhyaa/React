/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Eat-n-splitindex.css";
import ButtonUi from "./ButtonUi";

// const Friend = (props) => {
//   console.log(props);
//   return (
//     <>
//       <div className="friend-card">
//         <img src={props.friendData.image} alt={props.friendData.name} />
//         <div className="friend-info">
//           <p className="friend-name">{props.friendData.name}</p>
//           <p className="friend-balance">Balance: ${props.friendData.balance.toFixed(2)}</p>
//         </div>
//         <button className="select-btn">Select</button>
//       </div>
//     </>
//   );
// };

// const SingleFriendUi = ({friendData,handleShowSplitBillForm}) => {
//   const {id,name,image,balance}=friendData;
//   return (
//     <>
//       <div className="friend-card">
//         <img src={image} alt={name} />
//         <div className="friend-info">
//           <h3 className="friend-name">{name}</h3>

//           {balance<0 && <p style={{color:"red",fontSize:'15px'}}>you own {name} ${Math.abs(balance)}</p>}
//           {balance>0 && <p style={{color:"green",fontSize:'15px'}}>{name} own you ${Math.abs(balance)}</p>}
//           {balance===0 && <p style={{fontSize:'15px'}}>you own {name} are even</p>}
//           {/* <h3 className="friend-balance">Balance: ${balance.toFixed(2)}</h3> */}
//         </div>
//         <ButtonUi onClick={()=>(handleShowSplitBillForm(friendData))}>select</ButtonUi>
//       </div>
//     </>
//   );
// };

const SingleFriendUi = ({ friendData, onSelection, selectedFriend }) => {
  // console.log(friendData);

  // this value is only used to change the text of button from close to select and vice-versa
  const isSelected = selectedFriend && selectedFriend.id === friendData.id;

  return (
    <div className={`friend-card ${isSelected ? "selected" : ""}`}>
      <img src={friendData.image} alt={friendData.name} />
      <div className="friend-info">
        <h3 className="friend-name">{friendData.name}</h3>

        {friendData.balance < 0 && (
          <p style={{ color: "red", fontSize: "15px" }}>
            You owe {friendData.name} ${Math.abs(friendData.balance)}
          </p>
        )}
        {friendData.balance > 0 && (
          <p style={{ color: "green", fontSize: "15px" }}>
            {friendData.name} owes you ${Math.abs(friendData.balance)}
          </p>
        )}
        {friendData.balance === 0 && (
          <p style={{ fontSize: "15px" }}>You and {friendData.name} are even</p>
        )}
      </div>
      <ButtonUi onClickprops={() => onSelection(friendData)}>
        {isSelected ? "Close" : "Select"}
      </ButtonUi>

      {/* <button onClick={() => onClickShowSplitBillForm(friend)}>Select</button> */}
    </div>
  );
};

export default SingleFriendUi;
