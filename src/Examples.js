import React from "react";
export default function Examples(props) {
  if (props.examples) {
    return (
      <p>
        <strong>Example: </strong> <em>{props.examples}</em>
      </p>
    );
  }
}
