import React from 'react';
import Char from '../Char/Char';

const Chars = ({ text = '' }) => {
    return (
        <ul>
            {text.split('').map((c, index) => <Char key={index} char={c} />)}
        </ul>
    );
};

export default Chars;