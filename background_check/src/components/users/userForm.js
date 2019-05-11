import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';
import styled from 'styled-components';

const UserPage = styled.div`
 line-height: 1.5;
 color: black;
`;

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
          'name': '',
          'username': '',
          'usertype': '',
          'password': '',
          'email': ''
      }
    };
  }

  componentDidMount() {
    this.props.getUser()
  };

  render() {
    return (
      <UserPage>
        <h1 className="Header">List of Users</h1>
        {(this.props.users.map((userData, index) => {
            return (
                <div key={index}> 
                    <div>Name: {userData.name}</div>
                    <div>Username: {userData.username}</div>
                    <div>UserType: {userData.usertype}</div>
                    <div>Email: {userData.email}</div>
                </div>
            )
        }))
    }
      </UserPage>
    );
  }
}

const mapStateToProps = (state) => ({
   users: state.users
});

export default connect(
    mapStateToProps,
    { getUser }
) (UserForm);