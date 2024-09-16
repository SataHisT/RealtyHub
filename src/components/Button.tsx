import React from 'react'
import Link from 'next/link'

type ButtonProps = {
	label: string
	variant?: 'primary' | 'secondary'
	href?: string
	onClick?: () => void
	className?: string
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', href, onClick }) => {
	const baseStyle = 'px-4 py-2 rounded'
	const variantStyle =
		variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-transparent text-black hover:text-blue-500'

	if (href) {
		// Если передана ссылка, рендерим <Link>
		return (
			<Link href={href} passHref>
				<a className={`${baseStyle} ${variantStyle}`}>{label}</a>
			</Link>
		)
	}

	// Иначе рендерим обычную кнопку
	return (
		<button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
			{label}
		</button>
	)
}

export default Button
