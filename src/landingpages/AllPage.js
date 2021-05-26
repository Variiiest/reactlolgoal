import React, { Component } from 'react'

export class PageOne extends Component {
    render() {
        return (
            <div>
                  <header className="body-font bg-white-500">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a href="#_" className="flex title-font font-semibold items-center text-indigo-700 mb-4 md:mb-0">
            <span className="ml-3 text-3xl">Lolgoal</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* Add Your Links */}
          </nav>
          <button className="inline-flex  hover:text-white items-center  transition ease-in-out border border-indigo-700 hover:bg-blue-700 focus:border-white text-blue-700 font-semibold rounded px-4 py-3 text-base">Talk to sales
          </button>
        </div>
      </header>
                 <div style={{backgroundImage: 'url("https://images.unsplash.com/photo-1620837953336-8274c0623a3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")'}}>
          <div className="w-full px-8 py-16 xl:px-8 text-white bg-blue-800 bg-opacity-60 font-serif">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center md:flex-row">
                <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                  <p className="text-white font-serif"> <span className="px-4 py-2 bg-green-500 rounded-full">
                      We are hiring .
                    </span>
                  </p>
                  <h2 className="text-6xl leading-none font-serif mt-20">
                    Easy Advertise , Target Audience
                  </h2>
                  <p className="text-3xl text-gray-100 md:pr-16 font-serif mt-12">30 Days /Free advertise, training and much more .</p>
                </div>
                <div className="w-full mt-16 md:mt-0 md:w-2/5">
                  <div className="z-10 h-auto p-8 py-10 overflow-hidden bg-white px-7 rounded-lg">
                    <h3 className="mb-6 text-2xl text-center text-gray-900">
                      Sign in to your Account
                    </h3>
                    <input type="text" name="email" className="block text-blue-600 w-full px-4 py-3 mb-4 border focus:outline-none hover:border-blue-800 rounded" placeholder="Email address" />
                    <input type="password" name="password" className="block text-blue-600  w-full px-4 py-3 border mb-4 focus:outline-none hover:border-blue-800 rounded" placeholder="Password" />
                    <div className="block items-center text-center">
                      <button className="px-6 py-3 text-white bg-blue-600 text-lg rounded">Login</button>
                    </div>
                    <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" className="text-blue-500 underline">
                        Sign up here
                      </a>
                    </p>
                    <p className="w-full mt-4 text-sm text-center text-gray-500">Forgot Your Password? <a href="#_" className="text-blue-500 underline">
                        Recover Your Password
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="text-gray-700 body-font font-serif bg-gray-50">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
              <h1 className="sm:text-4xl text-2xl title-font mb-12 font-thin">We’re here to help you be successful.</h1>
            </div>
            <div className="flex flex-wrap m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4 text-center items-center justify-center">
                <div className="p-6">
                  <div className="w-16 h-16 inline-flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" style={{fill: 'rgba(46, 59, 210, 1)', transform: '', msFilter: ''}}><path d="M7 3H9V21H7zM4 3H6V21H4zM10 3H12V21H10z" /><path transform="scale(-1) rotate(69.775 17.21 -24.221)" d="M7.888 11H25.887999999999998V13H7.888z" /></svg>
                    <path d="M2 12h2c0-1.086.211-2.136.627-3.122.401-.954.978-1.809 1.71-2.541.735-.735 1.591-1.311 2.542-1.71 1.936-.816 4.181-.827 6.13-.041C15.055 5.931 16.144 7 17.5 7 18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059-1.189.5-2.26 1.22-3.18 2.139-.917.916-1.637 1.986-2.14 3.179C2.264 9.334 2 10.646 2 12zM19.373 15.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71c-1.936.816-4.181.827-6.13.041C8.945 18.069 7.856 17 6.5 17 5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725C9.449 21.752 10.704 22 12 22c1.354 0 2.665-.264 3.897-.783 1.192-.503 2.263-1.223 3.18-2.14s1.637-1.987 2.14-3.179C21.736 14.665 22 13.354 22 12h-2C20 13.085 19.789 14.135 19.373 15.122z">
                      <path d="M12,7.462c-2.502,0-4.538,2.036-4.538,4.538S9.498,16.538,12,16.538s4.538-2.036,4.538-4.538S14.502,7.462,12,7.462z M12,14.538c-1.399,0-2.538-1.139-2.538-2.538S10.601,9.462,12,9.462s2.538,1.139,2.538,2.538S13.399,14.538,12,14.538z">
                      </path></path></div>
                  <h2 className="text-base text-gray-900 title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 text-center items-center justify-center">
                <div className="p-6">
                  <div className="w-16 h-16 inline-flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" style={{fill: 'rgba(46, 59, 210, 0.8)', transform: '', msFilter: ''}}><path d="M20,2H4C2.897,2,2,2.894,2,3.992v12.016C2,17.106,2.897,18,4,18h3v4l6.351-4H20c1.103,0,2-0.894,2-1.992V3.992 C22,2.894,21.103,2,20,2z M14,13H7v-2h7V13z M17,9H7V7h10V9z" /></svg>
                  </div>
                  <h2 className="text-base text-gray-900 title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 text-center items-center justify-center">
                <div className="p-6">
                  <div className="w-16 h-16 inline-flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" style={{fill: 'rgba(46, 59, 210, 1)', transform: '', msFilter: ''}}><path d="M20,3H4C2.897,3,2,3.897,2,5v1v3v10c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V9V6V5C22,3.897,21.103,3,20,3z M17,6h2v2 h-2V6z M14,6h2v2h-2V6z M4,19v-9h16.001l0.001,9H4z" /></svg>
                  </div>
                  <h2 className="text-base text-gray-900 title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-700 body-font font-serif bg-gray-50">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
            <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
              <h1 className="mb-12 text-3xl text-left title-font">
                Products that help to advertise 
              </h1>
              <p className="flex items-center mb-6 text-gray-600"> <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-5 text-blue-600">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                Lorem Ipsum is simply dummy text of the printing</p>
              <p className="flex items-center mb-6"> <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-5 text-blue-600">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                Lorem Ipsum is simply dummy text of the printing</p>
              <p className="flex items-center mb-6 text-gray-600"> <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-5  text-blue-600">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img className="object-cover object-center rounded-lg" alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
            </div>
          </div>
        </section>
        <div className="bg-gradient-to-tr py-20 from-indigo-900 to-blue-900 font-serif">
          <div className="flex flex-wrap w-full flex-col items-center text-center">
            <h1 className="sm:text-xl text-lg title-font mb-2 text-green-400">
              Work Better,Work Smarter
            </h1>
            <h1 className="sm:text-3xl text-2xl title-font mb-6 text-gray-100">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-200 mb-5">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
          </div>
          <div className="container lg:flex items-center justify-center mt-2 font-serif mx-auto px-4">
            <div className="lg:w-1/2 h-1/3">
              <img src="https://images.unsplash.com/photo-1617476566924-a00229e86447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" className="w-full h-full" />
            </div>
            <div className="mt-4 lg:mt-0 py-12 px-8 lg:px-12 bg-gray-50 lg:w-2/5 text-gray-700">
              <div className="lg:text-3xl text-2xl font-normal leading-9 pb-6">Project Achrome</div>
              <div className="flex items-center font-lato">
                <div className="text-sm lg:text-lg font-normal mb-4">May 01</div>
                <div className="text-sm lg:text-lg font-normal color-white mb-4">• John Doe</div>
              </div>
              <div className="pb-6 text-base lg:text-xl leading-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
              <button className="border-b border-white lg:text-2xl text-base leading-6 font-bold">Read More</button>
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default PageOne
