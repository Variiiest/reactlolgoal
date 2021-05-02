import React, { Component } from 'react'

export class Card2 extends Component {
    render() {
        return (
          <div className="py-12 bg-gray-900">
         
              <div className="max-w-5xl px-8 py-4 mx-auto bg-gray-800 shadow-md">
    <div className="flex items-center justify-between">
      <span className="text-sm font-light text-white ">Mar 10, 2019</span>
      <a href="/" className="-mt-12 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transhtmlForm bg-gray-800 rounded cursor-pointer hover:bg-gray-700 shadow-2xl">UI/UX Design</a>
    </div>
    <div className="mt-2">
    <div className="container mx-auto flex md:flex-row flex-col">
        <div className="flex flex-col md:items-start md:text-left mt-6 mb-5">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-100">Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
        <div className="lg:w-1/2 pl-12 lg:w-full md:w-1/2 w-5/6 hidden sm:block">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </div>
  
</div>

        </div>
        )
    }
}

export default Card2
