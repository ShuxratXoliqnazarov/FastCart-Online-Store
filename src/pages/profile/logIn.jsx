import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useRegisterStore } from '../../stores/registerStore'

export default function LogIn() {
	const { login, wrong } = useRegisterStore()
	const navigate = useNavigate()

	async function handleLogin(e) {
		e.preventDefault()

		let user = {
			userName: e.target.name.value,
			password: e.target.password.value,
		}
		let result = await login(user)
		if (result.success) {
			navigate('/')
		} else {
			console.log(result.error)
		}
	}

	return (
		<>
			<section className='md:max-w-[1400px] p-5 md:m-auto flex flex-col gap-10 items-center'>
				<div className='flex flex-col items-start text-start gap-2  md:w-[25%] w-[100%]'>
					<h1 className='font-bold text-[35px]'>Log in to Exclusive</h1>
					<p>Enter your details below</p>
				</div>
				<form
					className='flex flex-col gap-5 md:w-[25%] w-[100%]'
					onSubmit={e => handleLogin(e)}
				>
					<div className='flex flex-col gap-5'>
						<TextField
							required
							id='outlined-basic'
							label='User Name'
							variant='outlined'
							name='name'
						/>
						<TextField
							required
							id='filled-basic'
							label='Password'
							variant='outlined'
							type='password'
							name='password'
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
							Forgot Password ?
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
							type='submit'
							>
							Log In
						</Button>
					</div>
							{wrong && <span className='text-red-600 text-center '>Something is go wrong❗❗❗ </span>}
				</form>
			</section>
		</>
	)
}
