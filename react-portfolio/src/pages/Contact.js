import React from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faPhone)

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
      emailSent: true,
      name: '',
      email: '',
      message: ''
    })
  }

  render() {
    return (
      <div style={{marginBottom: '2rem', color: '#541388'}}>
        <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Let's work!</h1>

        <Form style ={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={this.handleSubmit}>

          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control style={{width: '25rem'}} id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control style={{width: '25rem'}} id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control style={{width: '25rem'}} id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
          </Form.Group>

          <Button className="d-inline-block button-gradient" variant="dark" type="submit" disable={this.state.disabled}>
            Send
          </Button>

          {this.state.emailSent === true && <p className="d-inline success-msg">Email sent</p>}
          {this.state.emailSent === false && <p className="d-inline err-msg">Email not sent</p>}
        </Form>

        <span style={{display: 'flex', flexDirection: 'row', margin: '2rem ', justifyContent: 'center'}}>
          <a href="mailto:garrett.hudson46@gmail.com" style={{textDecoration: 'none', color: '#4e4376'}}><FontAwesomeIcon icon={faEnvelope} style={{height: '30px', width: '30px', margin: '10px'}} /></a>
          <a href="tel:919-606-6599" style={{textDecoration: 'none', color: '#4e4376'}}><FontAwesomeIcon icon={faPhone} style={{height: '30px', width: '30px', margin: '10px'}} /></a>
        </span>

      </div>
      )
  }
}

export default Contact;