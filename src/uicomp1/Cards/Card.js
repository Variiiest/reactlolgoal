import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Card extends Component {
    render() {
        return (
            <>
                <div className="flex flex-col p-6 text-left bg-gradient-to-tr from-gray-700 to-gray-900 items-left lg:w-1/4 rounded-2xl shadow-lg ">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mb-5 text-blue-100 rounded-lg bg-gradient-to-r from-pink-400 to-red-700 shadow-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={18} y1={13} x2={12} y2={19} />
                  <line x1={6} y1={13} x2={12} y2={19} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="mb-3 text-2xl font-semibold leading-snug text-blue-400 tracking-relaxed title-font">
                  Install</h2>
                <p className="mb-8 text-base leading-snug text-left text-gray-300 tracking-relaxed lg:text-xl ">
                  After you have got the template install Tailwind CSS on your machine, you will need
                  the
                  latest node package.
                </p>
              </div>
              </div> 



              
<div className="py-12 bg-gray-800 text-gray-100" id="services">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
    <div className="mt-10">
      <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative py-2 px-2 rounded">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 bg-green-300 rounded-full shadow-2xl ">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-blue-700 shadow-2xl ">
           
            </div>
            </div>
            <p className="ml-16 text-xl leading-6 font-bold text-blue-800 ">Web Development</p>
          </dt>
          <dd className="mt-2 ml-16 text-lg font-bold">
          We develop web applications that engaging, and are developed with the latest technologies.And If you are programming person use our code snippets for free.
          </dd>
        </div>
        <div className="relative py-2 px-2 rounded">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 bg-green-300 rounded-full shadow-2xl ">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-blue-700 shadow-2xl ">
           
            </div>
            </div>
            <p className="ml-16 text-xl leading-6 font-bold text-blue-800 ">Free Landing Pages</p>
          </dt>
          <dd className="mt-2 ml-16 text-lg font-bold">
           We have also developed some landing pages with latest technologies . If you are starting a startup,Landing pages are important.
          </dd>
        </div>
        <div className="relative py-2 px-2 rounded">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 bg-green-300 rounded-full shadow-2xl ">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-blue-700 shadow-2xl ">
           
            </div>
            </div>
            <p className="ml-16 text-xl leading-6 font-bold text-blue-800 ">Free FullStack </p>
          </dt>
          <dd className="mt-2 ml-16 text-lg font-bold">
            Our free fullstack projects help you to start business with less cost.Also Get assistant for hosting and choosing right domain.
          </dd>
        </div>
        <div className="relative py-2 px-2 rounded">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 bg-green-300 rounded-full shadow-2xl ">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-blue-700 shadow-2xl ">
           
            </div>
            </div>
            <p className="ml-16 text-xl leading-6 font-bold  text-blue-800 ">
              Custom Development
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-lg font-bold">
           Try our free resources , If not working for your project just contact us. We will work with you and help you to start your business.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>





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



            </>
        )
    }
}

export default Card
