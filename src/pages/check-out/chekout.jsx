import { Button, TextField } from '@mui/material'
import banks from '@/assets/banks.png'

import jst from '@/assets/jst.png'
import { useCartStore } from '../../stores/cartStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { removeToken } from '../../utils/token'

export default function CheckOut() {
	const {
		getProduct,
		data,
		totalPrice,
		totalProducts,
		delFromCart,
		clearCart,
	} = useCartStore()

	useEffect(() => {
		getProduct()
	}, [])

	const navigate = useNavigate()

	function check() {
		navigate('/')
		toast.info('Thank you for using our store 😊')
		clearCart()
		localStorage.removeItem('wish')
	}

	return (
		<>
			<section className='md:max-w-[1400px] p-5 md:p-0 md:m-auto gap-10 md:gap-0 md:flex md:justify-between items-end md:mb-[200px] md:mt-[100px]'>
				<aside className='md:w-[30%] flex flex-col gap-7'>
					<h1 className='md:text-[40px] text-[30px]'>Billing Details</h1>
					<form className='shadow-2xl shadow-gray-500 p-5 flex flex-col rounded-[10px] gap-7'>
						<TextField
							id='outlined-basic'
							label='First Name'
							variant='outlined'
						/>
						<TextField
							id='outlined-basic'
							label='Last Name'
							variant='outlined'
						/>
						<TextField
							id='outlined-basic'
							label='Street Address'
							variant='outlined'
						/>
						<TextField
							id='outlined-basic'
							label='Apartment, floor, etc. (optional)'
							variant='outlined'
						/>
						<TextField
							id='outlined-basic'
							label='Town/City'
							variant='outlined'
						/>
						<TextField
							id='outlined-basic'
							label='Phone Number'
							variant='outlined'
						/>
						<TextField
							id='outlined-basic'
							label='Email Address'
							variant='outlined'
						/>
					</form>
				</aside>

				<aside className=' mt-[50px] md:mt-0 md:w-[50%] text-[20px] flex flex-col gap-5'>
					{data?.map(el => (
						<div key={el.id} className='flex justify-between items-center'>
							<div className='flex items-center gap-5'>
								<img
									src={`http://37.27.29.18:8002/images/${el.image}`}
									alt=''
									className='h-[60px]'
								/>
								<h3 className='text-[25px]'>{el.productName}</h3>
							</div>
							<p>{el.price} tjs</p>
						</div>
					))}

					<div className='flex justify-between items-center border-t mt-[50px] pt-[40px]'>
						<h3>Subtotal:</h3>
						<p>{totalPrice} tjs</p>
					</div>
					<div className='flex justify-between items-center'>
						<h3>Total:</h3>
						<p>Free</p>
					</div>
					<div className='flex justify-between items-start'>
						<div>
							<div className='flex gap-5 items-center'>
								<input type='radio' />
								Bank
							</div>
							<div className='flex gap-5'>
								<input type='radio' />
								Cash on delivery
							</div>
						</div>
						<img src={banks} alt='' />
					</div>
					<div className='flex justify-between shadow-gray-500  md:shadow-2xl md:p-5'>
						<TextField
							id='outlined-basic'
							label='Coupon Cod'
							variant='outlined'
							type='password'
						/>
						<button className='border px-[25px] py-[7px] border-red-600 text-red-600'>
							Apply
						</button>
					</div>
					<Button
						sx={{ backgroundColor: '#DB4444', color: 'white' }}
						onClick={check}
					>
						Place Order
					</Button>
				</aside>
			</section>
		</>
	)
}
