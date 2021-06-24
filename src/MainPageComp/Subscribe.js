import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Subscribe extends Component {
    render() {
        return (
            <div>
                <>
<div className="relative mt-12">
  <div className="max-w-6xl bg-gray-800  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
      <span className="block">New Components are Coming Soon.</span>
      <span className="block text-blue-100">Start Building</span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex">
        <Link to="tailwind" className="inline-flex items-center justify-center btn-primary">
          Get started
        </Link>
      </div>
  
    </div>
  </div>
</div>
</>
            </div>
        )
    }
}

export default Subscribe
