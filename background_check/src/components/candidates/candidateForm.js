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
          'id': '',
          'firstName': '',
          'lastName': '',
          'email': ''
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
                    <div>ID: {candidate.id}</div>
                    <div>First Name: {candidate.firstName}</div>
                    <div>Last Name: {candidate.lastName}</div>
                    <div>Email: {candidate.email}</div>
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