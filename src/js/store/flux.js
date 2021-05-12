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
            favoritos: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            agregarfavoritos: () => { },

            eliminarfavoritos: () => {
                let nuevaListaFavoritos = store.favoritos.filter((element, index) => {
                    if (i != index) return element;
                });
                setStore({ favoritos: nuevaListaFavoritos });
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

                getDetalleDePersonajes();
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
            getDetalleDePersonajes: async uid => {
                try {
                    const store = getStore();
                    const res = await fetch("https:swapi.tech/api/people" + uid);
                    const data = await res.json();
                    console.log("AsyncDetalles;", data.result.properties);
                    setStore({
                        detalle: data.result.properties
                    });
                } catch { }
            }
        }
    };
};

export default getState;



