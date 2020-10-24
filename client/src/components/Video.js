import React, { Component } from 'react';
import VideoRecorder from 'react-video-recorder';
import createVideo from './VideoAPI.js'

var MyVideoBlob;

class Video extends Component {
    render() {
        return (
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    console.log(videoBlob);
                    createVideo(videoBlob);
                    MyVideoBlob = URL.createObjectURL(videoBlob);
                }} 
                renderDisconnectedView={() => {}}
            />
        );
    }
}

function videoHandler () {
    var link = document.createElement("a"); // Or maybe get it from the current document
    link.href = MyVideoBlob;
    link.download = "aDefaultFileName.mp4";
    link.innerHTML = "Click here to download the file";
     document.body.appendChild(link);
}



export default Video;