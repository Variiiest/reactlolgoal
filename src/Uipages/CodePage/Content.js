import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {ContentTemp} from '../../components/Achrome/Data'
import '../../components/Achrome/Achrome.css'


export class Content extends Component {
    render() {
        return (
            <div className="font-opensans">

<All />

{ContentTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
        )
    }
}

export default Content
