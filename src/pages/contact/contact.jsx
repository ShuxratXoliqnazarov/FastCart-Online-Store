import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Button, TextareaAutosize, TextField } from '@mui/material'
export default function Contact() {
	return (
		<>
			<section className='md:max-w-[1400px] gap-10 md:gap-0 md:m-auto flex md:flex-row flex-col p-5 md:p-0 justify-between md:mt-[100px] md:mb-[200px]'>
				<aside className='shadow-lg shadow-gray-400 md:w-[20%] p-5 rounded-[5px]'>
					<div className='md:w-[250px] p-5'>
						<h2 className='font-bold flex gap-3'>
							<LocalPhoneOutlinedIcon
								sx={{
									border: '1px solid red',
									backgroundColor: '#DB4444',
									color: 'white',
									borderRadius: '50%',
									padding: '2px',
								}}
							/>
							Call To Us
						</h2>
						<p>We are available 24/7, 7 days a week. Phone: +8801611112222</p>
					</div>
					<hr />
					<div className='md:w-[250px] p-5'>
						<h2 className='font-bold flex gap-3'>
							<EmailOutlinedIcon
								sx={{
									border: '1px solid red',
									backgroundColor: '#DB4444',
									color: 'white',
									borderRadius: '50%',
									padding: '2px',
								}}
							/>
							Write To US
						</h2>
						<p>
							Fill out our form and we will contact you within 24 hours. Emails:
							customer@exclusive.com Emails: support@exclusive.com
						</p>
					</div>
				</aside>

				<aside className='md:w-[65%] flex flex-col gap-5 md:gap-0 justify-between items-end shadow-lg shadow-gray-400 p-5 rounded-[5px]'>
					<div className='flex md:flex-row flex-col  justify-between w-[100%] gap-5 md:gap-0'>
						<TextField id='outlined-basic' label='Name' variant='outlined' />
						<TextField id='outlined-basic' label='Email' variant='outlined' />
						<TextField id='outlined-basic' label='Phone' variant='outlined' />
					</div>
					<textarea
						maxlength='400'
						placeholder='Your Massage'
						className='border p-6 resize-none  rounded-md w-full h-42'
					></textarea>
					<Button sx={{ backgroundColor: '#DB4444', color: 'white' }}>
						Send Massage
					</Button>
				</aside>
			</section>
		</>
	)
}
