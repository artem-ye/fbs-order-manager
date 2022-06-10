import React from 'react';
import PropTypes from 'prop-types';

const PaginationView = ({ pagesCount, activePageNum, onPageChange }) => {
	const handlePreviewPage = () => {
		onPageChange(activePageNum > 1 ? activePageNum - 1 : pagesCount);
	};

	const handleNextPage = () => {
		onPageChange(activePageNum < pagesCount ? activePageNum + 1 : 1);
	};

	const pages = new Array(pagesCount).fill(1);

	return (
		<nav aria-label='Page navigation example '>
			<ul className='pagination justify-content-center '>
				<ListItem isActive={false} onClick={handlePreviewPage}>
					<span aria-hidden='true'>&laquo;</span>
				</ListItem>

				{pages.map((_, index) => {
					return (
						<ListItem
							key={index + 1}
							isActive={index === activePageNum - 1}
							onClick={() => onPageChange(index + 1)}
						>
							{index + 1}
						</ListItem>
					);
				})}
				<ListItem isActive={false} onClick={handleNextPage}>
					<span aria-hidden='true'>&raquo;</span>
				</ListItem>
			</ul>
		</nav>
	);
};

const ListItem = ({ children, isActive, onClick }) => {
	const handleClick = (evt) => {
		evt.preventDefault();
		onClick();
	};

	const linkClasses = `page-link border-dark no-outlines ${isActive ? 'bg-info text-dark' : 'bg-dark text-info'}`;

	return (
		<li className='page-item'>
			<a className={linkClasses} href='#' aria-label='Previous' onClick={handleClick}>
				{children}
			</a>
		</li>
	);
};

ListItem.propTypes = {
	children: PropTypes.node.isRequired,
	isActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

PaginationView.propTypes = {
	pagesCount: PropTypes.number.isRequired,
	activePageNum: PropTypes.number.isRequired,
	onPageChange: PropTypes.func,
};

export default PaginationView;
