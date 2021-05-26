import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {CardTemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'

export class CardComp extends Component {
  render() {
    return (
      <div>
 <div className="font-opensans">


{CardTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
       
      </div>
    )
  }
}

export default CardComp
