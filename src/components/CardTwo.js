import React, { Component } from 'react'

export class CardTwo extends Component {
    render() {
        return (
            <div>

<section className="text-gray-900 body-font px-2 ">
                    <div className="container flex flex-col px-5 py-4 mt-8 mx-auto md:flex-row lg:px-4 rounded-md shadow-2xl bg-gradient-to-tr from-black to-gray-900">
                        <div className="w-full lg:w-2/6 md:w-1/3">
                            <img className="object-cover object-center rounded" alt="hero" src={this.props.image} />
                        </div>
                        <div className="flex flex-col items-start text-left lg:w-4/6 md:w-2/3 md:pl-16 mt-2">
                 
                          <h2 className="mb-4 text-xs font-semibold tracking-widest text-blue-300 title-font">
              Category: {this.props.category} 
            </h2>
            <h1 className="mb-4 text-4xl font-bold leading-snug text-white lg:text-5xl">
              {this.props.title}
            </h1>
            <p className="mb-6 text-xl font-light text-white text-opacity-60">
             {this.props.about}
            </p>
            <div className="flex flex-col justify-center md:justify-left md:flex-row">
              <a href={this.props.download}>
                <button className="px-8 py-4 mb-4 text-lg font-medium leading-none text-center text-white transition duration-500 ease-in-out transform bg-green-500 rounded shadow-thick hover:bg-green-700 md:inline-block focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  Download
                </button>
              </a>
              <a href={this.props.demo} target="_blank" rel="noreferrer">
                <button className="block ml-4 px-8 py-4 mb-4 text-lg font-medium leading-none text-center text-white transition duration-500 ease-in-out transform bg-blue-500 rounded shadow-thick hover:bg-blue-700 md:inline-block focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  Live preview
                </button>
                </a>
                

                
                </div>
                </div>
                    </div>
                </section>

       
            </div>
        )
    }
}

export default CardTwo
