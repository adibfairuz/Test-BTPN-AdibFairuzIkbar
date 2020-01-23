import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {getAllContact} from '../action/contactAction';
import { connect } from 'react-redux';
import {Table, Container, Row} from 'reactstrap'
import ContactDetails from './ContactDetails';

class Contacts extends Component {
    componentDidMount(){
        this.reload();
    }
    reload(){
        this.props.getAllContact();
    }
    render() {
        console.log('ini state', this.props)
        return (
            <div>
                <Container>
                    <Row>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.contacts.map( (data, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{data.id}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td><a href={"/contact/"+data.id}>View</a></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        contacts: state.contacts.data
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getAllContact}, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Contacts);