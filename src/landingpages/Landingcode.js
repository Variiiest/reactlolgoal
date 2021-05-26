import React from 'react'
import {LandingData} from './LandingData'

import { useParams } from "react-router";
import AccessAlert from '../components/MainPageComp/AccessAlert';
function findtempByname(slug) {
  return LandingData.find(o => o.slug === slug);
}



export default function LandingCode() {

    var { slug } = useParams(),
    post = findtempByname(slug);
        return (
            <div className="font-opensans">
                <AccessAlert/>
               <post.component/>
                
            </div>
        )
    }