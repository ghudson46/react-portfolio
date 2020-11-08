import React from 'react'

import './Resume.css'


function Resume() {

        return (
            <div style={{textAlign: 'center', width: '80%', margin: '0 auto'}}>
                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle" style={{marginBottom: '2rem'}}>Profesional Skills</h2>
                        <p className="skills__text" style={{marginBottom: '2rem', width: '30%', marginLeft:'35%', cursor: 'pointer', textDecoration: 'none'}}><a href="http://www.garretthudson.com/docs/Garrett%20Hudson%20Resume%20(dev).pdf" target="blank" style={{color: 'white', textDecoration: 'none'}}>Resume</a></p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="name">HTML5</span>
                            </div>
                        
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="name">CSS3</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="name">JavaScript</span>
                            </div>
                        </div>
                        
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-nodejs skills__icon'></i>
                                <span className="name">node.js</span>
                            </div>
                          <div>              
                              <img src="assets/img/work3.jpg" alt="" className="skills__img"></img>
                          </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-nodejs skills__icon'></i>
                                <span className="name">express.js</span>
                            </div>
                          <div>              
                              <img src="assets/img/work3.jpg" alt="" className="skills__img"></img>
                          </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-react skills__icon'></i>
                                <span className="name">react.js</span>
                            </div>
                          <div>              
                              <img src="assets/img/work3.jpg" alt="" className="skills__img"></img>
                          </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-data skills__icon'></i>
                                <span className="name">MySQL</span>
                            </div>
                          <div>              
                              <img src="assets/img/work3.jpg" alt="" className="skills__img"></img>
                          </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-data skills__icon'></i>
                                <span className="name">MongoDB</span>
                            </div>
                          <div>              
                              <img src="assets/img/work3.jpg" alt="" className="skills__img"></img>
                          </div>
                        </div>

                          <div>              
                              <img src="assets/img/work3.jpg" alt="" className="skills__img"></img>
                          </div>
                        </div>
                    </div>
            </div>
        )
}

export default Resume
