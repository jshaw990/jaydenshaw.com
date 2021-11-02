import React from 'react' 
import { useDispatch } from 'react-redux'

import './header.styles.scss'

import { toggleIsOpen } from '../../redux/contactSlice'

const Header = () => {
    const dispatch = useDispatch() 

    return (
        <div className='header'>
            <h1 className='title'><a href='#hero'>Jayden Shaw</a></h1>
            <div className='nav'>
                <a href='#projects'>Projects</a>
                <a href='#skills'>Skills</a>
                <a href='#experience'>Experience</a>
                <a href='#contact'>Contact</a>
                <span onClick={() => dispatch(toggleIsOpen())}>Resume</span>
            </div>
        </div>
    )
}

export default Header