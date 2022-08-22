import React from 'react';

export const Box = ({ width, height, bgColor }) => {
    return (
        <div
            style={{ width: width, height: height, backgroundColor: bgColor }}
        ></div>
    );
};
