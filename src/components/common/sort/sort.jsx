import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../radio';
import Select from '../select';
import { SORT_DIRECTIONS } from './constants';

const directionsRadioOptions = [
	{ title: <i className='bi bi-sort-down ' />, value: SORT_DIRECTIONS.asc },
	{ title: <i className='bi bi-sort-up ' />, value: SORT_DIRECTIONS.desc },
];

const Sort = ({ name, options, state, onChange }) => {
	const handleChange = (data) => {
		const newState = { ...state, [data.name]: data.value };
		onChange({ name, value: newState });
	};

	return (
		<div className='input-group'>
			<Select name={'value'} defaultValue={state.value} options={options} onChange={handleChange} />
			&nbsp;
			<Radio
				name={'direction'}
				value={state.direction}
				options={directionsRadioOptions}
				onChange={handleChange}
			/>
		</div>
	);
};

Sort.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onChange: PropTypes.func.isRequired,
	state: PropTypes.shape({ value: PropTypes.any, direction: PropTypes.string }),
};

export default Sort;
