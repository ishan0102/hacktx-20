import React, { Component } from 'react';
import VideoRecorder from 'react-video-recorder';

var MyVideoBlob;

class Video extends Component {
    render() {
        return (
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    MyVideoBlob = videoBlob;
                }} 
            />
        );
    }
}

export default Video;