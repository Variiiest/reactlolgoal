import React, { Component } from 'react'
import Footer from '../components/MainPageComp/Footer'
import Hero from '../components/MainPageComp/Hero'
import Navbar from '../components/MainPageComp/Navbar'

export class mainPage extends Component {
    render() {
        return (
            <div>
                  <Navbar />
                <Hero/>

                
        
        
        <Footer />
               
            </div>
        )
    }
}

export default mainPage
