import React, { Component } from 'react'
import BlogSecond from './BlogSecond'



export class DjangoBlocks extends Component {
    render() {
        return (
            <div>


<section className="text-gray-200 body-font">
        <div className="flex flex-col md:flex-row mx-auto bg-blue-900">
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img className="object-cover object-center" alt="hero" src="https://images.unsplash.com/photo-1451361911875-8ed12a3bb86d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 mt-32">
            
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-white lg:text-5xl title-font">
            Django REST Framework Tutorial</h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-200 ">{this.props.about}</p>
          
          </div>
        </div>
      </section>

<BlogSecond/>
      </div>
        )
    }
}

export default DjangoBlocks
