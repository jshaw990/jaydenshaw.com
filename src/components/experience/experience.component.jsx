import React from 'react'

import './experience.styles.scss'

import experienceList from '../../assets/experienceList'

const Experience = () => {
    return (
        <div className='experience' id='experience'>
            <h2>Experience</h2>
            <div className='work-experience'>
                {experienceList.map((data, key) => {
                    return (
                        <div key={key} className='section'>
                            <div className='role'>{data.role}</div>
                            <div className='employer'>{data.employer}</div>
                            <div className='dates'>{data.start_date} - {data.end_date}</div>
                            <ul className='responsibilities'>
                                {data.responsibilities.map((data, key) => 
                                    <li key={key}>{data}</li>
                                )}
                            </ul>
                        </div>
                    )
                })}
            </div>            
        </div>
    )
}

export default Experience