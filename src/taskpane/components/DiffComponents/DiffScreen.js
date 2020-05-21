import * as React from "react";
import Taskpane from "../Taskpane";
import { headerSize } from "../../../constants";
import DiffSheet from "./DiffSheet";
import "./DiffScreen.css";

/* global  */

export default function DiffScreen(props) {
    const sheetDiffs = props.sheetDiffs;

    // Make a list of diffs for each sheet
    let sheetComponents = [];
    sheetDiffs.forEach((sheetDiff) => {
        sheetComponents.push(
            <DiffSheet key={sheetDiff.sheetName} sheetDiff={sheetDiff}/>
        )  
    })

    return (
        <Taskpane header={headerSize.SMALL} title="Recent Changes">
        <div className="title-subtext-div">
            <div className="title-subtext">Everything that has changed in the shared version since you last looked.</div>
        </div>
        <div className="diff-card-div">
            <div className="scrollable-div">
                {sheetComponents}
            </div>
        </div>
        </Taskpane>
    )
}
