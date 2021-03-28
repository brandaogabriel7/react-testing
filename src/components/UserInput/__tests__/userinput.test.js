import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserInput from '../UserInput';

describe('user input should', () => {
    beforeEach(() => render(<UserInput />));

    it('render correctly', () => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('match snapshot', () => {
        expect(screen.getByRole('textbox')).toMatchSnapshot();
    });

    it('call the changed handler when input changes', () => {
        const mockChangedHandler = jest.fn();
        render(<UserInput username="aaa" changed={mockChangedHandler} />);
        
        userEvent.type(screen.getByRole('textbox'));
        expect(mockChangedHandler).toHaveBeenCalled();
    })
});