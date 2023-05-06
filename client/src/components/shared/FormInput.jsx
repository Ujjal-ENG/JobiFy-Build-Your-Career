/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

function FormInput({ labelName, id, type, placeholder, value, change }) {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {labelName}
            </label>
            <input
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={value}
                onChange={change}
            />
        </div>
    );
}

export default FormInput;
