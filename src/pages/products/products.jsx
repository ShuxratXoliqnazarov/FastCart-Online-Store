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
import { useState } from 'react'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

export default function Products() {
	const [value, setValue] = useState(2)
	return (
		<>
			<section className='p-5 items-center flex-col md:max-w-[1400px] md:m-auto flex md:flex-row md:justify-between md:items-start '>
				<aside className='hidden md:block w-[25%]'>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='span'>Category</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								{' '}
								<Link to={''}>All Products</Link>
							</Typography>
							<Typography>
								<Link to={''}>Electronics </Link>
							</Typography>
							<Typography>
								<Link to={''}>Home & Lifestyle </Link>
							</Typography>
							<Typography>
								<Link to={''}> Medicine</Link>
							</Typography>
							<Typography>
								<Link to={''}>Sports & Outdoor </Link>
							</Typography>
							<Typography>
								<Link to={''}>See all </Link>
							</Typography>
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
							<Typography>
								<Checkbox />
								Samsung
							</Typography>
							<Typography>
								<Checkbox />
								Apple
							</Typography>
							<Typography>
								<Checkbox />
								Huawei
							</Typography>
							<Typography>
								<Checkbox />
								Pocco
							</Typography>
							<Typography>
								<Checkbox />
								Lenovo
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
						<AccordionDetails>
							<input type='range' />
						</AccordionDetails>
						<AccordionDetails className='flex flex-col gap-2'>
							<div className='flex gap-2'>
								<TextField id='outlined-min' label='Min' variant='outlined' />
								<TextField id='outlined-max' label='Max' variant='outlined' />
							</div>
							<Button variant='outlined' color='error'>
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
				<div className='md:hidden w-[100%] flex items-center flex-col gap-5 '>
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
				</div>

				<aside className='w-[100%] items-center  flex flex-col md:flex-row md:flex-wrap md:gap-5 md:w-[70%]'>
					<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
						<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
							<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
								<p>-40%</p>
							</div>
							<div className='absolute right-[10px] flex flex-col gap-5 top-4'>
								<FavoriteBorderOutlinedIcon />
								<RemoveRedEyeOutlinedIcon />
							</div>
							<img src={kalonka} alt='' />
							<Button variant='outlined' color='inherit'>
								Add To Cart
							</Button>
						</div>
						<div className='flex flex-col items-start gap-3 '>
							<h2 className='font-bold'>RGB liquid CPU Cooler</h2>
							<div className='flex gap-5'>
								<p className='text-red-800'>$120</p>
								<p className='line-through text-gray-500'>$160</p>
							</div>
							<p>⭐⭐⭐⭐⭐</p>
						</div>
					</article>
					<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
						<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
							<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
								<p>-40%</p>
							</div>
							<div className='absolute right-[10px] flex flex-col gap-5 top-4'>
								<FavoriteBorderOutlinedIcon />
								<RemoveRedEyeOutlinedIcon />
							</div>
							<img src={kalonka} alt='' />
							<Button variant='outlined' color='inherit'>
								Add To Cart
							</Button>
						</div>
						<div className='flex flex-col items-start gap-3 '>
							<h2 className='font-bold'>RGB liquid CPU Cooler</h2>
							<div className='flex gap-5'>
								<p className='text-red-800'>$120</p>
								<p className='line-through text-gray-500'>$160</p>
							</div>
							<p>⭐⭐⭐⭐⭐</p>
						</div>
					</article>
					<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
						<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
							<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
								<p>-40%</p>
							</div>
							<div className='absolute right-[10px] flex flex-col gap-5 top-4'>
								<FavoriteBorderOutlinedIcon />
								<RemoveRedEyeOutlinedIcon />
							</div>
							<img src={kalonka} alt='' />
							<Button variant='outlined' color='inherit'>
								Add To Cart
							</Button>
						</div>
						<div className='flex flex-col items-start gap-3 '>
							<h2 className='font-bold'>RGB liquid CPU Cooler</h2>
							<div className='flex gap-5'>
								<p className='text-red-800'>$120</p>
								<p className='line-through text-gray-500'>$160</p>
							</div>
							<p>⭐⭐⭐⭐⭐</p>
						</div>
					</article>
					<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
						<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
							<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
								<p>-40%</p>
							</div>
							<div className='absolute right-[10px] flex flex-col gap-5 top-4'>
								<FavoriteBorderOutlinedIcon />
								<RemoveRedEyeOutlinedIcon />
							</div>
							<img src={kalonka} alt='' />
							<Button variant='outlined' color='inherit'>
								Add To Cart
							</Button>
						</div>
						<div className='flex flex-col items-start gap-3 '>
							<h2 className='font-bold'>RGB liquid CPU Cooler</h2>
							<div className='flex gap-5'>
								<p className='text-red-800'>$120</p>
								<p className='line-through text-gray-500'>$160</p>
							</div>
							<p>⭐⭐⭐⭐⭐</p>
						</div>
					</article>
					<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
						<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
							<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
								<p>-40%</p>
							</div>
							<div className='absolute right-[10px] flex flex-col gap-5 top-4'>
								<FavoriteBorderOutlinedIcon />
								<RemoveRedEyeOutlinedIcon />
							</div>
							<img src={kalonka} alt='' />
							<Button variant='outlined' color='inherit'>
								Add To Cart
							</Button>
						</div>
						<div className='flex flex-col items-start gap-3 '>
							<h2 className='font-bold'>RGB liquid CPU Cooler</h2>
							<div className='flex gap-5'>
								<p className='text-red-800'>$120</p>
								<p className='line-through text-gray-500'>$160</p>
							</div>
							<p>⭐⭐⭐⭐⭐</p>
						</div>
					</article>
					<article className=' p-5 w-[300px] relative flex flex-col gap-5'>
						<div className='bg-[#F5F5F5] relative p-5 flex flex-col pb-0 rounded-[10px]'>
							<div className='bg-[#DB4444] text-white w-13 px-2 rounded-[5px] py-0'>
								<p>-40%</p>
							</div>
							<div className='absolute right-[10px] flex flex-col gap-5 top-4'>
								<FavoriteBorderOutlinedIcon />
								<RemoveRedEyeOutlinedIcon />
							</div>
							<img src={kalonka} alt='' />
							<Button variant='outlined' color='inherit'>
								Add To Cart
							</Button>
						</div>
						<div className='flex flex-col items-start gap-3 '>
							<h2 className='font-bold'>RGB liquid CPU Cooler</h2>
							<div className='flex gap-5'>
								<p className='text-red-800'>$120</p>
								<p className='line-through text-gray-500'>$160</p>
							</div>
							<p>⭐⭐⭐⭐⭐</p>
						</div>
					</article>
				</aside>
			</section>
			<Button
				sx={{
					backgroundColor: '#DB4444',
					display: 'block',
					margin: 'auto',
					color: 'white',
					padding: '10px 20px',
				}}
			>
				More Products
			</Button>
		</>
	)
}
