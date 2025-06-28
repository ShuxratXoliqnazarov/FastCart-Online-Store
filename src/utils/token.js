import {jwtDecode} from 'jwt-decode'

function getToken() {
	return jwtDecode(localStorage.getItem('token'))
}

function saveToken(token) {
	localStorage.setItem('token', token)
}

function removeToken() {
	localStorage.removeItem('token')
}

export { saveToken, getToken, removeToken }
