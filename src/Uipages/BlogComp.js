import React, { Component } from 'react'
import Blog1 from '../uicomp1/Blog/Blog1'
import Blog2 from '../uicomp1/Blog/Blog2'
import Blog3 from '../uicomp1/Blog/Blog3'
import Blog4 from '../uicomp1/Blog/Blog4'
import Blog5 from '../uicomp1/Blog/Blog5'
import Blog6 from '../uicomp1/Blog/Blog6'
import Blog7 from '../uicomp1/Blog/Blog7'
import Blog8 from '../uicomp1/Blog/Blog8'
import CodeCard from '../uicomp1/CodeCard'

export class BlogComp extends Component {
    render() {
        return (
            <div>
                    <CodeCard>
                    <Blog8/>

                </CodeCard>
                <CodeCard>
                    <Blog7/>

                </CodeCard>
<CodeCard>
                    <Blog6/>

                </CodeCard>
<CodeCard>
                    <Blog5/>

                </CodeCard>

<CodeCard>
                    <Blog4/>

                </CodeCard>

<CodeCard>
                    <Blog3 />

                </CodeCard>
                <CodeCard>
                    <Blog2 />

                </CodeCard>
                <CodeCard>
                    <Blog1 />

                </CodeCard>
            </div>
        )
    }
}

export default BlogComp
