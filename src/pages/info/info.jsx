import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import infoJostik from '@/assets/infoJostik.png'
import jst from '@/assets/jst.png'
import delivery from '@/assets/delivery.png'
import returnak from '@/assets/returnak.png'

import { Button } from '@mui/material'

export default function Info() {
	return (
		<>
			<section className='md:max-w-[1400px] md:m-auto flex md:flex-row p-5 gap-5 flex-col justify-between '>
				<aside className='flex gap-7 md:flex-row flex-col-reverse md:w-[75%]'>
					<div className='flex md:flex-col items-start justify-between'>
						<img src={jst} alt='' />
						<img src={jst} alt='' />
						<img src={jst} alt=''  className='hidden md:block'/>
						<img src={jst} alt=''  className='hidden md:block'/>
					</div>
					<img src={infoJostik} alt='' />
				</aside>
				<aside className='flex flex-col gap-5 justify-between md:w-[55%]'>
					<div className='flex flex-col border-b pb-5 gap-5'>
						<h1 className='text-[30px] font-bold'>Havic HV G-92 Gamepad</h1>
						<p>⭐⭐⭐</p>
						<p className='font-bold text-[25px]'>$192</p>
						<p className='text-[#00000099] text-[20px]'>
							PlayStation 5 Controller Skin High quality vinyl with air channel
							adhesive for easy bubble free install & mess free removal Pressure
							sensitive.
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
								<Button variant='outlined' color='inherit' sx={{height:'50px' , width:'20px'}}>
									-
								</Button>
								<Button variant='outlined' color='inherit' sx={{height:'50px' , width:'20px'}}>
									2
								</Button>
								<Button variant='outlined' color='inherit' sx={{height:'50px' , width:'20px'}}>
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
