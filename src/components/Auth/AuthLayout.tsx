const AuthLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="w-full max-w-md">{children}</div>
		</div>
	)
}

export default AuthLayout
