import React, { Component } from 'react';

import { DispoDot, GranuDot, TempoDot } from './Dots';

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
            <table className='legend'>
                <thead>
                    <tr>
                        <td colSpan="2">Disponibilité</td>
                        <td colSpan="2">Échelle</td>
                        <td colSpan="2">Périodicité</td>
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
        );
    }
}

export default Legend;