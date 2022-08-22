import React, { useState } from 'react';

export const NewBoxForm = ({ width, height, bgColor, addBox }) => {
    const intialState = {
        width: '',
        height: '',
        bgColor: '',
    };

    const [formData, setFormData] = useState(intialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox({ ...formData });
        setFormData(intialState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='width'>Width</label>
            <input
                type='text'
                name='width'
                id='width'
                placeholder='width'
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor='heigt'>Height</label>
            <input
                type='text'
                name='height'
                id='height'
                placeholder='height'
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor='bgColor'>Background Color</label>
            <input
                type='text'
                name='bgColor'
                id='bgColor'
                placeholder='Background Color'
                value={formData.bgColor}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    );
};
