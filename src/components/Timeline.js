import React from 'react'
import timelinedata from '../Data'
import Timelineitem from './Timelineitem'
import './Timeline.css'

const Timeline = () => timelinedata.length > 0 && (
    <div className='timeline-container'>
        {timelinedata.map((data, idx) => (
            <Timelineitem data={data} key={idx}/>
        ))}
    </div>
)



export default Timeline