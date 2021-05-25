import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Star from "../../img/star.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="p-5">
			<div className="container-fluid fixed-top">
				<nav className="navbar navbar-light bg-light mb-3">
					<div className="container">
						<Link to="/">
							<img src={Star} width="60" height="40" border-radius="50px" border="2px" />
						</Link>
						<span className="titulo" />
					</div>
					<div className="dropdown show flex-box ml-auto">
						<button
							className="btn btn-dark dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favoritos ({store.favoritos.length})
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{store.favoritos.map((favorito, index) => {
								return (
									<a className="dropdown-item" href="#" key={index}>
										{favorito}
										<i
											className="ml-2 far fa-trash-alt"
											onClick={() => {
												actions.eliminarFavoritos(favorito);
											}}
										/>
									</a>
								);
							})}
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};
