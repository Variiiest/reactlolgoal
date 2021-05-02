import React, { Component } from 'react'
import Auth1 from '../uicomp1/Authentication/Auth1'
import Auth10 from '../uicomp1/Authentication/Auth10'
import Auth11 from '../uicomp1/Authentication/Auth11'
import Auth2 from '../uicomp1/Authentication/Auth2'
import Auth3 from '../uicomp1/Authentication/Auth3'
import Auth4 from '../uicomp1/Authentication/Auth4'
import Auth5 from '../uicomp1/Authentication/Auth5'
import Auth6 from '../uicomp1/Authentication/Auth6'
import Auth7 from '../uicomp1/Authentication/Auth7'
import Auth8 from '../uicomp1/Authentication/Auth8'
import Auth9 from '../uicomp1/Authentication/Auth9'
import CodeCard from '../uicomp1/CodeCard'

export class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             code1:` <div class="flex flex-col sm:h-screen bg-gray-50 text-gray-900">
             <div
               class="grid place-items-center mx-2 my-20 sm:my-auto">
               <div
                 class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-gray-100 shadow-2xl rounded-lg border">
                 <h2
                   class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                   LOGIN
               </h2>
                 <form class="mt-10" method="POST">
                   <label
                     for="email"
                     class="block text-xs font-semibold text-gray-600 uppercase">
                     E-mail
                 </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Email Address"
                     autocomplete="email"
                     class="block w-full py-3 px-4 mt-4 text-gray-800 hover:border-blue-700 appearance-none border-2 border-gray-100 rounded-md focus:text-gray-500 focus:outline-none" />
                   <label
                     for="password"
                     class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                     Password
                 </label>
                   <input
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Password"
                     autocomplete="current-password"
                     class="block w-full py-3 px-4 mt-4 text-gray-800 hover:border-blue-700 appearance-none border-2 border-gray-100 rounded-md focus:text-gray-500 focus:outline-none" />
                   <button
                     type="submit"
                     class="w-full py-3 mt-10 bg-blue-800 rounded-full font-medium text-white uppercase focus:outline-none hover:bg-blue-800 hover:shadow-none">
                     Login
                 </button>
                   <div
                     class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                     <a
                       href="forgot-password"
                       class="flex-2 text-base hover:underline">
                       Forgot password?
                   </a>
                     <p
                       class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                       or
                   </p>
                     <a href="register" class="flex-2 text-base hover:underline">
                       Create an Account
                   </a>
                   </div>
                 </form>
               </div>
             </div>
           </div>`,

             code2:` <div>
               <form className="bg-white shadow-xl mb-4 flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 bg-blue-600 p-6 text-white">
          <p className="mb-8 text-3xl flex items-center">
            <svg width={32} height={32} viewBox="0 0 512 512" className="inline-block fill-current h-8 w-8 mr-2">
              <path d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z" />
            </svg>
            Login Now
          </p>
          <div className="mb-4">
            <input className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <input className="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" />
          </div>
          <button className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="submit">Login</button>
          <label className="block text-sm mb-4">
            <input type="checkbox" /> Remember me
          </label>
          <a className="block w-full text-sm text-right text-white hover:text-gray-300" href="/">Forgot Password?</a>
        </div>
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
          <p className="text-gray-700 mb-8">Login to access your files, communicate with colleagues and view project content.</p>
          <a className="block w-full mb-8 text-sm text-center text-blue-600 hover:text-blue-700" href="/">Don't have an account? Register Now!</a>
          <p className="mb-4 text-center">OR</p>
          <hr className="block w-full mb-4 border-0 border-t border-gray-300" />
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
              <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">Login with Facebook</button>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-2">
              <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">Login with Google</button>
            </div>
          </div>
        </div>
      </form> 
            </div>`,

             code3:``,
             code4:``,
             code5:``,
        }
    }
    




    render() {
        return (
            <div>
                                                    <CodeCard code={this.state.code1}>
<Auth1/>
                </CodeCard> 
                <CodeCard>
<Auth2/>
                </CodeCard> 
                <CodeCard>
<Auth3/>
                </CodeCard> 
                <CodeCard>
<Auth4/>
                </CodeCard> 
                <CodeCard>
<Auth5/>
                </CodeCard> 
                <CodeCard>
<Auth6/>
                </CodeCard> 
                <CodeCard>
<Auth7/>
                </CodeCard> 
                <CodeCard>
<Auth8/>
                </CodeCard> 

                <CodeCard>
<Auth9/>
                </CodeCard> 
                <CodeCard>
<Auth10/>
                </CodeCard> 

                <CodeCard>
<Auth11/>
                </CodeCard> 
            </div>
        )
    }
}

export default Auth
