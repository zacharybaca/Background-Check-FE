import React from 'react';
import UserCard from './UserCard';

const UsersList = props => {
    return (
        <div>
            {props.userData.map(usercard => {
                return <UserCard usercard={usercard} key={usercard}/>
            })}
        </div>
    );
};

export default UsersList;