import Button from './Button'

export const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center py-6 bg-gray-800 text-white">
			<div className="flex flex-row gap-4 mb-4">
				<Button label="О компании" variant="primary" />
				<Button label="Недвижимость" variant="primary" />
				<Button label="Контакты" variant="primary" />
				<Button label="Отзывы" variant="primary" />
			</div>
			<p className="text-sm">© 2024 Арендная система</p>
		</footer>
	)
}
