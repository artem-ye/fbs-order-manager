import React from 'react';
import PropTypes from 'prop-types';

const DataTableTextCell = ({ data, dataPath }) => {
	return <td className='text-white-50'>{data[dataPath]}</td>;
};

DataTableTextCell.propTypes = {
	data: PropTypes.object,
	dataPath: PropTypes.string.isRequired,
};

export default DataTableTextCell;
