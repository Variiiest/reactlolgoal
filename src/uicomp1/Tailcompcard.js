import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {CompIndustry} from './CompIndustry'

export class Tailcompcard extends Component {
    render() {
        return (
            <div>
       <section className="text-gray-100 bg-black body-font font-bold">
        <div className="container px-5 mx-auto ">
          <div className="flex flex-wrap -m-4">
          {CompIndustry.map((data,key)=>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gradient-to-tr from-gray-800 to-gray-900 items-left rounded shadow overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.image} alt="blog" />
                <div className="p-6">
                  
                  <h1 className="title-font text-xl font-bold  mb-3 text-gray-100">{data.name}</h1>
                  <p className="leading-relaxed mb-3">{data.about}</p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={data.link} className="text-blue-100 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
