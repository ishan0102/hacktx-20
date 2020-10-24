import React, { Component } from 'react';
import VideoRecorder from 'react-video-recorder';
import saveVideo from './VideoAPI';
import Feedback from './Feedback.js'

class Video extends Component {
    render() {
        return (
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    console.log(videoBlob.type);
                    saveVideo(videoBlob);
                    console.log(videoBlob);
                    document.getElementById("feedback").style.display = "block";
                }}
                onStopReplaying={() => {
                    document.getElementById("feedback").style.display = "none";
                }}
                renderDisconnectedView={() => {}}
            />
        );
    }
}

export default Video;