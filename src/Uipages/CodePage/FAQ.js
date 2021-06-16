import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'

import {FaqTemp} from '../../Boiled/Data'

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
