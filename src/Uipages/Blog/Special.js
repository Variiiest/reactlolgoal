import React, { Component } from 'react'
import Blog10 from '../../uicomp1/Blog/Blog10'
import Blog11 from '../../uicomp1/Blog/Blog11'
import Blog12 from '../../uicomp1/Blog/Blog12'
import Blog8 from '../../uicomp1/Blog/Blog8'

import CodeCard from '../../uicomp1/CodeCard'

export class Special extends Component {
constructor(props) {
    super(props)

    this.state = {
         code10:` <section className="text-gray-900 body-font">
         <div className="container px-5 py-12 mx-auto">
             <div className="flex flex-wrap -m-4">
                 <div className="p-2 md:w-1/2">
                     <div className="md:flex-grow px-4 py-4 bg-blue-800 rounded-2xl">
                         <h2 className="text-3xl font-medium text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                         <p className="leading-relaxed text-lg text-gray-200">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                         <a href="." className="text-indigo-200 inline-flex items-center mt-4">Learn More
 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                 <path d="M5 12h14"></path>
                                 <path d="M12 5l7 7-7 7"></path>
                             </svg>
                         </a>
                     </div>
                 </div>

                 <div className="p-2 md:w-1/2">
                     <div className="md:flex-grow px-4 py-4">
                         <h2 className="text-3xl font-medium text-black title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                         <p className="leading-relaxed text-lg">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                         <a href="." className="text-indigo-500 inline-flex items-center mt-4">Learn More
 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                 <path d="M5 12h14"></path>
                                 <path d="M12 5l7 7-7 7"></path>
                             </svg>
                         </a>
                     </div>
                 </div>

             </div>
         </div>
     </section>`,

code8:`   <div className="block lg:flex lg:space-x-2  sm:px-4 px-2 py-12 mb-10">
         
<div className="w-full lg:w-2/3">
  <a className="block rounded w-full lg:flex mb-10" href=".">
    <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{backgroundImage: 'url("https://dummyimage.com/720x400/")'}} >
    </div>
    <div className="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
      <div>
        <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
          Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
        </div>
      </div>
      <div className="flex mt-3">
        <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
        <div>
          <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
          <p className="text-gray-600 text-xs"> 14 Aug </p>
        </div>
      </div>
    </div>
  </a>

  <a className="block rounded w-full lg:flex mb-10" href=".">
    <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{backgroundImage: 'url("https://dummyimage.com/720x400/")'}} >
    </div>
    <div className="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
      <div>
        <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
          Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
        </div>
      </div>
      <div className="flex mt-3">
        <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
        <div>
          <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
          <p className="text-gray-600 text-xs"> 14 Aug </p>
        </div>
      </div>
    </div>
  </a>
  <a className="block rounded w-full lg:flex mb-10" href=".">
    <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{backgroundImage: 'url("https://dummyimage.com/720x400/")'}} >
    </div>
    <div className="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
      <div>
        <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
          Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
        </div>
      </div>
      <div className="flex mt-3">
        <img alt="" src="https://randomuser.me/api/portraits/men/11.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
        <div>
          <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
          <p className="text-gray-600 text-xs"> 14 Aug </p>
        </div>
      </div>
    </div>
  </a>


</div>

<div className="w-full lg:w-1/3 px-6">

  <div className="mb-4">
    <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
    <ul>
      <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300">
        <a href="." className="flex items-center text-gray-600 cursor-pointer">

          Nutrition
          <span className="text-gray-500 ml-auto">23 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
        </a>
      </li>
      <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300">
        <a href="." className="flex items-center text-gray-600 cursor-pointer">
        
          Food &amp; Diet
          <span className="text-gray-500 ml-auto">18 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
        </a>
      </li>
      <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300">
        <a href="." className="flex items-center text-gray-600 cursor-pointer">
         
          Workouts
          <span className="text-gray-500 ml-auto">34 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
        </a>
      </li>
      <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300">
        <a href="." className="flex items-center text-gray-600 cursor-pointer">
         
          Immunity
          <span className="text-gray-500 ml-auto">9 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
        </a>
      </li>
    </ul>
  </div>

  <div className="py-4 mt-4 mb-4 bg-blue-600 px-2 rounded">
    <h5 className="font-bold text-lg uppercase text-white mb-2"> Subscribe </h5>
    <p className="text-gray-100">
      Subscribe to our newsletter. We deliver the best health related articles to your inbox
    </p>
    <input placeholder="Email" className="text-gray-700 bg-gray-100 rounded-t  p-2 w-full mt-4 border focus:outline-none" />
    <button className="px-4 py-2 bg-green-200 text-gray-800 rounded-b w-full capitalize tracking-wide">
      Subscribe
    </button>
  </div>
</div>
</div>
`,


code11:`   <section className="text-gray-100 body-font">
<div className="container px-6 pb-12 sm:pt-12 mx-auto">

    <div className="flex flex-wrap mx-2 mt-4">
        <div className="md:w-2/3 sm:mb-0 mb-6">
            <section className="">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-full lg:shadow-2xl rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="h-64 bg-cover lg:h-full" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80")' }} />
                    </div>
                    <div className="max-w-full px-4 py-12 lg:max-w-6xl lg:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Build Your New <span className="text-indigo-400">Idea</span></h2>
                        <p className="mt-4 text-gray-800 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

                    </div>

                </div>
            </section>
        </div>

        <div className="md:w-1/3 sm:mb-0 mb-6">

            <div className="flex flex-wrap items-center w-full h-full  rounded-xl">
                <div className="md:flex-grow px-4 py-4 bg-blue-800 rounded-lg">
                    <h2 className="text-3xl font-medium text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                    <p className="leading-relaxed text-lg text-gray-200">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporwarer.</p>
                    <a href="." className="text-indigo-200 inline-flex items-center mt-4">Learn More
<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </div>
</div>
</section>
`,

code12:`              
<section className="text-black body-font">
        <div className="container sm:px-12 px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 sm:w-2/3 py-12">
            <div className="-my-8">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-black title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed text-lg">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a href="." className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-black title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                <p className="leading-relaxed text-lg">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a href="." className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-4 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-black title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                <p className="leading-relaxed text-lg">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a href="." className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
            </div>

            <div className="p-2 sm:w-1/3">
            <div className="md:flex-grow px-4 py-4 bg-white shadow-2xl rounded-xl">
          <h2 className="text-3xl font-medium text-black title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className="leading-relaxed text-lg">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a href="." className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
            </div>
          
          </div>
        </div>
      </section>
  `,


    }
}






    render() {
        return (
            <div>







<CodeCard code={this.state.code10}>
                    <Blog10/>

                </CodeCard>

<CodeCard code={this.state.code11}>
                    <Blog11/>

                </CodeCard>    

<CodeCard code={this.state.code8}>
                    <Blog8/>

                </CodeCard>


                       <CodeCard code={this.state.code12}>
                    <Blog12/>

                </CodeCard>


            </div>
        )
    }
}

export default Special
