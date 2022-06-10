import React from 'react';
import PropTypes from 'prop-types';

const RadioItem = ({ name, title, value, isActive, onChange }) => {
	const handleChange = () => {
		onChange(value);
	};

	const inputId = `${name}-${value}`;
	const labelClasses = `btn btn-outline-dark ${isActive ? 'text-info' : 'text-white-50'} no-outlines`;

	return (
		<>
			<input
				type='radio'
				className='btn-check'
				name={name}
				id={inputId}
				autoComplete='off'
				value={value}
				checked={isActive}
				onChange={handleChange}
			/>
			<label className={labelClasses} htmlFor={inputId}>
				{title}
			</label>
		</>
	);
};

RadioItem.propTypes = {
	name: PropTypes.string,
	title: PropTypes.node,
	value: PropTypes.any.isRequired,
	isActive: PropTypes.bool,
	onChange: PropTypes.func,
};

export default RadioItem;
