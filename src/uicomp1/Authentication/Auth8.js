import React, { Component } from 'react'

export class Auth8 extends Component {
    render() {
        return (
            <div>
                  <section className="flex flex-col items-center text-gray-900 h-screen bg-gray-100 md:flex-row ">
      
        <div className="flex w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
          <div className="w-full py-32 lg:py-6 lg:h-100">
            <h1 className="my-12 text-2xl font-semibold tracking-tighter text-gray-900 sm:text-3xl title-font">Login Here</h1>
          
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">Email
                  Address</label>
                <input type="email" name id placeholder="Your Email " className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-blue-900-700 focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" autofocus autoComplete required />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">Password</label>
                <input type="password" name id placeholder="Your Password" minLength={6} className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-blue-900-700 focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" required />
              </div>
              <div className="mt-2 text-right">
                <a href="/" className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-gray-900 focus:text-gray-900">Forgot
                  Password?</a>
              </div>
              <button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-900 rounded-lg focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Log
                In</button>
            </form>
            <p className="mt-8 text-center">Need an account? <a href="/" className="font-semibold">Sign
                Up</a></p>
          </div>
        </div>
        <div className="relative hidden w-full h-screen bg-gray-50 lg:block md:w-1/3 lg:w-2/3">
          {
            /*
            Use this image for background.
            */
          }
          {/* <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=355&q=80" alt="" className="absolute object-cover w-full h-full" /> */}
          <div className="relative z-10 m-12 text-left">
            <a href="/" className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500">
              </div>
            
            </a>
            <h1 className="mb-2 text-2xl font-semibold tracking-tighter text-gray-900 sm:text-5xl title-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="text-lg"> Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id. Get Started Today</p>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default Auth8
