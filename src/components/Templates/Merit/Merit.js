import React from 'react'
import {MeritData} from './MeritData'
import CodeCard from '../../../uicomp1/CodeCard'
import '../Denim/Denim.css'
import Menubar from './MenuBar'
import { useParams } from "react-router";
function findtempByname(name) {
  return MeritData.find(o => o.name === name);
}



export default function Merit() {

    var { name } = useParams(),
    post = findtempByname(name);
        return (
            <div>

                <Menubar/>

      <CodeCard code={post.code} id={post.id}/>
                
            </div>
        )
    }
