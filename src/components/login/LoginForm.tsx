'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const [loginError, setLoginError] = useState('')

	const onSubmit = async () => {
		//Логика нажатия на кнопку
	}
	return (
		<div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg w-1/2">
			<h2 className="text-2xl font-bold mb-4 flex justify-center">Вход</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="username" className="block text-sm font-medium text-gray-700">
						Логин
					</label>
					<input
						id="username"
						type="text"
						{...register('username', { required: 'Логин обязательный' })}
						className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
							errors.username ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message as string}</p>}
				</div>
				<div>
					<label htmlFor="password" className="block text-sm font-medium text-gray-700">
						Пароль
					</label>
					<input
						id="password"
						type="password"
						{...register('password', { required: 'Пароль обязательный' })}
						className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
							errors.password ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>}
				</div>
				{loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>}
				<button
					type="submit"
					className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Войти
				</button>
			</form>
		</div>
	)
}

export default LoginForm
