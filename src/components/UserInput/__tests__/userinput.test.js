import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserInput from '../UserInput';

const TEXTBOX_ROLE = 'textbox';

const initialValueTestCases = [
    ['batata'],
    ['random initial value'],
    ['another random initial value']
];

describe('user input should', () => {
    it('render correctly', () => {
        render(<UserInput />)
        expect(screen.getByRole(TEXTBOX_ROLE)).toBeInTheDocument();
    });

    it('match snapshot', () => {
        render(<UserInput />)
        expect(screen.getByRole(TEXTBOX_ROLE)).toMatchSnapshot();
    });

    it('call the changed handler when input changes', () => {
        const mockChangedHandler = jest.fn();
        render(<UserInput changed={mockChangedHandler} />);
        
        const typedText = 'opaaa';
        userEvent.type(screen.getByRole(TEXTBOX_ROLE), typedText);
        expect(mockChangedHandler).toHaveBeenCalledTimes(typedText.length);
    });

    it.each(initialValueTestCases)('have initial value of \'%s\'', (initialValue) => {
        render(<UserInput initialValue={initialValue} />);

        const userInput = screen.getByRole(TEXTBOX_ROLE);
        expect(userInput).toBeInTheDocument();
        expect(userInput).toHaveValue(initialValue);
    });
});