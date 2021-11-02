import React from 'react' 

import './hero.styles.scss'

import Type from './type'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
                <div className='heading'>Hi! My name is Jayden Shaw.</div>
            <div className='text'>
                <span className='about-me'>I'm <Type /></span><br/>
                I'm passionate about building responsive, accessible user interfaces.<br />
            </div>
            <div className='buttons'>
                <a href='#projects' className='button'>Projects</a>
                <a href='#skills' className='button'>Skills</a>
                <a href='#experience' className='button'>Experience</a>
            </div>
        </div>
    )
}

export default Hero