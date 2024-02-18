import React, { useState } from "react";

function ToDoItem(props) {
  //   var styling = { textDecoration: "none" };
  var [styling, setStyling] = useState({ textDecoration: "none" });

  function handleClick(event) {
    var styleText = event.target.style.textDecoration;
    if (styleText === "none") {
      setStyling({ textDecoration: "line-through" });
    } else {
      setStyling({ textDecoration: "none" });
    }
    // console.log(event.target.style.textDecoration);
    // styling = { textDecoration: "line-through" }; //textDecoration = "line-through";
  }

  return (
    <li onClick={handleClick} style={styling}>
      {props.itemText}
    </li>
  );
}

export default ToDoItem;
