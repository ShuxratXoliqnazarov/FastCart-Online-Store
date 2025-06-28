import { create } from 'zustand'
import { axiosRequest } from '../utils/axios'
import { API } from '../utils/config'
console.log(API)

export const useMainStore = create((set, get) => ({
	category: [],

	product: [],

	getCategory: async () => {
		try {
			let { data } = await axiosRequest.get('/Category/get-categories')
			set(() => ({ category: data.data }))
		} catch (error) {
			console.log(error)
		}
	},

	getProducts: async () => {
		try {
			let { data } = await axiosRequest.get('/Product/get-products')
			set(() => ({ product: data.data.products }))
		} catch (error) {
			console.log(error)
		}
	},
}))


