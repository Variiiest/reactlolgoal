import React, { Component } from 'react'

export class CardTwo extends Component {
    render() {
        return (
            <div>
                <section className="px-2 pt-12 body-font md:px-5 lg:px-12">
        <div className="container bg-gradient-to-r from-black to-gray-800 flex flex-col items-center py-2 mx-auto md:px-5  lg:px-10 md:flex-row rounded-xl">
          <div className="flex flex-col items-center w-full pt-0 text-center lg:text-left lg:flex-grow lg:w-1/2 md:items-start md:mb-0 text-blue-10 md:pr-16">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-blue-300 title-font">
              BLOG - PERSONAL
            </h2>
            <h1 className="mb-4 text-4xl font-bold leading-snug text-white lg:text-5xl">
              A fresh and modern blog.
            </h1>
            <p className="mb-6 text-xl font-light text-white text-opacity-60">
              Made with Tailwind CSS and Alpine.js.Includes: 5 responsive pages, landing page, about, blog,
              blog post, work and Dark
              mode.
            </p>
            <div className="flex flex-col justify-center md:justify-left md:flex-row">
              <a href="https://gumroad.com/l/jCcUF">
                <button className="px-8 py-4 mb-4 text-lg font-medium leading-none text-center text-white transition duration-500 ease-in-out transform bg-blue-600 border-2 border-blue-600 hover:border-blue-700 rounded-xl shadow-thick hover:bg-blue-700 md:inline-block focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  Download
                </button>
              </a>
              <a href="/viewports/wt004" target="_blank">
                <button className="block w-full px-8 py-4 mb-4 text-lg font-medium leading-none text-center text-blue-200 transition duration-500 ease-in-out transform border-2 rounded-xl lg:w-auto bg-gray-2 border-gray-2 lg:ml-4 hover:bg-gray-1 md:inline-block focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 shadow-thick hover:border-gray-1">
                  Live preview
                </button>
              </a>
            </div>
          </div>
          <img alt="img" className="order-first object-cover object-center w-full h-56 mb-4 ml-auto rounded-lg md:order-last lg:mb-0 lg:w-1/2 lg:h-auto" name="App, extension or SAAS" title="App, extension  SAAS" loading="lazy" src="https://d33wubrfki0l68.cloudfront.net/459602c36995f393780d8b3fae96f9a526b5ef51/fc276/thumbnails/wt4.webp" />
        </div>
      </section>
            </div>
        )
    }
}

export default CardTwo
