import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { CardPersonajes } from "../component/cardPersonajes"; // ### AQUI ###
import { CardPlanets } from "../component/cardPlanetas"; // ### AQUI ###
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-white text-justify">Personajes</h1>
			<div className="mt-4 scrolling-wrapper-flexbox card-deck rounded-top">
				{store.personajes.map((item, index) => {
					return (
						<div key={index}>
							<CardPersonajes name={item.name} uid={index} />
						</div>
					);
				})}
			</div>
			<h1 className="text-white text-justify">Planetas</h1>
			<div className="mt-4 scrolling-wrapper-flexbox card-deck rounded-top">
				{store.planetas.map((item, index) => {
					return (
						<div key={index}>
							<CardPlanets name={item.name} uid={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
