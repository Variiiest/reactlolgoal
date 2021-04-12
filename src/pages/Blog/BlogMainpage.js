import React, { Component } from 'react'
import BlogHeader from '../../components/BlogHeader'
import BlogThird from '../../components/BlogThird'


export class BlogMainpage extends Component {
    render() {
        return (
            <div>
                 <BlogHeader/>
           <BlogThird/>
            </div>
        )
    }
}

export default BlogMainpage
