import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'

import {FeatureComp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'

export class Feature extends Component {
    render() {
        return (
            <div>
{FeatureComp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

            </div>
        )
    }
}

export default Feature
