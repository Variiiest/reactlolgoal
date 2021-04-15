import React, { Component } from 'react'
import BlogCardOne from './BlogCardOne'

export class BlogThird extends Component {
    render() {
        return (
            <div>
<section className="text-gray-600 body-font mt-4">
  <div className="container px-5 mx-auto">

    <div className="flex flex-wrap sm:-m-8 -mx-4 -mb-10 -mt-4">
      <div className="md:w-1/2 sm:mb-0 mb-6">
      <div className="container px-4 sm:px-5 py-6 sm:py-12 mx-auto">
          <div className="-my-8">
           <BlogCardOne/>
           <BlogCardOne/>
           <BlogCardOne/>
           <BlogCardOne/>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 sm:mb-0 mb-6 p-4">
      <BlogCardOne/>
           <BlogCardOne/>
           <BlogCardOne/>
           <BlogCardOne/>
   
      </div>
      </div>
  </div>
</section>



            </div>
        )
    }
}

export default BlogThird
