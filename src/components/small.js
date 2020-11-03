import React from "react";

export default function SmallIcon(props) {
  return (
    <div className="modIcon">
      <img src={props.iconUrl} alt="icon" />
    </div>
  );
}
