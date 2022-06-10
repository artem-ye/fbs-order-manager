import React from 'react';
import PropTypes from 'prop-types';

const DataTableImageCell = ({ data, dataPath }) => {
	return (
		<td>
			<img src={data[dataPath]} style={{ width: '50px' }} />
		</td>
	);
};

DataTableImageCell.propTypes = {
	data: PropTypes.object,
	dataPath: PropTypes.string.isRequired,
};

export default DataTableImageCell;
