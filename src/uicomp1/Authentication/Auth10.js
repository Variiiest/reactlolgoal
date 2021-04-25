import React, { Component } from 'react'

export class Auth10 extends Component {
    render() {
        return (
            <div>
                  <section className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                   
                    <h2 className="text-4xl font-bold text-gray-900 xl:text-6xl">What About this comp?</h2>
                  </div>
                  <p className="text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id.</p>
                  <a href="#_" className="inline-block px-4 py-2 text-base font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold">Signup</h4>
                <p className="text-lg text-gray-500">or, if you have an account you can <a href="#_" className="text-blue-600 underline">sign in</a></p>
                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <label className="font-medium text-gray-900">Name</label>
                    <input type="text" className="block w-full px-4 py-2 mt-2 text-base border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name" />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Email</label>
                    <input type="text" className="block w-full px-4 py-2 mt-2 text-base border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address" />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Password</label>
                    <input type="password" className="block w-full px-4 py-2 mt-2 text-base border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Password" />
                  </div>
                  <div className="relative">
                    <a href="#_" className="inline-block w-full px-4 py-2 text-base font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Create Account</a>
                    <a href="#_" className="inline-block w-full px-4 py-2 mt-3 text-base font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Sign up with Google</a>
                    <a href="#_" className="inline-block w-full px-4 py-2 mt-3 text-base font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Sign up with Twitter</a>
                    <a href="#_" className="inline-block w-full px-4 py-2 mt-3 text-base font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Sign up with Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default Auth10
