import * as React from "react";
import { PrimaryButton } from '@fluentui/react';
import Taskpane from "../Taskpane";
import { headerSize } from "../../../constants";
import MergeConflict from "./MergeConflict";


import './MergeConflictScreen.css';

/* global  */

export default class MergeErrorScreen extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
        conflicts: this.props.conflicts
    }

  }

  render() {
    console.log("STATE CONFLICTS")
    console.log(this.state.conflicts)

    let mergeConflictComponentsArray = []
    this.state.conflicts.forEach(function(conflict) {
        mergeConflictComponentsArray.push(<MergeConflict conflict={conflict}></MergeConflict>)
    });



    return (
      <Taskpane header={headerSize.SMALL} title="You need to resolve merge conflicts before your merge can finish">
        <div className="title-subtext-div">
            <div className="title-subtext">Pick which version of the cell you want to keep. They are ordered: <b>yours, collaborator’s, original</b>.</div>
        </div>
        <div className="conflict-card-div">
            <div className="scrollable-div">
                {mergeConflictComponentsArray}
            </div>
        </div>
      </Taskpane>
    )
  }
}
