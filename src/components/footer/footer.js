import React from 'react' 

import './footer.scss'

import github from '../../assets/icons/github-rev-icon.svg'
import mail from '../../assets/icons/email-rev-icon.svg'
import linkedin from '../../assets/icons/linkedin-rev-icon.svg'

function Footer() {
    return (
        <div className='footer'>
            <h2 className='contact' id='contact'>Get In Touch!</h2>
            <a href='mailto:jayden.shaw@gmail.com' className='icon'>
                <img src={mail} className='icon' alt='mail'/>
            </a>
            <a href='https://github.com/jshaw990' target='_blank' className='icon' rel='noreferrer'>
                <img src={github} className='icon' alt='github'/>
            </a>
            <a href='https://www.linkedin.com/in/jayden-shaw' target='_blank' className='icon' rel='noreferrer'>
                <img src={linkedin} className='icon' alt='linkedin'/>
            </a>
        </div>
    )
}

export default Footer