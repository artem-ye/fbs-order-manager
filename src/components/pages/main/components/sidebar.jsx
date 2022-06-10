import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ items }) => {
	const location = useLocation();

	const renderItem = ({ title, uri }, key) => {
		const textColor = location.pathname.startsWith(uri) ? 'text-info' : 'text-white';

		return (
			<li className='nav-item' key={key}>
				<Link className={`nav-link ${textColor}`} to={uri}>
					{title}
				</Link>
			</li>
		);
	};

	return (
		<div className='mb-2' style={{ width: '270px' }}>
			<ul className='nav flex-column bg-dark text-light'>{items.map(renderItem)}</ul>
		</div>
	);
};

Sidebar.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			uri: PropTypes.string,
		})
	),
};

export default Sidebar;
