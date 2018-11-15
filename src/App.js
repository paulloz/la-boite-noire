import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import brown from '@material-ui/core/colors/brown';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import DataTable from './DataTable';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.theme = createMuiTheme({
            palette: {
                primary: blueGrey,
                secondary: brown
            },
            typography: {
                useNextVariants: true
            }
        });
    }

    render() {
        return (
            <MuiThemeProvider theme={this.theme}>
                <div className="App">
                    <CssBaseline />
                    <Header />
                    <main>
                        <p>
                            Lorem ipsum dolor sit amet consectuetur adipiscing elit.
                        </p>
                        <DataTable />
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
