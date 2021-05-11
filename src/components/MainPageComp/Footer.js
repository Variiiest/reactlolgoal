import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Subscribe from './Subscribe'





export class Footer extends Component {


  
    render() {
        return (
            <div>
              <Subscribe/>
           <footer className="-mt-32 font-medium body-font bg-gray-900 text-gray-200"> 
        <div className="container px-5 pt-32 pb-12 mt-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto  md:text-left">
          <Link to="/" className="text-3xl font-bold text-blue-100 border-green-300 border-b-2">
                  <span className="sr-only">Logo</span>
                  <span className="text-blue-100 font-bold">lol</span>goal.com
              </Link>
            
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
            <div className="lg:w-1/3 w-1/2">
              <h2 className="title-font font-extrabold text-white text-xl mb-3">Tailwind</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="." className=""> Heroes</a>
                </li>
                <li>
                  <a href="." className="">Authentication</a>
                </li>
                <li>
                  <a href="." className="">Pricing</a>
                </li>
                <li>
                  <a href="." className="">Content</a>
                </li>
                <li>
                  <a href="." className="">Footers</a>
                </li>
                <li>
                  <a href="." className="">Faq</a>
                </li>
                <li>
                  <a href="." className="">Grid</a>
                </li>
                <li>
                  <a href="." className="">All</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 w-1/2">
              <h2 className="title-font font-extrabold text-white text-xl mb-3">Django Blocks</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="." className="">Basics Installation</a>
                </li>
                <li>
                  <a href="." className="">Models</a>
                </li>
                <li>
                  <a href="." className="">Views</a>
                </li>
                <li>
                  <a href="." className="">Authentication</a>
                </li>
               
                <li>
                  <a href="." className="">Authorization</a>
                </li>
                <li>
                  <a href="." className="">Admin</a>
                </li>
                <li>
                  <a href="." className="">Packages</a>
                </li>
                <li>
                  <a href="." className="">Projects</a>
                </li>
              </nav>
            </div>
  
            <div className="lg:w-1/4 w-1/2">
              <h2 className="title-font font-extrabold text-white text-xl mb-3">React Codeblocks</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="." className="">Basic Installation</a>
                </li>
                <li>
                  <a href="." className="">Styles and Images</a>
                </li>
                <li>
                  <a href="." className="">Dependencies</a>
                </li>
                <li>
                  <a href="." className="">React-router</a>
                </li>
                <li>
                  <a href="." className="">Enviornment</a>
                </li>
                <li>
                  <a href="." className="">PWA</a>
                </li>
                <li>
                  <a href="." className="">Projects</a>
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
