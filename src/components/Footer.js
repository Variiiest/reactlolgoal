import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Subscribe from './Subscribe'

export class Footer extends Component {
    render() {
        return (
            <div>
              <Subscribe/>
           <footer className="-mt-16 font-medium bg-blue-100 body-font bg-gray-200">
             
        <div className="container px-5 py-24  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="text-3xl font-bold text-blue-700 border-green-300 border-b-2">
                  <span className="sr-only">Logo</span>
                  <span className="text-blue-700 font-bold">lol</span>goal.com
              </Link>
            
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-extrabold text-gray-900 text-xl mb-3">Categories</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="." className="font-bold"> First Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Second Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Third Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-extrabold text-gray-900 text-xl mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="." className="font-bold"> First Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Second Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Third Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-extrabold text-gray-900 text-xl mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="." className="font-bold"> First Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Second Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Third Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-extrabold text-gray-900 text-xl mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="." className="font-bold"> First Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Second Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Third Link</a>
                </li>
                <li>
                  <a href="." className="font-bold"> Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
    
      </footer>
            </div>
        )
    }
}

export default Footer
