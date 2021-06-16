import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {HeroTemp} from '../../Boiled/Data'


export class Hero extends Component {
  

  render() {
    return (
      <div className="font-opensans">
       
{HeroTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default Hero
