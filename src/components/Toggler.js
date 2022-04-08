import React from "react";

export default function Toggler(props) {
  return (
    <div className="toggler">
      <p className="toggler-light">Dark</p>
      <label class="switch">
        <input type="checkbox" onClick={props.toggleDarkMode} />
        <span class="slider round"></span>
      </label>
      <p className="toggler-dark">Light</p>
    </div>
  );
}
