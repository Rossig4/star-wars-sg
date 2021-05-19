import { useParams } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getDetallePlanetas(params.uid);
	}, []);
	const uid = parseInt(params.uid, 10) + 2;

	return (
		<div className="container d-flex-row bg-negro rounded p-3">
			<img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} />
			<div className="d-flex flex-column text-white">
				<div>
					<h2 className="">{store.planetas[params.uid].name}</h2>
					<p className="">
						Diámetro:
						{store.detalle.diameter}
					</p>
					<p>
						Clima:
						{store.detalle.climate}
					</p>
					<p>
						Período de Rotación:
						{store.detalle.rotation_period}
					</p>
					<p>
						Gravedad:
						{store.detalle.gravity}
					</p>
				</div>
			</div>
		</div>
	);
};

Planetas.propTypes = {
	match: PropTypes.object
};
