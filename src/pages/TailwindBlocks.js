import React, { Component } from 'react'
import Footer from '../MainPageComp/Footer'
import Navbar from '../MainPageComp/Navbar'
import Header from '../tailblocks/Header'
import Tailcompcard from '../tailblocks/Tailcompcard'

export class TailwindBlocks extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                <Tailcompcard/>
                <Footer/>
                
            </div>
        )
    }
}

export default TailwindBlocks
