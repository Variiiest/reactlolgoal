import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import {FooterTemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'

export class Footers extends Component {
    render() {
        return (
            <div>
             
             
{FooterTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

            </div>
        )
    }
}

export default Footers
