import React, { Component } from 'react'
import comm from './images/comm.svg'
import dev from './images/developer.svg'
import freelance from './images/Freelancer.svg'


export class Premium extends Component {
    render() {
        return (
            <div>
      <section className="text-gray-100 body-font mt-12 px-4">
             <div className="container flex flex-col items-center mx-auto md:flex-row bgcomm rounded-md">
               <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 px-5 sm:py-0">
                 <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-pink-400 lg:text-2xl title-font pt-12">
                 <span className="sm:text-6xl text-3xl text-green-500"> 0$/Y</span>Community  
                 </h1>
                 <p className="mb-8 text-base leading-relaxed text-left texy-gray-700">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </p>
                 <p className="flex items-center mb-2 text-white "><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   200+ Design Components (60+ Components Available Now)
                 </p>
                 <p className="flex items-center mb-2 text-white ">
                   <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                  20+ Free Templates (2 Templates Available)
                 </p>
                 <p className="flex items-center mb-6 text-white">
                   <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                3+ Full Stack Projects 
                 </p>
               </div>
               <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                 <img className="object-cover object-center bghero" alt="hero" src={comm}/>
               </div>
             </div>
           </section>

           <section className="text-gray-100 body-font mt-12 px-4">
             <div className="container flex flex-col items-center mx-auto md:flex-row bgcomm rounded-md">
               <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 px-5 sm:py-0">
               <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-pink-400 lg:text-2xl title-font pt-12">
                 <span className="sm:text-6xl text-3xl text-yellow-500"> 60$/Y</span>Developer
                 </h1>
                 <p className="mb-8 text-base leading-relaxed text-left texy-gray-700">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </p>
                 <p className="flex items-center mb-2 text-white "><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
                 <p className="flex items-center mb-2 text-white ">
                   <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
                 <p className="flex items-center mb-6 text-white">
                   <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
               </div>
               <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                 <img className="object-cover object-center bghero" alt="hero" src={dev}/>
               </div>
             </div>
           </section>



           <section className="text-gray-100 body-font mt-12 px-4">
             <div className="container flex flex-col items-center mx-auto md:flex-row bgcomm rounded-md">
               <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 px-5 sm:py-0">
               <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-pink-400 lg:text-2xl title-font pt-12">
                 <span className="sm:text-6xl text-3xl fifthcolor"> Let's Discuss </span>
                 </h1>
                 <p className="mb-8 text-base leading-relaxed text-left texy-gray-700">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </p>
                 <p className="flex items-center mb-2 text-white "><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
                 <p className="flex items-center mb-2 text-white ">
                   <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
                 <p className="flex items-center mb-6 text-white">
                   <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
               </div>
               <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                 <img className="object-cover object-center bghero" alt="hero" src={freelance}/>
               </div>
             </div>
           </section>


            </div>
        )
    }
}

export default Premium
