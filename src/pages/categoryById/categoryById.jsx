import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useCategory } from '../../stores/categoryStore'
import { Button } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import FavoriteIcon from '@mui/icons-material/Favorite'

import { API } from '../../utils/config'
import { toast, Toaster } from 'sonner'
import { useCartStore } from '../../stores/cartStore'
import { useWishlistStore } from '../../stores/wishlistStore'

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

	// ! Wishlist functions
	const addItemToWishlist = useWishlistStore(state => state.addItem)
	const removeItemFromWishlist = useWishlistStore(state => state.removeItem)
	const wishlistItems = useWishlistStore(state => state.items)
	const isInWishlist = id => wishlistItems.some(item => item.id === id)

	function handleToggleWishlist(prod) {
		if (!localStorage.getItem('token')) {
			toast.custom(
				t => (
					<div className='flex flex-col gap-2 p-4 rounded-md shadow-md border border-gray-300 bg-white max-w-sm'>
						<span className='text-sm text-black'>
							Please registrate or login for adding product to your wishlist 😊
						</span>
						<div className='flex justify-end gap-2'>
							<button
								onClick={() => toast.dismiss(t)}
								className='border border-gray-400 px-3 py-1 text-sm rounded hover:bg-gray-100 transition'
							>
								Отмена
							</button>

							<button
								onClick={() => {
									navigate('/login')
									toast.dismiss(t)
								}}
								className='border border-blue-600 text-blue-600 px-3 py-1 text-sm rounded hover:bg-blue-50 transition'
							>
								Ok
							</button>
						</div>
					</div>
				),
				{
					duration: Infinity,
				}
			)
			return
		}

		if (isInWishlist(prod.id)) {
			removeItemFromWishlist(prod.id)
			// toast.info('Successfully removed from wishlist✌️')
		} else {
			addItemToWishlist(prod)
			// toast.info('Successfully added to wishlist✌️')
		}
	}

	const navigate = useNavigate()

	function handleAddToCart(id) {
		const token = localStorage.getItem('token')

		if (!token) {
			toast.custom(
				t => (
					<div className='flex flex-col gap-2 p-4 rounded-md shadow-md border border-gray-300 bg-white max-w-sm'>
						<span className='text-sm text-black'>
							Please registrate or login for adding product to your cart 😊
						</span>
						<div className='flex justify-end gap-2'>
							<button
								onClick={() => toast.dismiss(t)}
								className='border border-gray-400 px-3 py-1 text-sm rounded hover:bg-gray-100 transition'
							>
								Отмена
							</button>

							<button
								onClick={() => {
									navigate('/login')
									toast.dismiss(t)
								}}
								className='border border-blue-600 text-blue-600 px-3 py-1 text-sm rounded hover:bg-blue-50 transition'
							>
								Ok
							</button>
						</div>
					</div>
				),
				{
					duration: Infinity,
				}
			)
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
											onClick={() => handleToggleWishlist(el)}
											className='hover:scale-110 transition-transform'
											sx={{
												backgroundColor: '',

												color: isInWishlist(el.id) ? 'red' : 'gray',
											}}
										>
											{isInWishlist(el.id) ? (
												<FavoriteIcon />
											) : (
												<FavoriteBorderOutlinedIcon />
											)}
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
		</>
	)
}
