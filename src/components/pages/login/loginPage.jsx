import React from 'react';

const LoginPage = () => {
	return (
		<div className='container-fluid d-flex justify-content-center pt-5'>
			<div>
				<h1 className='text-white-50'>Требуется авторизация</h1>
				<form className='text-white'>
					<div className='mb-3'>
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Имя пользователя
						</label>
						<input
							type='email'
							className='form-control '
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						></input>
					</div>

					<div className='mb-3'>
						<label htmlFor='exampleInputPassword1' className='form-label'>
							Пароль
						</label>
						<input type='password' className='form-control' id='exampleInputPassword1'></input>
					</div>

					<button type='submit' className='btn btn-secondary'>
						Войти
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
