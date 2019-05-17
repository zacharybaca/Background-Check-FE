import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import UserForm from './components/users/userForm';

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Homepage>
            <Link to ='/users'>Users</Link>
          </Homepage>
            <Route exact path='/users' component={UserForm} />
        </div>
      </Router>
    );
  }
}




export default App;