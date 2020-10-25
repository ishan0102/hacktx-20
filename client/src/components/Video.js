import React, { Component } from 'react';
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder';
import { analyzeVideo } from './VideoAPI';
import Feedback from './Feedback.js'

class Video extends Component {
    render() {
        return (
            <VideoRecorder
                onRecordingComplete={async (videoBlob) => {
                    const analysis = await analyzeVideo(videoBlob);
                    console.log(analysis);
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