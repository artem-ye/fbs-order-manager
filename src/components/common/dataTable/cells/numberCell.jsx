import React from 'react';
import PropTypes from 'prop-types';

const DataTableNumberCell = ({ data, dataPath, units }) => {
	const value = data[dataPath];
	return <td className='text-white-50'>{value ? `${value}\xa0${units}` : ''}</td>;
};

DataTableNumberCell.propTypes = {
	data: PropTypes.object,
	dataPath: PropTypes.string.isRequired,
	units: PropTypes.string.isRequired,
};

DataTableNumberCell.defaultProps = {
	units: '',
};

export default DataTableNumberCell;
