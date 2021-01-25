import React from 'react'
import timelinedata from '../Data'
import Timelineitem from './Timelineitem'
import './Timeline.css'

const Timeline = () => timelinedata.length > 0 && (

    <>

    <main>
      <section className="glass">
        <div className="skills">
            <h1>Skills</h1>

    <div className='timeline-container'>
        {timelinedata.map((data, idx) => (
            <Timelineitem data={data} key={idx}/>
        ))}
    </div></div>
      </section>
    </main>
    <div className="circle1"></div>
    <div className="circle2"></div>

        </>
)



export default Timeline