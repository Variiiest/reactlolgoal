import React, { Component } from 'react'
import Tailcompcard from '../uicomp1/Tailcompcard'




export class DjangoBlocks extends Component {
    render() {
        return (
            <div>
<Tailcompcard name="Hero" first="Left Hero (10)" firstl="comp/lefthero" second="Right Hero (10)" secondl="comp/righthero" third="Centered (10)" thirdl="comp/centeredhero" fourth="Special (10)" fourthl="comp/specialhero"/>
<Tailcompcard/>
<Tailcompcard/>
<Tailcompcard/>
<Tailcompcard/>
<Tailcompcard/>


      </div>
        )
    }
}

export default DjangoBlocks
