import { create } from 'zustand'
import { axiosStandart } from '../utils/axios'

export const useCategory = create((set, get) => ({
	categories: [],
	product: [],
	getCategory: async id => {
		try {
			let { data } = await axiosStandart.get(
				`/Category/get-category-by-id?id=${id}`
			)
			set(() => ({ categories: data.data }))
		} catch (error) {
			console.log(error)
		}
	},

	cotegoryById: async id => {
		try {
			const { data } = await axiosStandart(
				`/Product/get-products?CategoryId=${id}`
			)
			if (data.data.products.length > 0) {
				set(() => ({ product: data.data.products }))
			} else {
				set(() => ({ product: [] }))
			}
		} catch (error) {
			console.log(error)
		}
	},

	subCategoryById: async id => {
		console.log(id)
		try {
			let { data } = await axiosStandart.get(
				`/Product/get-products?SubcategoryId=${id}`
			)
			console.log('SubData: ', data.data.products)
			set(() => ({ product: data.data.products }))
		} catch (error) {
			console.log(error)
		}
	},
	clearProducts: () => set(() => ({ product: [] })),
}))
