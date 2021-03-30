import { render, screen } from '@testing-library/react';

import Validation from '../Validation';
import * as ValidationConstants from '../../../constants/validation-constants';

const textTooShortTestCases = [
    ['aaaa'],
    ['a'],
    ['opa'],
    ['yesss'],
    ['no']
];

const textLongEnoughTestCases = [
    ['batata'],
    ['this is a long enough text'],
    ['this is another long enough text']
];

describe('validation component should', () => {
    it('render correctly', () => {
        render(<Validation />);
    });

    it.each(textTooShortTestCases)('validate that \'%s\' is too short', (text) => {
        render(<Validation text={text} />);
        expect(screen.getByText(ValidationConstants.TEXT_TOO_SHORT_MESSAGE)).toBeInTheDocument();
    });

    it.each(textLongEnoughTestCases)('validate that \'%s\' is long enough', (text) => {
        render(<Validation text={text} />);
        expect(screen.getByText(ValidationConstants.TEXT_LONG_ENOUGH_MESSAGE)).toBeInTheDocument();
    })
})