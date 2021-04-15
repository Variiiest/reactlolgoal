import React, { Component } from 'react'

export class Auth8 extends Component {
    render() {
        return (
            <div>
                  <section className="flex flex-col items-center h-screen bg-gray-100 md:flex-row ">
        <div className="relative hidden w-full h-screen bg-gray-400 lg:block md:w-1/3 lg:w-2/3">
          <img src="https://dummyimage.com/600x500/F3F4F7/64748b" alt="" className="absolute object-cover w-full h-full" />
          <div className="relative z-10 m-12 text-left">
            <a href="/" className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500">
              </div>
              <h2 className="text-lg font-bold tracking-tighter text-black uppercase duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 ">
                Wickedblocks
              </h2>
            </a>
            <h1 className="mb-2 text-2xl font-semibold tracking-tighter text-black-700 tsm:text-5xl title-font">
              Discover 100+
              <br />
              screens ready to use.
            </h1>
          </div>
        </div>
        <div className="flex w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
          <div className="w-full py-32 lg:py-6 lg:h-100">
            <h1 className="my-12 text-2xl font-semibold tracking-tighter text-black-700 sm:text-3xl title-font">Sign
              Up to a new
              world.</h1>
            <div className="flex justify-enter">
              <button type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:bg-gray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 48 48">
                    <defs>
                      <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                    </defs>
                    <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                    <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                    <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                    <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                  </svg>
                  <span className="ml-4">
                    Log in with
                    Google
                  </span>
                </div>
              </button>
              <button type="button" className="inline-flex px-4 py-3 ml-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black focus:bg-gray-100 hover:text-black-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                <div className="flex items-center justify-center">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">Email
                  Address</label>
                <input type="email" name id placeholder="Your Email " className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" autofocus autoComplete required />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">Password</label>
                <input type="password" name id placeholder="Your Password" minLength={6} className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" required />
              </div>
              <div className="mt-2 text-right">
                <a href="/" className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-black-700 focus:text-black-700">Forgot
                  Password?</a>
              </div>
              <button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Log
                In</button>
            </form>
            <p className="mt-8 text-center">Need an account? <a href="/" className="font-semibold text-black-500 hover:text-black-400">Sign
                Up</a></p>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default Auth8
