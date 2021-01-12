import React from 'react' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <h2 className='contact' id='contact'>Get In Touch!</h2>
            <a href='mailto:jayden.shaw@gmail.com' className='icon'>
                <FontAwesomeIcon icon={['far', 'envelope']} />
            </a>
            <a href='https://github.com/jshaw990' className='icon'>
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href='https://www.linkedin.com/in/jayden-shaw' className='icon'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
        </div>
    )
}

export default Footer