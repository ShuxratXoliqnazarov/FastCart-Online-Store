import zanako from '@/assets/zanako.png'
import ic from '@/assets/ic.png'
import man from '@/assets/man.png'

export default function OurStory() {
	return (
		<>
			<section className='md:max-w-[1400px] flex-col p-5 md:p-0 md:m-auto flex md:flex-row justify-between items-center md:mt-[100px] gap-7 md:gap-0 md:mb-[100px]'>
				<aside className='md:w-[45%] flex flex-col gap-10  text-[20px]'>
					<h1 className='md:text-[40px] text-[25px]'>Our Story</h1>
					<p>
						Launced in 2015, Exclusive is South Asia’s premier online shopping
						makterplace with an active presense in Bangladesh. Supported by wide
						range of tailored marketing, data and service solutions, Exclusive
						has 10,500 sallers and 300 brands and serves 3 millioons customers
						across the region.
					</p>
					<p>
						Exclusive has more than 1 Million products to offer, growing at a
						very fast. Exclusive offers a diverse assotment in categories
						ranging from consumer.
					</p>
				</aside>
				<img src={zanako} alt='' />
			</section>

			<div className='md:max-w-[1400px] md:m-auto flex-col p-5 items-center gap-5 md:p-0 flex md:flex-row justify-between'>
				<div className='border p-6 flex flex-col items-center w-[200px] rounded-[5px] gap-3'>
					<img src={ic} alt='' />
					<h1 className='font-bold text-[25px]'>10.5k</h1>
					<p>Sallers active our site</p>
				</div>
				<div className='border p-6 flex flex-col items-center w-[200px] rounded-[5px] gap-3'>
					<img src={ic} alt='' />
					<h1 className='font-bold text-[25px]'>10.5k</h1>
					<p>Sallers active our site</p>
				</div>
				<div className='border p-6 flex flex-col items-center w-[200px] rounded-[5px] gap-3'>
					<img src={ic} alt='' />
					<h1 className='font-bold text-[25px]'>10.5k</h1>
					<p>Sallers active our site</p>
				</div>
				<div className='border p-6 flex flex-col items-center w-[200px] rounded-[5px] gap-3'>
					<img src={ic} alt='' />
					<h1 className='font-bold text-[25px]'>10.5k</h1>
					<p>Sallers active our site</p>
				</div>
			</div>

			<section className='md:max-w-[1400px] items-center md:m-auto flex-col p-5 flex md:flex-row justify-between md:mt-[80px]'>
				<div className='  flex flex-col items-start w-[300px] rounded-[5px] gap-3'>
					<img src={man} alt='' />
					<h1 className='text-[25px] font-bold'>Tom Cruise</h1>
					<p>Founder & Chairman</p>
				</div>
				<div className=' flex flex-col items-start w-[300px] rounded-[5px] gap-3'>
					<img src={man} alt='' />
					<h1 className='text-[25px] font-bold'>Tom Cruise</h1>
					<p>Founder & Chairman</p>
				</div>
				<div className='  flex flex-col items-start w-[300px] rounded-[5px] gap-3'>
					<img src={man} alt='' />
					<h1 className='text-[25px] font-bold'>Tom Cruise</h1>
					<p>Founder & Chairman</p>
				</div>
			</section>
		</>
	)
}
