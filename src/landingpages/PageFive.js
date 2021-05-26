import React, { Component } from 'react'

export class PageFive extends Component {
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{__html: "\n  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');\n\n  .font-mont{\n      font-family: 'Montserrat', sans-serif;\n  }\n  " }} />
        <section className="flex flex-wrap items-center font-mont bg-black">
          <div className="container w-full md:w-1/2">
            <div className="mx-5 lg:mx-20">
              <a href="#_" className="flex items-center w-64 mt-32 mb-4 font-bold title-font md:mb-0 lg:mt-16">
                <div className="border-b px-2 text-gray-300">Launching Too soon</div>
              </a>
              <div className="flex mt-4 font-light text-gray-300">
                <div className="pr-4">
                  <h1 className="mb-2 text-2xl tracking-tight leaading-10 text-white sm:text-6xl title-font">
                    DroneDelivery is <span className="border-b-2 border-yellow-400">Future</span>
                  </h1>
                </div>
              </div>
              <div className="w-full mt-8 text-base font-medium  text-gray-300 mb-8 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              <div className="flex mt-12"> <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg bg-yellow-400 text-black sm:w-auto">
                  Try It Free
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <line x1={5} y1={12} x2={19} y2={12} />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden w-full bg-center bg-cover md:w-1/2 lg:block">
            <img src="https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1380&q=80" className="object-contain w-full h-screen" alt="" />
          </div>
          <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
          </svg>
        </section>
        <section className="text-gray-800 body-font font-bold bg-white">
          <div className="container mx-auto flex px-5 pb-16 items-center justify-center flex-col">
            <div className="flex flex-wrap w-full mb-10 mt-10 sm:mt-0 flex-col items-center text-center">
              <h1 className="sm:text-xl text-lg title-font mb-2 text-yellow-400">
                Work Better,Work Smarter
              </h1>
              <h1 className="sm:text-3xl text-2xl title-font mb-2 text-black font-mont">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
            <iframe className="lg:w-5/6 mb-10 object-cover object-center" height={450} src="https://www.youtube.com/embed/DRxo6tQ75DU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-sm text-3xl mb-4 font-bold text-gray-900 px-3 py-2 bg-yellow-400">
                Video by <a href="https://pixabay.com/users/xat-ch-12531001/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=53902">Xavier Turpain</a> from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=53902">Pixabay</a>
              </h1>
            </div>
          </div>
          <svg className="fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
          </svg>
        </section>
        <section className="bg-yellow-400 text-gray-100" style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/09/10/11/42/quadrocopter-1658967_960_720.png")', backgroundRepeat: 'no-repeat'}}>
          <div className="container px-5 pb-12 mx-auto">
            <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
              <h1 className="sm:text-xl text-lg title-font mb-2 text-red-600">
                Work Better,Work Smarter
              </h1>
              <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-mont">
                Pitchfork Kickstarter Taxidermy
              </h1>
            </div>
            <div className="flex flex-wrap m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="p-4 bg-black">
                  <div className="w-16 h-16 inline-flex items-center justify-center bg-yellow-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}>
                      <path d="M2 12h2c0-1.086.211-2.136.627-3.122.401-.954.978-1.809 1.71-2.541.735-.735 1.591-1.311 2.542-1.71 1.936-.816 4.181-.827 6.13-.041C15.055 5.931 16.144 7 17.5 7 18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059-1.189.5-2.26 1.22-3.18 2.139-.917.916-1.637 1.986-2.14 3.179C2.264 9.334 2 10.646 2 12zM19.373 15.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71c-1.936.816-4.181.827-6.13.041C8.945 18.069 7.856 17 6.5 17 5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725C9.449 21.752 10.704 22 12 22c1.354 0 2.665-.264 3.897-.783 1.192-.503 2.263-1.223 3.18-2.14s1.637-1.987 2.14-3.179C21.736 14.665 22 13.354 22 12h-2C20 13.085 19.789 14.135 19.373 15.122z" />
                      <path d="M12,7.462c-2.502,0-4.538,2.036-4.538,4.538S9.498,16.538,12,16.538s4.538-2.036,4.538-4.538S14.502,7.462,12,7.462z M12,14.538c-1.399,0-2.538-1.139-2.538-2.538S10.601,9.462,12,9.462s2.538,1.139,2.538,2.538S13.399,14.538,12,14.538z" />
                    </svg>
                  </div>
                  <h2 className="sm:text-2xl text-xl title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="p-4 bg-black">
                  <div className="w-16 h-16 inline-flex items-center justify-center bg-yellow-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0,0, 0, 1)', transform: '', msFilter: ''}}>
                      <path d="M20,17V7c0-2.168-3.663-4-8-4S4,4.832,4,7v10c0,2.168,3.663,4,8,4S20,19.168,20,17z M12,5c3.691,0,5.931,1.507,6,1.994 C17.931,7.493,15.691,9,12,9S6.069,7.493,6,7.006C6.069,6.507,8.309,5,12,5z M6,9.607C7.479,10.454,9.637,11,12,11 s4.521-0.546,6-1.393v2.387C17.931,12.493,15.691,14,12,14s-5.931-1.507-6-2V9.607z M6,17v-2.393C7.479,15.454,9.637,16,12,16 s4.521-0.546,6-1.393v2.387C17.931,17.493,15.691,19,12,19S6.069,17.493,6,17z" />
                    </svg>
                  </div>
                  <h2 className="sm:text-2xl text-xl title-font mb-2">
                    The Catalyzer
                  </h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="p-4 bg-black">
                  <div className="w-16 h-16 inline-flex items-center justify-center bg-yellow-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}>
                      <circle cx="10.5" cy="19.5" r="1.5" />
                      <circle cx="17.5" cy="19.5" r="1.5" />
                      <path d="M21,7H7.334L6.18,4.23C5.868,3.482,5.143,3,4.333,3H2v2h2.334l4.743,11.385C9.232,16.757,9.597,17,10,17h8 c0.417,0,0.79-0.259,0.937-0.648l3-8c0.115-0.308,0.072-0.651-0.114-0.921C21.635,7.161,21.328,7,21,7z M17,13h-2v2h-2v-2h-2v-2h2 V9h2v2h2V13z" />
                    </svg>
                  </div>
                  <h2 className="sm:text-2xl text-xl title-font mb-2">
                    Neptune
                  </h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="p-4 bg-black">
                  <div className="w-16 h-16 inline-flex items-center justify-center bg-yellow-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}>
                      <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z" />
                      <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z" />
                    </svg>
                  </div>
                  <h2 className="sm:text-2xl text-xl title-font mb-2">
                    Melanchole
                  </h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
            </div>
          </div>
          <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
          </svg>
        </section>
        <section className="container px-5 pb-12 mx-auto text-gray-100 bg-white font-bold">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-xl text-lg title-font mb-2 text-yellow-400">
              Work Better,Work Smarter
            </h1>
            <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-mont">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-800">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div className="h-48 w-full bg-cover bg-center" style={{backgroundImage: 'url(https://source.unsplash.com/random'}} />
              <div className="bg-black -mt-10 border-t-4 border-yellow-400 overflow-hidden p-5 m-2 transform hover:scale-105">
                <div className="text-2xl font-medium">Lorem Ipsum</div>
                <div className="text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                  <button className="text-gray-100 mt-4 block rounded text-base p-1"> <span>Learn More</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div className="h-56 w-full bg-cover bg-center" style={{backgroundImage: 'url(https://source.unsplash.com/random'}} />
              <div className="bg-black -mt-10 border-t-4 border-yellow-400 overflow-hidden p-5 m-2 transform hover:scale-105">
                <div className="text-2xl font-medium">Lorem Ipsum</div>
                <div className="text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                  <button className="text-gray-100 mt-4 block rounded text-base p-1"> <span>Learn More</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div className="h-48 w-full bg-cover bg-center" style={{backgroundImage: 'url(https://source.unsplash.com/random'}} />
              <div className="bg-black -mt-10 border-t-4 border-yellow-400 overflow-hidden p-5 m-2 transform hover:scale-105">
                <div className="text-2xl font-medium">Lorem Ipsum</div>
                <div className="text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                  <button className="text-gray-100 mt-4 block rounded text-base p-1"> <span>Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}

export default PageFive
