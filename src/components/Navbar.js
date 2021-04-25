import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarOpen1 from './NavbarOpen1';
export class Navbar extends Component {


  constructor(props) {
    super(props);
    this.state = {
      openList1: false,
      openList2: false,
      openList3: false,
    };
  }

  setListOpen1() {
    this.setState({
      openList1: !this.state.openList1, openList2: false,
      openList3: false,
    });
  }
  setListOpen2() {
    this.setState({
      openList2: !this.state.openList2, openList1: false,
      openList3: false,
    });
  }

  setListOpen3() {
    this.setState({
      openList3: !this.state.openList3, openList1: false,
      openList2: false,
    });
  }
  render() {
    return (
      <div className="text-gray-700 font-bold bg-gray-50 shadow">


        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center pt-2 pb-2 md:justify-start md:space-x-10 ">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/" className="text-3xl font-bold text-blue-700 border-green-300 border-b-2">
                  <span className="sr-only">Logo</span>
                  <span className="text-blue-700 font-bold">lol</span>goal.com
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
               
                </div>
                <div className="relative">
                  <button type="button" className="group   inline-flex items-center text-base font-bold  focus:outline-none " onClick={() => this.setListOpen1()}>
                    <span>
                      Resources
                  </span>
                    <svg className="ml-2 h-5 w-5  group-" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div className="relative">

                  <button type="button" className="group  inline-flex items-center text-base font-bold  focus:outline-none" onClick={() => this.setListOpen2()}>
                    <span>Blog</span>

                    <svg className="ml-2 h-5 w-5  group-" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>


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

        <section className={" body-font bg-opacity-100" + (this.state.openList1 ? "" : " hidden")} onMouseLeave={() => this.setListOpen1()}>
      <NavbarOpen1/>
        </section>


        <section className={"body-font" + (this.state.openList2 ? "" : " hidden")} onMouseLeave={() => this.setListOpen2()}>
          <div className="container px-5 py-2 pb-10 shadow mx-auto bg-gray-50">

            <div className="flex flex-wrap jobcard rounded-lg">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-bold title-font mb-2">Frontend Development</h2>
                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link className="secondcolor inline-flex items-center" to="/frontend">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-bold title-font mb-2">Backend Development</h2>
                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link className="secondcolor inline-flex items-center" to="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-bold title-font mb-2">Data Structures</h2>
                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link to="/" className="secondcolor inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-bold title-font mb-2">Algo Revive </h2>
                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link to="/" className="secondcolor inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>






      </div>
    )
  }
}

export default Navbar

