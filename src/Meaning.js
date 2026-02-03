import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";
export default function Meaning(props) {
  //console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="Definition">{props.meaning.definition}</div>
      <div className="Example">
        <Examples examples={props.meaning.example} />
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
