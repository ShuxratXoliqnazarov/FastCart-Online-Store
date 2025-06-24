import { Button, TextField } from '@mui/material'

export default function LogIn() {
	return (
		<>
			<section className='md:max-w-[1400px] p-5 md:m-auto flex flex-col gap-10 items-center'>
				<div className='flex flex-col items-start text-start gap-2  md:w-[25%] w-[100%]'>
					<h1 className='font-bold text-[35px]'>Log in to Exclusive</h1>
					<p>Enter your details below</p>
				</div>
				<form className='flex flex-col gap-5 md:w-[25%] w-[100%]'>
					<div className='flex flex-col gap-5'>
						<TextField
							id='outlined-basic'
							label='Email or phone number'
							variant='outlined'
						/>
						<TextField
							id='filled-basic'
							label='Password'
							variant='outlined'
							type='password'
						/>
					</div>
					<div className='flex flex-col gap-3 '>
						<Button
							variant='text'
							sx={{
								backgroundColor: '',
								color: '#DB4444',
								// border: '1px solid gray',
								padding: '10px 0px',
							}}
						>
							Forgor Password ?
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
								backgroundColor: '#DB4444',
								color: 'white',
							}}
						>
							Log In
						</Button>
					</div>
				</form>
			</section>
		</>
	)
}
