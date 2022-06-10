import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ name, value, placeholder, onChange }) => {
	const handleChange = (event) => {
		const value = event.target.value;
		onChange({ name, value });
	};

	return (
		<div className='input-group'>
			<div className='input-group-text text-white-50 bg-dark border-0' id={name}>
				<i className='bi bi-search'></i>
			</div>
			<input
				type='text'
				className='form-control border-0 text-white bg-gray no-outlines'
				placeholder={placeholder}
				aria-label={name}
				aria-describedby={name}
				value={value || ''}
				onChange={handleChange}
			/>
		</div>
	);
};

Search.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};

export default Search;
