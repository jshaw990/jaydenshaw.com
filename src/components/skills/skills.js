import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import redux from '../../assets/redux-icon.svg'
import graphql from '../../assets/graphql-icon.svg'
import mongodb from '../../assets/mongodb-icon.svg'
import ads from '../../assets/ads-icon.svg'
import analytics from '../../assets/analytics-icon.svg'
import seo from '../../assets/seo-icon.svg'
import heroku from '../../assets/heroku-icon.svg'
import firebase from '../../assets/firebase-icon.svg'

import './skills.scss'

function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2>Skills</h2>
            <div className='skill-list'>
                <div className='row'>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'js']}  className='skill-icon' />
                        <div className='desc'>JavaScript</div>
                    </div>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'node']}  className='skill-icon' />
                        <div className='desc'>Node.js</div>
                    </div>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'html5']}  className='skill-icon' />
                        <div className='desc'>HTML5</div>
                    </div>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'css3-alt']}  className='skill-icon' />
                        <div className='desc'>CSS 3</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'react']} className='skill-icon' />
                        <div className='desc'>React.js</div>
                    </div>
                    <div className='row-item'>
                        <img src={redux} className='skill-svg' alt='redux'/>
                        <div className='desc'>Redux</div>
                    </div>
                    <div className='row-item'>
                        <img src={graphql} className='skill-svg' alt='graph-ql'/>
                        <div className='desc'>GraphQL</div>
                    </div>
                    <div className='row-item'>
                        <img src={mongodb} className='skill-svg' alt='mongodb'/>
                        <div className='desc'>Mongo DB</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'wordpress']}  className='skill-icon' />
                        <div className='desc'>WordPress</div>
                    </div>
                    <div className='row-item'>
                        <img src={analytics} className='skill-svg' alt='google analytics'/>
                        <div className='desc'>Analytics</div>
                    </div>
                    <div className='row-item'>
                        <img src={ads} className='skill-svg' alt='google ads'/>
                        <div className='desc'>Google Ads</div>
                    </div>
                    <div className='row-item'>
                        <img src={seo} className='skill-svg' alt='search engine optimization'/>
                        <div className='desc'>SEO</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'github']}  className='skill-icon' />
                        <div className='desc'>GitHub</div>
                    </div>
                    <div className='row-item'>
                        <FontAwesomeIcon icon={['fab', 'markdown']}  className='skill-icon' />
                        <div className='desc'>Markdown</div>
                    </div>
                    <div className='row-item'>
                        <img src={heroku} className='skill-svg' alt='heroku'/>
                        <div className='desc'>Heroku</div>
                    </div>
                    <div className='row-item'>
                        <img src={firebase} className='skill-svg' alt='firebase'/>
                        <div className='desc'>Firebase</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills