const API_BASE_URL = 'http://localhost:5000' // Замените на URL вашего API

// Общие функции для выполнения HTTP-запросов
export const fetchJSON = async (url: string, options: RequestInit = {}) => {
	const response = await fetch(`${API_BASE_URL}${url}`, options)
	if (!response.ok) {
		throw new Error(`Ошибка ${response.status}: ${response.statusText}`)
	}
	return response.json()
}
