import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import {AuthTemp} from '../../components/Templates/Achrome/Authentication'
import '../../components/Templates/Achrome/Achrome.css'


export class Auth extends Component {

  render() {
    return (
      <div className="font-opensans bg-gradient-to-b from gray-200 to-white">

{AuthTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default Auth
