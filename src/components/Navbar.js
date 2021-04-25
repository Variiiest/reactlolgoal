import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class Navbar extends Component {


  constructor(props) {
    super(props);
    this.state = {
      openList3: false,
    };
  }


  setListOpen3() {
    this.setState({
      openList3: !this.state.openList3,
    });
  }
  render() {
    return (
      <div className="text-white bg-black font-bold">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6">
            <div className="flex justify-between items-center pt-2 pb-2 md:justify-start md:space-x-10 ">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/" className="text-3xl font-bold text-white border-green-300 border-b-2">
                  <span className="text-white font-bold">lol</span>goal.com
              </Link>
              </div>
              <div className="-mr-2 -my-2 lg:hidden">
                <button className="p-2 inline-flex items-center justify-end    focus:outline-none " onClick={() => this.setListOpen3()}>
                  <span className="sr-only">Open menu</span>

                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <nav className="hidden lg:flex space-x-10">
              
                <div className="relative">
                  <Link to="/tailcomp" className="group inline-flex items-center text-base font-bold focus:outline-none" >
                     Tailwind Resources
                  </Link>
                </div>

                <div className="relative">
                  <Link to="/django" className="group inline-flex items-center text-base font-bold focus:outline-none">
                  Django Resources
                  </Link>
                </div>
                <div className="relative">
                  <Link to="/templates" className="group  inline-flex items-center text-base font-bold focus:outline-none">
                      Templates Store
                  </Link>
                </div>
                <div className="relative">
                  <Link to="/blog" className="group inline-flex items-center text-base font-bold focus:outline-none">
                  Blog
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div className={"absolute top-0 inset-x-0 transition transform origin-top-right" + (this.state.openList3 ? "" : " hidden")}>
            <div className="ring-1 ring-gray-200 ring-opacity-5 secondcolr m-4">
              <div className="pt-5 pb-6 p-3">
                <div className="flex items-center justify-between ">
                <Link to="/" className="text-3xl font-bold  border-green-300 border-b-2 text-blue-100">
                  <span className="sr-only">Logo</span>
                  <span className="text-blue-100 font-bold">lol</span>goal.com
              </Link>
                  <div className="-mr-2">
                    <button type="button" className="rounded p-2 inline-flex items-center justify-center text-gray-900 bg-blue-100 focus:outline-none " onClick={() => this.setListOpen3()}>
                      <span className="sr-only">Close menu</span>

                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
       
     
              <div className="py-6 px-5 space-y-6">


                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link to="/course" className="text-base font-medium text-gray-100 ">
                 Tailwind Components
                </Link>
                  <Link to="/designsystems" className="text-base font-medium text-gray-100">
                   Django Blocks
                </Link>
                  <Link to="/frontend" className="text-base font-medium text-gray-100">
                  React Blocks
                </Link>
                  <Link to="/backend" className="text-base font-medium text-gray-100 ">
                   Backend Resources
                </Link>
              
                  <Link to="/frontendsystems" className="text-base font-medium text-gray-100">
                    Frontend Projects
                </Link>
                  <Link to="/backendsystems" className="text-base font-medium text-gray-100">
                    Backend Projects
                </Link>

                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    )
  }
}

export default Navbar

