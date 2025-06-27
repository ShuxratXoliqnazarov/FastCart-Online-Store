// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import iPhone from '@/assets/iPhone.png'
// Import Swiper styles
import 'swiper/css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import jostik from '@/assets/jostik.png'
import { Button } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link, useNavigate } from 'react-router-dom'
import phone from '@/assets/phone.png'
import comp from '@/assets/comp.png'
import watch from '@/assets/watch.png'
import camera from '@/assets/camera.png'
import headphone from '@/assets/headphone.png'
import gamepad from '@/assets/gamepad.png'
import kalonka from '@/assets/kalonka.png'
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
import { Toaster } from 'sonner'

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

	return (
		<>
			<section className='flex flex-col gap-[30px] md:max-w-[1400px] md:m-auto md:flex-row md:items-center'>
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
									{el.categoryName}
									<ArrowForwardIosIcon />
								</Button>
							</li>
						))}
						{/* <li className='bg-gray-200 p-1 rounded-[5px] md:bg-white'>
							Button Woman’s Fashion <ArrowForwardIosIcon />
						</li> */}
					</ul>
				</aside>
				<aside className=' md:w-[70%]'>
					<Swiper
						spaceBetween={5}
						slidesPerView={1}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
						// className='h-[400px]'
					>
						<SwiperSlide className=''>
							<img src={iPhone} alt='' className='w-[]' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={iPhone} alt='' className='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={iPhone} alt='' className='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={iPhone} alt='' className='' />
						</SwiperSlide>
					</Swiper>{' '}
				</aside>
			</section>
			<div className=' w-[120px] flex justify-between items-center ml-[20px] mt-5 md:ml-[80px]'>
				<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
				<p className='font-bold text-[20px] text-[#DB4444]'>Today’s</p>
			</div>
			<div className='p-5 md:ml-[60px] md:flex-row md:flex items-end gap-[80px]'>
				<p className='text-[40px] font-bold'>Flash Sales</p>
				<div className='flex gap-5 items-end font-bold'>
					<div className='font-bold'>
						<p>Days</p>
						<h2 className='text-[35px]'>03 </h2>
					</div>

					<div>
						<p>Hours</p>
						<h2 className='text-[35px]'>23</h2>
					</div>
					<div>
						<p>Minutes</p>
						<h2 className='text-[35px]'>19 </h2>
					</div>
					<div>
						<p>Seconds</p>
						<h2 className='text-[35px]'>56</h2>
					</div>
				</div>
			</div>

			<section className='hidden md:block md:max-w-[1400px] md:m-auto'>
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
											<Link to={''}>
												<FavoriteBorderOutlinedIcon />
											</Link>
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
											<FavoriteBorderOutlinedIcon />
											<RemoveRedEyeOutlinedIcon />
										</div>
									</div>
									<img
										src={`http://37.27.29.18:8002/images/${prod.image}`}
										alt=''
										className='h-[150px] w-[230px] rounded-[5px]'
									/>
									{/* {console.log('Image', prod.image)} */}
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

			<button className='bg-[#DB4444] text-white px-10 py-4 block m-auto rounded-[5px]'>
				<Link to={'/products'}>View All Products</Link>{' '}
			</button>

			<hr className='hidden md:block text-gray-300 mb-[40px] mt-[40px] md:max-w-[1400px] m-auto' />

			<section className=' hidden md:block md:max-w-[1400px] m-auto md:mt-[50px]'>
				<div className=' w-[150px] flex justify-between items-center mb-[30px]  mt-5 md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>Categories</p>
				</div>
				<h1 className='md:text-[30px] font-bold md:mb-[30px]'>
					Browse By Category
				</h1>
				<Swiper
					spaceBetween={50}
					slidesPerView={6}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{category.map(el => (
						<SwiperSlide key={el.id}>
							<div className='flex flex-col items-center border p-5 border-gray-300 w-[170px] h-[200px]  gap-3'>
								<img
									src={`http://37.27.29.18:8002/images/${el.categoryImage}`}
									alt=''
								/>
								<h2>{el.categoryName}</h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<section className=' p-5 md:hidden md:max-w-[1400px] m-auto md:mt-[50px]'>
				<h1 className='text-[25px] my-[50px] font-bold'>Browse By Category</h1>
				<Swiper
					spaceBetween={10}
					slidesPerView={2.2}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{category.map(el => (
						<SwiperSlide key={el.id}>
							<div className='flex flex-col items-center border p-5 border-gray-300 w-[150px]  gap-3'>
								<img
									src={`http://37.27.29.18:8002/images/${el.categoryImage}`}
									alt=''
								/>
								<h2>{el.categoryName}</h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<hr className='hidden md:block text-gray-300 mb-[40px] mt-[40px] md:max-w-[1400px] m-auto' />

			<section className=' hidden md:block md:max-w-[1400px] md:m-auto'>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>This Month</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] '>
					<h1 className='text-[35px] font-bold'>Best Selling Products</h1>
				</div>
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
											<Link to={''}>
												<FavoriteBorderOutlinedIcon />
											</Link>
											<Link to={'/info'}>
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

			<section className='p-5 md:hidden '>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>This Month</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] '>
					<h1 className='text-[35px] font-bold'>Best Selling Products</h1>
				</div>
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
											<FavoriteBorderOutlinedIcon />
											<RemoveRedEyeOutlinedIcon />
										</div>
									</div>
									<img
										src={`http://37.27.29.18:8002/images/${prod.image}`}
										alt=''
										className='h-[150px] w-[230px] rounded-[5px]'
									/>
									{/* {console.log('Image', prod.image)} */}
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

			<section className=' p-5 md:p-5 md:max-w-[1400px] md:m-auto bg-black text-white flex-col flex md:flex-row md:justify-between'>
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

				<div className='grid columns-4 grid-cols-4'>
					{product?.map(prod => (
						<article
							key={prod.id}
							className=' p-5 w-[300px]  flex flex-col gap-5'
						>
							<div className='bg-[#F5F5F5] relative gap-3 p-5 flex flex-col pb-0 rounded-[10px]'>
								<div className='flex justify-between items-start'>
									<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
										<p>-40%</p>
									</div>
									<div className=' right-[10px] flex flex-row gap-5 top-4'>
										<Link to={''}>
											<FavoriteBorderOutlinedIcon />
										</Link>
										<Link to={'/info'}>
											<RemoveRedEyeOutlinedIcon />
										</Link>
									</div>
								</div>
								<img
									src={`http://37.27.29.18:8002/images/${prod.image}`}
									alt=''
									className='h-[150px] w-[230px] rounded-[5px]'
								/>
								{/* {console.log('Image', prod.image)} */}

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
					))}
				</div>
			</section>
			{/* //////////////////////////////////////////////////////////////////////////////////? */}

			<section className=' p-5 md:hidden md:max-w-[1400px] md:m-auto'>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>Our Products</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] '>
					<h1 className='text-[35px] font-bold'>Explore Our Products</h1>
				</div>

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
											<FavoriteBorderOutlinedIcon />
											<RemoveRedEyeOutlinedIcon />
										</div>
									</div>
									<img
										src={`http://37.27.29.18:8002/images/${prod.image}`}
										alt=''
										className='h-[150px] w-[230px] rounded-[5px]'
									/>
									{/* {console.log('Image', prod.image)} */}
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
			<button className='bg-[#DB4444] text-white px-10 py-4 block m-auto'>
				<Link to={'/products'}>View All Products</Link>{' '}
			</button>

			<section className='p-5  md:max-w-[1400px] md:m-auto md:mt-[40px] '>
				<div className=' w-[150px] flex justify-between items-center ml-[0px] mt-5 mb-[30px] md:ml-[0px]'>
					<div className='bg-[#DB4444] w-[25px] h-[40px] rounded-[5px]'></div>
					<p className='font-bold text-[20px] text-[#DB4444]'>Featured</p>
				</div>
				<div className='md:flex md:justify-between md:items-center md:mb-[40px] '>
					<h1 className='text-[35px] font-bold'>New Arrival</h1>
				</div>

				<div className='flex md:flex-row md:justify-between flex-col gap-5 md:items-center'>
					<img src={ps} alt='' />
					<aside className='md:flex flex-col gap-5 md:gap-7'>
						<img src={woman} alt='' />
						<div className='flex md:flex-row flex-col gap-5  md:gap-7'>
							<img src={speaker} alt='' className='mt-[20px] md:m-0 ' />
							<img src={parfume} alt='' />
						</div>
					</aside>
				</div>
			</section>

			<section className='md:max-w-[1400px] md:m-auto flex flex-col p-5 items-center md:flex-row md:justify-between md:mt-[60px] md:mb-[60px]'>
				<article className=' w-[300px] flex flex-col gap-2 p-5 items-center '>
					<img src={service} alt='' />
					<h2>FREE AND FAST DELIVERY</h2>
					<p>Free delivery for all orders over $140</p>
				</article>
				<article className=' w-[300px] flex flex-col gap-2 p-5 items-center '>
					<img src={custom} alt='' />
					<h2>24/7 CUSTOMER SERVICE</h2>
					<p>Friendly 24/7 customer support</p>
				</article>
				<article className=' w-[300px] flex flex-col gap-2 p-5 items-center '>
					<img src={ser} alt='' />
					<h2>MONEY BACK GUARANTEE</h2>
					<p>We reurn money within 30 days</p>
				</article>
			</section>
			<Toaster position="top-right" richColors />
		</>
	)
}

{
	/* <Swiper
	spaceBetween={50}
	slidesPerView={3}
	onSlideChange={() => console.log('slide change')}
	onSwiper={swiper => console.log(swiper)}
>
	<SwiperSlide>
		<img src={img} alt='' />
	</SwiperSlide>
</Swiper> */
}
