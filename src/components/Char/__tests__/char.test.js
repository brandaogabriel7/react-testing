import React from 'react';
import { render, screen } from '@testing-library/react';

import Char from '../Char';

const renderWithProvidedChar = [
    ['a'],
    ['b'],
    ['c'],
    ['h'],
    ['.'],
    ['@'],
    ['7']
];

describe('char component should', () => {
    it('render correctly', () => {
        render(<Char />);
    });

    it.each(renderWithProvidedChar)('render with \'%s\'', (char) => {
        render(<Char char={char} />);
        expect(screen.getByText(char)).toBeInTheDocument();
    });
});