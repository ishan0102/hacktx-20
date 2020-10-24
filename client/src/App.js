import './App.css';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Video from './components/Video.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
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
            <div className="video-recorder">
                <Video/>
            </div>
        </body>
      </div>
    );
  }
}

export default App;
