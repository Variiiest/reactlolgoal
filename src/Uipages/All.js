

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Components } from './Components'


export class All extends Component {
    render() {
        return (
        
                <div className="py-3 overflow-y-auto whitespace-nowrap scroll-hidden color1 font-opensans">

                    {Components.map((data, key) =>
                        <Link key={key} className="mx-4 leading-5 text-white hover:text-green-200  md:my-0" to={data.link}>{data.name}</Link>

                    )}
                </div>

        )
    }
}

export default All