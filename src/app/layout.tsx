import type { Metadata } from 'next'
import { QueryClientProvider } from 'react-query'
import queryClient from '../lib/react-query'
import './globals.css'

export const metadata: Metadata = {
	title: 'Арендная система',
	description: 'Аренда и продажа недвижимости'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</body>
		</html>
	)
}
