import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {HeroTemp} from '../../components/Achrome/Data'


import '../../components/Achrome/Achrome.css'

export class Hero extends Component {
  

  render() {
    return (
      <div className="font-opensans">
<All />
       
{HeroTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default Hero
