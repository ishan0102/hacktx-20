import React, { Component } from 'react';
import VideoRecorder from 'react-video-recorder';

var MyVideoBlob;

class Video extends Component {
    render() {
        return (
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    console.log(videoBlob);
                    var file = new Blob(
                        [videoBlob],
                        {"type" : "video\/mp4"});
                    MyVideoBlob = URL.createObjectURL(file);
                    videoHandler();
                }} 
            />
        );
    }
}

function videoHandler () {
    var link = document.createElement("a"); // Or maybe get it from the current document
    link.href = MyVideoBlob;
    link.download = "aDefaultFileName.txt";
    link.innerHTML = "Click here to download the file";
    document.body.appendChild(link); // Or append it whereever you want
}


export default Video;