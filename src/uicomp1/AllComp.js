import React, { Component } from 'react'
import Tailcompcard from './Tailcompcard'
import image1 from './images/1.JPG'
import image2 from './images/4.JPG'
import image3 from './images/2.JPG'
import image4 from './images/3.JPG'

export class AllComp extends Component {
    render() {
        return (
            <div>
<Tailcompcard name="Hero" image1={image1} image2={image2} image3={image3} image4={image4} first="Left Hero" firstl="comp/lefthero" second="Right Hero" secondl="comp/righthero" third="Centered" thirdl="comp/centeredhero" fourth="Special" fourthl="comp/specialhero"/>

<Tailcompcard name="Authentication" image1={image1} image2={image3} image3={image3} image4={image4} first="Left" firstl="comp/authleft" second="Right" secondl="comp/authright" third="Centered " thirdl="comp/centerauth" fourth="Special " fourthl="comp/specialauth"/>



      </div>
        )
    }
}

export default AllComp
