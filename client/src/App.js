import './App.css';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import VideoRecorder from 'react-video-recorder'

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className="icon" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="typ">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </header>
        <body>
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    console.log('videoBlob', videoBlob)
                }} 
            />
        </body>
      </div>
    );
  }
}

export default App;
