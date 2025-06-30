import { create } from 'zustand'
import { axiosStandart } from '../utils/axios'
import { saveToken } from '../utils/token'

export const useRegisterStore = create((set, get) => ({
	isLoading: false,
	error: null,
	wrong: null,

	registrate: async formData => {
		try {
			set({ isLoading: true, error: null })
			let response = await axiosStandart.post('/Account/register', formData)
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
			let response = await axiosStandart.post('/Account/login', user)
			set({ isLoading: false })
			saveToken(response.data.data)
			return { success: true, data: response.data.data }
		} catch (error) {
			const errMsg = error.response?.data?.message || 'Unknown error'
			set({ isLoading: false, wrong: errMsg })
			return { success: false, wrong: errMsg }
		}
	},
}))
