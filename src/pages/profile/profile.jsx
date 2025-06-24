import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Profile() {
	return (
		<>
			<section className='md:max-w-[1400px] md:m-auto flex md:flex-row md:justify-between md:mt-[100px] md:mb-[100px] flex-col p-5 md:p-0'>
				<aside className='flex md:flex-col flex-wrap gap-5'>
					<ul className='flex flex-col gap-5'>
						<li>
							<h2 className='font-bold'>Manage My Account</h2>
						</li>
						<li className='pl-5'>
							<p>My Profile</p>
						</li>
						<li className='pl-5'>
							<p>Address Book</p>
						</li>
						<li className='pl-5'>
							<p>My Payment Options</p>
						</li>
					</ul>
					<ul className='flex flex-col gap-5'>
						<li>
							<h2 className='font-bold'>My Orders</h2>
						</li>
						<li className='pl-5'>
							<p>My Returns</p>
						</li>
						<li className='pl-5'>
							<p>My Cancellations</p>
						</li>
					</ul>
					<p className='font-bold'>
						<Link to={'/wishlist'}>My WishList</Link>
					</p>
				</aside>
				<aside className=' md:w-[70%]'>
					<form className='p-6 flex flex-col gap-8 md:w-[100%] rounded-[5px] shadow-2xl shadow-gray-400'>
						<h1 className='md:text-[35px]'>Profile</h1>
						<div className='flex md:flex-row flex-col gap-5 justify-between md:w-[100%]'>
							<div className='flex flex-col gap-5  md:w-[47%]'>
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
							</div>
							<div className='flex flex-col gap-5 md:w-[47%] '>
								<TextField
									id='outlined-basic'
									label='Email Address'
									variant='outlined'
								/>
								<TextField
									id='outlined-basic'
									label='Street Address'
									variant='outlined'
								/>
							</div>
						</div>

						<div className='flex flex-col gap-5	'>
							<h2 className='md:text-[25px]'>Password Changes</h2>
							<TextField
								id='outlined-basic'
								label='Current Password'
								variant='outlined'
								sx={{ width: '100%' }}
							/>
							<div className='flex md:flex-row  gap-1  w-[100%] justify-between md:w-[100%]'>
								<TextField
									id='outlined-basic'
									label='New Password'
									variant='outlined'
									sx={{ width: '47%' }}
								/>
								<TextField
									id='outlined-basic'
									label='Confirm New Password'
									variant='outlined'
									sx={{ width: '47%' }}
								/>
							</div>
						</div>

						<div className='flex flex-col-reverse md:flex-row gap-5 justify-end'>
							<Button color='inherit'>Cancel</Button>
							<Button
								variant='contained'
								sx={{ backgroundColor: '#DB4444', text: 'white' }}
							>
								Save Changes
							</Button>
						</div>
					</form>
				</aside>
			</section>
		</>
	)
}
