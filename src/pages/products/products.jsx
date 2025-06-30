import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import kalonka from '@/assets/kalonka.png'
import { Button, Checkbox, Radio, TextField } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import { useFilterStore } from '../../stores/filterStore'
import { API } from '../../utils/config'
import { useMainStore } from '../../stores/mainStore'
import { useCartStore } from '../../stores/cartStore'
import { toast, Toaster } from 'sonner'

export default function Products() {
	const [selectedBrands, setSelectedBrands] = useState([])
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(10000)

	function handleBrandChange(id) {
		let updatedBrands

		if (selectedBrands.includes(id)) {
			updatedBrands = selectedBrands.filter(brandId => brandId !== id)
		} else {
			updatedBrands = [...selectedBrands, id]
		}

		setSelectedBrands(updatedBrands)

		if (updatedBrands.length > 0) {
			const ids = updatedBrands.join(',')
			brandFiltre(ids)
		} else {
			getProducts()
		}
	}

	const [value, setValue] = useState(2)
	const {
		getCategory,
		category,
		getProducts,
		product,
		cotegoryFiltre,
		getBrand,
		brands,
		brandFiltre,
		priceFiltre,
	} = useFilterStore()

	const { addToCart } = useCartStore()
	useEffect(() => {
		getCategory()
		getProducts()
		getBrand()
	}, [])

	const wish = JSON.parse(localStorage.getItem('wish'))
	function handleAddToWishlist(prod) {
		if (!localStorage.getItem('token')) {
			alert('Please registrate or login❗')
			navigate('/login')
		} else {
			let find = wish.find(el => el.id == prod.id)

			if (!find) {
				let product = {
					id: prod.id,
					productName: prod.productName,
					image: prod.image,
					price: prod.price,
					categoryName: prod.categoryName,
				}
				wish.push(product)
				localStorage.setItem('wish', JSON.stringify(wish))
				toast.info('Succesfully added to wishlist✌️')
			} else {
				toast.error('The product is already added on wishlist❗')
			}
		}
	}

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
			<section className='p-5 items-center flex-col md:max-w-[1400px] md:m-auto flex md:flex-row md:justify-between md:items-start '>
				<aside className='md:w-[25%] flex flex-col'>
					<div className='md:hidden w-[100%] my-5'>
						<TextField
							id='outlined-basic'
							label='Search'
							variant='outlined'
							sx={{width:'100%'}}
						/>
					</div>

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>Category</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{category.map(el => (
								<Typography key={el.id}>
									<Button color='ingerit' onClick={() => cotegoryFiltre(el.id)}>
										{el.categoryName}
									</Button>
								</Typography>
							))}
							<Button color='error' onClick={getProducts}>
								See All
							</Button>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2-content'
							id='panel2-header'
						>
							<Typography component='span'>Brands</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{brands?.map(el => (
								<Typography key={el.id}>
									<Checkbox
										checked={selectedBrands.includes(el.id)}
										onChange={() => handleBrandChange(el.id)}
									/>
									{el.brandName}
								</Typography>
							))}
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2-content'
							id='panel2-header'
						>
							<Typography component='span'>Features</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<Checkbox />
								Metallic
							</Typography>
							<Typography>
								<Checkbox />
								Plastic cover
							</Typography>
							<Typography>
								<Checkbox />
								8GB Ram
							</Typography>
							<Typography>
								<Checkbox />
								Super power
							</Typography>
							<Typography>
								<Checkbox />
								Large Memory
							</Typography>
							<Typography>See All</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2-content'
							id='panel2-header'
						>
							<Typography component='span'>Price range</Typography>
						</AccordionSummary>
						<AccordionDetails className='flex justify-between'>
							<div>
								<h2>MIN</h2>
								<input
									type='range'
									min='0'
									max='100000'
									onChange={e => setMinPrice(e.target.value)}
								/>
							</div>
							<div>
								<h2>MAX</h2>
								<input
									type='range'
									min='0'
									max='100000'
									onChange={e => setMaxPrice(e.target.value)}
								/>
							</div>
						</AccordionDetails>
						<AccordionDetails className='flex flex-col gap-2'>
							<div className='flex gap-2'>
								<TextField
									id='outlined-min'
									label='Min'
									variant='outlined'
									value={minPrice}
									onChange={e => setMinPrice(e.target.value)}
								/>
								<TextField
									id='outlined-max'
									label='Max'
									variant='outlined'
									value={maxPrice}
									onChange={e => setMaxPrice(e.target.value)}
								/>
							</div>
							<Button
								variant='outlined'
								color='error'
								onClick={() => priceFiltre({ minPrice, maxPrice })}
							>
								Apply
							</Button>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2-content'
							id='panel2-header'
						>
							<Typography component='span'>Condition</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<Radio />
								Any
							</Typography>
							<Typography>
								<Radio />
								Refurbished
							</Typography>
							<Typography>
								<Radio />
								Brand new
							</Typography>
							<Typography>
								<Radio />
								Old items
							</Typography>

							<Typography>See All</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2-content'
							id='panel2-header'
						>
							<Typography component='span'>Ratings</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<Rating
									name='simple-controlled'
									value={value}
									onChange={(event, newValue) => {
										setValue(newValue)
									}}
								/>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</aside>
				{/* <div className='md:hidden w-[100%] flex items-center flex-col gap-5 '>
					<TextField
						id='outlined-basic'
						label='Search'
						variant='outlined'
						sx={{ width: '100%' }}
					/>

					<div className='flex justify-between w-[100%]  '>
						<Button color='inherit' variant='outlined' sx={{ width: '45%' }}>
							Popular
						</Button>
						<Button color='inherit' variant='outlined' sx={{ width: '45%' }}>
							Filter (3)
						</Button>
					</div>
				</div> */}

				<aside className='w-[100%] items-center  flex flex-col md:flex-row md:flex-wrap md:gap-6 gap-12 mt-10 md:w-[70%]'>
					{product?.map(el => (
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
										onClick={() => handleAddToWishlist(el)}
										className='hover:scale-110 transition-transform'
										sx={{
											backgroundColor: '',
											color: 'red',
										}}
									>
										<FavoriteBorderOutlinedIcon />
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
					))}
				</aside>
			</section>
			<Button
				sx={{
					backgroundColor: '#DB4444',
					display: 'block',
					margin: 'auto',
					color: 'white',
					padding: '10px 20px',
					marginTop: '50px',
				}}
			>
				More Products
			</Button>
			<Toaster position='top-right' richColors />
		</>
	)
}
