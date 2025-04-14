import React from "react";
export default function Examples(props) {
  if (props.examples) {
    return (
      <p>
        <strong>Examples: </strong> <em>{props.examples}</em>
      </p>
    );
  }
}
