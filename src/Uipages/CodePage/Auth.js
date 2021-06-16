import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {AuthTemp} from '../../Boiled/Authentication'


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
