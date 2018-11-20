import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Hidden from '@material-ui/core/Hidden';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import { dsv } from 'd3-fetch';

import Dots from './Dots';

import './DataTable.css';

class DataTable extends Component {
    constructor() {
        super();

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        dsv('\t', './data.tsv', d => {
            if (d['lien'].length <= 0)
                d['lien'] = null;
            return d;
        }).then(data => {
            const groupBy = (xs, key) => {
                return xs.reduce((rv, x) => {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };

            this.setState({ data: groupBy(data, 'donnees') });
        });
    }

    render() {
        if (this.state.data == null)
            return (
                <div style={{textAlign: 'center'}}>
                    <CircularProgress className='datatable--loading' />
                </div>
            );

        return (
            <div>
                <Hidden only={['md', 'lg', 'xl']}>
                    {Object.keys(this.state.data).map((key, i) => {
                        return (
                            <div className="datatable--mobile" key={i}>
                                <Typography variant="subtitle1" className="bold">{key}</Typography>
                                {this.state.data[key].map((row, j) => {
                                    return (
                                        <div key={j}>
                                            {
                                                row['lien'] != null
                                                    ? (<a href={row['lien']} target="_blank" rel="noopener noreferrer">{row['branche']}</a>)
                                                    : row['branche']
                                            }
                                            <Dots dispo={row['disponibilite']} granu={row['granularite']} tempo={row['temporalite']} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </Hidden>
                <Hidden only={['xs', 'sm']}>
                    <Table className='datatable'>
                        <TableHead>
                        <TableRow>
                            <TableCell>Données</TableCell>
                            <TableCell>Service</TableCell>
                            <TableCell>Disponibilité</TableCell>
                            <TableCell>Origine</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                        {Object.keys(this.state.data).map((key, i) => {
                            return this.state.data[key].map((row, j) => {
                                return (
                                    <TableRow key={i * 1000 + j}>
                                        {(() => {
                                            if (j === 0)
                                                return (
                                                    <TableCell rowSpan={this.state.data[key].length}>{row['donnees']}</TableCell>
                                                )
                                            return null;
                                        })()}
                                        <TableCell className="nowrap">
                                            {
                                                row['lien'] != null
                                                    ? (<a href={row['lien']} target="_blank" rel="noopener noreferrer">{row['branche']}</a>)
                                                    : row['branche']
                                            }
                                        </TableCell>
                                        <TableCell className="nowrap">
                                            <Dots dispo={row['disponibilite']} granu={row['granularite']} tempo={row['temporalite']} />
                                        </TableCell>
                                        <TableCell>{row['origine']}</TableCell>
                                    </TableRow>
                                );
                            });
                        })}
                    </TableBody>
                    </Table>
                </Hidden>
            </div>
        );
    }
}

export default DataTable