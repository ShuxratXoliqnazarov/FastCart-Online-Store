import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import delivery from '@/assets/delivery.png'
import returnak from '@/assets/returnak.png'

import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useInfoStore } from '../../stores/infoStore'
import { useEffect, useState } from 'react'
import { useWishlistStore } from '../../stores/wishlistStore'
import { useCartStore } from '../../stores/cartStore'
import { toast } from 'sonner'

export default function Info() {
	const { id } = useParams()
	console.log('Info Id:', id)
	const { getInfo, infoData } = useInfoStore()
	const { addToCart } = useCartStore()
	useEffect(() => {
		getInfo(id)
	}, [id])

	console.log('Info Datas.jsx: ', infoData)

	const [mainImage, setMainImage] = useState(null)
	useEffect(() => {
		if (infoData.images?.length > 0) {
			setMainImage(infoData.images[0].images)
		} else {
			setMainImage(null)
		}
	}, [infoData])

	const [cnt, setCnt] = useState(1)

	function inc() {
		setCnt(prevCnt => prevCnt + 1)
	}
	function dec() {
		setCnt(prevCnt => (prevCnt > 1 ? prevCnt - 1 : 1))
	}

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
		} else {
			addItemToWishlist(prod)
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
			<section className='md:max-w-[1400px] md:m-auto flex md:flex-row p-5 gap-8 flex-col justify-between '>
				<div className='flex flex-col md:flex-row gap-6 lg:gap-10 items-start'>
					<div className='flex md:flex-col gap-3 md:gap-4'>
						{infoData.images?.map((img, index) => (
							<img
								key={img.id}
								src={`http://37.27.29.18:8002/images/${img.images}`}
								alt={`preview-${index}`}
								onClick={() => setMainImage(img.images)}
								className={`
                                    w-20 h-20 object-cover rounded-lg cursor-pointer
                                    border-2 transition-all duration-200 ease-in-out
                                    ${
																			mainImage === img.images
																				? 'border-red-500 shadow-md scale-105'
																				: 'border-gray-300 hover:border-gray-400'
																		}
                                `}
							/>
						))}
					</div>

					<div className='flex-1 flex justify-center items-center bg-gray-100 rounded-xl p-4 shadow-inner'>
						{mainImage ? (
							<img
								src={`http://37.27.29.18:8002/images/${mainImage}`}
								className='max-h-[500px] w-[500px] rounded-lg'
							/>
						) : (
							<div className='flex items-center justify-center max-h-[500px] w-full h-[300px] text-gray-500'>
								Загрузка изображения...
							</div>
						)}
					</div>
				</div>

				<aside className='flex flex-col gap-6 justify-between md:w-[45%] lg:w-[40%]'>
					<div className='flex flex-col border-b pb-6 gap-4'>
						<h1 className='text-3xl lg:text-4xl font-bold text-gray-900'>
							{infoData.productName || 'Название продукта'}
						</h1>
						<div className='flex items-center gap-1 text-yellow-500 text-xl'>
							⭐⭐⭐⭐⭐{' '}
							<span className='text-gray-500 text-sm ml-2'>(150 Reviews)</span>
						</div>
						<p className='font-bold text-3xl text-red-600'>
							{infoData.price ? `${infoData.price} tjs` : 'Цена не указана'}
						</p>
						<p className='text-gray-700 text-base leading-relaxed'>
							{infoData.description || 'Описание продукта отсутствует.'}
						</p>
					</div>

					<div className='flex flex-col gap-7'>
						<div className='flex items-center gap-4 flex-wrap'>
							<p className='text-lg font-semibold text-gray-800'>Size: </p>
							{['XS', 'S', 'M', 'L', 'XL'].map(size => (
								<Button
									key={size}
									variant='outlined'
									color='inherit'
									className='
                                        min-w-[40px] px-3 py-2 text-sm font-medium
                                        rounded-md border border-gray-300 text-gray-700
                                        hover:bg-gray-100 hover:border-red-500 hover:text-red-500
                                        transition-all duration-200 ease-in-out
                                        focus:outline-none focus:ring-2 focus:ring-red-500
                                    '
									sx={{
										'&.MuiButton-outlinedInherit:hover': {
											borderColor: 'red',
											color: 'red',
										},
									}}
								>
									{size}
								</Button>
							))}
						</div>

						<div className='flex justify-start md:gap-6 lg:gap-8 flex-col sm:flex-row items-start gap-4'>
							<div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
								<Button
									variant='text'
									color='inherit'
									sx={{
										height: '50px',
										minWidth: '40px',
										fontSize: '1.5rem',
										fontWeight: 'bold',
									}}
									onClick={dec}
									className='bg-gray-100 hover:bg-gray-200 transition-colors'
								>
									-
								</Button>
								<input
									type='text'
									readOnly
									className='
                                        w-[80px] h-[50px] text-center text-xl font-semibold
                                        border-l border-r border-gray-300 focus:outline-none
                                        bg-white text-gray-800
                                    '
									value={cnt}
								/>
								<Button
									variant='text'
									color='inherit'
									sx={{
										height: '50px',
										minWidth: '40px',
										fontSize: '1.5rem',
										fontWeight: 'bold',
									}}
									onClick={inc}
									className='bg-gray-100 hover:bg-gray-200 transition-colors'
								>
									+
								</Button>
							</div>

							<Button
								variant='contained'
								sx={{
									height: '50px',
									px: 5,
									backgroundColor: 'red',
									'&:hover': { backgroundColor: 'darkred' },
								}}
								onClick={() => handleAddToCart(infoData.id)}
								className='
                                    flex-grow sm:flex-grow-0 text-white font-semibold rounded-lg shadow-md
                                    hover:scale-105 transform transition-transform duration-200
                                '
							>
								Buy Now
							</Button>

							<Button
								color='error'
								onClick={() => handleToggleWishlist(infoData)}
								className='hover:scale-110 transition-transform'
								sx={{
									backgroundColor: '',
									color: isInWishlist(infoData.id) ? 'red' : 'gray',
								}}
							>
								{isInWishlist(infoData.id) ? (
									<FavoriteIcon />
								) : (
									<FavoriteBorderOutlinedIcon />
								)}
							</Button>
						</div>

						<div className='flex flex-col border border-gray-300 rounded-lg overflow-hidden mt-4 shadow-sm'>
							<div className='flex items-center gap-4 p-4 border-b border-gray-300 bg-white hover:bg-gray-50 transition-colors'>
								<img
									src={delivery}
									alt='Delivery icon'
									className='w-8 h-8 object-contain'
								/>
								<div>
									<h2 className='font-semibold text-lg text-gray-800'>
										Free Delivery
									</h2>
									<p className='text-gray-600 text-sm'>
										Enter your postal code for Delivery Availability
									</p>
								</div>
							</div>
							<div className='flex items-center gap-4 p-4 bg-white hover:bg-gray-50 transition-colors'>
								<img
									src={returnak}
									alt='Return icon'
									className='w-8 h-8 object-contain'
								/>
								<div>
									<h2 className='font-semibold text-lg text-gray-800'>
										Return Policy
									</h2>{' '}
									<p className='text-gray-600 text-sm'>Free 30 Days Returns</p>{' '}
								</div>
							</div>
						</div>
					</div>
				</aside>
			</section>
		</>
	)
}
