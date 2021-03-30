import React from 'react';

const UserInput = ({changed, initialValue}) => {
    return <input type="text" onChange={changed} defaultValue={initialValue}/>;
};

export default UserInput;