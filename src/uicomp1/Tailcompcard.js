import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {CompIndustry} from './CompIndustry'

export class Tailcompcard extends Component {
    render() {
        return (
            <div>
            <section className="text-gray-900 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">

              {CompIndustry.map((data, index) =>
            <div className="p-4 md:w-1/4" key={index}>
              <div className="h-full bg-white rounded-md overflow-hidden shadow-2xl">
                <img className="md:h-36 w-full object-contain relative transition duration-500 ease-in-out transform hover:scale-110 object-center bg-gray-100" src={data.image} alt="category" />
                <div className="p-4">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    {data.name}
                  </h1>
                  <p className="leading-relaxed mb-3 text-base">{data.about}</p>
                  <div className="flex items-center flex-wrap"> <Link to={data.link} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
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
