import { create } from 'zustand'
import { axiosStandart } from '../utils/axios'

export const useInfoStore = create((set, get) => ({
	infoData: {},
	getInfo: async id => {
		try {
			let { data } = await axiosStandart.get(
				'/Product/get-product-by-id?id=' + id
			)

			set(() => ({ infoData: data.data }))
		} catch (error) {
			console.log(error)
		}
	},
}))
