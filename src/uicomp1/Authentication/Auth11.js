import React, { Component } from 'react'

export class Auth11 extends Component {
    render() {
        return (
            <div>
                 <section className="w-full px-8 py-16 xl:px-8 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium text-blue-800">
                <span className="px-4 py-2 bg-gray-200 rounded-full">What About this comp?</span></p>
              <h2 className="text-xl font-extrabold leading-none text-black sm:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-base text-gray-600 md:pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id.</p>
            </div>
            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="z-10 h-auto p-8 py-10 overflow-hidden bg-white shadow-2xl px-7 rounded">
                <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                <input type="text" name="email" className="block w-full px-4 py-3 mb-4 border focus:outline-none rounded" placeholder="Email address" />
                <input type="password" name="password" className="block w-full px-4 py-3 border mb-4 focus:outline-none rounded" placeholder="Password" />
                <div className="block items-center text-center">
                  <button className="px-3 py-2 font-medium text-white bg-blue-600 rounded text-base">
                    LogIn
                    </button>
                </div>
                <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" className="text-blue-500 underline">Sign up here</a></p>
                <p className="w-full mt-4 text-sm text-center text-gray-500">Forgot Your Password? <a href="#_" className="text-blue-500 underline">Recover Your Password</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default Auth11
