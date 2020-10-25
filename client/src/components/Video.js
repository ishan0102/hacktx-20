import React, { Component } from 'react';
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder';
import createVideo from './VideoAPI.js'
import Feedback from './Feedback.js'

class Video extends Component {
    render() {
        return (
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    console.log(videoBlob);
                }} 
                renderDisconnectedView={() => {}}
            />
        );
    }
}

export default Video;