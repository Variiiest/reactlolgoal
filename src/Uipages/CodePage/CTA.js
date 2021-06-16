import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'

import {CTAComp} from '../../Boiled/CTAComp'
export default class CTA extends Component {
    render() {
        return (
            <div className="font-opensans">

{CTAComp.map((data,key)=>
    
      <CodeCard code={data.code} id={data.id}/>

)}

  
      </div>
        )
    }
}
