import React, { Component } from 'react'
import CodeCard from '../uicomp1/CodeCard'
import HeroC1 from '../uicomp1/HeroCenter/HeroC1'
import HeroC2 from '../uicomp1/HeroCenter/HeroC2'
import HeroC3 from '../uicomp1/HeroCenter/HeroC3'
import HeroC4 from '../uicomp1/HeroCenter/HeroC4'

export class HeroCenter extends Component {
    render() {
        return (
            <div>

                                    <CodeCard>
<HeroC4/>
                </CodeCard>        
                     <CodeCard>
<HeroC3/>
                </CodeCard>           <CodeCard>
<HeroC2/>
                </CodeCard>
                <CodeCard>
<HeroC1/>
                </CodeCard>
            </div>
        )
    }
}

export default HeroCenter
