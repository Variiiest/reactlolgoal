import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav =[
  {
    name:"Tailwind Blocks",
    url:"/tailwind",
  },
  {
    name:"Landing Pages",
    url:"/landingpages",
  },
  {
    name:"Django Blocks",
    url:"/django",
  },
  // {
  //   name:"Tools",
  //   url:"/tools",
  // },
  // {
  //   name:"Blog",
  //   url:"/blog",
  // },

 
]




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
<>

     
      <section>
      <div className="font-bold bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-3xl font-bold textcolor1">
                  <span className="font-bold">lol</span>goal.com
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button" className=" p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false" onClick={() => this.setListOpen3()}>
                <span className="sr-only">Open menu</span>
               
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
              {Nav.map((data,key)=>
                  <Link to={data.url} key={data.name} className="text-gray-800  group inline-flex items-center text-base hover:text-black focus:outline-none font-extrabold px-4 py-2 hover:bg-red-50">
                  <span>{data.name}</span>
                </Link> )}
              </div>
            
    
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            
              <a href="." className="ml-8 whitespace-nowrap inline-flex items-center justify-center btn-primary">
                Try Now
              </a>
            </div>
          </div>
        </div>
    
        <div className={"absolute top-0 inset-x-0 transition transform origin-top-right" + (this.state.openList3 ? "" : " hidden")}>
          <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
              <a className="flex title-font items-center md:justify-start justify-center text-black" href=".">
          
      <span className="text-3xl font-bold text-indigo-700">lolgoal.com</span>
    </a>
                <div className="-mr-2">
                  <button type="button" className=" p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => this.setListOpen3()}>
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                {Nav.map((data,key)=>
                  <Link to={data.url} key={data.name} className="-m-3 p-3 flex items-center ">
                   
                    <span className="ml-3 text-base text-black">
                      {data.name}
                    </span>
                  </Link>)}
               
                </nav>
              </div>
            </div> 
    
          </div>
        </div>
      </div>

      </section>
      </>
    )
  }
}

export default Navbar

