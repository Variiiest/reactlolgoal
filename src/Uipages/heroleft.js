import React, { Component } from 'react'
import CodeCard from '../uicomp1/CodeCard'
import HeroL1 from '../uicomp1/HeroLeft/HeroL1'
import HeroL10 from '../uicomp1/HeroLeft/HeroL10'
import HeroL2 from '../uicomp1/HeroLeft/HeroL2'
import HeroL3 from '../uicomp1/HeroLeft/HeroL3'
import HeroL4 from '../uicomp1/HeroLeft/HeroL4'
import HeroL5 from '../uicomp1/HeroLeft/HeroL5'
import HeroL6 from '../uicomp1/HeroLeft/HeroL6'
import HeroL7 from '../uicomp1/HeroLeft/HeroL7'
import HeroL8 from '../uicomp1/HeroLeft/HeroL8'
import HeroL9 from '../uicomp1/HeroLeft/HeroL9'

export class heroleft extends Component {
constructor(props) {
    super(props)

    this.state = {
         code10:`       <section className="text-gray-800 body-font">
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


         code2:``,
         code3:``,
         code4:``,


    }
}




    render() {
        return (
            <div>


<CodeCard code={this.state.code10}>
<HeroL10/>
                </CodeCard>

<CodeCard>
<HeroL9/>
                </CodeCard>
<CodeCard>
<HeroL8/>
                </CodeCard>
<CodeCard>
<HeroL7/>
                </CodeCard>
<CodeCard>
<HeroL6/>
                </CodeCard>
<CodeCard>
<HeroL5/>
                </CodeCard>
                <CodeCard>
<HeroL2/>
                </CodeCard>
<CodeCard>
<HeroL4/>
                </CodeCard>
<CodeCard>
<HeroL3/>
                </CodeCard>

                <CodeCard>
<HeroL1/>
                </CodeCard>
            </div>
        )
    }
}

export default heroleft
