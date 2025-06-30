import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useCategory } from '../../stores/categoryStore'
import { Button } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import { API } from '../../utils/config'
import { toast, Toaster } from 'sonner'
import { useCartStore } from '../../stores/cartStore'

export default function CategoryById() {
	const { id } = useParams()
	const {
		getCategory,
		categories,
		cotegoryById,
		product,
		clearProducts,
		subCategoryById,
	} = useCategory()
	const { addToCart } = useCartStore()

	useEffect(() => {
		getCategory(id)
		cotegoryById(id)
		return () => {
			clearProducts()
		}
	}, [])

	const wish = JSON.parse(localStorage.getItem('wish'))

	function handleAddToWishlist(prod) {
		if (!localStorage.getItem('token')) {
			alert('Please registrate or login❗')
			navigate('/login')
		} else {
			let find = wish.find(el => el.id == prod.id)
			if (!find) {
				let product = {
					id: prod.id,
					productName: prod.productName,
					image: prod.image,
					price: prod.price,
					categoryName: prod.categoryName,
				}
				wish.push(product)
				localStorage.setItem('wish', JSON.stringify(wish))
				toast.info('Succesfully added to wishlist✌️')
			} else {
				toast.error('The product is already added on wishlist❗')
			}
		}
	}
	const navigate = useNavigate()

	function handleAddToCart(id) {
		const token = localStorage.getItem('token')

		if (!token) {
			alert('Please login or registrate for adding product to cart❗')
			navigate('/createAcount')
			return
		}

		addToCart(id)
	}
	return (
		<>
			<section className='md:max-w-[1400px] md:m-auto p-5 md:p-0 flex flex-col gap-10'>
				<div>
					<h1 className='text-[35px] font-bold my-5'>
						{categories.categoryName}
					</h1>
					<div className='flex  flex-wrap gap-5 justify-between'>
						{categories?.subCategories?.map(el => (
							<div key={el.id} className=''>
								<Button
									sx={{
										borderRadius: '18px',
										backgroundColor: '#F3F4F5',
										fontSize: '14px',
										'&:hover': {
											backgroundColor: '#d1d5db',
										},
									}}
									color='inherit'
									onClick={() => {
										subCategoryById(el.id)
									}}
								>
									{el.subCategoryName}
								</Button>
							</div>
						))}
						<Button color='error' onClick={() => cotegoryById(id)}>
							See All
						</Button>
					</div>
				</div>

				<aside className=' items-center  flex flex-col    md:gap-5  gap-[30px] md:flex-row md:flex-wrap justify-between '>
					{product.length > 0 ? (
						product?.map(el => (
							<article
								key={el.id}
								className='relative flex flex-col gap-5 p-5 w-[300px] bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
							>
								<div className='relative flex flex-col gap-5 p-10 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors'>
									<div className='absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
										-40%
									</div>
									<div className='absolute top-3 right-3 flex flex-row gap-2'>
										<Button
											color='error'
											onClick={() => handleAddToWishlist(el)}
											className='hover:scale-110 transition-transform'
											sx={{
												backgroundColor: '',
												color: 'red',
											}}
										>
											<FavoriteBorderOutlinedIcon />
										</Button>
										<Link
											to={'/info/' + el.id}
											className='hover:scale-110 transition-transform'
										>
											<RemoveRedEyeOutlinedIcon />
										</Link>
									</div>
									<img
										src={`${API}/images/${el.image}`}
										alt=''
										className='h-[180px] w-[220px] object-contain mx-auto rounded-xl'
									/>
									<Button
										variant='outlined'
										color='inherit'
										onClick={() => handleAddToCart(el.id)}
										className='hover:bg-gray-300 transition-colors'
									>
										Add To Cart
									</Button>
								</div>
								<div className='flex flex-col items-start gap-2'>
									<h2 className='font-bold text-xl'>{el.productName}</h2>
									<div className='flex gap-4 items-center'>
										<p className='text-red-600 text-lg font-semibold'>{`${el.price} tjs`}</p>
										<p className='line-through text-gray-400'>$160</p>
									</div>
									<div className='text-yellow-400 text-lg'>⭐⭐⭐⭐⭐</div>
								</div>
							</article>
						))
					) : (
						<h1 className='text-[30px] text-center '>There is no products</h1>
					)}
				</aside>
			</section>
			<Toaster position='top-right' richColors />
		</>
	)
}
