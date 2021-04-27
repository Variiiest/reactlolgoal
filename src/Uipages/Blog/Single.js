import React, { Component } from 'react'
import Blog5 from '../../uicomp1/Blog/Blog5'
import Blog6 from '../../uicomp1/Blog/Blog6'
import Blog7 from '../../uicomp1/Blog/Blog7'
import CodeCard from '../../uicomp1/CodeCard'

export class Single extends Component {
    render() {
        return (
            <div>
                     <CodeCard>
                    <Blog7/>

                </CodeCard>
<CodeCard>
                    <Blog6/>

                </CodeCard>
<CodeCard>
                    <Blog5/>

                </CodeCard>
            </div>
        )
    }
}

export default Single
