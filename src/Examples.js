import React from "react";
export default function Examples(props) {
  if (props.examples) {
    return (
      <p>
        <em>"{props.examples}"</em>
      </p>
    );
  }
}
