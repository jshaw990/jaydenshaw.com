import React from 'react' 
import Typewriter from 'typewriter-effect' 

function Type() {
    return (
        <Typewriter 
            options={{
                strings: [
                    'a Full-Stack Developer',
                    'a Front-End Engineer',
                    'a MERN Stack Developer',
                    'a UI/UX Expert',
                    'a Data Analyst', 
                    'a WordPress Guru',
                    'an Entrepreneur',
                    'always learning!',
                    'a Problem Solver',
                    'a Critical Thinker',
                    'Passionate',
                    'a Nerd 🤓'
                ],
                autoStart: true,
                loop: true,
                cursor: '_',
                pauseFor: 2000
            }}
        />
    )
}

export default Type