import { toast } from 'sonner'
import { create } from 'zustand'
import { axiosRequest } from '../utils/axios'

export const useCartStore = create((set, get) => ({
	data: [],

	totalPrice: 0,

	totalProducts: 0,

	getProduct: async () => {
		try {
			const response = await axiosRequest.get('/Cart/get-products-from-cart')

			const cart = response.data.data[0]

			set(() => ({
				data: cart.productsInCart.map(item => ({
					...item.product,
					quantity: item.quantity,
					cartId: item.id,
				})),
				totalPrice: cart.totalPrice,
				totalProducts: cart.totalProducts,
			}))
		} catch (error) {
			console.log('Ошибка получения корзины:', error)
		}
	},

	addToCart: async id => {
		try {
			await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`)
			get().getProduct()
			toast.info('The product is succesfully added ✅')
		} catch (error) {
			console.log(error)
			toast.error('This product is already added on cart❗ ')
		}
	},

	delFromCart: async id => {
		try {
			await axiosRequest.delete('/Cart/delete-product-from-cart?id=' + id)
			get().getProduct()
		} catch (error) {
			console.log(error)
		}
	},

	clearCart: async () => {
		try {
			await axiosRequest.delete('/Cart/clear-cart', {})
			get().getProduct()
		} catch (error) {
			console.log(error)
		}
	},
}))
