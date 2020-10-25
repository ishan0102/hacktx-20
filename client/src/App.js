import './App.css';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Video from './components/Video';
import Feedback from './components/Feedback'
import Buttons from './components/Button'

import { createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
    state = {
        data: null
      };
    
    componentDidMount() {
        // Call our fetch function below once the component mounts
    this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message) 
    }
    return body;
    };

  render() {
    return (
      <div className="app">
        <header>
            <AppBar color="primary" position="fixed">
                <Toolbar className="toolbar">
                    <a href="/" className="greeting">
                        Speaking Analyzer
                    </a>
                </Toolbar>
            </AppBar>
        </header>
        <body>
            <div className="video-recorder">
                <Video/>
            </div>
            <div className="buttons">
                <Buttons />
            </div>
            <div className="feedback" id="feedback">
                <Feedback/>
            </div>
            <p className="App-intro">{this.state.data}</p>
        </body>
      </div>
    );
  }
}

export default App;
