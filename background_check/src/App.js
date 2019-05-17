import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import UserForm from './components/users/userForm';

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';



const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
           <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
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
// class App extends Component {
//   render() {
//     return (
//       <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
//         <div className="example">
//           <h1>React Stripe Elements Example</h1>
//           <Elements>
//             <CheckoutForm />
//           </Elements>
//         </div>
//       </StripeProvider>
//     );
//   }
// }


export default App;