import React, { Component } from 'react'
import Auth10 from '../../uicomp1/Authentication/Auth10'
import Auth11 from '../../uicomp1/Authentication/Auth11'

import CodeCard from '../../uicomp1/CodeCard'

export default class Authentication extends Component {
    render() {
        return (
            <div>
                <CodeCard>
                    <Auth11 />
                </CodeCard>
                <CodeCard>
                    <Auth10 />
                </CodeCard>
                
               
              
             
           

            </div>
        )
    }
}
