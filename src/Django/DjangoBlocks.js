import React, { Component } from 'react'
import DjangoCard from './DjangoCard'





export class DjangoBlocks extends Component {
    render() {
        return (
            <div>
<DjangoCard name="Hero" first="Left Hero (10)" firstl="comp/lefthero" second="Right Hero (10)" secondl="comp/righthero" third="Centered (10)" thirdl="comp/centeredhero" fourth="Special (10)" fourthl="comp/specialhero"/>
<DjangoCard/>



      </div>
        )
    }
}

export default DjangoBlocks
