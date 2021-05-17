import React from 'react'

import './skills.scss'

import github from '../../assets/icons/github-icon.svg'
import javascript from '../../assets/icons/javascript-icon.svg'
import node from '../../assets/icons/node-icon.svg'
import html from '../../assets/icons/html-icon.svg'
import css from '../../assets/icons/css-icon.svg'
import react from '../../assets/icons/react-icon.svg'
import redux from '../../assets/icons/redux-icon.svg'
import graphql from '../../assets/icons/graphql-icon.svg'
import mongodb from '../../assets/icons/mongodb-icon.svg'
import wordpress from '../../assets/icons/wordpress-icon.svg'
import ads from '../../assets/icons/ads-icon.svg'
import analytics from '../../assets/icons/analytics-icon.svg'
import seo from '../../assets/icons/seo-icon.svg'
import markdown from '../../assets/icons/markdown-icon.svg'
import heroku from '../../assets/icons/heroku-icon.svg'
import firebase from '../../assets/icons/firebase-icon.svg'

function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2>Skills</h2>
            <div className='skill-list'>
                <div className='row'>
                    <div className='row-item'>
                        <img src={javascript} className='skill-svg' alt='javascript'/>
                        <div className='desc'>JavaScript</div>
                    </div>
                    <div className='row-item'>
                        <img src={node} className='skill-svg' alt='node'/>
                        <div className='desc'>Node.js</div>
                    </div>
                    <div className='row-item'>
                        <img src={html} className='skill-svg' alt='html'/>
                        <div className='desc'>HTML5</div>
                    </div>
                    <div className='row-item'>
                        <img src={css} className='skill-svg' alt='css'/>
                        <div className='desc'>CSS</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='row-item'>
                        <img src={react} className='skill-svg' alt='react'/>
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
                        <img src={wordpress} className='skill-svg' alt='google wordpress'/>
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
                        <img src={github} className='skill-svg' alt='github'/>
                        <div className='desc'>GitHub</div>
                    </div>
                    <div className='row-item'>
                        <img src={markdown} className='skill-svg' alt='markdown'/>
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