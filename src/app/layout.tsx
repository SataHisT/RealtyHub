import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata = {
	title: 'Арендная система',
	description: 'Аренда и продажа недвижимости'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
