import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {CompIndustry} from './CompIndustry'

export class Tailcompcard extends Component {
    render() {
        return (
            <div>
       <section className="text-gray-100 body-font font-bold -mt-12">
        <div className="container px-5 mx-auto ">
          <div className="flex flex-wrap -m-4">
          {CompIndustry.map((data,key)=>
            <div className="p-4 md:w-1/3" key={data.id}>
              <div className="h-full bg-white items-left rounded shadow-xl overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center bg-green-200" src={data.image} alt="blog" />
                <div className="p-6">
                  
                  <h1 className="title-font text-xl font-bold  mb-3 text-gray-800">{data.name}</h1>
                  <p className="leading-relaxed mb-3 text-gray-700">{data.about}</p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={data.link} className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </section>

            </div>
        )
    }
}

export default Tailcompcard
