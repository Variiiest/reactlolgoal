import React, { Component } from 'react'

export class Blog8 extends Component {
    render() {
        return (
            <div>
               <section className="text-gray-900 body-font">
                    <div className="container px-5 py-12 mx-auto">
                     
            <div className="block lg:flex lg:space-x-2  sm:px-4 px-2 py-12 mb-10">
         
         <div className="w-full lg:w-2/3">
           <a className="block rounded w-full lg:flex mb-10" href="#_">
             <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{backgroundImage: 'url("https://dummyimage.com/720x400/")'}} >
             </div>
             <div className="bg-gray-50 rounded px-4 py-4 flex flex-col justify-between leading-normal shadow-2xl border">
               <div>
                 <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 </div>
               </div>
               <div className="flex mt-3">
                 <img alt="" src="https://randomuser.me/api/portraits/men/10.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
                 <div>
                   <p className="font-semibold text-gray-700 text-sm capitalize">Bulma </p>
                   <p className="text-gray-600 text-xs"> 14 Aug </p>
                 </div>
               </div>
             </div>
           </a>

           <a className="block rounded w-full lg:flex mb-10" href="#_">
             <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{backgroundImage: 'url("https://dummyimage.com/720x400/")'}} >
             </div>
             <div className="bg-gray-50 rounded px-4 py-4 flex flex-col justify-between leading-normal shadow-2xl border">
               <div>
                 <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 </div>
               </div>
               <div className="flex mt-3">
                 <img alt="" src="https://randomuser.me/api/portraits/men/1.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" />
                 <div>
                   <p className="font-semibold text-gray-700 text-sm capitalize">Tailwind </p>
                   <p className="text-gray-600 text-xs">23 Sep</p>
                 </div>
               </div>
             </div>
           </a>
           <a className="block rounded w-full lg:flex mb-10" href="#_">
             <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75" style={{backgroundImage: 'url("https://dummyimage.com/720x400/")'}} >
             </div>
             <div className="bg-gray-50 rounded px-4 py-4 flex flex-col justify-between leading-normal shadow-2xl border">
               <div>
                 <div className="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
               <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300 hover:bg-gray-100 hover:shadow-2xl">
                 <a href="#_" className="flex items-center text-gray-600 cursor-pointer">
       
                   Nutrition
                   <span className="text-gray-500 ml-auto">23 articles</span>
                 </a>
               </li>
               <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300 hover:bg-gray-100 hover:shadow-2xl">
                 <a href="#_" className="flex items-center text-gray-600 cursor-pointer">
                 
                   Food &amp; Diet
                   <span className="text-gray-500 ml-auto">18 articles</span>
                 </a>
               </li>
               <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300 hover:bg-gray-100 hover:shadow-2xl">
                 <a href="#_" className="flex items-center text-gray-600 cursor-pointer">
                  
                   Workouts
                   <span className="text-gray-500 ml-auto">34 articles</span>
                 </a>
               </li>
               <li className="px-1 py-4 border-l border-white hover:border-gray-200 transition duration-300 hover:bg-gray-100 hover:shadow-2xl">
                 <a href="#_" className="flex items-center text-gray-600 cursor-pointer">
                  
                   Immunity
                   <span className="text-gray-500 ml-auto">9 articles</span>
                 </a>
               </li>
             </ul>
           </div>
     
           <div className="py-4 mt-4 mb-4 bg-gray-100 px-2 rounded shadow-2xl">
             <h5 className="font-bold text-lg uppercase text-gray-800 mb-2"> Subscribe </h5>
             <p className="text-gray-800">
               Subscribe to our newsletter. We deliver the best health related articles to your inbox
             </p>
             <input placeholder="Email" className="text-gray-700 bg-gray-100 rounded-t  p-2 w-full mt-4 border focus:outline-none" />
             <button className="px-4 py-2 bg-blue-200 text-gray-800 rounded-b w-full capitalize tracking-wide">
               Subscribe
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

export default Blog8
