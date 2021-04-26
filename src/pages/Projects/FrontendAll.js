import React, { Component } from 'react'
import CardTwo from '../../components/CardTwo'
import Web1 from '../../uicomp1/images/Web1.JPG'



export class FrontendAll extends Component {
    render() {
        return (
            <div>
                <CardTwo image={Web1} category="Finance" title="Portfolio for Data Management" about="We have built this website using TailwindCss , React and some Extra css." download="" demo="https://artic.vercel.app/"/>
               
            </div>
        )
    }
}

export default FrontendAll
