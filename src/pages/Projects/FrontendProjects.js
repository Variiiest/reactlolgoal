import React, { Component } from 'react'
import FrontendBanner from '../../components/FrontendBanner'

export class FrontendProjects extends Component {
    render() {
        return (
            <div>
                 <FrontendBanner industry="Automative" isRed='true'/>
                 <FrontendBanner/>
                 <FrontendBanner/>
            </div>
        )
    }
}

export default FrontendProjects
