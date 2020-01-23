import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addContact} from '../action/contactAction';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddContact extends Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        age: 0,
        photo: ''
    }
    add(){
        const newValue = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            photo: this.state.photo
        }
        this.props.addContact(newValue);
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="contact_fn">First Name</Label>
                        <Input type="text" name="contact_fn" id="contact_fn" value={this.state.firstName} onChange={(e)=> this.setState({firstName: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact_ln">Last Name</Label>
                        <Input type="text" name="contact_ln" id="contact_ln" value={this.state.lastName} onChange={(e)=> this.setState({lastName: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact_age">Age</Label>
                        <Input type="number" name="contact_age" id="contact_age" value={this.state.age} onChange={(e)=> this.setState({age: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact_photo">Photo</Label>
                        <Input type="text" name="contact_photo" id="contact_photo" value={this.state.photo} onChange={(e)=> this.setState({photo: e.target.value})} />
                    </FormGroup>
                    <Button onClick={() => this.add()}>Add Contact</Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        posted: state.addContact
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addContact}, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(AddContact);