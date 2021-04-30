import React, { Component } from 'react'
import Highlight from 'react-highlight'
export class Blog7 extends Component {


constructor(props) {
  super(props)

  this.state = {
     code:`import React, { Component } from 'react'

     export class Bllog5 extends Component {
         render() {
             return (
                 <section className="text-gray-600 body-font text-base">
                 <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                     <div className="flex justify-center">
                     <a href="#_" className="flex items-center border border-blue-500 text-blue-500 rounded-md font-bold py-4 px-6 mr-2 hover:bg-blue-500 hover:text-white">
               previous
             </a>
             <a href="#_" className="flex items-center transition-colors duration-200 transform border border-blue-500 text-blue-500 rounded-md font-bold py-4 px-6 mr-2 flex  hover:bg-blue-500 hover:text-white">
               1
             </a>
             <a href="#_" className="flex items-center transition-colors duration-200 transform border border-blue-500 text-blue-500 rounded-md font-bold py-4 px-6 mr-2 hover:bg-blue-500 hover:text-white">
               2
             </a>
             <a href="#_" className="flex items-center transition-colors duration-200 transform border border-blue-500 text-blue-500 rounded-md font-bold py-4 px-6 mr-2 hover:bg-blue-500 hover:text-white">
               3
             </a>
             <a href="#_" className="flex items-center transition-colors duration-200 transform border border-blue-500 bg-blue-500 text-white block rounded-md font-bold py-4 px-6 ml-2">
               Next
             </a>
                     </div>
                   </div>
               </section>
             )
         }
     }
     
     export default Bllog5
     `
  }
}


    render() {
        return (
            <div>
                 <main className="py-12">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: '24em'}}>
          <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))'}} />
          <img alt="" src="https://source.unsplash.com/random" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a href="#_" className="px-4 py-1 bg-blue-800 text-gray-200 inline-flex items-center justify-center mb-2">Category</a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
             
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <div className="flex mt-3">
              <img alt="" src="https://randomuser.me/api/portraits/men/7.jpg" className="h-10 w-10 rounded-full mr-2 object-cover border-2 border-green-700" />
              <div>
                <p className="font-semibold text-gray-200 text-sm">Aditya</p>
                <p className="font-semibold text-gray-300 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="border-l-4 border-green-800 pl-4 mb-6 italic rounded">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <Highlight language="js" className="overflow-y-scroll scroll-hidden overflow-auto ">
            {this.state.code}
      </Highlight>
        </div>
      </main>
            </div>
        )
    }
}

export default Blog7
