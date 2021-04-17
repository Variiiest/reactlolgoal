import React, { Component } from 'react'
import CodeCard from '../uicomp1/CodeCard'
import HeroR1 from '../uicomp1/HeroRight/HeroR1'

export class HeroRight extends Component {
    render() {
        return (
            <div>
                <CodeCard>
                    <HeroR1/>
                    </CodeCard>
            </div>
        )
    }
}

export default HeroRight
