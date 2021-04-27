import React, { Component } from 'react'
import Blog10 from '../../uicomp1/Blog/Blog10'
import Blog11 from '../../uicomp1/Blog/Blog11'
import Blog12 from '../../uicomp1/Blog/Blog12'

import CodeCard from '../../uicomp1/CodeCard'

export class Special extends Component {
    render() {
        return (
            <div>
                       
                       <CodeCard>
                    <Blog12/>

                </CodeCard>



<CodeCard>
                    <Blog10/>

                </CodeCard>

<CodeCard>
                    <Blog11/>

                </CodeCard>    
            </div>
        )
    }
}

export default Special
