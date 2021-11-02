import React from 'react'

import './projects.styles.scss'

import github from '../../assets/icons/github-icon.svg'
import projectList from '../../assets/projectList.js'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h2>Selected Projects</h2>
            <div className='project-grid'>
            {projectList.map((data, key) => {
                return (
                    <div key={key} className='project'>
                        <a 
                            href={data.url}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={data.image} 
                                alt={data.title} 
                                className='preview'
                            />
                            <div className='description'>
                                <div className='content'>
                                    <div className='title'>{data.title}</div>
                                    <div className='tech'>{data.tech}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
                <div className='link-text'>
                    <a href='https://github.com/jshaw990' target='_blank' rel='noreferrer'>
                        Checkout more projects on my GitHub
                        <img src={github} className='icon' alt='github'/>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Projects