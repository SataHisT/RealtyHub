import { NextPage } from 'next'
import LoginForm from '@/components/login/LoginForm'

const LoginPage: NextPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<LoginForm />
		</div>
	)
}

export default LoginPage
