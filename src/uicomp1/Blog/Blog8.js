import React, { Component } from 'react'

export class Blog8 extends Component {
    render() {
        return (
            <div>
            <div className="block lg:flex lg:space-x-2  sm:px-4 px-2 py-12 mb-10">
         
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
     
            </div>
        )
    }
}

export default Blog8
