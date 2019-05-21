import React from 'react';
import { connect } from 'react-redux';
import { getCandidate, getUser} from '../../actions';
import styled from 'styled-components';

const CandidatePage = styled.div`
 line-height: 1.5;
 color: black;
`;

class Candidate extends React.Component {
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

  render() {
    return (
      <CandidatePage>
        <h1 className="Header">List of Candidates</h1>
        {(this.props.candidates.map((candidate, index) => {
            return (
                <div key={index}> 
                    <div>Resource: {candidate.resource}</div>
                    <div>ID: {candidate.id}</div>
                    <div>Created: {candidate.created}</div>
                    <div>Updated: {candidate.updated}</div>
                    <div>First Name: {candidate.firstName}</div>
                    <div>Last Name: {candidate.lastName}</div>
                    <div>Email: {candidate.email}</div>
                    <div>Address: {candidate.address}</div>
                    <div>City: {candidate.city}</div>
                    <div>Region: {candidate.region}</div>
                    <div>Postal Code: {candidate.postalCode}</div>
                    <div>Country: {candidate.country}</div>
                    <div>DOB: {candidate.dateOfBirth}</div>
                    <div>SSN: {candidate.ssn}</div>
                    <div>Phone: {candidate.phone}</div>
                    <br/>
                </div>
            )
        }))
      }
      </CandidatePage>
    );
  }
}

const mapStateToProps = (state) => ({
   candidates: state.candidates
});

export default connect(
    mapStateToProps,
    { getCandidate, getUser }
) (Candidate);