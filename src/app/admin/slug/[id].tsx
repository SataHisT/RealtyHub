import { useRouter } from 'next/router'
import PropertyForm from '@/components/admin/PropertyForm'

const EditProperty = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Редактировать объект</h1>
			{id && <PropertyForm propertyId={id as string} />}
		</div>
	)
}

export default EditProperty
