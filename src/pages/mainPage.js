import React, { Component } from 'react'
import Footer from '../components/MainPageComp/Footer'
import Hero from '../components/MainPageComp/Hero'
import Navbar from '../components/MainPageComp/Navbar'
import Product from '../components/MainPageComp/Product'

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
