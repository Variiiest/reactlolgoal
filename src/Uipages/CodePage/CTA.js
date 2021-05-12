import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {CtaTemp} from '../../components/Achrome/Data'
import '../../components/Achrome/Achrome.css'

export class CTA extends Component {
    render() {
        return (
            <div className="font-opensans">

<All />

{CtaTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
        )
    }
}

export default CTA
