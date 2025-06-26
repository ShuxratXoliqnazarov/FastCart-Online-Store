import axios from 'axios'
import { create } from 'zustand'

export const useRegisterStore = create((set, get) => ({
	isLoading: false,
	error: null,
	wrong: null,

	registrate: async formData => {
		console.log(formData)
		try {
			set({ isLoading: true, error: null })
			let response = await axios.post(
				'http://37.27.29.18:8002/Account/register',
				formData
			)
			set({ isLoading: false })
			return { success: true, data: response.data }
		} catch (error) {
			const errMsg = error.response?.data?.message || 'Unknown error'
			set({ isLoading: false, error: errMsg })
			return { success: false, error: errMsg }
		}
	},

	login: async user => {
		try {
			set({ isLoading: true, wrong: null })
			let response = await axios.post(
				'http://37.27.29.18:8002/Account/login',
				user
			)
			set({ isLoading: false })
			localStorage.setItem('token', response.data.data)
			return { success: true, data: response.data.data }
		} catch (error) {
			const errMsg = error.response?.data?.message || 'Unknown error'
			set({ isLoading: false, wrong: errMsg })
			return { success: false, wrong: errMsg }
		}
	},
}))
