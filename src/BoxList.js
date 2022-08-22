import React, { useState } from 'react';
import { Box } from './Box';
import { NewBoxForm } from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

export const BoxList = () => {
    const intialState = [
        { width: '100px', height: '100px', bgColor: 'green' },
        { width: '100px', height: '100px', bgColor: 'blue' },
        { width: '100px', height: '100px', bgColor: 'red' },
    ];

    const [boxes, setBoxes] = useState(intialState);

    const addBox = newBox => {
        setBoxes(boxes => [...boxes, { ...newBox }]);
    };

    return (
        <div>
            <h3>Box List</h3>

            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(box => (
                    <Box
                        width={box.width}
                        height={box.height}
                        bgColor={box.bgColor}
                    />
                ))}
            </div>
        </div>
    );
};
