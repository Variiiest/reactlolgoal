import React, { Component } from 'react'

export class BlogCardOne extends Component {
    render() {
        return (
            <>
               <div className="py-4 flex flex-wrap md:flex-nowrap font-bold ">
              <div className="md:flex-grow rounded px-4 py-4 bg-gray-50 white shadow">
                <h2 className="text-2xl text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed text-gray-700 ">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a href="/" className="text-blue-800 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div> 
            </>
        )
    }
}

export default BlogCardOne
