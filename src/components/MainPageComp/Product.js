import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import HeroS1 from '../../uicomp1/HeroSpecial/HeroS1'

export class Product extends Component {
constructor(props) {
    super(props)

    this.state = {
         code:`             <div className="pt-4 mx-auto bg-gradient-to-r from-purple-200 via-pink-200 to-red-500">
         <div className="flex flex-col md:flex-row">
           <div className="md:w-1/2 max-w-full px-8 flex flex-col justify-center">
             <div className="md:text-7xl text-4xl">Awesome tool for your future team</div>
             <div className="md:text-2xl text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
             <div className="my-5 h-16">
               <div className="shadow-md font-bold py-2 px-4 hover:text-blue-100
              cursor-pointer text-gray-900 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-50 rounded text-lg text-center w-48">Join us now</div>
             </div>
           </div>
           <div className="flex md:justify-end  w-full md:w-1/2 -mt-4">
             <div className="">
               <div className="shadow-2xl max-w-md z-10">
                 <img alt="card img" className="" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/> 
                 <div className="text-2xl p-10 text-gray-100 bg-gradient-to-r from-purple-500 to-red-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
               </div>
             </div>
           </div>
         </div>
       </div>`
    }
}


    render() {
        return (
            <div>
              <section className="text-gray-800 body-font font-bold bg3 bghero -mt-32 sm:px-12">
       <div className="mx-auto p-4">
      <CodeCard code={this.state.code}>
                     <HeroS1/>
                    </CodeCard>
                    </div>
                    </section>
                
            </div>
        )
    }
}

export default Product
