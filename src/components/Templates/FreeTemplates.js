import React, { Component } from 'react'

const FreeTemp=[
    {
        name:"",
        gumroad_link:"",
        about:"",
        preview_link:"",

    }
]




export class FreeTemplates extends Component {
    render() {
        return (
            <div>
                  <section className="text-gray-100 bg-black body-font font-bold">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col w-full text-center">
            <h1 className="mb-4 text-4xl font-bold leading-none lg:text-5xl text-gray-100">
             Launch Your Website
              <br className="hidden lg:block" />
             The Quickest Possible Way
            </h1>
          </div>
          </div>
      </section>


      <section className="px-2 body-font md:px-5 lg:px-12">
      {FreeTemp.map((data,key)=><div className="container bgcard flex flex-col items-center py-2 mx-auto md:px-5  lg:px-10 md:flex-row rounded">
          <div className="flex flex-col w-full pt-0 text-left pl-5 lg:flex-grow lg:w-1/2 md:items-start md:mb-0 text-blue-10 md:pr-16">
            <a href={data.preview_link} className="mb-4 text-base font-semibold tracking-widest text-white title-font px-4 py-2 rounded-full bg-gray-900">
              Preview
            </a>
            <h1 className="mb-4 text-4xl font-bold leading-snug text-white lg:text-5xl">
              A fresh and modern blog.
            </h1>
            <p className="mb-6 text-xl font-light text-white text-opacity-60">
              Made with Tailwind CSS and Alpine.js.Includes: 5 responsive pages, landing page, about, blog,
              blog post, work and Dark
              mode.
            </p>
            <div className="flex flex-col justify-center md:justify-left md:flex-row">
              <a href="#_">
                <button className="px-8 py-4 mb-4 text-lg font-medium leading-none text-center text-white transition duration-500 ease-in-out transform bg-blue-600 border-2 border-blue-600 hover:border-blue-700 rounded shadow-thick hover:bg-blue-700 md:inline-block focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  Download
                </button>
              </a>
            </div>
          </div>
          <img alt="img" className="order-first object-cover object-center w-full h-56 mb-4 ml-auto rounded-lg md:order-last lg:mb-0 lg:w-1/2 lg:h-auto" name="App, extension or SAAS" title="App, extension  SAAS" loading="lazy" src="" />
        </div>)}


      </section>

            </div>
        )
    }
}

export default FreeTemplates
