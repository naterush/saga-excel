import * as React from "react";
import Taskpane from "./Taskpane";
import { headerSize } from "../../constants";

import './LinkScreen.css';


// Login Form Component
export default class LinkScreen extends React.Component {
    constructor(props) {
        super();  
        this.state = {
            remoteURL: props.remoteURL
        };
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    // Copy project link to clipboard
    copyToClipboard(e) {
        e.preventDefault();
        var copyText = document.getElementById("project-link");
        copyText.select();
        document.execCommand("copy");
    }

    render () {
        return (
            <Taskpane header={headerSize.LARGE} title="Invite people to collaborate by sending them the Saga project link.">
                <div className="floating-card" id="project-link-card">
                    <form className="form" onSubmit={this.copyToClipboard}>
                        <p className="subtext">Use the clipboard button to copy the link</p>
                        <input className="project-link-input" id="project-link" value={this.state.remoteURL} disabled></input>
                        <input className="clipboard" type="image" src="assets/clipboard.png" width="30vw" border="0" alt="Copy" />
                    </form>
                </div>
            </Taskpane>
        );
    }
}