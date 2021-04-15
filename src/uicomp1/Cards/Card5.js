import React, { Component } from 'react'

export class Card5 extends Component {
    render() {
        return (
            <div className="bg-gray-900">
                <div className="bg-white  shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto ">
        <div className="flex justify-center">
          <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full mx-auto w-32 h-32 shadow-2xl border-4 border-white" />
        </div>
        <div className="mt-16">
          <h1 className="font-bold text-center text-3xl text-gray-900">Eduard Pantazi</h1>
          <p className="text-center text-sm text-gray-400 font-medium">Full Stack Developer at Pantazi Software</p>
          <p>
            <span>
            </span>
          </p>
          <div className="my-5">
            <a href="/" className="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">Connect with <span className="font-bold">@eduardpantazi</span></a>
          </div>
          <div className="flex justify-evenly my-5">
            <a href className="bg font-bold text-sm text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg">Facebook</a>
            <a href className="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">Twitter</a>
            <a href className="bg font-bold text-sm text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg">Instagram</a>
            <a href className="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg">Email</a>
          </div>
          <div className="w-full">
            <h3 className="font-bold text-gray-600 text-left px-4">Recent activites</h3>
            <div className="mt-5 w-full">
              <a href="/" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                Updated his status
                <span className="text-gray-400 text-sm">24 min ago</span>
              </a>
              <a href="/" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                Added new profile picture
                <span className="text-gray-400 text-sm">42 min ago</span>
              </a>
              <a href="/" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                Posted new article in <span className="font-bold">Web Dev</span>
                <span className="text-gray-400 text-sm">49 min ago</span>
              </a>
              <a href="/" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                Edited website settings
                <span className="text-gray-400 text-sm">1 day ago</span>
              </a>
              <a href="/" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                Added new rank
                <span className="text-gray-400 text-sm">5 days ago</span>
              </a>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Card5
