import axios from 'axios'
import { toast } from 'sonner'
import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
	data: [],

	totalPrice: 0,

	totalProducts: 0,

	getProduct: async () => {
		const token = localStorage.getItem('token')
		try {
			const response = await axios.get(
				'http://37.27.29.18:8002/Cart/get-products-from-cart',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			// console.log('🔁 Ответ от getProduct:', response.data)

			const cart = response.data.data[0]

			set(() => ({
				data: cart.productsInCart.map(item => ({
					...item.product, // достаём name, price, image и т.д.
					quantity: item.quantity, // добавляем количество
					cartId: item.id, // id записи в корзине
				})),
				totalPrice: cart.totalPrice,
				totalProducts: cart.totalProducts,
			}))
		} catch (error) {
			console.log('Ошибка получения корзины:', error)
		}
	},

	addToCart: async id => {
		const token = localStorage.getItem('token')

		try {
			await axios.post(
				`http://37.27.29.18:8002/Cart/add-product-to-cart?id=${id}`,
				{},

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			get().getProduct()
			toast.info('The product is succesfully added ✅')
		} catch (error) {
			console.log(error)
			toast.error('This product is already added on cart❗ ')
		}
	},

	delFromCart: async id => {
		const token = localStorage.getItem('token')

		console.log(id)
		try {
			await axios.delete(
				'http://37.27.29.18:8002/Cart/delete-product-from-cart?id=' + id,

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			get().getProduct()
		} catch (error) {
			console.log(error)
		}
	},

	clearCart: async () => {
		const token = localStorage.getItem('token')
		try {
			await axios.delete('http://37.27.29.18:8002/Cart/clear-cart', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			get().getProduct()
		} catch (error) {
			console.log(error)
		}
	},
}))
