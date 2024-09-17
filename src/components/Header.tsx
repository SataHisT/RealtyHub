import Buttons from './Button'

export const Header = () => {
	return (
		<div className="flex flex-row items-center justify-between w-full h-14 px-8">
			<div className="flex flex-row items-center">
				<img src="../" alt="Логотип" />
				<div className="ml-3 text-lg">Арендная система</div>
			</div>

			<div className="flex flex-row items-center gap-2 text-lg">
				<Buttons label="О компании" variant="secondary" />
				<Buttons label="Недвижимость" variant="secondary" />
				<Buttons label="Контакты" variant="secondary" />
				<Buttons label="Отзывы" variant="secondary" />
				<Buttons label="Контакты" variant="secondary" />

				<div className="flex flex-col items-center px-2">
					<p className="text-sm">Звоните!</p>
					<p className="text-base">+7 999 999 99 99</p>
				</div>

				<Buttons label="Заказать звонок" variant="primary" />
			</div>
		</div>
	)
}
