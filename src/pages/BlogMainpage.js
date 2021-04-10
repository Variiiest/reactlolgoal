import React, { Component } from 'react'
import BlogHeader from '../components/BlogHeader'
import BlogThird from '../components/BlogThird'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export class BlogMainpage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                 <BlogHeader/>
           <BlogThird/>
                <Footer/>
            </div>
        )
    }
}

export default BlogMainpage
