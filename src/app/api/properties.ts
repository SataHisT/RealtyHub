import { fetchJSON } from './index'
import { Property } from '@/types/property'

// Получение списка объектов недвижимости
export const fetchProperties = (): Promise<Property[]> => {
	return fetchJSON('/properties')
}

// Получение информации об объекте по ID
export const getProperty = (id: string): Promise<Property> => {
	return fetchJSON(`/properties/${id}`)
}

// Создание нового объекта недвижимости
export const createProperty = (property: Property): Promise<Property> => {
	return fetchJSON('/properties', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(property)
	})
}

// Обновление информации об объекте
export const updateProperty = (property: Property): Promise<Property> => {
	return fetchJSON(`/properties/${property.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(property)
	})
}

// Удаление объекта по ID
export const deleteProperty = (id: string): Promise<void> => {
	return fetchJSON(`/properties/${id}`, {
		method: 'DELETE'
	})
}
