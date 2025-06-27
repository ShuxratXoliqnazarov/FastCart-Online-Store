import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import infoJostik from '@/assets/infoJostik.png'
import jst from '@/assets/jst.png'
import delivery from '@/assets/delivery.png'
import returnak from '@/assets/returnak.png'

import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useInfoStore } from '../../stores/infoStore'
import { useEffect, useState } from 'react'

export default function Info() {
	const { id } = useParams()
	console.log('Info Id:', id)
	const { getInfo, infoData } = useInfoStore()
	useEffect(() => {
		getInfo(id)
	}, [])
	console.log('Info Datas.jsx: ', infoData)

	const [mainImage, setMainImage] = useState(null)
	useEffect(() => {
		if (infoData.images?.length > 0) {
			setMainImage(infoData.images[0].images)
		}
	}, [infoData])

	const [cnt, setCnt] = useState(0)

	function inc() {
		setCnt(cnt => (cnt += 1))
	}
	function dec() {
		if (cnt > 0) {
			return setCnt(cnt => (cnt -= 1))
		} else cnt
	}

	return (
		<>
			<section className='md:max-w-[1400px] md:m-auto flex md:flex-row p-5 gap-5 flex-col justify-between '>
				<div className='flex flex-col md:flex-row gap-10'>
					<div className='flex md:flex-col gap-4'>
						{infoData.images?.map((img, index) => (
							<img
								key={img.id}
								src={`http://37.27.29.18:8002/images/${img.images}`}
								alt={`preview-${index}`}
								onClick={() => setMainImage(img.images)}
								className='w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-gray-400 rounded transition'
							/>
						))}
					</div>

					<div className='flex-1'>
						<img
							src={`http://37.27.29.18:8002/images/${mainImage}`}
							alt='main'
							className=' max-h-[500px] w-[700px] object-contain rounded border'
						/>
					</div>
				</div>
				<aside className='flex flex-col gap-5 justify-between md:w-[55%]'>
					<div className='flex flex-col border-b pb-5 gap-5'>
						<h1 className='text-[30px] font-bold'>{infoData.productName}</h1>
						<p>⭐⭐⭐</p>
						<p className='font-bold text-[25px]'>{infoData.price + ' tjs'}</p>
						<p className='text-[#00000099] text-[20px]'>
							{infoData.description}
						</p>
					</div>
					<div className='flex flex-col gap-7'>
						<div className='flex items-center md:gap-5'>
							<p className='text-[20px]'>Size: </p>
							<Button variant='outlined' color='inherit'>
								XS
							</Button>
							<Button variant='outlined' color='inherit'>
								S
							</Button>
							<Button variant='outlined' color='inherit'>
								M
							</Button>
							<Button variant='outlined' color='inherit'>
								L
							</Button>
							<Button variant='outlined' color='inherit'>
								XL
							</Button>
						</div>
						<div className='flex justify-between md:gap-[52px] md:flex-row flex-col items-start gap-5'>
							<div className='flex md:flex-row '>
								<Button
									variant='outlined'
									color='inherit'
									sx={{ height: '50px', width: '20px' }}
									onClick={dec}
								>
									-
								</Button>
								<input
									type='number'
									className='border-solid border-gray-500 rounded-[5px] w-[100px] mx-1 border-[1px] text-[25px] px-8'
									value={cnt}
									// onChange={setCnt}
								/>
								<Button
									variant='outlined'
									color='inherit'
									sx={{ height: '50px', width: '20px' }}
									onClick={inc}
								>
									+
								</Button>
							</div>
							<Button variant='outlined' color='inherit'>
								Buy Now
							</Button>
							<Button variant='outlined' color='inherit'>
								<FavoriteBorderOutlinedIcon />
							</Button>
						</div>
						<div className='flex flex-col'>
							<div className='flex items-center gap-5 border px-5 py-2'>
								<img src={delivery} alt='' />
								<div>
									<h2>Free Delivery</h2>
									<p>Enter your postal code for Delivery Availability</p>
								</div>
							</div>
							<div className='flex items-center gap-5 border px-5 py-2 '>
								<img src={returnak} alt='' />
								<div>
									<h2>Free Delivery</h2>
									<p>Enter your postal code for Delivery Availability</p>
								</div>
							</div>
						</div>
					</div>
				</aside>
			</section>
		</>
	)
}
