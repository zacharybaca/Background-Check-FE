import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import UserForm from './components/users/userForm';
import GoogleLogin from 'react-google-login';
import PostData from './services/PostData.js';

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    }
    this.signup = this.signup.bind(this);
  }

  signup(res, type){

    let postData;
    if(type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa

      }
    }

    PostData('signup', postData).then((result) => {
      let responseJson = result;
      if(responseJson.userData){
        sessionStorage.setItem('userData',JSON.stringify(responseJson));
        this.setState({redirectToReferrer: true});
      }
    });

  }
  render() {

    if(this.state.redirectToReferrer) {
      return (<Redirect to={'/'}/>)
    }
    const responseGoogle = (response) => {
      console.log(response);
      this.signup(response, 'google');
    }
    return (
      <Router>
        <div className="App">
          <Homepage>
            <Link to ='/users'>Users</Link>
          </Homepage>
            <Route exact path='/users' component={UserForm} />
            <GoogleLogin
              clientId="866746847618-ck44fdh5eh3j72elots76pg8u4icmfak.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />,
            
        </div>
      </Router>
    );
  }
}


export default App;