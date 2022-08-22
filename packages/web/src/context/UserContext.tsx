import { createContext, useEffect, useState } from 'react';
import jwt from 'jwt-decode';

export const UserContext = createContext(null);

export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem('ATP_TOKEN_AUTH');

		if (!token) {
			setUser(null);
		} else {
			setUser(jwt(token));
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
