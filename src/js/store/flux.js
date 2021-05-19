import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			personajes: [],
			planetas: [],
			favoritos: [],
			detalle: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			agregarFavoritos: element => {
				const store = getStore();
				const nuevoFavoritos = store.favoritos.concat(element);
				setStore({ favoritos: nuevoFavoritos });
				console.log(store.favoritos);
			},

			eliminarFavoritos: Favorito => {
				const store = getStore();
				var nuevoFavorito = store.favoritos.filter(favoritos => {
					return favoritos !== Favorito;
				});
				setStore({ favoritos: nuevoFavorito });
			},

			loadSomeData: async () => {
				//personajes
				try {
					const res = await fetch("https://www.swapi.tech/api/people/");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						personajes: data.results
					});
				} catch (error) {
					console.log(error);
				}

				//planetas
				try {
					const res = await fetch("https://www.swapi.tech/api/planets/");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						planetas: data.results
					});
				} catch (error) {
					console.log(error);
				}

				// getDetalleDePersonajes();    #### AQUI ####
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getDetallePersonajes: async uid => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					const data = await res.json();
					console.log("AsyncDetalles;", data.result.properties);
					setStore({
						detalle: data.result.properties
					});
				} catch {}
			},
			getDetallePlanetas: async uid => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					const data = await res.json();
					console.log("AsyncDetalles;", data.result.properties);
					setStore({
						detalle: data.result.properties
					});
				} catch {}
			}
		}
	};
};

export default getState;
