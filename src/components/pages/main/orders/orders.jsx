import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OrdersList from './ordersList/ordersList';
import Order from './order/order';

const Orders = () => {
	return (
		<Routes>
			<Route path='/' element={<OrdersList />}></Route>
			<Route path='/:orderId' element={<Order />}></Route>
		</Routes>
	);
};

export default Orders;
