import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../common/search';
import Sort from '../../../common/sort';
import Toolbar from '../../../common/toolbar';

const StocksToolbar = ({ state, sortOptions, onChange }) => {
	const handleChange = (data) => {
		onChange({ [data.name]: data.value });
	};

	return (
		<Toolbar>
			<Sort name='sort' options={sortOptions} onChange={handleChange} state={state.sort} />
			<Search name='search' placeholder='Поиск товара' value={state.search} onChange={handleChange} />
		</Toolbar>
	);
};

StocksToolbar.propTypes = {
	state: PropTypes.shape({
		search: PropTypes.string,
		sort: PropTypes.shape({ value: PropTypes.string, direction: PropTypes.string }),
	}),
	sortOptions: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, value: PropTypes.string })),
	onChange: PropTypes.func,
};

export default StocksToolbar;
