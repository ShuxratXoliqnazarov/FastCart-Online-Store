import kalonka from '@/assets/kalonka.png'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import { Button } from '@mui/material'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { useEffect, useState } from 'react'
import { useCartStore } from '../../stores/cartStore'
import { Toaster } from 'sonner'
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link, useNavigate } from 'react-router-dom'
import { useMainStore } from '../../stores/mainStore'

let products = JSON.parse(localStorage.getItem('wish'))

export default function Wishlist() {
	const { addToCart } = useCartStore()
	const { product, getProducts } = useMainStore()

	const [wishlist, setWishlist] = useState([])
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('wish')) || []
		setWishlist(saved)
		getProducts()
	}, [])

	function deleteFromWishlist(id) {
		const deleted = wishlist.filter(el => el.id != id)
		localStorage.setItem('wish', JSON.stringify(deleted))
		setWishlist(deleted)
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
			<section className='md:max-w-[1400px] md:m-auto p-5'>
				<div className='flex justify-between items-center'>
					<h2>Wishlist {wishlist.length}</h2>
					<Button color='inherit' variant='outlined'>
						Move All To Bag
					</Button>
				</div>
				<div className='hidden md:block'>
					<Swiper
						spaceBetween={10}
						slidesPerView={4}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
					>
						{products?.map(el => (
							<SwiperSlide key={el.id}>
								<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
									<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
										<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
											<p>-40%</p>
										</div>
										<div className='absolute right-[10px] flex flex-col gap-5 top-4 '>
											<Button
												variant='text'
												color='error'
												onClick={() => deleteFromWishlist(el.id)}
											>
												<DeleteOutlineOutlinedIcon />
											</Button>
										</div>
										<img
											src={`http://37.27.29.18:8002/images/${el.image}`}
											alt=''
											className='h-[170px]'
										/>
										<Button variant='outlined' color='inherit'>
											Add To Cart
										</Button>
									</div>
									<div className='flex flex-col items-start gap-3 '>
										<h2 className='font-bold'>{el.productName}</h2>
										<div className='flex gap-5'>
											<p className='text-red-800'>{`${el.price}  tjs`}</p>
											<p className='line-through text-gray-500'>$160</p>
										</div>
										<p>⭐⭐⭐⭐⭐</p>
									</div>
								</article>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className='md:hidden '>
					<Swiper
						spaceBetween={10}
						slidesPerView={1.2}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
					>
						{products?.map(el => (
							<SwiperSlide key={el.id}>
								<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
									<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
										<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
											<p>-40%</p>
										</div>
										<div className='absolute right-[10px] flex flex-col gap-5 top-4 '>
											<Button
												variant='text'
												color='error'
												onClick={() => deleteFromWishlist(el.id)}
											>
												<DeleteOutlineOutlinedIcon />
											</Button>
										</div>
										<img
											src={`http://37.27.29.18:8002/images/${el.image}`}
											alt=''
											className='h-[170px]'
										/>
										<Button
											variant='outlined'
											color='inherit'
											onClick={() => handleAddToCart(el.id)}
										>
											Add To Cart
										</Button>
									</div>
									<div className='flex flex-col items-start gap-3 '>
										<h2 className='font-bold'>{el.productName}</h2>
										<div className='flex gap-5'>
											<p className='text-red-800'>{`${el.price}  tjs`}</p>
											<p className='line-through text-gray-500'>$160</p>
										</div>
										<p>⭐⭐⭐⭐⭐</p>
									</div>
								</article>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			<section className='md:max-w-[1400px] md:m-auto p-5 '>
				<div className='flex justify-between items-center '>
					<div className=' w-[170px] flex justify-between items-center  mt-5 mb-[30px] '>
						<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
						<p className='font-bold text-[20px] text-[#DB4444]'>Our Products</p>
					</div>
					<Button color='inherit' variant='outlined'>
						See All
					</Button>
				</div>

				<div className='hidden md:block'>
					<Swiper
						spaceBetween={10}
						slidesPerView={4}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
					>
						{product?.map(prod => (
							<SwiperSlide key={prod.id}>
								<article className=' p-5 w-[300px]  flex flex-col gap-5'>
									<div className='bg-[#F5F5F5] relative gap-3 p-5 flex flex-col pb-0 rounded-[10px]'>
										<div className='flex justify-between items-start'>
											<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
												<p>-40%</p>
											</div>
											<div className=' right-[10px] flex flex-row gap-5 top-4'>
												<Link to={'/info/' + prod.id}>
													<RemoveRedEyeOutlinedIcon />
												</Link>
											</div>
										</div>
										<img
											src={`http://37.27.29.18:8002/images/${prod.image}`}
											alt=''
											className='h-[150px] w-[230px] rounded-[5px]'
										/>
										<Button
											variant='outlined'
											color='inherit'
											onClick={() => handleAddToCart(prod.id)}
										>
											Add To Cart
										</Button>
									</div>
									<div className='flex flex-col items-start gap-3 '>
										<h2 className='font-bold'>{prod.productName}</h2>
										<div className='flex gap-5'>
											<p className='text-red-800'>{`$${prod.price}`}</p>
											<p className='line-through text-gray-500'>$160</p>
										</div>
										<p>⭐⭐⭐⭐⭐</p>
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
					slidesPerView={1.2}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{product?.map(prod => (
						<SwiperSlide key={prod.id}>
							<article className=' p-5 w-[300px]  flex flex-col gap-5'>
								<div className='bg-[#F5F5F5] relative gap-3 p-5 flex flex-col pb-0 rounded-[10px]'>
									<div className='flex justify-between items-start'>
										<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
											<p>-40%</p>
										</div>
										<div className=' right-[10px] flex flex-row gap-5 top-4'>
											<Link to={'/info/' + prod.id}>
												<RemoveRedEyeOutlinedIcon />
											</Link>
										</div>
									</div>
									<img
										src={`http://37.27.29.18:8002/images/${prod.image}`}
										alt=''
										className='h-[150px] w-[230px] rounded-[5px]'
									/>
									<Button
										variant='outlined'
										color='inherit'
										onClick={() => handleAddToCart(prod.id)}
									>
										Add To Cart
									</Button>
								</div>
								<div className='flex flex-col items-start gap-3 '>
									<h2 className='font-bold'>{prod.productName}</h2>
									<div className='flex gap-5'>
										<p className='text-red-800'>{`$${prod.price}`}</p>
										<p className='line-through text-gray-500'>$160</p>
									</div>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</article>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<Toaster position='top-right' richColors />
		</>
	)
}
