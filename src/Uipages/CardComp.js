import React, { Component } from 'react'
import Card1 from '../uicomp1/Cards/Card1'
import Card16 from '../uicomp1/Cards/Card16'
import Card2 from '../uicomp1/Cards/Card2'
import Card3 from '../uicomp1/Cards/Card3'
import Card4 from '../uicomp1/Cards/Card4'
import Card5 from '../uicomp1/Cards/Card5'
import Card6 from '../uicomp1/Cards/Card6'
import CodeCard from '../uicomp1/CodeCard'

export class CardComp extends Component {
    render() {
        return (
            <div>
                  
                  <CodeCard>
          <Card16/>
        </CodeCard>
               
                
             
           

                                      <CodeCard>
          <Card6/>
        </CodeCard>
                                 <CodeCard>
          <Card5/>
        </CodeCard>
                            <CodeCard>
          <Card4/>
        </CodeCard>
                        <CodeCard>
          <Card3/>
        </CodeCard>
                   <CodeCard>
          <Card2/>
        </CodeCard>
                 <CodeCard>
          <Card1/>
        </CodeCard>
            </div>
        )
    }
}

export default CardComp
