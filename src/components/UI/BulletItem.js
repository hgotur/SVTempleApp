import React from 'react';

import LabelledText from './LabelledText';

const BulletItem = (props) => {
    const { textStyle, children } = props;
    return (
        <LabelledText label={'\u2022'} labelWidth={10} textStyle={textStyle}>
            {children}
        </LabelledText>
    );
};

export default BulletItem;
