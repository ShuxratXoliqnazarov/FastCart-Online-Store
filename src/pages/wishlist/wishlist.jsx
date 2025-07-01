import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import { Button } from '@mui/material'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { useEffect, useState } from 'react'
import { useCartStore } from '../../stores/cartStore'
import { toast, Toaster } from 'sonner'

import { Link, useNavigate } from 'react-router-dom'
import { useMainStore } from '../../stores/mainStore'
import { API } from '../../utils/config'

export default function Wishlist() {
	const { addToCart } = useCartStore()
	const { product, getProducts } = useMainStore()

	const [wishlist, setWishlist] = useState([])
	useEffect(() => {
		let savedItems = []
		try {
			const storedWish = localStorage.getItem('wish')
			if (storedWish) {
				const parsedData = JSON.parse(storedWish)

				if (
					parsedData &&
					parsedData.state &&
					Array.isArray(parsedData.state.items)
				) {
					savedItems = parsedData.state.items
				} else {
					console.warn(
						"Data in localStorage for 'wish' is not in the expected format (object with state.items array). Resetting wishlist."
					)
					savedItems = []
				}
			}
		} catch (e) {
			console.error('Failed to parse wishlist from localStorage:', e)
			savedItems = []
		}
		setWishlist(savedItems)
		getProducts()
	}, [])

	function deleteFromWishlist(id) {
		const updatedItems = wishlist.filter(el => el.id !== id)

		let currentStoredData = {}
		try {
			const stored = localStorage.getItem('wish')
			if (stored) {
				currentStoredData = JSON.parse(stored)
			}
		} catch (e) {
			console.error(
				'Error parsing existing wishlist from localStorage for deletion:',
				e
			)
		}

		const newStoredData = {
			...currentStoredData, // Копируем остальные свойства, если они есть (например, 'version')
			state: {
				...currentStoredData.state, // Копируем остальные свойства state, если они есть
				items: updatedItems, // Обновляем массив items
			},
		}

		localStorage.setItem('wish', JSON.stringify(newStoredData))
		setWishlist(updatedItems)
		toast.success('Deleted from wishlist❗')
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

	const SwiperNavButtons = () => {
		const swiper = useSwiper()

		return (
			<div className='absolute top-[-20px] right-0 z-10 flex gap-2 mt-4 mr-4'>
				<button
					className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors'
					onClick={() => swiper.slidePrev()}
				>
					<svg
						className='w-5 h-5 text-gray-700'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M10 19l-7-7m0 0l7-7m-7 7h18'
						></path>
					</svg>
				</button>
				<button
					className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors'
					onClick={() => swiper.slideNext()}
				>
					<svg
						className='w-5 h-5 text-gray-700'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M14 5l7 7m0 0l-7 7m7-7H3'
						></path>
					</svg>
				</button>
			</div>
		)
	}
	return (
		<>
			<section className='md:max-w-[1400px] md:m-auto p-5'>
				<div className='flex justify-between items-center md:my-5 my-10'>
					<h2>Wishlist ({wishlist.length})</h2>
				</div>
				{wishlist.length === 0 ? (
					<div className='text-center text-lg text-gray-600'>
						Your wishlist is empty. Add some products!
					</div>
				) : (
					<>
						<div className='hidden md:block'>
							<div className='relative'>
								<Swiper
									spaceBetween={10}
									slidesPerView={4}
									onSlideChange={() => console.log('slide change')}
									onSwiper={swiper => console.log(swiper)}
									className='h-[550px]'
								>
									<SwiperNavButtons />

									{wishlist.map(el => (
										<SwiperSlide className='mt-10' key={el.id}>
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
															onClick={() => deleteFromWishlist(el.id)}
															className='hover:scale-110 transition-transform'
															sx={{
																backgroundColor: '',
																color: 'red',
															}}
														>
															<DeleteOutlineOutlinedIcon />
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
													<h2 className='font-bold text-xl'>
														{el.productName}
													</h2>
													<div className='flex gap-4 items-center'>
														<p className='text-red-600 text-lg font-semibold'>{`${el.price} tjs`}</p>
														<p className='line-through text-gray-400'>$160</p>
													</div>
													<div className='text-yellow-400 text-lg'>
														⭐⭐⭐⭐⭐
													</div>
												</div>
											</article>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>

						<div className='md:hidden '>
							<Swiper
								spaceBetween={10}
								slidesPerView={1.1}
								onSlideChange={() => console.log('slide change')}
								onSwiper={swiper => console.log(swiper)}
								className='h-[550px]'
							>
								<SwiperNavButtons />

								{wishlist.map(el => (
									<SwiperSlide className='mt-10' key={el.id}>
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
														onClick={() => deleteFromWishlist(el.id)}
														className='hover:scale-110 transition-transform'
														sx={{
															backgroundColor: '',
															color: 'red',
														}}
													>
														<DeleteOutlineOutlinedIcon />
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
												<div className='text-yellow-400 text-lg'>
													⭐⭐⭐⭐⭐
												</div>
											</div>
										</article>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</>
				)}
			</section>

			<section className='md:max-w-[1400px] md:m-auto p-5 '>
				<div className='flex justify-between items-center '>
					<div className=' w-[170px] flex justify-between items-center mt-5 mb-[30px] '>
						<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
						<p className='font-bold text-[20px] text-[#DB4444]'>Our Products</p>
					</div>
				</div>

				<div className='hidden md:block'>
					<div className='relative'>
						<Swiper
							spaceBetween={10}
							slidesPerView={4}
							onSlideChange={() => console.log('slide change')}
							onSwiper={swiper => console.log(swiper)}
							className='h-[550px]'
						>
							<SwiperNavButtons />

							{product?.map(el => (
								<SwiperSlide className='mt-10' key={el.id}>
									<article
										key={el.id}
										className='relative flex flex-col gap-5 p-5 w-[300px] bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
									>
										<div className='relative flex flex-col gap-5 p-10 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors'>
											<div className='absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
												-40%
											</div>
											<div className='absolute top-3 right-3 flex flex-row gap-2'>
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
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				<section className='p-5 md:hidden '>
					<Swiper
						spaceBetween={10}
						slidesPerView={1.1}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
						className='h-[550px]'
					>
						<SwiperNavButtons />

						{product?.map(el => (
							<SwiperSlide className='mt-10' key={el.id}>
								<article
									key={el.id}
									className='relative flex flex-col gap-5 p-5 w-[300px] bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
								>
									<div className='relative flex flex-col gap-5 p-10 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors'>
										<div className='absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
											-40%
										</div>
										<div className='absolute top-3 right-3 flex flex-row gap-2'>
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
							</SwiperSlide>
						))}
					</Swiper>
				</section>
			</section>
			<Toaster position='top-right' richColors />
		</>
	)
}
