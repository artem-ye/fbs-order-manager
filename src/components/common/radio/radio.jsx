import React from 'react';
import RadioItem from './radioItem';
import PropTypes from 'prop-types';

const Radio = ({ name, value, onChange, options }) => {
	const handleChange = (value) => {
		onChange({ name, value });
	};

	return (
		<div className='btn-group' role='group' aria-label='Basic radio toggle button group'>
			{options.map((option, key) => {
				const isActive = option.value === value;

				return (
					<RadioItem
						key={key}
						name={name}
						title={option.title}
						value={option.value}
						onChange={handleChange}
						isActive={isActive}
					/>
				);
			})}
		</div>
	);
};

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	options: PropTypes.array,
	onChange: PropTypes.func,
};

export default Radio;
