import React, { Component } from 'react'

export class Auth4 extends Component {
    render() {
        return (
            <div>
                 <div className="flex min-h-screen bg-white">
        <div className="w-1/2 bg-cover md:block hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)'}} />
        {/* <div class="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
            <img src="log_in.webp" alt="hey">
        </div> */}
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
            <h3 className="p-1 text-gray-700">Free forever. No payment needed.</h3>
          </div>
          <form action="#" className="p-0">
            <div className="mt-5">
              {/* <label for="email" class="sc-bqyKva ePvcBv">Email</label> */}
              <input type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
            </div>
            <div className="mt-5">
              <input type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name" />
            </div>
            <div className="mt-5">
              <input type="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
            </div>
            <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
              <input type="checkbox" className="inline-block border-0  " />
              <span display="inline" className>By creating an account you are agreeing to our 
                <a className href="/s/terms" target="_blank" data-test="Link">
                  <span className="underline ">Terms and Conditions</span> </a> and
                <a className href="/s/privacy" target="_blank" data-test="Link">
                  <span className="underline">Privacy Policy</span> </a>
              </span>
            </div>
            <div className="mt-10">
              <input type="submit" defaultValue="Sign up with email" className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600" />
            </div>
          </form>
          <a className href="/login" data-test="Link"><span className="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></a>
        </div>
      </div>
            </div>
        )
    }
}

export default Auth4
