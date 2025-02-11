import React, { useState } from 'react'

export function useAuth() {
	//было бы хорошо перенести логику хранения данных в user, а isAuth по факту проверять от user
	const [user, setUser] = useState(null);
	const [isAuth, setIsAuth] = useState(false);
	return {
		user,
		setUser,
		isAuth,
		setIsAuth,
	} 
}

 