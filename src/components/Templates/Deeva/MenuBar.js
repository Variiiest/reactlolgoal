

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {DeevaData } from './DeevaData'


export class Menubar extends Component {
    render() {
        return (
        
                <div className="py-3 overflow-y-auto whitespace-nowrap scroll-hidden bg-white bg-opacity-20">

                    {DeevaData.map((data, key) =>
                        <Link key={key} className="mx-4 leading-5 text-white hover:text-green-200  md:my-0" to={"/deeva/"+ data.name}>{data.name}</Link>

                    )}
                </div>

        )
    }
}

export default Menubar
