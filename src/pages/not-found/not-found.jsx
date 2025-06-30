import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
	return (
		<div className='min-h-screen  flex flex-col items-center justify-center p-6 text-center'>
			<h1 className='text-9xl font-extrabold text-red-600 mb-4 tracking-tight drop-shadow-lg animate-pulse-slight'>
				404
			</h1>

			<h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-300'>
				Page Not Found
			</h2>

			<p className='text-lg md:text-xl text-gray-400 mb-8 max-w-lg'>
				Unfortunately, the page you are looking for does not exist or has been
				moved. Perhaps you made a typo in the address, or the page has been
				deleted.
			</p>

			<Link
				to={'/'}
				className='
                    inline-flex items-center px-8 py-3 text-lg font-semibold
                    text-white bg-red-600 rounded-lg shadow-lg
                    hover:bg-red-700 hover:scale-105 transform transition-all duration-300 ease-in-out
                    focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50
                '
			>
				<svg
					className='w-5 h-5 mr-2 -ml-1'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
				</svg>
				Back to home page
			</Link>
		</div>
	)
}

export default NotFoundPage
