import React from 'react';
import PropTypes from 'prop-types';

const renderHeaderColumn = ({ title }, key) => {
	return (
		<th scope='col' key={key}>
			{title}
		</th>
	);
};

const renderRow = (columns, rowData, key, onRowClick) => {
	return (
		<tr key={key} onClick={() => onRowClick(rowData)}>
			{columns.map((column, key) => {
				return React.cloneElement(column.element, {
					key: key,
					data: rowData,
				});
			})}
		</tr>
	);
};

const DataTable = ({ columns, data, onRowClick }) => {
	return (
		<>
			<table className='table table-responsive table-striped table-borderless table-hover table-dark'>
				<thead className='text-info'>
					<tr>{columns.map(renderHeaderColumn)}</tr>
				</thead>
				<tbody>
					{data.map((rowData, key) => {
						return renderRow(columns, rowData, key, onRowClick);
					})}
				</tbody>
			</table>
		</>
	);
};

DataTable.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			element: PropTypes.node.isRequired,
		})
	).isRequired,
	data: PropTypes.arrayOf(PropTypes.object),
	onRowClick: PropTypes.func,
};

DataTable.defaultProps = {
	onRowClick: () => {},
	data: [],
};

export default DataTable;
