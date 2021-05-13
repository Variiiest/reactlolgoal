import React, { Component } from 'react'
import {MeritData} from './MeritData'
import CodeCard from '../../../uicomp1/CodeCard'
import '../Denim/Denim.css'

export class Merit extends Component {
    render() {
        return (
            <div>

                
{MeritData.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

      
                
            </div>
        )
    }
}

export default Merit
