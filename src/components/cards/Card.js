import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <>
                <div className="flex flex-col p-6 text-left bg-gradient-to-tr from-gray-700 to-gray-900 items-left lg:w-1/4 rounded-2xl shadow-lg ">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mb-5 text-blue-100 rounded-lg bg-gradient-to-r from-pink-400 to-red-700 shadow-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={18} y1={13} x2={12} y2={19} />
                  <line x1={6} y1={13} x2={12} y2={19} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="mb-3 text-2xl font-semibold leading-snug text-blue-400 tracking-relaxed title-font">
                  Install</h2>
                <p className="mb-8 text-base leading-snug text-left text-gray-300 tracking-relaxed lg:text-xl ">
                  After you have got the template install Tailwind CSS on your machine, you will need
                  the
                  latest node package.
                </p>
              </div>
              </div> 
            </>
        )
    }
}

export default Card
