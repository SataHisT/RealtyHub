import PropertyForm from '@/components/admin/PropertyForm'

const CreateProperty = () => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Добавить новый объект</h1>
			<PropertyForm />
		</div>
	)
}

export default CreateProperty
