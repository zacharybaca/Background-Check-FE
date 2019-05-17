import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCandidate, postCandidate } from '../../actions';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Listpage = styled.div`
    line-height: 1;
`;

class CandidateList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidate: {
                "resource": "",
                "id": "",
                "created": "",
                "updated": "",
                "revision": "",
                "masked": false,
                "firstName": "",
                "lastName": "",
                "middleName": null,
                "suffix": null,
                "dateOfBirth": "",
                "ssn": "",
                "email": "",
                "phone": "",
                "address": "",
                "city": "",
                "region": "",
                "country": "",
                "postalCode": "",
                "governmentId": {
                    "country": null,
                    "type": null,
                    "number": null
                },
                "aliases": [],
                "educations": [],
                "prevEmployed": null,
                "employments": [],
                "licenses": [],
                "convicted": null,
                "convictions": [],
                "references": [],
                "addressHistory": []
            }
        };
    }

    componentDidMount() {
        this.props.getCandidate()
      };

    handleChanges = e => {
        this.setState({
            candidate: {
                ...this.state.candidate,
                [e.target.name]: e.target.value
            }
        });
    };

    addCandidate = e => {
        e.preventDefault();
        this.props.postCandidate(this.state.candidate)
        this.props.history.push('/candidates');
    };
    
    render() {
        console.log('candidate list form');
        return (
            <Listpage>
            <form onSubmit={this.addCandidate}>
                <input
                    type='text'
                    name='firstName'
                    value={this.state.candidate.firstName}
                    placeholder='First name'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='lastName'
                    value={this.state.candidate.lastName}
                    placeholder='Last name'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='email'
                    value={this.state.candidate.email}
                    placeholder='Email'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='address'
                    value={this.state.candidate.address}
                    placeholder='Address'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='city'
                    value={this.state.candidate.city}
                    placeholder='City'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='region'
                    value={this.state.candidate.region}
                    placeholder='State'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='postalCode'
                    value={this.state.candidate.postalCode}
                    placeholder='Postal/Zip Code'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='country'
                    value={this.state.candidate.country}
                    placeholder='Country'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='dateOfBirth'
                    value={this.state.candidate.dateOfBirth}
                    placeholder='DOB: YYYY-MM-DD'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='ssn'
                    value={this.state.candidate.ssn}
                    placeholder='SSN'
                    onChange={this.handleChanges}
                    required
                />
                <input
                    type='text'
                    name='phone'
                    value={this.state.candidate.phone}
                    placeholder='Phone Number'
                    onChange={this.handleChanges}
                    required
                />
                <button type="submit">
                    {this.props.inRegister ? (
                        <Loader type="ThreeDots" color="green" height='12' width='37' />
                    ) : (
                        'Submit'    
                    )}
                </button>
            </form>
            </Listpage>
        )
    }
}

const mapStateToProps = (state) => ({
    prop: state.prop
});

export default connect(
    mapStateToProps,
    { getCandidate, postCandidate }
) (CandidateList);