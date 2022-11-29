import React from 'react';

const Visible = ({ when, children }) => {
    if(!when) {
        return null;
    }
    return <div>{children}</div>;
};

export default Visible;
