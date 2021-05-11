import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CodeProduct from './Product'
import Subscribe from './Subscribe'



export class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
         code:`             <div className="pt-4 mx-auto bg-gradient-to-r from-purple-200 via-pink-200 to-red-500">
         <div className="flex flex-col md:flex-row">
           <div className="md:w-1/2 max-w-full px-8 flex flex-col justify-center">
             <div className="md:text-7xl text-4xl">Awesome tool for your future team</div>
             <div className="md:text-2xl text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
             <div className="my-5 h-16">
               <div className="shadow-md font-bold py-2 px-4 hover:text-blue-100
              cursor-pointer text-gray-900 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-50 rounded text-lg text-center w-48">Join us now</div>
             </div>
           </div>
           <div className="flex md:justify-end  w-full md:w-1/2 -mt-4">
             <div className="">
               <div className="shadow-2xl max-w-md z-10">
                 <img alt="card img" className="" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/> 
                 <div className="text-2xl p-10 text-gray-100 bg-gradient-to-r from-purple-500 to-red-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
               </div>
             </div>
           </div>
         </div>
       </div>`
    }
  }
  render() {
    return (
      <div>
<section className="flex flex-wrap items-center">
             <div className="container w-full  md:w-1/2">
               <div className="mx-5 lg:mx-10">
                 <h1 className="flex items-center w-64 mt-12 mb-4 font-bold text-gray-700 title-font md:mb-0 lg:mt-16">
                   <div className="px-4 rounded bg-blue-800 bg-opacity-50 py-2 text-white">
                     Templates Every Week 
                   </div>
                
                 </h1>
                 <div className="flex mt-4 font-light text-gray-500">
                   <div className="pr-4">
                     <h1 className="mb-2 text-2xl font-semibold tracking-tighter text-white sm:text-5xl title-font">
                     We help to develop
                     Your startup quickly
                     </h1>
                   </div>
                 </div>
                 <div className="w-full mt-8 text-lg font-bold text-gray-300  mb-8 leading-relaxed">
                 LolGoal helps to design, develop software products that delight your customers and empower your business.
                 </div>
                 <div className="flex mt-12">
                 <Link to="/tailwind" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                       Try It Free
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                     </Link>
                 </div>
               </div>
             </div>
             <div className="hidden w-full bg-center bg-cover md:w-1/2 lg:block">
             <CodeProduct code={this.state.code}>
                     <Subscribe/>
                    </CodeProduct>
             </div>
           </section>

{/* <section className="w-full px-6 pt-12 antialiased">
        <div className="mx-auto max-w-7xl">
          <div className="container max-w-lg px-4 py-20 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="text-3xl font-bold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-4xl lg:text-5xl"><span className="inline md:block">We help to develop</span> <span className="relative mt-2 mb-2 text-blue-700 md:inline-block">  Your startup quickly</span></h1>
            <div className="mx-auto mt-5 text-white md:mt-6 md:max-w-lg md:text-center lg:text-xl font-bold">LolGoal helps to design, develop software products that delight your customers and empower your business.</div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <Link to="/tailwind" type="button" className="inline-flex items-center justify-center btn-primary">
                Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
                </Link>
               
              </span>
             
            </div>
          </div>
        </div>
      </section>
       */}

             
      </div>
    )
  }
}

export default Hero
