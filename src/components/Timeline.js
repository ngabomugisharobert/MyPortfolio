import React from 'react'
import timelinedata from '../Data'
import Timelineitem from './Timelineitem'

const Timeline = () => timelinedata.length > 0 && (

    <>

    <main>
      <section className="glass">
        <div className="exp">
            <h1>Experience</h1>

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