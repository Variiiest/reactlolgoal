import React, { Component } from 'react'
import Blog1 from '../../uicomp1/Blog/Blog1'
import Blog2 from '../../uicomp1/Blog/Blog2'
import Blog3 from '../../uicomp1/Blog/Blog3'
import Blog4 from '../../uicomp1/Blog/Blog4'

import CodeCard from '../../uicomp1/CodeCard'

export class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code1: ` <div className="container px-5 py-24 mx-auto text-gray-900">
       
         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
           <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
             <div className="bg-gray-200 shadow-2xl h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'}} />
             <div className="w-70 bg-white -mt-10 shadow-2xl rounded-lg overflow-hidden p-5 m-2">
          
               <div className="text-2xl font-medium">Lorem Ipsum</div>
               <div className="text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                 <button className="bg-blue-800 text-white mt-4 block rounded p-2 text-sm "><span className>Learn More</span></button>
               </div>
             </div>
           </div>
           <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
             <div className="bg-gray-200 shadow-2xl h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'}} />
             <div className=" w-70 bg-white -mt-10 shadow-2xl rounded-lg overflow-hidden p-5 m-2">
            
               <div className="text-2xl font-medium">Lorem Ipsum</div>
               <div className="text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                 <button className="bg-blue-800 text-white px-2 mt-4 block rounded p-2 text-sm"><span className>Learn More</span></button>
               </div>
             </div>
           </div>
           <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
             <div className="bg-gray-200 shadow-2xl h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'}} />
             <div className=" w-70 bg-white -mt-10 shadow-2xl rounded-lg overflow-hidden p-5 m-2">
             
               <div className="text-2xl font-medium">Lorem Ipsum</div>
               <div className="text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                 <button className="bg-blue-800 text-white px-2 mt-4 block rounded p-2 text-sm"><span className>Learn More</span></button>
               </div>
             </div>
           </div>
         </div>
       </div>`,

            code2: `       <section className="text-gray-900 body-font">
       <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-wrap -m-4">
           <div className="p-4 md:w-1/3">
             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
               <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400/#23145" alt="blog" />
               <div className="p-6">
     
                 <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">The Catalyzer</h1>
                 <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                 <div className="flex items-center flex-wrap ">
                   <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M5 12h14" />
                       <path d="M12 5l7 7-7 7" />
                     </svg>
                   </a>
                   <span className="text-blue-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                       <circle cx={12} cy={12} r={3} />
                     </svg>1.2K
                   </span>
                 </div>
               </div>
             </div>
           </div>
           <div className="p-4 md:w-1/3">
             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
               <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400/#23145" alt="blog" />
               <div className="p-6">
     
                 <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">The Catalyzer</h1>
                 <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                 <div className="flex items-center flex-wrap ">
                   <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M5 12h14" />
                       <path d="M12 5l7 7-7 7" />
                     </svg>
                   </a>
                   <span className="text-blue-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                       <circle cx={12} cy={12} r={3} />
                     </svg>1.2K
                   </span>
                 </div>
               </div>
             </div>
           </div>
           <div className="p-4 md:w-1/3">
             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
               <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400/#23145" alt="blog" />
               <div className="p-6">
     
                 <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">The Catalyzer</h1>
                 <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                 <div className="flex items-center flex-wrap ">
                   <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M5 12h14" />
                       <path d="M12 5l7 7-7 7" />
                     </svg>
                   </a>
                   <span className="text-blue-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                     <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                       <circle cx={12} cy={12} r={3} />
                     </svg>1.2K
                   </span>
                 </div>
               </div>
             </div>
           </div>
           </div>
       </div>
     </section> `,

            code3: `  <section className="text-gray-600 body-font 
            overflow-hidden">
     <div className="container sm:px-5 px-2 py-24 mx-auto">
       <div className="flex flex-wrap">
         <div className="p-4 md:w-1/3 flex flex-col items-start">

           <div className="shadow-2xl px-4 py-4 rounded-md">

             <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before</h2>
             <p className="leading-relaxed mb-4">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
             <div className="shadow px-2 py-2">
               <a href="/" className="inline-flex items-center">
                 <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                 <span className="flex-grow flex flex-col pl-4">
                   <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                   <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                 </span>
               </a>
             </div>
           </div>

         </div>

         <div className="p-4 md:w-1/3 flex flex-col items-start">

           <div className="shadow-2xl px-4 py-4 rounded-md">

             <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before</h2>
             <p className="leading-relaxed mb-4">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
             <div className="shadow px-2 py-2">
               <a href="/" className="inline-flex items-center">
                 <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                 <span className="flex-grow flex flex-col pl-4">
                   <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                   <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                 </span>
               </a>
             </div>
           </div>

         </div>

         <div className="p-4 md:w-1/3 flex flex-col items-start">

           <div className="shadow-2xl px-4 py-4 rounded-md">

             <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before</h2>
             <p className="leading-relaxed mb-4">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
             <div className="shadow px-2 py-2">
               <a href="/" className="inline-flex items-center">
                 <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                 <span className="flex-grow flex flex-col pl-4">
                   <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                   <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                 </span>
               </a>
             </div>
           </div>

         </div>

       </div>
     </div>
   </section>`,


   code4:`   <main className="max-w-full mx-auto text-black px-4 py-12">

   <div className="flex py-8 mb-4 px-4 lg:px-0 items-center justify-between">
     <h2 className="font-bold text-3xl">Latest news</h2>
     <a href="/" className="bg-green-200 text-gray-800 px-3 py-1 rounded-2xl cursor-pointer">
       View all
   </a>
   </div>
   <div className="contaoner space-x-0 lg:flex lg:space-x-6 pb-12 ">
     <div className="rounded-2xl w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
       <img alt="" src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-2xl shadow" />
       <div className="p-4 pl-0">
         <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
         <p className="text-gray-700 mt-2">
           Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
           So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
       </p>
         <a href="/" className="inline-block rounded-2xl text-green-100 mt-2 ml-auto px-4 py-2 bg-blue-800 rounded text-sm"> Read more </a>
       </div>
     </div>
     <div className="rounded-2xl w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
       <img alt="" src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-2xl shadow" />
       <div className="p-4 pl-0">
         <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
         <p className="text-gray-700 mt-2">
           Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
           So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
       </p>
         <a href="/" className="inline-block rounded-2xl text-green-100 mt-2 ml-auto px-4 py-2 bg-blue-800 rounded text-sm"> Read more </a>
       </div>
     </div>
     <div className="rounded-2xl w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
       <img alt="" src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-2xl shadow" />
       <div className="p-4 pl-0">
         <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
         <p className="text-gray-700 mt-2">
           Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
           So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
       </p>
         <a href="/" className="inline-block rounded-2xl text-green-100 mt-2 ml-auto px-4 py-2 bg-blue-800 rounded text-sm"> Read more </a>
       </div>
     </div>
   </div>
 </main>`,



        }
    }


    render() {
        return (
            <div>

                <CodeCard code={this.state.code1}>
                    <Blog1 />

                </CodeCard>




                <CodeCard code={this.state.code2}>
                    <Blog2 />

                </CodeCard>


                <CodeCard code={this.state.code3}>
                    <Blog3 />

                </CodeCard>


                <CodeCard code={this.state.code4}>
                    <Blog4 />

                </CodeCard>

             


          


            </div>
        )
    }
}

export default List
