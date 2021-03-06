import React, { Component } from 'react'

import Button from '../components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faGithub, faLinkedin)

export class Home extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '80%', margin: '0 auto', padding: '0 auto', color: '#023788'}}>
                <h1 style={{color: '#2b5876'}}>Hello,</h1><h1>I'm Garrett,</h1>
                <h2>a full stack software developer</h2>
                <span>
                    <Button label="Let's work together!" url="/contact" />
                    <br/>
                </span>
                <span>
                <a href="https://www.github.com/ghudson46">
                    <FontAwesomeIcon icon={["fab", "github"]} style={{height: '1.5rem', width: '1.5rem', margin: '10px', color: '#2b5876'}} />
                </a>
                <a href="https://www.linkedin.com/in/garretthudson46">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} style={{height: '1.5rem', width: '1.5rem', margin: '10px', color: '#2b5876'}} />
                </a>
                </span>
            </div>
        )
    }
}

export default Home
