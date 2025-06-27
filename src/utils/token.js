const { jwtDecode } = require('jwt-decode')

function getToken() {
	return jwtDecode(localStorage.getItem('token'))
}

function saveToken(token) {
	localStorage.setItem('token', token)
}

function removeToken(token) {
	localStorage.removeItem('token')
}

export { saveToken, getToken, removeToken }
