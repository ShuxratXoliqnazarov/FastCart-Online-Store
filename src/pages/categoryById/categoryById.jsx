import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCategory } from '../../stores/categoryStore'

export default function CategoryById() {
	const { id } = useParams()
	const { getCategory } = useCategory()

	useEffect(() => {
		getCategory(id)
	}, [])
	return (
		<>
			<h1>Category By ID</h1>
		</>
	)
}
