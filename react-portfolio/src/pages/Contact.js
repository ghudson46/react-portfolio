import React from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      emailSent: true
    })
  }

  render() {
    return (
      <div>
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

          <Button className="d-inline-block" variant="dark" type="submit" disable={this.state.disabled}>
            Send
          </Button>

          {this.state.emailSent === true && <p className="d-inline success-msg">Email sent</p>}
          {this.state.emailSent === false && <p className="d-inline err-msg">Email not sent</p>}
        </Form>

      </div>
      )
  }
}

export default Contact;