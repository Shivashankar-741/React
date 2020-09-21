import React from "react";
const ButtonComponent = (props) => {
  const buttonValue = props.statevalue;
  return (
    <div className="buttonClass">
      <button
        onClick={() => {
          props.btnHandler(buttonValue.value, buttonValue.valuetwo);
        }}
      >
        Get random number
      </button>
    </div>
  );
};

export default ButtonComponent;
