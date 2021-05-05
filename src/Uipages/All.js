

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Components } from './Components'


export class All extends Component {
    render() {
        return (
            <div>

                <div className="py-3 mt-1 overflow-y-auto whitespace-nowrap scroll-hidden bg-blue-800 sticky top-0">

                    {Components.map((data, key) =>
                        <Link key={key} className="mx-4 leading-5 text-white  hover:text-green-200  md:my-0" to={data.link}>{data.name}</Link>

                    )}
                </div>


            </div>
        )
    }
}

export default All
