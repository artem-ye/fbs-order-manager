import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/main';
import LoginPage from './components/pages/login';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<MainPage />}></Route>
					<Route path='/login' element={<LoginPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
