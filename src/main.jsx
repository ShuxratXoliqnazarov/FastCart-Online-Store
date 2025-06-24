import ReactDOM from 'react-dom/client'
import App from './app'
import { StrictMode } from 'react'
import './i18n'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
			<App />
	</StrictMode>
)
