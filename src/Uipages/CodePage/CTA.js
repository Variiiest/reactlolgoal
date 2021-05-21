import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'

import {CtaTemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'

export class CTA extends Component {
    render() {
        return (
            <div className="font-opensans">

{CtaTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
        )
    }
}

export default CTA
