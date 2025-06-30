//
import { toast } from 'sonner'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useWishlistStore = create(
	persist(
		(set, get) => ({
			items: [],

			addItem: product => {
				set(state => {
					const isExist = state.items.some(item => item.id === product.id)
					if (!isExist) {
						const newProduct = {
							id: product.id,
							productName: product.productName,
							image: product.image,
							price: product.price,
							categoryName: product.categoryName,
						}
						toast.success(
							`${product.productName} successfully added to wishlist!`
						)
						return { items: [...state.items, newProduct] }
					}
					toast.info(`${product.productName} is already in your wishlist!`)
					return state
				})
			},

			removeItem: productId => {
				set(state => {
					const updatedItems = state.items.filter(item => item.id !== productId)
					if (updatedItems.length < state.items.length) {
						toast.error('Product deleted from wishlist!')
						return { items: updatedItems }
					}
					toast.info('Product not found in wishlist.')
					return state
				})
			},

			isInWishlist: productId => {
				return get().items.some(item => item.id === productId)
			},
		}),
		{
			name: 'wish',
			storage: createJSONStorage(() => localStorage),
		}
	)
)
