import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register, getData, getUser } from './actions';

//Users
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userA: {
                'name': '',
                'username': '',
                'usertype': '',
                'password': '',
                'email': '',
            }
        };
    }

    componentDidMount() {
        this.props.getData();
    }

    handleChanges = e => {
        this.setState({
            userA: {
                ...this.state.userA,
                [e.target.name]: e.target.value,
            }    
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.userA);
        this.props.history.push('/login');
    };    

    render() {
        console.log('entering User registration!!');
        return (
            <div>
                <form onSubmit={this.register}>
                    <h2>Registration</h2>
                    <h5>Please Register for an account here!!</h5>
                    <input
                        type='text'    
                        name='name'
                        value={this.state.userA.name}
                        placeholder='Enter Name'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='username'
                        value={this.state.userA.username}
                        placeholder='Enter Username'
                        onChange={this.handleChanges}
                        required
                    />            
                    <input 
                        type='text'
                        name='usertype'
                        value={this.state.userA.usertype}
                        placeholder='Enter Usertype'
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.userA.password}
                        placeholder='Enter Password'
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.userA.email}
                        placeholder='Enter Email'
                        onChange={this.handleChanges}
                        required
                    />

                    <button type="submit">

                        {this.props.inRegister ? (
                            <Loader type="ThreeDots" color="green" height='12' width='37' />
                        ) : (
                            'Register'    
                        )}
                    </button> 
                </form>
            </div>
        );
    }
}    

const mapStateToProps = state => ({
    inRegister: state.inRegister
});

export default connect(
    mapStateToProps,
    { register, getData, getUser }
) (Register);