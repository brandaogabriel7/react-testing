import React from 'react';

const UserOutput = ({ username }) => {
    return (
        <div>
            <p>Username: {username}</p>
            <p>I hope I'll be overwritten!</p>
        </div>
    );
};

export default UserOutput;