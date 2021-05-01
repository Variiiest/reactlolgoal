import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav =[
  {
    name:"Tailwind Designs",
    url:"/tailwind",
  },
  {
    name:"DRF Tutorial",
    url:"/django",
  },
  {
    name:"FreeTemplates",
    url:"/freetemp",
  },
  {
    name:"Premium",
    url:"/premium",
  },
  {
    name:"Custom",
    url:"/contact",
  },
 
 
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
      <div className="text-white bg-gray-900 font-bold">
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

                {Nav.map((data,key)=>
                  <Link to={data.url} key={data.name} className="group ml-4 px-2 py-2 rounded shadow-2xl hover:bg-gray-700 inline-flex items-center text-base font-bold focus:outline-none" >
                    {data.name}
                  </Link>
                    )}
                </div>
              
              </nav>
            </div>
          </div>

          <div className={"top-0" + (this.state.openList3 ? "" : " hidden")}>
            <div className="ring-1 ring-gray-200 ring-opacity-5 secondcolr m-4">
       
     
              <div className="py-6 px-5 space-y-6">


                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        
                  
                {Nav.map((data,key)=>
                  <Link to={data.url}  key={data.name} className="text-base font-medium text-gray-100 ">
                 {data.name}
                </Link>
                )}
              

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

