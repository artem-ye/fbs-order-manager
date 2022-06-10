import React from 'react';
import PropTypes from 'prop-types';

import Radio from '../../../../common/radio';
import Search from '../../../../common/search';
import Toolbar from '../../../../common/toolbar';

const OrdersListToolBar = ({ state, onChange, statusOptions }) => {
	const handleChange = (data) => {
		onChange(data);
	};

	return (
		<Toolbar>
			<Radio name={'status'} value={state['status']} onChange={handleChange} options={statusOptions} />
			<Search name={'search'} value={state['search']} onChange={handleChange} placeholder={'Номер заказа'} />
		</Toolbar>
	);
};

OrdersListToolBar.propTypes = {
	state: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	statusOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrdersListToolBar;
