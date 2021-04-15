import React, { Component } from 'react'

export class HeroTwo extends Component {
    render() {
        return (
            <div>
          <div className="container px-6 py-16 mx-auto">
          <div className="items-center md:flex">
            <div className="w-full md:w-1/2">
              <div className="max-w-lg">
                <h1 className="text-2xl font-semibold  uppercase text-white md:text-3xl">Best Place To Choose Your Clothes</h1>
                <p className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                <button className="px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Shop Now</button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
              <img className="w-full h-full max-w-2xl" src="../../../assets/svg/Catalogue-pana.svg" alt="" />
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default HeroTwo
