import React, { Component } from 'react'

export class Auth9 extends Component {
    render() {
        return (
            <div>
                  <section className="flex flex-col items-center sm:h-screen md:flex-row text-gray-900">
        <div className="container mx-auto">
          <div className="flex justify-center px-2 py-6 ">
            <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 shadow-2xl">
              <div className="hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12 ">
                <div className="z-10 m-12 text-left ">
                  <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-gray-900 sm:text-3xl title-font">
                    Create an account.
                  </h2>
                  <div className="w-full mt-16 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis. Aliquam vitae quam dolor. Sed quam felis, eleifend et pharetra id, vestibulum in eros. Cras ipsum libero, vestibulum ac viverra vitae, tristique eget est. Sed porttitor leo leo, ac imperdiet diam sagittis id.

Get Started Today
                  </div>
                </div>
              </div>
              <div className="w-full px-8 py-24 bg-white border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none bg-gray-200">
                <div className="z-10 text-left mt-12 ">
                
                  <form className="mt-6" action="#" method="POST">
                    <div>
                      <label className="block text-base font-medium leading-relaxed text-gray-700">User
                        Name</label>
                      <input type="text" name="" id="" placeholder=" User Name " className="w-full px-4 py-2 mt-2 text-base rounded-lg focus:outline-none focus:shadow-outline focus:border-gray-500" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-base font-medium leading-relaxed text-gray-700">Email
                        Address</label>
                      <input type="email" name="" id="" placeholder=" Email " className="w-full px-4 py-2 mt-2 text-base rounded-lg focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="text-base font-medium leading-relaxed text-gray-700" htmlFor="password" minLength={6}>
                          Password
                        </label>
                        <input className="block w-full px-4 py-2 mt-2 text-base text-gray-900 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current" id="password" type="text" placeholder=" Password" />
                     
                      </div>
                      <div className="w-full px-3 md:w-1/2">
                        <label className="text-base font-medium leading-relaxed text-gray-700" htmlFor="confirm">
                          Confirm
                        </label>
                        <input className="block w-full px-4 py-2 mt-2 text-base text-gray-900 rounded-lg focus:outline-none focus:shadow-outline" id="confirm" type="text" placeholder="Confirm" />
                      </div>
                    </div>
                    <button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white rounded-lg bg-blue-800 focus:outline-none focus:shadow-outline">Log In</button>
                  </form>
                  <p className="mt-8 text-center text-black">Already have an account? <a href="/" className="font-semibold text-gray-900 ">Sign
                      In</a></p>
                      <p className="mt-2 text-center text-black">Forgot Password? <a href="/" className="font-semibold text-gray-900 ">Recover</a></p>
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

export default Auth9
