import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'

import {CTAComp} from '../../components/Templates/Achrome/CTAComp'
import '../../components/Templates/Achrome/Achrome.css'

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
