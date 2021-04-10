import React, { Component } from 'react'
import BlogHeader from '../components/BlogHeader'
import BlogSecond from '../components/BlogSecond'
import Navbar from '../components/Navbar'

export class BlogMainpage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                 <BlogHeader/>
           
                <BlogSecond/>
                <BlogSecond/>
                <BlogSecond/>
            </div>
        )
    }
}

export default BlogMainpage
