import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getContactById, updateContact} from '../action/contactAction';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ContactDetails extends Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        age: 0,
        photo: ''
    }
    componentDidMount(){
        this.getContact(this.props.match.params.id);
    }
    
    componentDidUpdate(prevProps, prevState){
        const {contact} = this.props.contact;
        if(contact && prevProps !== contact){
            console.log('test')
            this.setState({
                id: this.props.contact.id,
                firstName: this.props.contact.firstName,
                lastName: this.props.contact.lastName,
                age: this.props.contact.age,
                photo: this.props.contact.photo
            })
        }
    }

    getContact(id){
        this.props.getContactById(id);
        this.stateLess();
    }

    stateLess = () => {
        this.setState({
            id: this.props.contact.id,
            firstName: this.props.contact.firstName,
            lastName: this.props.contact.lastName,
            age: this.props.contact.age,
            photo: this.props.contact.photo
        })
    }

    update(){
        const newValue = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
        }
        this.props.updateContact(this.props.match.params.id, newValue);
    }
    
    render() {
        console.log('ini state', this.state)
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="contact_id">ID</Label>
                        <Input type="text" name="contact_id" id="contact_id" value={this.state.id} />
                    </FormGroup>
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
                    <Button onClick={() => this.update()}>Update</Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        contact: state.contact.data,
        updated: state.updateContact
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getContactById, updateContact}, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(ContactDetails);