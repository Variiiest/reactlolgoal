import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import HeroC1 from '../../uicomp1/HeroCenter/HeroC1'
import HeroC2 from '../../uicomp1/HeroCenter/HeroC2'
import HeroC3 from '../../uicomp1/HeroCenter/HeroC3'
import HeroC4 from '../../uicomp1/HeroCenter/HeroC4'
import HeroL1 from '../../uicomp1/HeroLeft/HeroL1'
import HeroL10 from '../../uicomp1/HeroLeft/HeroL10'
import HeroL2 from '../../uicomp1/HeroLeft/HeroL2'
import HeroL3 from '../../uicomp1/HeroLeft/HeroL3'
import HeroL4 from '../../uicomp1/HeroLeft/HeroL4'
import HeroL5 from '../../uicomp1/HeroLeft/HeroL5'
import HeroL6 from '../../uicomp1/HeroLeft/HeroL6'
import HeroL7 from '../../uicomp1/HeroLeft/HeroL7'
import HeroL8 from '../../uicomp1/HeroLeft/HeroL8'
import HeroL9 from '../../uicomp1/HeroLeft/HeroL9'
import HeroR1 from '../../uicomp1/HeroRight/HeroR1'
import HeroS1 from '../../uicomp1/HeroSpecial/HeroS1'
import HeroS2 from '../../uicomp1/HeroSpecial/HeroS2'
import All from '../All'



