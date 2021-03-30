import React from 'react';

import * as ValidationConstants from '../../constants/validation-constants';

const Validation = ({text}) => {
    return (
        <p>{text && text.length > 5
            ? ValidationConstants.TEXT_LONG_ENOUGH_MESSAGE
            : ValidationConstants.TEXT_TOO_SHORT_MESSAGE}
        </p>);
};

export default Validation;