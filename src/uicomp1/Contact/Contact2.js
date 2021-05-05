import React, { Component } from 'react'

export class Contact2 extends Component {
    render() {

     
        return (
            <div>
                <section className="text-gray-800 body-font font-bold">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img className="lg:w-5/6 mb-10 h-64 object-cover object-center " alt="hero" src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />
                        <div className="lg:w-5/6 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">We feel happy everytime you contact us.</h1>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50  text-base outline-none text-gray-700 py-1 px-3 leading-8 border-b" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50  text-base outline-none text-gray-700 py-1 px-3 leading-8 border-b" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 border-b"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700  text-lg">Send Message</button>
            </div>
       
          </div>
        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact2
