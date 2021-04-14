import React, { Component } from 'react'
import ProjectBanner from '../../components/ProjectBanner'

export class DesignProjects extends Component {
    render() {
        return (  
            <div>
                <ProjectBanner headline="Colors" project="Color Pallete for Website Industry Wise" about="Industrial Building of website trust depend upon colors." link="/color/palletes"/>
                <ProjectBanner headline="Components" project="Tailwind React Components (Speedy Design)" about="Industrial Building of website trust depend upon designs." link="/components/tailwind"/>
                <ProjectBanner headline="Design System" project="Tailwind Design System (Speedy Design)" about="Industrial Building of website trust depend upon designs." link="/system/tailwind"/>
            </div>
        )
    }
}

export default DesignProjects
