import { create } from 'zustand'
import { axiosStandart } from '../utils/axios'

export const useCategory = create((set, get) => ({
	subCategories: [],
	getCategory: async id => {
		try {
			let { data } = await axiosStandart.get(
				`/Category/get-category-by-id?id=${id}`
			)
			console.log('SUB: ' , data)
			set(()=>({subCategories: data}))
		} catch (error) {
			console.log(error)
		}
	},
}))
