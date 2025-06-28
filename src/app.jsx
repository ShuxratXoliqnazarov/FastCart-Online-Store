import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import CheckOut from './pages/check-out/chekout'
import Contact from './pages/contact/contact'
import Info from './pages/info/info'
import NotFound from './pages/not-found/not-found'
import Products from './pages/products/products'
import CreateAccount from './pages/profile/createAcount'
import LogIn from './pages/profile/logIn'
import Profile from './pages/profile/profile'
import OurStory from './pages/story/our-story'
import Wishlist from './pages/wishlist/wishlist'
import { useTranslation } from 'react-i18next'
import CategoryById from './pages/categoryById/categoryById'

export default function App() {
	// !Router-Dom
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					element: <Home />,
					index: true,
				},
				{
					path: 'cart',
					element: <Cart />,
				},
				{
					path: 'checkout',
					element: <CheckOut />,
				},
				{
					path: 'contact',
					element: <Contact />,
				},
				{
					path: 'info/:id',
					element: <Info />,
				},
				{
					path: '*',
					element: <NotFound />,
				},
				{
					path: 'products',
					element: <Products />,
				},
				{
					path: 'createAcount',
					element: <CreateAccount />,
				},
				{
					path: 'login',
					element: <LogIn />,
				},
				{
					path: 'profile',
					element: <Profile />,
				},
				{
					path: 'ourStory',
					element: <OurStory />,
				},
				{
					path: 'wishlist',
					element: <Wishlist />,
				},
				{
					path: 'category/:id',
					element: <CategoryById/>
				}
			],
		},
	])
	return <RouterProvider router={router} />
}
