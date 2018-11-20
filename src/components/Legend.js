import React, { Component } from 'react';

import Hidden from '@material-ui/core/Hidden';

import { DispoDot, GranuDot, TempoDot } from './Dots';

import './Legend.css'

class Legend extends Component {
    constructor() {
        super();

        const values = [
            ['',                       '',               ''],
            ['non communiquée',        'nationale',      'annuelle'],
            ['statistiques seulement', 'départementale', 'mensuelle'],
            ['base accessible',        'locale',         'quotidien']
        ]
        this.state = {
            titles: [
                'Disponibilité',
                'Échelle',
                'Périodicité'
            ],
            data: values.map(arr => {
                return [
                    new DispoDot({ value: arr[0] }),
                    new GranuDot({ value: arr[1] }),
                    new TempoDot({ value: arr[2] }),
                ]
            })
        };
    }

    render() {
        return (
            <div>
                <Hidden only={['md', 'lg', 'xl']}>
                    {[0, 1, 2].map(i => {
                        return (
                            <table key={i} className='legend'>
                                <thead><tr><td colSpan='2'>{this.state.titles[i]}</td></tr></thead>
                                <tbody>
                                    {this.state.data.map((c, j) => {
                                        return (
                                            <tr key={j}>
                                                <td>{c[i].render()}</td>
                                                <td>{c[i].tooltip}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        );
                    })}
                </Hidden>
                <Hidden only={['xs', 'sm']}>
                    <table className='legend'>
                        <thead>
                            <tr>
                                <td colSpan='2'>{this.state.titles[0]}</td>
                                <td colSpan='2'>{this.state.titles[1]}</td>
                                <td colSpan='2'>{this.state.titles[2]}</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((c, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{c[0].render()}</td>
                                        <td>{c[0].tooltip}</td>
                                        <td>{c[1].render()}</td>
                                        <td>{c[1].tooltip}</td>
                                        <td>{c[2].render()}</td>
                                        <td>{c[2].tooltip}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Hidden>
            </div>
        );
    }
}

export default Legend;