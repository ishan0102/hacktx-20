import React, { Component } from 'react';
import { Container, Grid, Header, List, Button } from "semantic-ui-react";


class Buttons extends Component {
    render() {
        return (
            submitButtons()
        );
    }
}

function submitButtons() {
    return <div>
        <div class="clickable">
            <button class="ui button" onClick={submit}>Get Feedback</button>
            {/* <a class="spacer"></a> */}
            {/* <button class="ui button" onClick={newRecording}>New Recording</button> */}
        </div>
    </div>
}

function submit(){
    console.log("hello");
    document.getElementById("feedback").style.display = "block";
    // TODO don't send Data unless user selects correct video file
}

export default Buttons;