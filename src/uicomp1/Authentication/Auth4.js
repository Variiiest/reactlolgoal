import React, { Component } from 'react'

export class Auth4 extends Component {
    render() {
        return (
            <div>
                 <div className="flex sm:min-h-screen bg-white">
                 <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
          </div>
          <form action="#" className="p-0">
            <div className="mt-5">
              <input type="text" className="block w-full p-2 border rounded hover:border-blue-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
            </div>
            <div className="mt-5">
              <input type="text" className="block w-full p-2 border rounded hover:border-blue-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name" />
            </div>
            <div className="mt-5">
              <input type="password" className="block w-full p-2 border rounded hover:border-blue-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
            </div>
         
            <div className="mt-10">
              <input type="submit" defaultValue="Sign up with email" className="py-3 bg-blue-500 text-white w-full rounded hover:bg-blue-600" />
            </div>
          </form>
          <a className href="/login" data-test="Link"><span className="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></a>
        </div>
        <div className="w-1/2 bg-cover md:block hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618300425826-3c308db6d71c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)'}} />

    
      </div>
            </div>
        )
    }
}

export default Auth4
