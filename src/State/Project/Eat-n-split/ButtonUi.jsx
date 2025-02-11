/* eslint-disable react/prop-types */
import "./index.css";

const ButtonUi = ({children,onClickForAddFriend}) => {

  return (
    <>
      <button onClick={onClickForAddFriend} 
      className="select-btn">{children}</button>
    </>
  );
};

export default ButtonUi;
