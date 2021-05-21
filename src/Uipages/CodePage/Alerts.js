import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import {AlertData} from '../../components/Templates/Achrome/Alerts'
import '../../components/Templates/Achrome/Achrome.css'


export class Alerts extends Component {

  render() {
    return (
      <div className="font-opensans bg-gradient-to-b from gray-200 to-white">

{AlertData.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default Alerts
