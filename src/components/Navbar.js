import React, {Component} from 'react'
import BlogMain from './BlogMain';
import Hero from './Hero';
import Services from './Services';
import Subscribe from './Subscribe';
export class Navbar extends Component {


  constructor (props) {
    super(props);
    this.state= {
      openList1: false,
      openList2: false,
      openList3: false,
    };
  }
  
    setListOpen1(){
    this.setState({openList1: !this.state.openList1,openList2: false,
      openList3: false,});
  }
  setListOpen2(){
    this.setState({openList2: !this.state.openList2,openList1: false,
      openList3: false,});
  }

  setListOpen3(){
    this.setState({openList3: !this.state.openList3,openList1: false,
      openList2: false,});
  }
  render() {
    return (
      <div className="bg-gray-50">
      



            <div className="relative border-green-100 border-b">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10 ">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className="text-3xl font-bold text-green-600">
                <span className="sr-only">Logo</span>
                lolgoal
              </a>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <button className="p-2 inline-flex items-center justify-end text-gray-900 hover:text-gray-900  focus:outline-none " onClick={()=>this.setListOpen3()}>
                <span className="sr-only">Open menu</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden lg:flex space-x-10">
              <div className="relative">
                <button type="button" className="group  text-gray-800 inline-flex items-center text-base font-bold hover:text-gray-900 focus:outline-none " onClick={()=>this.setListOpen1()}>
                  <span>Programming</span>
            <svg className="ml-2 h-5 w-5 text-gray-900 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button type="button" className="group  text-gray-800 inline-flex items-center text-base font-bold hover:text-gray-900 focus:outline-none " onClick={()=>this.setListOpen1()}>
                  <span>
                   Projects
                  </span>
            <svg className="ml-2 h-5 w-5 text-gray-900 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <a href="/pricing" className="text-base font-bold text-gray-900 hover:text-gray-900">
            Services
              </a>
              <div className="relative">

                <button type="button" className="group text-gray-800 inline-flex items-center text-base font-bold hover:text-gray-900 focus:outline-none" onClick={()=>this.setListOpen2()}>
                  <span>Events</span>
              
                  <svg className="ml-2 h-5 w-5 text-gray-900 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
          
            
              </div>
            </nav>
       
          </div>
        </div>
 
        <div className={"absolute top-0 inset-x-0 p-2 transition transform origin-top-right"+ ( this.state.openList3 ? "" : " hidden")}>
          <div className="rounded-lg ring-1 ring-gray-200 ring-opacity-5 bg-gray-200 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={()=>this.setListOpen3()}>
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
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Help Center
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Guides
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Security
                </a>
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Events
                </a>
              </div>
              <div>
                <a href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-blue-600 hover:bg-blue-700">
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-900">
                  Existing customer?
                  <a href="/" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className={"text-indigo-200 body-font py-12"+( this.state.openList1 ? "" : " hidden")} onMouseLeave={()=>this.setListOpen1()}>
        <div className="container flex flex-wrap px-5 mx-auto items-center jobcard rounded-lg">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-900">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-">Pitchfork Kickstarter Taxidermy</h1>
            <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
            <a className="text-indigo-500 inline-flex items-center mt-4" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
           
          <div className="flex flex-wrap -m-4 mb-4">
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6   ">
                
                <h2 className="text-3xl text-pink-500 tracking-wider font-semibold title-font mb-2 acadfont">
                  <a href="/academy"><span className="text-pink-300"> A</span>
                
                cademy </a> </h2>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6   ">
            
                <h2 className="text-3xl text-yellow-500 font-semibold title-font mb-2 jobfont">
                 <a href="jobsearch">findjob</a> 
                  </h2>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6   ">
               
                <h2 className="text-3xl text-indigo-500 font-medium title-font mb-2">
                <a href="allforums">  forumQ</a>
               
                </h2>
            
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6 ">
                
                <h2 className="text-3xl text-green-400 font-semibold title-font mb-2">Commune</h2>
               
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-2 text-center">
              <div className="p-6  storefont ">
            
                <h2 className="text-3xl text-blue-300 italic font-medium title-font mb-2">Store</h2>
              
              </div>
            </div>
          </div>
     
          </div>
        </div>
      </section>


      <section className={"text-indigo-200 body-font"+( this.state.openList2 ? "" : " hidden")} onMouseLeave={()=>this.setListOpen2()}>
      <div className="container px-5 py-2 pb-10  mx-auto">
   
        <div className="flex flex-wrap jobcard rounded-lg">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-900 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a className="text-indigo-500 inline-flex items-center" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-900 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a className="text-indigo-500 inline-flex items-center" href="/">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-900 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a href="/" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-900 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a  href="/" className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </section>
     
    <Hero/>
    <Services/>
    <BlogMain/>
    <Subscribe/>
      </div>
    )
  }
}

export default Navbar

