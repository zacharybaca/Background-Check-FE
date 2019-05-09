import React from 'react';
import './App.css';
import axios from 'axios';
import UsersList from './components/UsersList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }
  componentDidMount() {
    axios.get(`https://background-check.herokuapp.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ userData: users });
      });
  };
  render() {
    return (
      <div className="App">
        <h1 className="Header">List of Users</h1>
        <UsersList userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
