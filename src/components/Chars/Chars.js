import React from 'react';
import Char from '../Char/Char';

const Chars = ({ text = '', clicked }) => {
    return (
        <ul>
            {text.split('').map((c, index) =>
                <Char key={index} char={c} clicked={() => clicked(index)} />)
            }
        </ul>
    );
};

export default Chars;