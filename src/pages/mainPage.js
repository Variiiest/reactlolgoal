import React, { Component } from 'react'
import Footer from '../MainPageComp/Footer'
import Hero from '../MainPageComp/Hero'
import Navbar from '../MainPageComp/Navbar'
import Product from '../MainPageComp/Pricing'

export class mainPage extends Component {
    render() {
        return (
            <div>
                  <Navbar />
                <Hero/>
               <Product/>
                
        
        
        <Footer />
               
            </div>
        )
    }
}

export default mainPage
