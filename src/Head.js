import React from 'react'
import "./Head.css"
import dev from './dev.svg'
function Head() {
    return (
        <div className="head">
        <div className="icon">
            <img src={dev}/>
        </div>
            <div className="menu">
                <h4>Home</h4>
                <h4>Experience</h4>
                <h4>Skills</h4>
                <h4>Tools</h4>
                <h4>Hobby Project</h4>
            </div>
        </div>
    )
}

export default Head
