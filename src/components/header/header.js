import React from 'react' 

import './header.scss'

import PDF from '../../assets/Jayden_Shaw_Resume.pdf'

function Header() {
    return (
        <div className='header'>
            <h1 className='title'><a href='/'>Jayden Shaw</a></h1>
            <div className='nav'>
                <a href='#projects'>Projects</a>
                <a href='#skills'>Skills</a>
                <a href='#experience'>Experience</a>
                <a href='#contact'>Contact</a>
                <a href={PDF} target='_blank' download rel='noreferrer'>Resume</a>
            </div>
        </div>
    )
}

export default Header