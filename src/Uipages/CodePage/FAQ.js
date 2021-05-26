import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'

import {FaqTemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'

export class FAQ extends Component {
    render() {
        return (
            <div className="font-opensans">

            
            {FaqTemp.map((data,key)=>
                  <CodeCard code={data.code} id={data.id}/>
            )}
            
              
                  </div>
        )
    }
}

export default FAQ
