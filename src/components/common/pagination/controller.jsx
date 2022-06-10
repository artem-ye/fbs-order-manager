import React from 'react';
import PropTypes from 'prop-types';
import PaginationView from './view';

function sliceData(data, pageNum, itemsPerPage) {
	const startIndex = itemsPerPage * (pageNum - 1);
	const endIndex = startIndex + itemsPerPage;
	return data.slice(startIndex, endIndex);
}

const Pagination = ({ children, dataProp, itemsPerPage, activePageNum, onChange }) => {
	const data = children.props[dataProp];
	const pagesCount = Math.ceil(data.length / itemsPerPage);
	const paginatedData = sliceData(data, activePageNum, itemsPerPage);

	return (
		<>
			{React.cloneElement(children, { data: paginatedData })}
			{pagesCount > 1 && (
				<PaginationView pagesCount={pagesCount} activePageNum={activePageNum} onPageChange={onChange} />
			)}
		</>
	);
};

Pagination.propTypes = {
	children: PropTypes.node.isRequired,
	dataProp: PropTypes.string.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	activePageNum: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Pagination;
