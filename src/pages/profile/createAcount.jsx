import { Button, TextField } from '@mui/material'
import google from '@/assets/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useRegisterStore } from '../../stores/registerStore'

export default function CreateAccount() {
	const navigate = useNavigate()
	const { registrate, error } = useRegisterStore()

	async function handleRegistre(e) {
		e.preventDefault()
		let user = {
			userName: e.target.name.value,
			phoneNumber: e.target.phone.value,
			email: e.target.email.value,
			password: e.target.password.value,
			confirmPassword: e.target.confirm.value,
		}

		const result = await registrate(user)

		if (result.success) {
			navigate('/login')
		} else {
			console.log('Registration error:', result.error)
		}
	}

	return (
		<>
			<section className='md:max-w-[1400px] p-5 md:m-auto flex flex-col gap-10 items-center'>
				<div className='flex flex-col items-start text-start gap-2  md:w-[25%] w-[100%]'>
					<h1 className='font-bold text-[40px]'>Create an account</h1>
					<p>Enter your details below</p>
				</div>
				<form
					onSubmit={e => handleRegistre(e)}
					className='flex flex-col gap-5 md:w-[25%] w-[100%]'
				>
					<div className='flex flex-col gap-5'>
						<TextField
							required
							id='outlined-basic'
							label='Name'
							variant='outlined'
							name='name'
						/>
						<TextField
							required
							id='filled-basic'
							label='Email'
							variant='outlined'
							name='email'
						/>
						<TextField
							required
							id='filled-basic'
							label='Phone number'
							variant='outlined'
							name='phone'
						/>
						<TextField
							required
							id='filled-basic'
							label='Password'
							variant='outlined'
							name='password'
						/>
						<TextField
							required
							id='filled-basic'
							label='Confirm password'
							variant='outlined'
							name='confirm'
						/>
					</div>
					<div className='flex flex-col gap-3 '>
						<Button
							type='submit'
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
				{error && (
					<span className='text-red-600 mt-[-20px] mb-[-20px]'>
						Something is go wrong❗❗❗
					</span>
				)}
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
