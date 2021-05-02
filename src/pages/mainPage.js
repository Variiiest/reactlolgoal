import React, { Component } from 'react'
import Hero from '../components/MainPageComp/Hero'
import Services from '../components/MainPageComp/Services'

export class mainPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Services/>
            </div>
        )
    }
}

export default mainPage
