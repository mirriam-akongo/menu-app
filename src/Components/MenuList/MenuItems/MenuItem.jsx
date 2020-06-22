import React from "react";

function MenuItem(props) {
  return (
    <div className=".menuitem">
      <img className="image" src={props.imageUrl} alt="" srcSet="" />
      <p className="title">{props.title}</p>
    </div>
  );
}

export default MenuItem;
