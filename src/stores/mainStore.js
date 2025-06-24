import axios from 'axios'
import { create } from 'zustand'

export const useMainStore = create((set, get) => ({
	category: [],
	product: [],
	getCategory: async () => {
		try {
			let { data } = await axios.get(
				'http://37.27.29.18:8002/Category/get-categories'
			)
			set(() => ({ category: data.data }))
		} catch (error) {
			console.log(error)
		}
	},
	getProducts: async () => {
		try {
			let { data } = await axios.get(
				'http://37.27.29.18:8002/Product/get-products'
			)
			set(() => ({ product: data.data.products }))
		} catch (error) {
			console.log(error)
		}
	},
}))
