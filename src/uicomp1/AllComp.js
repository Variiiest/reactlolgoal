import React, { Component } from 'react'
import Tailcompcard from './Tailcompcard'


import CodeCard from './CodeCard'
import Subscribe from '../components/MainPageComp/Subscribe'
export class AllComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: ` <div className="relative mt-12">
      <div className="max-w-6xl bg  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
          <span className="block">New Components are Coming Soon.</span>
          <span className="block text-blue-400">Start Building</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex">
            <Link to="tailcomp" className="inline-flex items-center justify-center btn1">
              Get started
            </Link>
          </div>
      
        </div>
      </div>
    </div>
               `
    }
  }





  render() {
    return (
      <div>

        <div className="bg-gray-800 md:overflow-hidden mb-12">
          <div className="px-4 py-24 md:py-4">
            <div className="md:max-w-7xl md:mx-auto">
              <div className="md:flex md:flex-wrap">
                <div className="md:w-1/2 text-center md:text-left md:pt-16">
                  <h1 className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4 tracking-wide">
                    How to use our components in web-development?

                </h1>
                  <button className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-blue-700 rounded shadow-2xl focus:outline-none">Also We are coming with a Builder(Drag and Drop)</button>
                </div>
                <div className="md:w-1/2 relative">

                    <CodeCard code={this.state.code}>
                      <Subscribe/>
                    </CodeCard>

                </div>
              </div>
            </div>
          </div>
          {/* <svg className="fill-current text-black hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
          </svg> */}
        </div>








        <Tailcompcard />





      </div>
    )
  }
}

export default AllComp
