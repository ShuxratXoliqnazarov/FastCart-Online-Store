import { Button, TextField } from '@mui/material'
import google from '@/assets/google.png'
import { Link } from 'react-router-dom'

export default function CreateAccount() {
	return (
		<>
			<section className='md:max-w-[1400px] p-5 md:m-auto flex flex-col gap-10 items-center'>
				<div className='flex flex-col items-start text-start gap-2  md:w-[25%] w-[100%]'>
					<h1 className='font-bold text-[40px]'>Create an account</h1>
					<p>Enter your details below</p>
				</div>
				<form className='flex flex-col gap-5 md:w-[25%] w-[100%]'>
					<div className='flex flex-col gap-5'>
						<TextField id='outlined-basic' label='Name' variant='outlined' />
						<TextField
							id='filled-basic'
							label='Email or phone number'
							variant='outlined'
						/>
						<TextField id='filled-basic' label='Password' variant='outlined' />
					</div>
					<div className='flex flex-col gap-3 '>
						<Button
							variant='outlined'
							sx={{
								backgroundColor: '#DB4444',
								color: 'white',
								border: '1px solid gray',
								padding: '10px 0px',
							}}
						>
							Create Account
						</Button>
						<Button
							variant='outlined'
							color='inherit'
							sx={{
								border: '1px solid gray',
								display: 'flex',
								alignItems: 'center',
								gap: '20px',
								padding: '10px 0px',
							}}
						>
							<img src={google} alt='' />
							Sign up with Google
						</Button>
					</div>
				</form>
				<div className='flex gap-5'>
					<p>Already have account?</p>

					<p className='underline'>
						<Link to={'/login'}>Log In</Link>
					</p>
				</div>
			</section>
		</>
	)
}
