import React from "react";

export default function Toggler(props) {
  return (
    <div className="toggler">
      <p className="toggler-light">Light</p>
      <label class="switch">
        <input type="checkbox" checked onClick={props.toggleDarkMode} />
        <span class="slider round"></span>
      </label>
      <p className="toggler-dark">Dark</p>
    </div>
  );
}
