import React, { Component } from 'react'
import Tailcompcard from './Tailcompcard'
import image1 from './images/1.JPG'
import image2 from './images/4.JPG'
import image3 from './images/2.JPG'
import image4 from './images/3.JPG'

export class AllComp extends Component {
    render() {
        return (
            <div>


<section className="text-gray-100 body-font fifthcolr">
        <div className="container flex flex-col items-center px-4 py-16 mx-auto md:flex-row lg:px-8">
          <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-white lg:text-5xl title-font">
            How to work with  our tailwind components?
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left font-bold">
            It's too easy to start with components just install some dependencies given below and copy paste according to your need.
            </p>
            <p className="flex items-center mb-2 text-green-100 "><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="flex items-center mb-2 text-green-100 ">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="flex items-center mb-6 text-green-100">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
          </div>
        </div>
      </section>




<Tailcompcard name="Hero" image1={image1} image2={image2} image3={image3} image4={image4} first="Left Hero" firstl="comp/lefthero" second="Right Hero" secondl="comp/righthero" third="Centered" thirdl="comp/centeredhero" fourth="Special" fourthl="comp/specialhero"/>

<Tailcompcard name="Authentication" image1={image1} image2={image3} image3={image3} image4={image4} first="Left" firstl="comp/authleft" second="Right" secondl="comp/authright" third="Centered " thirdl="comp/centerauth" fourth="Special " fourthl="comp/specialauth"/>



      </div>
        )
    }
}

export default AllComp
