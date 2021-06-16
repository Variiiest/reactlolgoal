import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'

import {Contacttemp} from '../../Boiled/Data'

export class Contact extends Component {

    render() {





        return (
            <div className="font-opensans">

            
            {Contacttemp.map((data,key)=>
                  <CodeCard code={data.code} id={data.id}/>
            )}
            
              
                  </div>
        )
    }
}

export default Contact
