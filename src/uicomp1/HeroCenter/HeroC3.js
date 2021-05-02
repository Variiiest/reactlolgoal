import React, { Component } from 'react'

export class HeroC3 extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-800 body-font font-bold">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1720x600" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">  Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text</h1>
            <p className="leading-relaxed mb-8 text-lg">  Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing   Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing   Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the printing</p>
            <div className="flex justify-center">
              <button className="inline-flex text-gray-100 bg-blue-700 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded-full text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-3 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default HeroC3
