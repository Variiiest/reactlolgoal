import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BlogMain extends Component {
    render() {
        return (
            <div>
  <section className="text-gray-100 bg-black body-font font-bold">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-center lg:mb-20">
            <h1 className="mb-4 text-4xl font-bold leading-none lg:text-5xl text-gray-100">
             Launch Your Website
              <br className="hidden lg:block" />
             The Quickest Possible Way
            </h1>
            <p className="w-full mx-auto mb-8 text-xl text-center lg:text-center">
              Check our resources</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gradient-to-tr from-gray-800 to-gray-900 items-left rounded shadow overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1565657255216-90f437a954a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="blog" />
                <div className="p-6">
                  
                  <h1 className="title-font text-xl font-bold  mb-3 text-gray-100">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <Link to="/blogdet" className="text-blue-100 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gradient-to-tr from-gray-800 to-gray-900 items-left rounded shadow overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1618340826056-cebb279183ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="blog" />
                <div className="p-6">
                  
                  <h1 className="title-font text-xl font-bold  mb-3 text-gray-100">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap">
                    <Link to="/blogdet" className="text-blue-100 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-gradient-to-tr from-gray-800 to-gray-900 items-left rounded shadow overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1565657255216-90f437a954a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="blog" />
                <div className="p-6">
                  
                  <h1 className="title-font text-xl font-bold  mb-3 text-gray-100">Shooting Stars</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <Link to="/blogdet" className="text-blue-100 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



  

            </div>
        )
    }
}

export default BlogMain
