import React from 'react';

const UserCard = props => {
    return (
        <div>
            <div>Name: {props.usercard.name}</div>
            <div>Username: {props.usercard.username}</div>
            <div>UserType: {props.usercard.usertype}</div>
            <div>Email: {props.usercard.email}</div>
        </div>
    )
}

export default UserCard;