import React, { Component } from 'react'
import Hero from '../components/MainPageComp/Hero'
import Industries from '../components/MainPageComp/Industries'

export class mainPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
               <Industries/>
            </div>
        )
    }
}

export default mainPage
