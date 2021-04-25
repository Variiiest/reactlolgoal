import React, { Component } from 'react'
import BlogMain from '../components/MainPageComp/BlogMain'
import Hero from '../components/MainPageComp/Hero'
import Services from '../components/MainPageComp/Services'

export class mainPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Services/>
                <BlogMain/>
            </div>
        )
    }
}

export default mainPage
