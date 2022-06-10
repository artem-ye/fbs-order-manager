import React from 'react';
import PropTypes from 'prop-types';

const renderItem = (option, key) => {
	return (
		<option key={key} value={option.value}>
			{option.title}
		</option>
	);
};

const Select = ({ name, options, defaultValue, onChange }) => {
	const selectId = name;

	return (
		<div className='input-group'>
			<label className='input-group-text bg-dark border-dark text-white-50 ' htmlFor={selectId}>
				Сортировка
			</label>
			<select
				className='form-select bg-gray text-black border-dark no-outlines'
				id={selectId}
				defaultValue={defaultValue}
				onChange={(evt) => {
					onChange({ name, value: evt.target.value });
				}}
			>
				{options.map((option, index) => {
					return renderItem(option, index + 1);
				})}
			</select>
		</div>
	);
};

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	defaultValue: PropTypes.any,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default Select;
