import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { getProperty, createProperty, updateProperty } from '@/app/api/properties'
import { useRouter } from 'next/router'

interface PropertyFormProps {
	propertyId?: string
}

const PropertyForm = ({ propertyId }: PropertyFormProps) => {
	const { register, handleSubmit, setValue } = useForm()
	const router = useRouter()

	const { data: property } = useQuery(['property', propertyId], () => getProperty(propertyId!), {
		enabled: !!propertyId,
		onSuccess: (data) => {
			setValue('title', data.title)
			setValue('description', data.description)
			setValue('address', data.address)
			setValue('area', data.area)
		}
	})

	const mutation = useMutation(propertyId ? updateProperty : createProperty, {
		onSuccess: () => {
			router.push('/admin/properties')
		}
	})

	const onSubmit = (data: any) => {
		mutation.mutate({ ...data, id: propertyId })
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<input {...register('title')} placeholder="Название" className="input" required />
			<textarea {...register('description')} placeholder="Описание" className="textarea" required />
			<input {...register('address')} placeholder="Адрес" className="input" required />
			<input type="number" {...register('area')} placeholder="Площадь" className="input" required />
			<input type="file" {...register('photos')} multiple className="input" />
			<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600">
				Сохранить
			</button>
			<button
				type="button"
				onClick={() => router.push('/admin/properties')}
				className="bg-gray-500 text-white px-4 py-2 rounded shadow-md hover:bg-gray-600"
			>
				Отменить
			</button>
		</form>
	)
}

export default PropertyForm
