import './App.css';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Video from './components/Video';
import Feedback from './components/Feedback'

import { createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
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
            <div className="feedback" id="feedback">
                <Feedback/>
            </div>
        </body>
      </div>
    );
  }
}

export default App;
