import React from 'react' 

import './header.scss'

function Header() {
    return (
        <div className='header'>
            <div className='title'>Jayden Shaw</div>
            <div className='nav'>
                <a href='#contact'>Skills</a>
                <a href='#contact'>Projects</a>
                <a href='#contact'>Experience</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}

export default Header