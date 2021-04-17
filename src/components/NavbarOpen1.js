import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavbarOpen1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        
        return (
            <div>
                  <section className="text-gray-700 body-font font-bold bg-black">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="firstcolr p-6 rounded">
              
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Tailwind Components</h2>
                <p className="leading-relaxed text-base text-gray-200">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <Link to="/tailcomp" className="text-blue-400 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="secondcolr p-6 rounded">
            
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Django CodeBlocks</h2>
                <p className="leading-relaxed text-base text-gray-200">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <Link to="/django" className="text-blue-400 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="thirdcolr p-6 rounded">
                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">Frontend Templates</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <a href="/" className="text-blue-800 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="fourthcolr p-6 rounded">
                
                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">Melanchole</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <a href="/" className="text-blue-800 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="fifthcolr p-6 rounded">
               
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Bunker</h2>
                <p className="leading-relaxed text-base text-gray-200">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <a href="/" className="text-blue-400 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="sixcolr p-6 rounded">
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Ramona Falls</h2>
                <p className="leading-relaxed text-base text-gray-200">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                <a href="/" className="text-blue-400 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default NavbarOpen1
