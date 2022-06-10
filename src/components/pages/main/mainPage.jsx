import React from 'react';

import Header from './components/header';
import Sidebar from './components/sidebar';
import MainPageRoutes from './mainPageRoutes';

import Orders from './orders';
import Stocks from './stocks/stocks';
import Logout from '../logout';

const routes = [
	{ title: 'Заказы', uri: '/orders', path: '/orders/*', element: <Orders /> },
	{ title: 'Остатки', uri: '/stocks', path: '/stocks/*', element: <Stocks /> },
	{ title: 'Аналитика', uri: '/analytics', path: '/analytics/*', element: <h1>analytics</h1> },
	{ title: 'Выйти', uri: '/logout', path: '/logout/*', element: <Logout /> },
];

const MainPage = () => {
	return (
		<>
			<Header />
			<div className='container-fluid d-flex p-0'>
				<Sidebar items={routes} />

				<div className='w-100 m-0 bg-gray-100 bg-gradient p-1'>
					<MainPageRoutes routes={routes} />
				</div>
			</div>
		</>
	);
};

export default MainPage;
