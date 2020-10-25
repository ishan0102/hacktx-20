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
                    await analyzeVideo(videoBlob, (analysis) => {
                        var person = [];
                        var mood = [];
                        var voice = [];
                        for (const word of analysis) {
                            // Focus on Person, Mood, Voice
                            var pos = word.partOfSpeech;
                            if (pos.person != 'PERSON_UNKNOWN') {
                                person.push(pos.person);
                            }
                            if (pos.mood != 'MOOD_UNKNOWN') {
                                mood.push(pos.mood);
                            }
                            if (pos.voice != 'VOICE_UNKNOWN') {
                                voice.push(pos.voice);
                            }
                        }
                        const count = require('count-array-values');
                        console.log(count(person));
                        localStorage.setItem('person', JSON.stringify(count(person)));
                        console.log(count(mood));
                        localStorage.setItem('mood', JSON.stringify(count(mood)));
                        console.log(count(voice));
                        localStorage.setItem('voice', JSON.stringify(count(voice)));
                    });
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