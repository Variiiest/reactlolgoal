import React, { Component } from 'react'
import BlogMain from '../components/BlogMain'
import Hero from '../components/Hero'
import Services from '../components/Services'

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
