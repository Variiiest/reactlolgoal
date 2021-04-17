import React, { Component } from 'react'
import CodeCard from '../uicomp1/CodeCard'
import HeroS1 from '../uicomp1/HeroSpecial/HeroS1'
import HeroS2 from '../uicomp1/HeroSpecial/HeroS2'

export class HeroSpe extends Component {
    render() {
        return (
            <div>
                  <CodeCard>
                    <HeroS2/>
                </CodeCard>
                <CodeCard>
                    <HeroS1/>
                </CodeCard>

            </div>
        )
    }
}

export default HeroSpe
