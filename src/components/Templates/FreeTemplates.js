import React, { Component } from 'react'
import Web1 from './images/Web1.JPG'
import Web2 from './images/Web2.JPG'

const FreeTemp=[
    {
        name:"Landing Page SAAS",
        gumroad_link:"",
        about:"A data management company landing page using React JS and TailwindCSS.",
        preview_link:"",
        image:Web1,

    },
    {
      name:"Fitness Blog",
      gumroad_link:"",
      about:"A blog Website using HTML,CSS,Alpine.js and TailwindCSS.",
      preview_link:"",
      image:Web2,

  }
]




export class FreeTemplates extends Component {
    render() {
        return (
            <div>
                  <section className="text-gray-300  body-font font-bold">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col w-full text-center">
            <h1 className="mb-4 text-4xl font-bold leading-none lg:text-5xl">
             Launch Your Website
              <br className="hidden lg:block" />
             The Quickest Possible Way
            </h1>
          </div>
          </div>
      </section>


      <section className="px-2 body-font md:px-5 lg:px-12 bghero">
      {FreeTemp.map((data,key)=><div className="container bg-white shadow-xl border flex flex-col items-center py-2 mx-auto md:px-5  lg:px-10 md:flex-row rounded mt-10" key={data.name}>
          <div className="flex flex-col w-full pt-0 text-left pl-5 lg:flex-grow lg:w-1/2 md:items-start md:mb-0 text-blue-10 md:pr-16">
            <a href={data.preview_link} className="mb-4 text-base font-semibold tracking-widest text-gray-900 title-font px-4 py-2 rounded-full bg-green-200">
              Preview
            </a>
            <h1 className="mb-4 text-4xl font-bold leading-snug text-gray-900 lg:text-5xl">
              {data.name}
            </h1>
            <p className="mb-6 text-xl font-light text-opacity-60">
            {data.about}
            </p>
            <div className="flex flex-col justify-center md:justify-left md:flex-row">
              <a href="#_">
                <button className="px-8 py-4 mb-4 text-lg font-medium leading-none text-center text-white transition duration-500 ease-in-out transform bg-blue-600 border-2 border-blue-600 hover:border-blue-700 rounded shadow-thick hover:bg-blue-700 md:inline-block focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  Download
                </button>
              </a>
            </div>
          </div>
          <img alt="img" className="order-first object-cover object-center w-full h-56 mb-4 ml-auto rounded-lg md:order-last lg:mb-0 lg:w-1/2 lg:h-auto shadow-2xl" name="SAAS" title="SAAS" loading="lazy" src={data.image} />
        </div>)}


      </section>

            </div>
        )
    }
}

export default FreeTemplates
