import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onChanged} type="text" value={props.text} />
      <button onClick={props.onClicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
