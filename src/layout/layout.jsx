import { useTranslation } from 'react-i18next'
import logo from '@/assets/logo.png'
import { Link, Outlet } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import LogoutIcon from '@mui/icons-material/Logout'
import { useCartStore } from '../stores/cartStore'

export default function Layout() {
	const { data } = useCartStore()
	// ! Multi Language
	const { t, i18n } = useTranslation()
	function TranslateClick(lang) {
		i18n.changeLanguage(lang)
	}

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	function logout() {
		localStorage.removeItem('token')
		handleClose()
	}

	return (
		<>
			<nav className='p-[20px] border-b-[1px] md:border-none md:p-0 flex items-center md:max-w-[1400px] m-auto justify-between m-t-[20px] mt-[20px] mb-[20px]'>
				<div className=' flex items-center gap-2  md:hidden'>
					<MenuOutlinedIcon sx={{ fontSize: '30px' }} />
					<h1 className='md:hidden font-bold text-[35px]'>Exclusive</h1>
				</div>
				<img src={logo} alt='' className='hidden md:block' />
				<ul className=' hidden md:flex items-center gap-10'>
					<li>
						<Button color='inherit'>
							<Link to={'/'}>Home</Link>
						</Button>
					</li>
					<li>
						<Button color='inherit'>
							<Link to={'/contact'}>Contact</Link>
						</Button>
					</li>
					<li>
						<Button color='inherit'>
							<Link to={'/ourStory'}>About</Link>
						</Button>
					</li>
					<li className=''>
						<Button color='inherit'>
							<Link to={'/createAcount'}>Sign Up</Link>
						</Button>
					</li>
				</ul>
				<div className='flex items-center'>
					<div className='hidden md:block'>
						<TextField
							id='standard-basic'
							label='Search...   '
							variant='standard'
						/>
					</div>

					<div className='hidden md:block'>
						<Button color='inherit' className='hidden'>
							<Link to={'/wishlist'}>
								<FavoriteBorderIcon />
							</Link>
						</Button>
					</div>
					<div className='relative'>
						<p className='absolute bg-red-600 text-white px-[5px] py-[0px] rounded-[50%] right-3 z-10 top-[-6px]'>
							{data.length}
						</p>
						<Button color='inherit'>
							<Link to={'/cart'}>
								<ShoppingCartIcon sx={{ fontSize: '30px' }} />
							</Link>
						</Button>
					</div>
					{/* <Button color='inherit'>
					</Button> */}
					<Button
						id='basic-button'
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						color='inherit'
					>
						<PersonOutlineOutlinedIcon sx={{ fontSize: '30px' }} />
					</Button>
					<Menu
						id='basic-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						slotProps={{
							list: {
								'aria-labelledby': 'basic-button',
							},
						}}
					>
						<MenuItem onClick={handleClose}>
							<Link to={'/profile'}>
								<PersonOutlineOutlinedIcon sx={{ fontSize: '30px' }} /> Acoount
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to={'/cart'}>
								<ShoppingBasketIcon /> My Order
							</Link>
						</MenuItem>
						<MenuItem onClick={logout}>
							<LogoutIcon /> Logout
						</MenuItem>
					</Menu>
				</div>
			</nav>

			<hr className=' hidden md:block text-gray-200 mb-[40px]' />

			<Outlet />

			<div className='w-[100%] bg-black p-0 m-0 mt-[40px]'>
				<footer className='pb-[40px] text-[20px] mt-[40px] p-5 flex flex-col gap-10 bg-black text-white md:flex-row md:max-w-[1400px] md:m-auto md:gap-0 md:justify-between md:mb-0 '>
					<ul className='flex flex-col gap-5'>
						<li className='font-bold text-3xl'>Exlusive</li>
						<li className='font-medium'>Subscribe</li>
						<li>Get 10% off your first order</li>
						<li className='border w-[300px] flex rounded-[10px]'>
							<input
								type='text'
								placeholder='Enter your email..'
								className='text-[20px] p-2  rounded-[10px]'
							/>
							<Button>
								<SendOutlinedIcon />
							</Button>
						</li>
					</ul>
					<ul className='flex flex-col gap-5'>
						<li className='font-bold text-[23px]'>Support</li>
						<li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
						<li>exclusive@gmail.com</li>
						<li>+88015-88888-9999</li>
					</ul>
					<div className='flex justify-between md:gap-15'>
						<ul className='flex flex-col gap-5'>
							<li className='font-bold'>Account</li>
							<li>
								<Link to={'/profile'}>My Accont</Link>
							</li>
							<li>
								<Link to={'/cart'}>Cart</Link>
							</li>
							<li>
								<Link to={'/wishlist'}>Wishlist</Link>
							</li>
							<li>
								<Link to={'/products'}>Shop</Link>
							</li>
						</ul>
						<ul className='flex flex-col gap-5'>
							<li className='font-bold'>Quick Link</li>
							<li>Privacy Policy</li>
							<li>Terms Of Use</li>
							<li>FAQ</li>
							<li>
								<Link to={'/contact'}>Contact</Link>
							</li>
						</ul>
					</div>
					<ul className='flex flex-col gap-5'>
						<li className='font-bold text-1xl'>Social</li>
						<li className='flex gap-5'>
							<FacebookOutlinedIcon />
							<ShareOutlinedIcon />
						</li>
					</ul>
				</footer>
			</div>
		</>
	)
}
