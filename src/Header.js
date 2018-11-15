import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <AppBar position="fixed">
                <ToolBar>
                    <Typography variant="h6" color="inherit">
                        Police Data Index
                    </Typography>
                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;