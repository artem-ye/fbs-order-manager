import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ children }) => {
	return (
		<div className='mt-1 mb-3 me-1 ms-1'>
			<div className='btn-toolbar justify-content-between mt-1 mb-3 me-1' role='toolbar' aria-label=''>
				{children}
			</div>
		</div>
	);
};

Toolbar.propTypes = {
	children: PropTypes.node,
};

export default Toolbar;
