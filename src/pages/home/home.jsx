import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import iPhone from '@/assets/iPhone.png'
import 'swiper/css'

import { Button } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link, useNavigate } from 'react-router-dom'
import pq from '@/assets/pq.jpeg'
import k from '@/assets/k.jpeg'
import mackBook from '@/assets/p.jpeg'
import jbl from '@/assets/jbl.png'
import girdak from '@/assets/girdak.png'
import ps from '@/assets/ps.png'
import woman from '@/assets/woman.png'
import speaker from '@/assets/speaker.png'
import parfume from '@/assets/parfume.png'
import service from '@/assets/Services.png'
import custom from '@/assets/custom.png'
import ser from '@/assets/ser.png'
import { useMainStore } from '../../stores/mainStore'
import { useEffect, useState } from 'react'
import { useCartStore } from '../../stores/cartStore'
import { toast, Toaster } from 'sonner'
import { API } from '../../utils/config'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useWishlistStore } from '../../stores/wishlistStore'
import naush from '@/assets/naush.jpeg'
import hx from '@/assets/for_swipper.jpg'
import yx from '@/assets/prooo.jpg'
import yy from '@/assets/yy.jpg'

export default function Home() {
	const { category, getCategory, getProducts, product } = useMainStore()
	const { addToCart, data } = useCartStore()

	useEffect(() => {
		getCategory()
		getProducts()
	}, [])
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

	// ! Wishlist functions
	const addItemToWishlist = useWishlistStore(state => state.addItem)
	const removeItemFromWishlist = useWishlistStore(state => state.removeItem)
	const isInWishlist = useWishlistStore(state => state.isInWishlist)

	function handleToggleWishlist(prod) {
		if (!localStorage.getItem('token')) {
			alert('Please registrate or login❗')
			navigate('/login')
			return
		}

		if (isInWishlist(prod.id)) {
			removeItemFromWishlist(prod.id)
		} else {
			addItemToWishlist(prod)
		}
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

	// ! Flash Sales FUnctional
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const hours = currentTime.getHours()
	const minutes = currentTime.getMinutes()
	const seconds = currentTime.getSeconds()

	const formatTime = time => {
		return time < 10 ? `0${time}` : time
	}

	return (
		<>
			<section className='flex flex-col gap-[30px] md:max-w-[1400px] md:m-auto md:flex-row md:items-center '>
				<aside className='p-5 md:w-[30%]'>
					<ul className='flex flex-wrap gap-5 md:gap-2 text-[20px] md:flex-col md:items-start md:border-r-[1px] border-gray-300'>
						{category.map(el => (
							<li
								className='bg-gray-200 p-1 rounded-[5px] md:bg-white '
								key={el.id}
							>
								<Button
									color='inherit'
									sx={{ display: 'flex', gap: '80px', padding: '2px 5px' }}
								>
									<Link to={'/category/' + el.id}>{el.categoryName}</Link>
								</Button>
							</li>
						))}
					</ul>
				</aside>

				<aside className=' md:w-[70%]'>
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
						modules={[Autoplay]}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						loop={true}
						className='h-[550px] '
					>
						<SwiperSlide className='mt-[50px]'>
							<img
								src={iPhone}
								alt='iPhone image 1'
								className='w-full h-[300px]  md:h-[450px] md:rounded-[10px] '
							/>
						</SwiperSlide>
						<SwiperSlide className='mt-[50px] rounded-[10px]'>
							<img
								src={yy}
								alt='iPhone image 2'
								className='w-full h-[300px]  md:h-[450px] md:rounded-[10px]'
							/>
						</SwiperSlide>
						<SwiperSlide className='mt-[50px]'>
							<img
								src={hx}
								alt='iPhone image 3'
								className='w-full h-[300px]  md:h-[450px] md:rounded-[10px]'
							/>
						</SwiperSlide>
						<SwiperSlide className='mt-[50px]'>
							<img
								src={yx}
								alt='iPhone image 4'
								className='w-full h-[280px]  md:h-[450px] md:rounded-[10px]'
							/>
						</SwiperSlide>
					</Swiper>
				</aside>
			</section>

			{/* //? Time */}
			<section className='md:max-w-[1400px] md:m-auto p-5'>
				<div className=' w-[120px] flex justify-between items-center ml-[20px] md:mt-5 md:ml-0 mt-[-80px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>Today’s</p>
				</div>
				<div className='p-5 md:p-0 md:py-3 md:ml-0 md:flex-row md:flex items-end gap-[80px]'>
					<div className='flex gap-5 items-end font-bold'>
						<div>
							<p>Hours</p>
							<h2 className='text-[35px]'>{formatTime(hours)}</h2>
						</div>
						<div>
							<p>Minutes</p>
							<h2 className='text-[35px]'>{formatTime(minutes)}</h2>
						</div>
						<div>
							<p>Seconds</p>
							<h2 className='text-[35px]'>{formatTime(seconds)}</h2>
						</div>
					</div>
				</div>
			</section>

			{/* // ? Swiper 1 */}

			<section className='hidden md:block md:max-w-[1400px] md:m-auto'>
			
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
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

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
										<Button
											color='error'
											onClick={() => handleToggleWishlist(el)}
											className='hover:scale-110 transition-transform'
											sx={{
												backgroundColor: '',
												// ! Здесь меняется цвет иконки в зависимости от состояния в Zustand
												color: isInWishlist(el.id) ? 'red' : 'gray',
											}}
										>
											{/* ! Здесь меняется сама иконка в зависимости от состояния в Zustand */}
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
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<button className='bg-[#DB4444] text-white px-10 py-4 block m-auto mt-[20px] rounded-[5px]'>
				<Link to={'/products'}>View All Products</Link>{' '}
			</button>

			<hr className='hidden md:block text-gray-300 mb-[40px] mt-[40px] md:max-w-[1400px] m-auto' />

			{/* //? Swiper 2 (categoris) */}

			<section className=' hidden md:block md:max-w-[1400px] m-auto md:mt-[50px]'>
				<div className=' w-[150px] flex justify-between items-center mb-[30px]  mt-5 md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>Categories</p>
				</div>
				<h1 className='md:text-[30px] font-bold md:mb-[30px]'>
					Browse By Category
				</h1>
				<div className='relative'>
					<Swiper
						spaceBetween={40}
						slidesPerView={6}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
						className='h-[300px]'
					>
						<SwiperNavButtons />
						{category.map(el => (
							<SwiperSlide key={el.id} className='mt-12'>
								<div
									className='
                    flex flex-col items-center p-5 w-[170px] h-[200px] gap-3
                    rounded-xl shadow-lg border border-gray-200
                    transform transition-all duration-300 ease-in-out
                    hover:scale-100 hover:shadow-2xl hover:border-[#DB4444]
                    relative overflow-hidden
                '
								>
									<div className='absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300'></div>

									<Link to={'/category/' + el.id} className='z-10'>
										<img
											src={`http://37.27.29.18:8002/images/${el.categoryImage}`}
											alt={el.categoryName}
											className='
                            h-24 w-24 object-contain mx-auto
                            transition-transform duration-300 ease-in-out
                            group-hover:scale-110 // Пример: если бы родитель был group
                        '
										/>
									</Link>
									<h2 className='font-semibold text-lg text-gray-800 mt-2 z-10'>
										{el.categoryName}
									</h2>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			<section className=' p-5 md:hidden md:max-w-[1400px] m-auto md:mt-[50px]'>
				<h1 className='text-[25px] my-[50px] font-bold'>Browse By Category</h1>
				<Swiper
					spaceBetween={30}
					slidesPerView={1.8}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
					className='h-[300px]'
				>
					<SwiperNavButtons />
					{category.map(el => (
						<SwiperSlide key={el.id} className='mt-12'>
							<div
								className='
                    flex flex-col items-center p-5 w-[170px] h-[200px] gap-3
                    rounded-xl shadow-lg border border-gray-200
                    transform transition-all duration-300 ease-in-out
                    hover:scale-100 hover:shadow-2xl hover:border-[#DB4444]
                    relative overflow-hidden
                '
							>
								<div className='absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300'></div>

								<Link to={'/category/' + el.id} className='z-10'>
									<img
										src={`http://37.27.29.18:8002/images/${el.categoryImage}`}
										alt={el.categoryName}
										className='
                            h-24 w-24 object-contain mx-auto
                            transition-transform duration-300 ease-in-out
                            group-hover:scale-110 // Пример: если бы родитель был group
                        '
									/>
								</Link>
								<h2 className='font-semibold text-lg text-gray-800 mt-2 z-10'>
									{el.categoryName}
								</h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<hr className='hidden md:block text-gray-300 mb-[40px] mt-[40px] md:max-w-[1400px] m-auto' />

			{/* //? Swipper 3 */}

			<section className=' hidden md:block md:max-w-[1400px] md:m-auto'>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>This Month</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] '>
					<h1 className='text-[35px] font-bold'>Best Selling Products</h1>
				</div>

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
											<Button
												color='error'
												onClick={() => handleToggleWishlist(el)}
												className='hover:scale-110 transition-transform'
												sx={{
													backgroundColor: '',
													// ! Здесь меняется цвет иконки в зависимости от состояния в Zustand
													color: isInWishlist(el.id) ? 'red' : 'gray',
												}}
											>
												{/* ! Здесь меняется сама иконка в зависимости от состояния в Zustand */}
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
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			<section className='p-5 md:hidden  '>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>This Month</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] mb-10 '>
					<h1 className='text-[35px] font-bold'>Best Selling Products</h1>
				</div>
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
										<Button
											color='error'
											onClick={() => handleToggleWishlist(el)}
											className='hover:scale-110 transition-transform'
											sx={{
												backgroundColor: '',
												// ! Здесь меняется цвет иконки в зависимости от состояния в Zustand
												color: isInWishlist(el.id) ? 'red' : 'gray',
											}}
										>
											{/* ! Здесь меняется сама иконка в зависимости от состояния в Zustand */}
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
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			{/* //? Section (Kalonka JBL) */}

			<section className=' p-5 md:p-5 md:max-w-[1400px] md:m-auto bg-black text-white flex-col flex md:flex-row md:justify-between md:mt-[100px] mt-10 mb-10 md:mb-[100px]'>
				<aside className='md:w-[40%] flex flex-col md:flex-col gap-7 items-start'>
					<p className='text-[#00FF66]'>Categories</p>
					<h1 className='text-[40px] font-bold md:text-[50px]'>
						Enhance Your Music Experience
					</h1>
					<div className='flex md:flex-row gap-5'>
						<img src={girdak} alt='' />
						<img src={girdak} alt='' />
						<img src={girdak} alt='' />
						<img src={girdak} alt='' />
					</div>
					<Button
						sx={{ backgroundColor: '#00FF66', color: 'black' }}
						variant='contained'
					>
						Buy Now
					</Button>
				</aside>
				<img src={jbl} alt='' />
			</section>

			{/* //? Swipper 4 (our product) */}
			<section className=' hidden md:block md:max-w-[1400px] md:m-auto'>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>Our Products</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] '>
					<h1 className='md:text-[30px] font-bold md:mb-[30px]'>
						Explore Our Products
					</h1>
				</div>

				<div className='grid columns-4 grid-cols-4 gap-10'>
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
										<Button
											color='error'
											onClick={() => handleToggleWishlist(el)}
											className='hover:scale-110 transition-transform'
											sx={{
												backgroundColor: '',
												// ! Здесь меняется цвет иконки в зависимости от состояния в Zustand
												color: isInWishlist(el.id) ? 'red' : 'gray',
											}}
										>
											{/* ! Здесь меняется сама иконка в зависимости от состояния в Zustand */}
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
						</SwiperSlide>
					))}
				</div>
			</section>

			<section className='  md:hidden p-5'>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>Our Products</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] '>
					<h1 className='md:text-[30px] font-bold md:mb-[30px]'>
						Explore Our Products
					</h1>
				</div>
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
										<Button
											color='error'
											onClick={() => handleToggleWishlist(el)}
											className='hover:scale-110 transition-transform'
											sx={{
												backgroundColor: '',
												// ! Здесь меняется цвет иконки в зависимости от состояния в Zustand
												color: isInWishlist(el.id) ? 'red' : 'gray',
											}}
										>
											{/* ! Здесь меняется сама иконка в зависимости от состояния в Zustand */}
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
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<section className='flex md:flex-row gap-5 flex-col p-5 md:justify-between md:mt-[100px]  md:max-w-[1400px] md:m-auto'>
				<img src={ps} alt='' />
				<aside className='md:w-[50%]  '>
					<img src={woman} alt='' className='w-[100%]' />
					<div className='flex md:flex-row flex-col gap-5  md:justify-between mt-[30px] items-center'>
						<img className='md:w-[45%] w-[100%]' src={speaker} />
						<img className='md:w-[45%] w-[100%]' src={parfume} />
					</div>
				</aside>
			</section>
		</>
	)
}
