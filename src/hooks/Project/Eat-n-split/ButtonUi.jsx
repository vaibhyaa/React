/* eslint-disable react/prop-types */
import "./Eat-n-splitindex.css";

const ButtonUi = ({ children, onClickprops }) => {
  //here while passing any props in ButtonUi component always pass in onClick function
  // onClick is a common-name it reveive all the handle function which are passed in onClick specific
  // and childern prop represent whatever is between openeing tag and closing tag
  return (
    <>
      <button onClick={onClickprops} className="select-btn">
        {children}
      </button>
    </>
  );
};

export default ButtonUi;
