import { create } from 'zustand'
import { axiosRequest, axiosStandart } from '../utils/axios'
import { ErrorOutline } from '@mui/icons-material'

export const useFilterStore = create((set, get) => ({
	product: [],
	category: [],
	brands: [],

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

	priceFiltre: async ({ minPrice, maxPrice }) => {
		try {
			const { data } = await axiosRequest(
				`/Product/get-products?MinPrice=${minPrice}&MaxPrice=${maxPrice}`
			)
			set(() => ({ product: data.data.products }))
		} catch (error) {
			console.log(error)
		}
	},

	brandFiltre: async id => {
		try {
			const { data } = await axiosStandart(
				`/Product/get-products?BrandId=${id}`
			)
			set(() => ({ product: data.data.products }))
		} catch (error) {
			console.log(error)
		}
	},

	cotegoryFiltre: async id => {
		try {
			const { data } = await axiosStandart(
				`/Product/get-products?CategoryId=${id}`
			)
			set(() => ({ product: data.data.products }))
			console.log(product)
		} catch (error) {
			console.log(error)
		}
	},

	getBrand: async () => {
		try {
			let { data } = await axiosStandart.get('Brand/get-brands')
			set(() => ({ brands: data.data }))
		} catch (error) {
			console.log(error)
		}
	},

	searchFunc: async names => {
		try {
			let { data } = await axiosStandart(
				`/Product/get-products?ProductName=${names}`
			)
			set(() => ({ product: data.data.products }))
		} catch (error) {
			console.log(error)
		}
	},
}))
