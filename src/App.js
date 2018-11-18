import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import DataTable from './DataTable';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#EC2024'
                }
            },
            typography: {
                useNextVariants: true
            }
        });

        this.state = {
            description: "",
            partners: []
        }
    }

    componentDidMount() {
        fetch("./data.json").then(response => response.json()).then(data => {
            this.setState({
                description: data.description,
                partners: Object.keys(data.partners).map(k => { return { name: k, href: data.partners[k] }; })
            });
        });
    }

    render() {
        return (
            <MuiThemeProvider theme={this.theme}>
                <div className="App">
                    <CssBaseline />
                    <Header />
                    <main>
                        <p>{this.state.description}</p>
                        <p className="italic">
                            Une initiative du <a href="http://lepanierasalade.fr/">Panier à salade</a>
                            {this.state.partners.map((partner, i) => {
                                return (
                                    <a key={i} href={partner.href} target="_blank" rel="noopener noreferrer" title={partner.name}>{partner.name}</a>
                                );
                            }).reduce((m, n, i, x) => {
                                return m == null ? [", avec ", n] : [...m, (x.length > 1 && i === x.length - 1 ? " et " : ", "), n];
                            }, null)}
                            , réalisée par <a href="http://pauljoannon.com">Paul Joannon</a>. Le code source de ce site est disponible <a href="https://github.com/paulloz/police-data-index">ici</a>.
                        </p>
                        <DataTable />
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
