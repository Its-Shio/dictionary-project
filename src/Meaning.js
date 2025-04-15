import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h6>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <Examples examples={props.meaning.example} />
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </h6>
    </div>
  );
}
