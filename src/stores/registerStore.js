import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { create } from 'zustand'

export const useRegisterStore = create(() => ({
	registrate: async (formData , navigate) => {
		console.log(formData)
		try {
			let { data } = await axios.post(
				'http://37.27.29.18:8002/Account/register',
				formData
			)
			console.log(data)
			navigate('/login')
		} catch (error) {
			console.log(error)
		}
	},

	login: async (user , navigate) => {
		try {
			let data = await axios.post('http://37.27.29.18:8002/Account/login', user)
			navigate('/')
			localStorage.setItem('token', data.data)
		} catch (error) {
			console.log(error)
		}
	},
}))
