import React, { Component } from 'react'

export class Auth1 extends Component {
  render() {
    return (
      <div className="flex flex-col sm:h-screen bg-gray-50 text-gray-900">
        <div
          className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-gray-100 shadow-2xl rounded-lg border">
            <h2
              className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              LOGIN
          </h2>
            <form className="mt-10" method="POST">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-600 uppercase">
                E-mail
            </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="block w-full py-3 px-4 mt-4 text-gray-800 hover:border-blue-700 appearance-none border-2 border-gray-100 rounded-md focus:text-gray-500 focus:outline-none" />
              <label
                htmlFor="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Password
            </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="block w-full py-3 px-4 mt-4 text-gray-800 hover:border-blue-700 appearance-none border-2 border-gray-100 rounded-md focus:text-gray-500 focus:outline-none" />
              <button
                type="submit"
                className="w-full py-3 mt-10 bg-blue-800 rounded-full font-medium text-white uppercase focus:outline-none hover:bg-blue-800 hover:shadow-none">
                Login
            </button>
              <div
                className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a
                  href="forgot-password"
                  className="flex-2 text-base hover:underline">
                  Forgot password?
              </a>
                <p
                  className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                  or
              </p>
                <a href="register" className="flex-2 text-base hover:underline">
                  Create an Account
              </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Auth1
