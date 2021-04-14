import React, { Component } from 'react'
import FrontendBanner from '../../components/FrontendBanner'

export class FrontendProjects extends Component {
    render() {
        return (
            <div>
                <FrontendBanner industry="All Purpose" link='/frontendsys/allpurpose'/>
                 <FrontendBanner industry="Automative"/>
                 <FrontendBanner industry="Finance"/>
                 <FrontendBanner industry="Education"/>
                 <FrontendBanner industry="Food and Beverages"/>
                 <FrontendBanner industry="HealthCare"/>
                 <FrontendBanner industry="Technology"/>
                 <FrontendBanner industry="Travelling"/>
                 <FrontendBanner industry="Goverment"/>
                 <FrontendBanner industry="Entertainment"/>
                 <FrontendBanner industry="Real State"/>


            </div>
        )
    }
}

export default FrontendProjects
