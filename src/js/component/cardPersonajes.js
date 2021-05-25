import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersonajes = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card border-0 border border-white shadow p-3 mb-5 bg-white rounded" style={{ width: "16rem" }}>
			<img
				src={`https://starwars-visualguide.com/assets/img/characters/${props.uid + 1}.jpg`}
				className="card-img-top"
				//width="400"
				// height="200"
				alt="..."
			/>
			<div className="card-body bg-negro">
				<h4 className="card-title center">{props.name}</h4>
				{/* <p className="card-text">Personaje de Star Wars</p> */}
				<Link to={"/personajes/" + props.uid} className="btn btn-warning">
					{" "}
					More Information
				</Link>
			</div>

			<button
				// type=""
				onClick={() => actions.agregarFavoritos(props.name)}
				//disabled={store.favoritos.includes(props.name)} ### AQUI ###
				className="">
				<i className="fas fa-heart" />
			</button>
		</div>
	);
};

CardPersonajes.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.number
};
