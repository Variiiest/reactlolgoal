import React, { Component } from 'react'
import CodeCard from '../uicomp1/CodeCard'
import HeroL1 from '../uicomp1/HeroLeft/HeroL1'
import HeroL2 from '../uicomp1/HeroLeft/HeroL2'
import HeroL3 from '../uicomp1/HeroLeft/HeroL3'
import HeroL4 from '../uicomp1/HeroLeft/HeroL4'
import HeroL5 from '../uicomp1/HeroLeft/HeroL5'

export class heroleft extends Component {
    render() {
        return (
            <div>

<CodeCard>
<HeroL5/>
                </CodeCard>
                <CodeCard>
<HeroL2/>
                </CodeCard>
<CodeCard>
<HeroL4/>
                </CodeCard>
<CodeCard>
<HeroL3/>
                </CodeCard>

                <CodeCard>
<HeroL1/>
                </CodeCard>
            </div>
        )
    }
}

export default heroleft
