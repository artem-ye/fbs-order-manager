import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPageRoutes = ({ routes }) => {
	return (
		<Routes>
			{routes.map((route, index) => {
				const { path, element } = route;
				return <Route path={path} element={element} key={index}></Route>;
			})}
			{routes.length > 0 && <Route path='*' element={<Navigate to={routes[0].uri} replace />} />}
		</Routes>
	);
};

MainPageRoutes.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string,
			uri: PropTypes.string,
		})
	),
};

export default MainPageRoutes;
