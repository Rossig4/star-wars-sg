import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card border-0" style={{ width: "18rem" }}>
			<img
				src={`https://starwars-visualguide.com/assets/img/planets/${props.uid + 2}.jpg`}
				className="card-img-top"
				//width="400"
				// height="200"
				alt="..."
			/>
			<div className="card-body bg-negro">
				<h4 className="card-title">{props.name}</h4>
				<p className="card-text">Planetas de Star Wars</p>
				<Link to={"/planets/" + props.uid} className="btn btn-primary">
					{" "}
					More Information
				</Link>
			</div>

			<button
				type="button"
				onClick={() => actions.agregarFavoritos(props.name)}
				//disabled={store.favoritos.includes(props.name)} ### AQUI ###
				className="ml-2 btn btn-dark">
				<i className="fas fa-heart" />
			</button>
		</div>
	);
};

CardPlanets.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.number
};
