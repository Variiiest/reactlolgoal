import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import {Button} from '../../components/Templates/Achrome/Buttons'
import '../../components/Templates/Achrome/Achrome.css'


export class Buttons extends Component {

  render() {
    return (
      <div className="font-opensans bg-gradient-to-b from gray-200 to-white">

{Button.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default Buttons
