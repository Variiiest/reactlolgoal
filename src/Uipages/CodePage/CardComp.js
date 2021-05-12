import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {CardTemp} from '../../components/Achrome/Data'
import '../../components/Achrome/Achrome.css'

export class CardComp extends Component {
  render() {
    return (
      <div>
 <div className="font-opensans">

<All />

{CardTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
       
      </div>
    )
  }
}

export default CardComp
