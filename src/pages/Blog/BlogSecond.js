import React from 'react'
import { Link } from 'react-router-dom'
import { BlogData } from "./data";

export default function BlogSecond() {
  return (
    <div>
           <section className="text-gray-700 body-font font-bold">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-100">DRF Blocks</h1>
       
          </div>
          <div className="flex flex-wrap -m-4">
          {BlogData.map((data, key) => {
          return (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={key}>
            <Link to={data.slug}>
            <div className="firstcolr p-6 rounded">
      
              <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">{data.title} Basic Installation</h2>
              <p className="leading-relaxed text-base text-gray-200">
{data.about}
In this tutorial we are going to discuss about Django and Django rest-framework installation.
      </p>
            </div>
            </Link>
      
          </div>

);
})}  
        
          </div>
        </div>
      </section>
    </div>
  )
}

