import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <AppBar position="fixed" className="header">
                <ToolBar>
                    <Typography variant="h5" color="inherit">
                        Police Data Index
                    </Typography>
                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;