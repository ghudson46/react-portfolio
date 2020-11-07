import React from 'react'

// react bootstrap components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Project(props) {

    // handleclick(props) {

    // }
        return (
            <div>
                <Card className='card' style={{ width: '18rem', height: '44rem', borderRadius:'10px', margin: '20px 10px 0px 10px',   boxShadow:'3px 3px 5px 6px #ccc' }}>
                    <Card.Img variant="top" alt='portfolio image' src={props.image} style={{height: '25rem'}}/>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                     <Button variant="primary"><a style={{textDecoration: 'none', color:'white'}}target='blank' href={props.deployLink}>Go to App</a></Button>
                     <Button variant="secondary"><a style={{textDecoration: 'none', color:'white'}} target='blank' href={props.githubLink}>Go to repo</a></Button>
                    </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }

export default Project
