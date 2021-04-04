import React from 'react'

const Timelineitem=({data})=>(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className='tag' style={{background: data.category.color}}>
               {data.category.tag}
            </span>
            <h2 className='position'>{data.text}</h2>
            <time className='time'>{data.time}</time>
            <p>{data.description}</p>
            {data.link && (
                <a className='linking' href={data.link.url} target='_blank' rel='noopener noreferrer'>
                    {data.link.text}
                </a>
            )}
            <span className='circle'></span>
        </div>
    </div>
);

export default Timelineitem