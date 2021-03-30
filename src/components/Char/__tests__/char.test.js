import React from 'react';
import { render, screen } from '@testing-library/react';

import Char from '../Char';
import userEvent from '@testing-library/user-event';

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

    it('call the provided handler for a click', () => {
        const clicked = jest.fn();
        render(<Char clicked={clicked} />);

        userEvent.click(screen.getByRole('listitem'));

        expect(clicked).toHaveBeenCalled();
    });
});