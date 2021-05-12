import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardPersonajes = props => {
    return (
        <div className="card border-0" style={{ width: "18rem" }}>
            <img src={props.tipo == "personaje" ? "https:/starwars-visualguide.com/assets/img/characters/"+ props.uid + ".jpg" :""}
        className="card-img-top" width="400" height="200" alt="..." />
            <div className="card-body bg-negro text-white">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">
                    blalalalalalala
                    </p>
                <Link to={"https:/www.swapi.tech/api/people/" + props.uid}
                    className="btn btn-primary"> More Information
                         </Link>
            </div>
            <Link to={"/personajes/" + props.uid}>
                <span className="btn btn-light">More Information</span>
            </Link>
            <button type="button"
                onClick={() => actions.getFavoritos(props.name)}
                disabled={store.favoritos.includes(props.name)}
                className="ml-2 btn btn-dark">
                <i className="fas fa-heart" />
            </button>
        </div>
    )}

    CardPersonajes.propTypes = {
name: PropTypes.string,
uid: PropTypes.number
};
