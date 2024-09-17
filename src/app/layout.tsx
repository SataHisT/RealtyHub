import type { Metadata } from 'next'
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
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
