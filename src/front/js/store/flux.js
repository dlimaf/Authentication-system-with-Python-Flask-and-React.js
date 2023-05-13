import { Navigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token"),
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			login: async (email, password) => {
				const requestOptions = {
					method: 'POST',
					headers: {
						"Content-Type":"application/json"
		
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				}
				try {
		
					const resp = await fetch("https://dlimaf-reimagined-winner-g96rj7vxjwq27jv-3001.preview.app.github.dev/api/login",requestOptions)
					if (!resp.ok) {
						alert("There has been some error");
						return false;
					}
					const data = await resp.json();
					console.log("this came from the backend", data);
					localStorage.setItem("user", JSON.stringify(data));
					setStore({token:data.token});
					if (resp.ok) return true;
				
				}catch(error) {
					console.log("There has been an error login in")}
					return false
			},

			logout: async () => {
				setStore({ token: null });
				localStorage.removeItem("token");
				return <Navigate to="/login" />;
			  },


		}
	};
};

export default getState;
