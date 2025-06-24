import { Button, TextField } from '@mui/material'
import jst from '@/assets/jst.png'
import { Link } from 'react-router-dom'
import ReplayIcon from '@mui/icons-material/Replay'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function Cart() {
	return (
		<>
			{/* <table>
				<thead>
					<tr>
						<th>Product</th>
					</tr>
					<tr>Price</tr>
					<tr>Quantity</tr>
					<tr>Subtotal</tr>
					<tr>Action</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div>
								<img src='' alt='' />
								<h2>LCD Monitor</h2>
							</div>
						</td>
						<td>
							<p>$650</p>
						</td>
						<td>
							<TextField type='number' id='outlined-basic' variant='outlined' />
						</td>
						<td>
							<p>$650</p>
						</td>
						<td>
							<Button>❌</Button>
						</td>
					</tr>
				</tbody>
			</table> */}

			<section className='p-5 md:p-0 md:max-w-[1400px] md:m-auto  '>
				<div className=' hidden md:flex md:flex-row md:justify-between text-[#00000099] md:px-5'>
					<h2>Products</h2>
					<h2>Price</h2>
					<h2>Quantity</h2>
					<h2>Subtotal</h2>
					<h2>Actions</h2>
				</div>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-wrap items-center justify-between md:flex-row md:justify-between shadow-gray shadow-2xl p-5 md:items-center'>
						<div className=''>
							<img src={jst} alt='' className='md:w-[70px]' />
							<h3>LCD Monitor</h3>
						</div>
						<p className=''>$650</p>
						<input
							type='number'
							name=''
							placeholder='0'
							id=''
							className='border border-gray w-[80px] h-[40px] rounded-[10px] px-3 text-[20px]'
						/>
						<p>$650 </p>
						<Button>❌</Button>
					</div>
					<div className='flex flex-wrap items-center justify-between md:flex-row md:justify-between shadow-gray shadow-2xl p-5 md:items-center'>
						<div className=''>
							<img src={jst} alt='' className='md:w-[70px]' />
							<h3>LCD Monitor</h3>
						</div>
						<p className=''>$650</p>
						<input
							type='number'
							name=''
							placeholder='0'
							id=''
							className='border border-gray w-[80px] h-[40px] rounded-[10px] px-3 text-[20px]'
						/>
						<p>$650 </p>
						<Button>❌</Button>
					</div>
				</div>
			</section>
			<section className='md:max-w-[1400px] md:m-auto md:mt-10 flex p-5 md:p-0 flex-col gap-10'>
				<div className='flex items-center justify-between'>
					<Button variant='outlined' color='inherit'>
						<Link to={'/products'}>Return To Shop</Link>{' '}
					</Button>
					<div className='hidden md:flex gap-5'>
						<Button variant='outlined' color='inherit'>
							Update Cart
						</Button>
						<Button variant='outlined' color='error'>
							Remove all
						</Button>
					</div>

					<div className='md:hidden'>
						<Button color='inherit'>
							<ReplayIcon />
						</Button>
						<Button color='error'>
							<DeleteOutlineIcon />
						</Button>
					</div>
				</div>
				<div className='flex md:flex-row flex-col justify-between md:items-start gap-12 md:gap-0 '>
					<div className='flex items-center gap-5'>
						<TextField
							id='outlined-basic'
							label='Coupon Code'
							variant='outlined'
							type='password'
						/>

						<button className='border px-[30px] rounded-[5px] border-red-500 text-red-500 py-[10px]'>
							Apply
						</button>
					</div>
					<div className='border md:w-[450px] text-[20px] p-5 flex flex-col gap-7 rounded-[5px]'>
						<h2 className='md:text-[30px] text-[30px]'>Cart Total</h2>
						<div className='flex items-center justify-between'>
							<p>Subtotal:</p>
							<p>$1750</p>
						</div>
						<div className='flex items-center justify-between'>
							<p>Shipping:</p>
							<p>Free</p>
						</div>
						<hr />
						<div className='flex items-center justify-between font-bold'>
							<h3>Total:</h3>
							<h3>$1750</h3>
						</div>
						<Button color='error' variant='contained'>
							<Link to={'/checkout'}>Procees to checkout</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	)
}
