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
import { useEffect, useState } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import LogoutIcon from '@mui/icons-material/Logout'
import { useCartStore } from '../stores/cartStore'
import { removeToken } from '../utils/token'
import { Toaster } from 'sonner'
import { useWishlistStore } from '../stores/wishlistStore'

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
		removeToken()
		handleClose()
	}
	// let darozi = JSON.parse(localStorage.getItem('wish'))
	const wishlistCount = useWishlistStore(state => state.items.length);
	// console.log('DAROZI: ', darozi.state.items.length)

	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			setIsAuthenticated(true)
		}
	}, [])

	return (
		<>
			<nav className='p-[20px] border-b-[1px] md:border-none md:p-0 flex items-center md:max-w-[1400px] m-auto justify-between m-t-[20px] mt-[20px] mb-[20px]'>
				<div className=' flex items-center gap-2  md:hidden'>
					<MenuOutlinedIcon sx={{ fontSize: '30px' }} />
					<Link to={'/'}>
						<h1 className='md:hidden font-bold text-[35px]'>Exclusive</h1>
					</Link>
				</div>
				<Link to={'/'}>
					<img src={logo} alt='' className='hidden md:block' />
				</Link>
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

				{isAuthenticated && (
					<div className='flex items-center'>
						<div className='hidden md:block relative'>
							<p className='absolute bg-red-600 text-white px-[5px] py-[0px] rounded-[50%] right-3 z-10 top-[-6px]'>
								{/* {darozi.state.items != '' && darozi.state.items != null ? darozi.state.items.length : 0} */}
								{/* {darozi.state.items.length} */}
								{wishlistCount}
							</p>
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
									<PersonOutlineOutlinedIcon sx={{ fontSize: '30px' }} />{' '}
									Acoount
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to={'/products'}>
									<ShoppingBasketIcon /> All Products
								</Link>
							</MenuItem>
							<MenuItem onClick={logout}>
								<LogoutIcon /> Logout
							</MenuItem>
							<MenuItem>
								<Link to={'/wishlist'}>
									<FavoriteBorderIcon /> Wishlist
								</Link>
							</MenuItem>
						</Menu>
					</div>
				)}
				{!isAuthenticated && (
					<Link to={'/login'}>
						<Button color='inherit'>Login</Button>{' '}
					</Link>
				)}
			</nav>

			<hr className=' hidden md:block text-gray-200 mb-[40px]' />

			<Outlet />

			<div className='w-[100%] bg-black p-0 m-0 mt-[40px]'>
				{/* <footer className='pb-[40px] text-[20px] mt-[40px] p-5 flex flex-col gap-10 bg-black text-white md:flex-row md:max-w-[1400px] md:m-auto md:gap-0 md:justify-between md:mb-0 '>
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
				</footer> */}

				<footer className='py-12 bg-black text-gray-300 md:text-lg lg:text-xl'>
					{' '}
					{/* Улучшил общие отступы и цвет текста */}
					<div className='max-w-[1400px] mx-auto px-5 flex flex-col gap-10 md:flex-row md:justify-between md:gap-8 lg:gap-16'>
						{/* Секция Exlusive / Подписка */}
						<ul className='flex flex-col gap-4 md:w-1/4'>
							{' '}
							{/* Увеличил gap для лучшего вида */}
							<li className='font-bold text-3xl text-white mb-2'>
								Exclusive
							</li>{' '}
							{/* Выделил заголовок белым */}
							<li className='font-medium text-lg lg:text-xl'>Subscribe</li>
							<li className='text-gray-400'>
								Get 10% off your first order
							</li>{' '}
							{/* Сделал текст чуть светлее */}
							<li className='border border-gray-600 rounded-lg flex overflow-hidden w-full max-w-[300px] mt-2'>
								{' '}
								{/* Улучшил стили инпута */}
								<input
									type='email' // Лучше использовать type="email" для поля email
									placeholder='Enter your email..'
									className='flex-1 p-3 bg-gray-800 text-white text-base md:text-lg rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#DB4444]' // Стилизация инпута
								/>
								<Button
									sx={{
										minWidth: 'auto', // Убрал лишнюю ширину
										padding: '10px 12px', // Добавил отступы
										backgroundColor: 'transparent', // Убрал фон по умолчанию
										color: '#fff', // Цвет иконки
										'&:hover': {
											backgroundColor: 'rgba(255, 255, 255, 0.1)', // Легкий ховер
											color: '#f87171', // Красный цвет при ховере
										},
										borderRadius: '0 8px 8px 0', // Только правые углы
									}}
								>
									<SendOutlinedIcon />
								</Button>
							</li>
						</ul>

						{/* Секция Support */}
						<ul className='flex flex-col gap-4 md:w-1/4'>
							<li className='font-bold text-2xl text-white mb-2'>Support</li>
							<li className='text-gray-400'>
								111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
							</li>
							<li className='hover:text-[#DB4444] transition-colors duration-200 cursor-pointer'>
								exclusive@gmail.com
							</li>{' '}
							{/* Ховер */}
							<li className='hover:text-[#DB4444] transition-colors duration-200 cursor-pointer'>
								+88015-88888-9999
							</li>{' '}
							{/* Ховер */}
						</ul>

						{/* Секции Account и Quick Link */}
						<div className='flex justify-between gap-8 md:gap-12 lg:gap-20 md:w-1/2'>
							{' '}
							{/* Увеличил gap */}
							{/* Секция Account */}
							<ul className='flex flex-col gap-4'>
								<li className='font-bold text-2xl text-white mb-2'>Account</li>
								<li>
									<Link
										to={'/profile'}
										className='hover:text-[#DB4444] transition-colors duration-200'
									>
										My Account
									</Link>
								</li>
								<li>
									<Link
										to={'/cart'}
										className='hover:text-[#DB4444] transition-colors duration-200'
									>
										Cart
									</Link>
								</li>
								<li>
									<Link
										to={'/wishlist'}
										className='hover:text-[#DB4444] transition-colors duration-200'
									>
										Wishlist
									</Link>
								</li>
								<li>
									<Link
										to={'/products'}
										className='hover:text-[#DB4444] transition-colors duration-200'
									>
										Shop
									</Link>
								</li>
							</ul>
							{/* Секция Quick Link */}
							<ul className='flex flex-col gap-4'>
								<li className='font-bold text-2xl text-white mb-2'>
									Quick Link
								</li>
								<li className='hover:text-[#DB4444] transition-colors duration-200 cursor-pointer'>
									Privacy Policy
								</li>
								<li className='hover:text-[#DB4444] transition-colors duration-200 cursor-pointer'>
									Terms Of Use
								</li>
								<li className='hover:text-[#DB4444] transition-colors duration-200 cursor-pointer'>
									FAQ
								</li>
								<li>
									<Link
										to={'/contact'}
										className='hover:text-[#DB4444] transition-colors duration-200'
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Секция Social */}
						<ul className='flex flex-col gap-4 md:w-1/4'>
							<li className='font-bold text-2xl text-white mb-2'>Social</li>
							<li className='flex gap-5'>
								<a
									href='https://www.facebook.com'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-[#DB4444] transition-colors duration-200'
								>
									<FacebookOutlinedIcon sx={{ fontSize: 30 }} />{' '}
									{/* Увеличил размер иконок */}
								</a>
								<a
									href='https://www.twitter.com'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-[#DB4444] transition-colors duration-200'
								>
									<ShareOutlinedIcon sx={{ fontSize: 30 }} />
								</a>
								<a
									href='https://www.instagram.com'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-[#DB4444] transition-colors duration-200'
								></a>
								<a
									href='https://www.linkedin.com'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-[#DB4444] transition-colors duration-200'
								></a>
							</li>
						</ul>
					</div>
					<div className='border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-base'>
						<p>
							&copy; {new Date().getFullYear()} Exclusive. All rights reserved.
						</p>
					</div>
				</footer>
			</div>

			<Toaster position='top-right' richColors />
		</>
	)
}
