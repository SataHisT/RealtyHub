import { useQuery, useMutation, useQueryClient } from 'react-query'
import { fetchProperties, deleteProperty } from '@/app/api/properties'
import { Property } from '@/types/property'
import Link from 'next/link'

const PropertyList = () => {
	const queryClient = useQueryClient()
	const { data: properties = [], isLoading, isError } = useQuery<Property[]>('properties', fetchProperties)
	const mutation = useMutation<void, unknown, string>(deleteProperty, {
		onSuccess: () => {
			queryClient.invalidateQueries('properties')
		}
	})

	if (isLoading) return <p className="text-center">Загрузка...</p>
	if (isError) return <p className="text-center text-red-500">Ошибка загрузки.</p>

	// Добавляем проверку, если properties пустой
	if (!properties.length) return <p className="text-center">Нет доступных объектов.</p>

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Управление объектами</h1>
			<Link href="/admin/properties/create">
				<a className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600">Добавить объект</a>
			</Link>
			<table className="min-w-full divide-y divide-gray-200 mt-4">
				<thead>
					<tr>
						<th className="px-6 py-3 bg-gray-100">Название</th>
						<th className="px-6 py-3 bg-gray-100">Адрес</th>
						<th className="px-6 py-3 bg-gray-100">Площадь</th>
						<th className="px-6 py-3 bg-gray-100">Действия</th>
					</tr>
				</thead>
				<tbody>
					{properties.map((property) => (
						<tr key={property.id}>
							<td className="px-6 py-4">{property.title}</td>
							<td className="px-6 py-4">{property.address}</td>
							<td className="px-6 py-4">{property.area} м²</td>
							<td className="px-6 py-4">
								<Link href={`/admin/properties/edit/${property.id}`}>
									<a className="text-blue-500 hover:underline">Редактировать</a>
								</Link>
								<button className="text-red-500 hover:underline ml-4" onClick={() => mutation.mutate(property.id)}>
									Удалить
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default PropertyList
