import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Chars from '../Chars';

const LISTITEM_ROLE = 'listitem';
const LIST_ROLE = 'list';

const charsDefaultTestCases = [
    ['aa'],
    ['batata'],
    ['this is a text'],
    ['this is another text'],
    ['email7@test.com'],
];

describe('chars should', () => {
    it('render correctly', () => {
        render(<Chars />);
        expect(screen.getByRole(LIST_ROLE)).toBeInTheDocument();
    });

    it.each(charsDefaultTestCases)('render a list with the chars in \'%s\'', (text) => {
        render(<Chars text={text} />);

        const chars = screen.getAllByRole(LISTITEM_ROLE);

        expect(chars.length).toBe(text.length);

        text.split('').forEach((char, index) => {
            expect(chars[index].textContent).toBe(char);
        });
    });

    it.each(charsDefaultTestCases)('call the provided handler for the chars of \'%s\' being clicked', (text) => {
        const clicked = jest.fn();
        render(<Chars clicked={clicked} text={text} />);

        const chars = screen.getAllByRole(LISTITEM_ROLE);

        chars.forEach((char, index) => {
            userEvent.click(char);
            expect(clicked).toHaveBeenLastCalledWith(index);
        });

        expect(clicked).toHaveBeenCalledTimes(text.length);
    });
});