export class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code10: `<section className="text-gray-800 body-font">
             <div className="container px-8 py-24 mx-auto flex flex-wrap">
               <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                 <div className="w-full sm:p-4 px-4 mb-6">
                   <h1 className="title-font font-bold text-2xl mb-2 text-gray-900">Lorem Ipsum is simply dummy text of the printing</h1>
                   <div className="leading-relaxed">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing</div>
                 </div>
                 <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                   <h2 className="title-font font-bold text-3xl text-gray-900">2.7K</h2>
                   <p className="leading-relaxed">Users</p>
                 </div>
                 <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                   <h2 className="title-font font-bold text-3xl text-gray-900">1.8K</h2>
                   <p className="leading-relaxed">Subscribes</p>
                 </div>
                 <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                   <h2 className="title-font font-bold text-3xl text-gray-900">35</h2>
                   <p className="leading-relaxed">Downloads</p>
                 </div>
               </div>
               <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                 <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
               </div>
             </div>
           </section>`,


      code9: `<section className="text-gray-700 body-font">
             <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
               <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
                 <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-2xl title-font">
                 Lorem Ipsum is simply dummy text of the printing.
                 </h1>
                 <p className="mb-8 text-base leading-relaxed text-left ">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </p>
                 <p className="flex items-center mb-2 text-blue-700 "><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
                 <p className="flex items-center mb-2 text-blue-700 ">
                   <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Lorem Ipsum is simply dummy text of the printing
                 </p>
                 <p className="flex items-center mb-6 text-blue-700">
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
                 <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
               </div>
             </div>
           </section>`,


      code8: `<section className="text-gray-700 body-font">
             <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
               <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-10 md:pr-12 md:mb-0 ">
                 <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left text-black lg:text-3xl title-font">
                 Lorem Ipsum is simply dummy text of the printing.
                 </h1>
                 <p className="mb-8 text-base leading-relaxed text-left text-gray-700">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </p>
                 <div className="flex flex-wrap w-full mt-2 -mx-4 text-left ">
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(237, 60, 260, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                               </div>
                   </div>
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(237, 160, 60, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                               </div>
     
                               </div>
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(37, 60, 160, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                               </div>
                   </div>
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(27, 60, 220, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                               </div>
                   </div>
                 </div>
               </div>
               <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                 <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
               </div>
             </div>
           </section>`,


      code7: `<section className="flex flex-col items-center md:flex-row">
             <div className="hidden w-full bg-gray-200 bg-left-bottom bg-cover lg:block md:w-1/3 xl:w-1/3">
              
               <img src="https://dummyimage.com/600x1024/F3F4F7/8693ac" alt="" className="object-cover w-full h-full " />
             </div>
             <div className="flex w-full px-6 md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/2 lg:px-16 xl:px-12 items-left justify-left">
               <div className="w-full">
                 <a className="inline-flex items-center mt-12  font-medium text-gray-900 title-font" href="/">
                 <div className="px-4 rounded-full bg-blue-100">
                     Launching Too soon
                     </div>
                 </a>
                 <h1 className="mt-4 mb-4 font-bold tracking-tighter text-black sm:text-5xl text-4xl title-font">
                 Lorem Ipsum is simply text service
                 </h1>
                 <p className="mb-8 text-base leading-relaxed text-left text-gray-800 lg:text-1xl">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </p>
                 <div className="flex">
                 <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                         Try It Free
                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                       </a>
             
                 </div>
               </div>
             </div>
           </section>`,


      code6: `<section className="flex flex-wrap items-center">
             <div className="container w-full bg-gray-50 md:w-1/2">
               <div className="mx-5 lg:mx-20">
                 <Link href="#_" className="flex items-center w-48 mt-32 mb-4 font-bold text-gray-700 title-font md:mb-0 lg:mt-16">
                   <div className="px-4 rounded-full bg-blue-100">
                   Launching Too soon
                   </div>
                
                 </Link>
                 <div className="flex mt-4 font-light text-gray-500">
                   <div className="pr-4">
                     <h1 className="mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
                     Lorem Ipsum is simply
                     </h1>
                   </div>
                 </div>
                 <div className="w-full mt-8 text-base font-medium text-gray-700  mb-8 leading-relaxed">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </div>
                 <div className="flex mt-12">
                 <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                       Try It Free
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                     </a>
                 </div>
               </div>
             </div>
             <div className="hidden w-full bg-center bg-cover md:w-1/2 lg:block">
               <img src="https://dummyimage.com/1000x1000/F3F4F7/8693ac" className="object-fill w-full h-screen" alt="" />
             </div>
           </section>`,


      code5: ` <section className="px-2 py-32 bg-gray-50 md:px-0">
             <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
               <div className="flex flex-wrap items-center sm:-mx-3">
                 <div className="w-full md:w-1/2 md:px-3">
                   <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                     <h1 className="text-4xl font-bold tracking-tighter text-left text-gray-900 lg:text-5xl title-font">
                       <span className="block xl:inline">Lorem ipsum dol </span>
                       <span className="block text-blue-700 xl:inline">Lorem ipsum dolor</span>
                     </h1>
                     <p className="mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                     <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                       <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                         Try It Free
                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                       </a>
                       <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                         Learn More
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="w-full md:w-1/2">
                   <div className="w-full h-auto overflow-hidden rounded-md border sm:rounded-xl">
                     <img src="https://dummyimage.com/720x400/F3F4F7/8693ac" alt="" />
                   </div>
                 </div>
               </div>
             </div>
           </section>`,


      code4: `                        <section className="text-gray-800 body-font px-2 font-bold">
             <div className="container flex flex-col items-center px-5 py-8 mx-auto md:flex-row lg:px-8 rounded-md">
               <div className="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 ">
             
                 <h1 className="mb-8 text-4xl font-bold tracking-tighter text-left text-gray-900 lg:text-5xl title-font">
                 Lorem ipsum dolor sit amet
                 </h1>
                 <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
                   <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0 ">
                
                     <div className="flex-grow ">
                       <h2 className="mb-3 text-lg font-bold tracking-tighter text-gray-900 title-font">
                         Lorem Ipsum
                       </h2>
                       <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       </p>
                       <a href="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                         Learn More
                         <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                           <path fill="none" d="M0 0h24v24H0z" />
                           <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                         </svg>
                       </a>
                     </div>
                   </div>
                   <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0 ">
                    
                     <div className="flex-grow">
                       <h2 className="mb-3 text-lg font-bold tracking-tighter text-gray-900 title-font ">
                       Lorem Ipsum
                       </h2>
                       <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                       <a href="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                         Learn More
                         <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                           <path fill="none" d="M0 0h24v24H0z" />
                           <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                         </svg>
                       </a>
                     </div>
                   </div>
                   <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0 ">
                
                <div className="flex-grow ">
                  <h2 className="mb-3 text-lg font-bold tracking-tighter text-gray-900 title-font">
                  Lorem Ipsum
                       </h2>
                       <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  
                  <a href="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                    Learn More
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0 ">
               
                <div className="flex-grow">
                  <h2 className="mb-3 text-lg font-bold tracking-tighter text-gray-900 title-font">
                  Lorem Ipsum
                       </h2>
                       <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <a href="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                    Learn More
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </a>
                </div>
              </div>
     
                 </div>
               </div>
               <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                 <img className="object-cover object-center rounded-lg border " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
               </div>
             </div>
           </section>`,


      code3: ` <section>
             <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div className="w-full md:w-1/2">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold tracking-tighter text-left text-gray-900 lg:text-5xl title-font">Lorem ipsum dolor sit amet, consectetur</h1>
          <p className="mt-2 text-gray-900 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
            <div className="flex items-center space-x-6 text-blue-700 dark:text-gray-200">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium selection</span>
            </div>
            <div className="flex items-center space-x-6 text-blue-700 dark:text-gray-200">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium selection</span>
            </div>
            <div className="flex items-center space-x-6 text-blue-700 dark:text-gray-200">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium selection</span>
            </div>
            <div className="flex items-center space-x-6 text-blue-700 dark:text-gray-200">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium selection</span>
            </div>
            <div className="flex items-center space-x-6 text-blue-700 dark:text-gray-200">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium selection</span>
            </div>
            <div className="flex items-center space-x-6 text-blue-700 dark:text-gray-200">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium selection</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        <img className="object-cover border w-full h-full max-w-2xl rounded-md" src="https://dummyimage.com/620x360/F3F4F7/8693ac" alt=""/>
      </div>
    </div>
                 </section> `,


      code2: `  <section>
             <div className="container px-6 py-16 mx-auto">
       <div className="items-center md:flex">
         <div className="w-full md:w-1/2">
           <div className="max-w-lg">
           <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
       <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
         <span className="block">Design Your <span className="block mt-1 text-blue-800 lg:inline lg:mt-0">Beautiful Web</span></span>
       </h1>
       <p className="w-full mx-auto text-base text-left text-gray-800 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
       </p>
       <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
         <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 md:mb-0 hover:bg-blue-700 md:w-auto rounded-full">
           Try It Free
           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
             <line x1={5} y1={12} x2={19} y2={12} />
             <polyline points="12 5 19 12 12 19" />
           </svg>
         </a>
         <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 rounded-full">
           Learn More
         </a>
       </div>
     </div>
    
           </div>
         </div>
         <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
           <img className="w-full h-full max-w-2xl border" src="https://dummyimage.com/620x360/F3F4F7/8693ac" alt="" />
         </div>
       </div>
     </div>
             </section>`,



      code1: `  <section className="text-gray-800 body-font">
             <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-8">
               <div className="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 ">
                 <h2 className="mb-2 text-xs font-bold text-gray-100 title-font">
                   <span className="px-4 py-2 bg-gray-800 rounded-full">We are hiring now</span>
                   </h2>
                 <h1 className="mb-8 mt-4 text-4xl font-bold tracking-tighter text-left text-gray-900 lg:text-5xl title-font">
                 Lorem ipsum dolor sit amet consectetur
                 </h1>
                 <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                   <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                     <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(237, 60, 60, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                     </div>
                     <div className="flex-grow">
                       <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                       Lorem ipsum 
                       </h2>
                       <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
                       </p>
                       <Link to="#_" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                         Learn More
                         <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                           <path fill="none" d="M0 0h24v24H0z" />
                           <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                         </svg>
                         </Link> 
                     </div>
                   </div>
                   <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                     <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(237, 60, 60, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                     </div>
                     <div className="flex-grow">
                       <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                       Lorem ipsum</h2>
                       <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                       <a href="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                         Learn More
                         <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                           <path fill="none" d="M0 0h24v24H0z" />
                           <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                         </svg>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                 <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
               </div>
             </div>
           </section> `,


    }
  }




  render() {
    return (
      <div>
<All />
        <CodeCard>
          <HeroS2 />
        </CodeCard>
        <CodeCard>
          <HeroS1 />
        </CodeCard>

        <CodeCard>
          <HeroR1 />
        </CodeCard>

        <CodeCard code={this.state.code10}>
          <HeroL10 />
        </CodeCard>

        <CodeCard code={this.state.code9}>
          <HeroL9 />
        </CodeCard>
        <CodeCard code={this.state.code8}>
          <HeroL8 />
        </CodeCard>
        <CodeCard code={this.state.code7}>
          <HeroL7 />
        </CodeCard>
        <CodeCard code={this.state.code6}>
          <HeroL6 />
        </CodeCard>
        <CodeCard code={this.state.code5}>
          <HeroL5 />
        </CodeCard>
        <CodeCard code={this.state.code2}>
          <HeroL2 />
        </CodeCard>
        <CodeCard code={this.state.code4}>
          <HeroL4 />
        </CodeCard>
        <CodeCard code={this.state.code3}>
          <HeroL3 />
        </CodeCard>

        <CodeCard code={this.state.code1}>
          <HeroL1 />
        </CodeCard>

        <CodeCard>
          <HeroC4 />
        </CodeCard>
        <CodeCard>
          <HeroC3 />
        </CodeCard>           <CodeCard>
          <HeroC2 />
        </CodeCard>
        <CodeCard>
          <HeroC1 />
        </CodeCard>

      </div>
    )
  }
}

export default Hero
