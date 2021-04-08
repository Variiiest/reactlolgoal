import React, { Component } from 'react'



export class Hero extends Component {
    render() {
        return (
            <div>
         <section className="text-gray-600 body-font bghero">
  <div className="container flex sm:px-12 px-5 sm:py-24 py-12 md:flex-row flex-col items-center">
 
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your </span>
           
            <span className="block text-indigo-800 xl:inline">online business</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white firstcolr hover:bg-indigo-900 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          
          </div>
        </div>
   
  </div>
</section>
            </div>
        )
    }
}

export default Hero
