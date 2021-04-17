import React, { Component } from 'react'
import CodeCard from '../uicomp1/CodeCard'
import HeroS1 from '../uicomp1/HeroSpecial/HeroS1'

export class HeroSpe extends Component {
    render() {
        return (
            <div>
                <CodeCard>
                    <HeroS1/>
                </CodeCard>

            </div>
        )
    }
}

export default HeroSpe
