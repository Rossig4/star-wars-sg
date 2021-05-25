import { useParams } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Personajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getDetallePersonajes(params.uid);
	}, []);
	const uid = parseInt(params.uid, 10) + 1;

	return (
		<div className="col-md-5 d-flex justify-content-center">
			<div className="row no gutters">
				<div className="container d-flex-row bg-negro rounded p-3">
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
						style={{ width: "14rem" }}
					/>
					<div className="d-flex flex-column text-white">
						<h2 className="text-center">{store.personajes[params.uid].name}</h2>
						<p className="" />
						<p>Color de ojos: {store.detalle.eye_color}</p>
						<p>Color de cabello: {store.detalle.hair_color}</p>
						<p>Estatura: {store.detalle.height}</p>
						<p>Año de nacimiento: {store.detalle.birth_year}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
Personajes.propTypes = {
	match: PropTypes.object
};
