import React, { Component } from 'react'
import ProjectContainer from '../components/ProjectContainer'


export class Portfolio extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', width: '80%', margin: '0 auto'}}>
                <h1 style={{color: '#541388'}}>Projects</h1>
                <ProjectContainer />
            </div>
        )
    }
}

export default Portfolio
