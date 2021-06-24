import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {LandingData} from './LandingData'

export class LandingPage extends Component {
    render() {
        return (
            <div className="">

{LandingData.map((data,key)=><section className="px-2 body-font md:px-5 lg:px-12 py-6 text-gray-700 dark:text-gray-200">
     <div className="container bg-gradient-to-b from-blue-100 dark:from-gray-900   flex flex-col items-center py-12 mx-auto md:px-5  lg:px-10 md:flex-row rounded mt-10" key={data.name}>
          <div className="flex flex-col w-full pt-0 text-left pl-5 lg:flex-grow lg:w-1/2 md:items-start md:mb-0 text-blue-10 md:pr-16">
            <Link to={"/temp/"+ data.slug} className="mb-4 text-base tracking-tighter title-font px-4 py-1 rounded-full bg-green-200 dark:text-gray-800">
              Preview
            </Link>
            <h1 className="mb-4 text-4xl leading-snug  lg:text-5xl">
              {data.name}
            </h1>
            <p className="mb-6 text-xl font-light text-opacity-60">
            {data.about}
            </p>
            <div className="flex flex-col justify-center md:justify-left md:flex-row">
              <a href="#_">
                <button className="btn-primary md:inline-block">
                  Premium
                </button>
              </a>
            </div>
          </div>
          <img alt="img" className="order-first object-cover object-center w-full h-56 mb-4 ml-auto rounded-lg md:order-last lg:mb-0 lg:w-1/2 lg:h-auto shadow-2xl" name="SAAS" title="SAAS" loading="lazy" src={data.img} />
        </div>


      </section>)}

            </div>
        )
    }
}

export default LandingPage
