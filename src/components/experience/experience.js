import React from 'react'

import './experience.scss'

function Experience() {
    return (
        <div className='experience' id='experience'>
            <h2>Experience</h2>
            <div className='work-experience'>
            <div className='section'>
                <div className='role'>Web Developer</div>
                <div className='employer'>Stride Management Corp.</div>
                <div className='dates'>February 2021 - Present</div>
                <ul className='responsibilities'>
                        <li>Design, develop, and deploy responsive web applications to support lottery client projects.</li>
                        <li>Optimize applications for speed and efficiency to maximize client’s return on investment.</li>
                        <li>Offer creative solutions to address the needs of clients.</li>
                        <li>Effectively communicate concepts and theories to creative team, select staff, and clients.</li>
                        <li>Perform user flow analysis to improve the conversion rate on lottery client projects.</li>
                        <li>Ensure best practices are maintained throughout project lifecycle.</li>
                </ul>
            </div>
            <div className='section'>
                <div className='role'>Web Developer/Google Ads Manager</div>
                <div className='employer'>All In One Digital Ltd.</div>
                <div className='dates'>May 2019 - May 2020</div>
                <ul className='responsibilities'>
                        <li>Designed, developed, and deployed responsive web apps for clients of various industries.</li>
                        <li>Designed and implemented website layout strategies to align client goals and values.</li>
                        <li>Developed, launched, and monitored PPC Campaigns.</li>
                        <li>Tracked and analyzed key performance indicators of ad campaigns.</li>
                        <li>Set specific objectives and reported on ROI and other website analytics and metrics</li>
                        <li>Improved clients search engine optimization enhancing brand awareness</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Experience