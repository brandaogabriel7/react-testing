import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserInput from '../UserInput';

const TEXTBOX_ROLE = 'textbox';

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
});