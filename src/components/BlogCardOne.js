import React, { Component } from 'react'

export class BlogCardOne extends Component {
    render() {
        return (
            <>
               <div className="py-4 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg px-4 py-4 hover:from-pink-800 hover:to-gray-900">
                <h2 className="text-2xl font-medium text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed text-gray-200">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a href="/" className="secondcolor inline-flex items-center mt-4">Learn More
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
