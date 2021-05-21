import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import {ContentTemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'


export class Content extends Component {
    render() {
        return (
            <div className="font-opensans">


{ContentTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
        )
    }
}

export default Content
