import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Context } from "../store/appContext";





export const Personajes = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
        
        useEffect(() => {
            actions.getDetallePersonaje(params.uid);
        }, []);

        return (
            <div className="container d-flex-row bg-negro rounded p-3">
                <img src="https://picsum.photos/400/400" alt="..." />
                <div className="d-flex flex-column text-white">
                    <h2 className="text-center">{store.personajes[params.uid].name}</h2>
                    <p className="text-center parrafo">
                        color de ojos: {store.detalle != null ? store.detalle.eye_color : ""}
                    </p>
            </div>
            </div>
        );
};