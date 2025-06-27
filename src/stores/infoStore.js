import axios from 'axios'
import { create } from 'zustand'

export const useInfoStore = create((set, get) => ({
	infoData: {},
	getInfo: async id => {
		console.log('Id on store.js: ', id)
		try {
			let { data } = await axios.get(
				'http://37.27.29.18:8002/Product/get-product-by-id?id=' + id
			)

			// console.log('data от сервера:', data)
			set(() => ({ infoData: data.data }))
		} catch (error) {
			console.log(error)
		}
	},
}))
