import React, { Component } from 'react'

export class HeroEight extends Component {
    render() {
        return (
            <div>
            
        <div className="m-auto p-4 bg-gray-900">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 max-w-md flex flex-col justify-center">
              <div className="md:text-5xl text-2xl uppercase font-black">Awesome tool for your future team</div>
              <div className="text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className="my-5 h-16">
                <div className="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">Join us now</div>
              </div>
            </div>
            <div className="flex md:justify-end w-full md:w-1/2 -mt-5">
              <div className="bg-dots">
                <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                  <img alt="card img" className="rounded-t" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/> 
                  <div className="text-2xl p-10 bg-white"><img alt="quote" className="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default HeroEight
