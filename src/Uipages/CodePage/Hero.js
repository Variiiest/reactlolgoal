import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import {HeroTemp} from '../../components/Templates/Achrome/Data'


import '../../components/Templates/Achrome/Achrome.css'

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
