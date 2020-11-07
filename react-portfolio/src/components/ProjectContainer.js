import React, { Component } from 'react'
import Project from './Project'

class ProjectContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            text: '',
            githubLink: '',
            deployLink: '',
            image: '',
        }
    }
    render() {
        return (
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>

                <Project name='RateFlix' text='This is a movie search application that allows the user to get information on any movie' githubLink='https://github.com/ghudson46/rateflix' deployLink='https://ghudson46.github.io/rateflix' image='http://www.garretthudson.com/img/rateflix.png'/>

                <Project name='Pawsibilities' text='This is an application to match hopeful pet owners to animals available for adoption in their area' githubLink='https://github.com/cptspooky/pawsibility' deployLink='https://cptspooky.github.io/Pawsibility/' image='http://www.garretthudson.com/img/pawsibilities.png'/>

                <Project name='Weather' text='This is a weather app that allows the user to search for any city and get the current weather and a 5 day forcast' githubLink='https://github.com/ghudson46/weather-forecast' deployLink='https://ghudson46.github.io/weather-forecast' image='http://www.garretthudson.com/img/weather.png'/>

                <Project name='Star Wars Quiz' text="This app is a quiz game that tests the user's knowledge of a galaxy far far away and stores the users high score" githubLink='https://ghudson46.github.io/code-quiz-HW4' deployLink='https://ghudson46.github.io/code-quiz-HW4' image='http://www.garretthudson.com/img/starwars.png'/>

                <Project name="Iron Man's Flight" text='This game is similar to the popular game "Flappy Bird" but with an Iron Man overlay (only works on mobile touch devices' githubLink='https://github.com/ghudson46/iron-mans-flight' deployLink='https://ghudson46.github.io/iron-mans-flight' image='http://www.garretthudson.com/img/ironman.png' />


                <Project name='Note Taker' text='This app allows the user to jot down notes throughout the day, and go back to look at, complete, and check off those notes as they compete the tasks' githubLink='https://github.com/ghudson46/note-taker' deployLink='https://vast-sands-53973.herokuapp.com/' image='http://www.garretthudson.com/img/notes-app.png' />

                <Project name='In-Touch' text='This app allows multiple users to communicate via instant messaging in real time' githubLink='https://github.com/ghudson46/in-touch' deployLink='https://5f736abb569288013d880c7e--mystifying-goodall-f6396b.netlify.app/' image='http://www.garretthudson.com/img/chat.png' />
                

                <Project name='Bookmarked' text='This app allows the user to search books by title, add them to various lists on their profile, and view what other users have on their lists' githubLink='https://github.com/jhf1203/Project-2' deployLink='https://project-2-team-2.herokuapp.com/' image='http://www.garretthudson.com/img/bookmarked.png' />

            
            </div>
        )
    }
}

export default ProjectContainer
