import React from "react";
import { Link } from "react-router-dom";
import oferty from "../../assets/images/agreement.png";
import produkcja from "../../assets/images/cogwheel.png";
import platnosci from "../../assets/images/credit-card.png";

export default function Partners() {
    return (
        <div className="partners">
            <h2>STREFA PARTNERA</h2>
            <div className="row partners-card">
                <div className="col-md">
                    <div className="card mb-3">
                        <div className="row no-gutters text-white bg-secondary">
                            <div className="col-5 col-md-5">
                                <img
                                    alt="partners"
                                    className="partners-icon w-100 p-3"
                                    src={oferty}
                                />
                            </div>
                            <div className="col-7 col-md-7">
                                <div className="card-body text-right">
                                    <h1 className="card-title">26</h1>
                                    <p className="card-text">Nowych ofert!</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/oferty">
                            <div className="card-footer d-flex justify-content-between align-items-center bg-light">
                                Zobacz oferty
                                <i className="fa fa-arrow-circle-right" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3">
                        <div className="row no-gutters text-white bg-secondary">
                            <div className="col-5 col-md-5">
                                <img
                                    alt="partners"
                                    className="partners-icon w-100 p-3"
                                    src={platnosci}
                                />
                            </div>
                            <div className="col-7 col-md-7">
                                <div className="card-body text-right">
                                    <h1 className="card-title">32</h1>
                                    <p className="card-text">
                                        Nowych platnosci!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/oferty">
                            <div className="card-footer d-flex justify-content-between align-items-center bg-light">
                                Zobacz platnosci
                                <i className="fa fa-arrow-circle-right" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3">
                        <div className="row no-gutters text-white bg-secondary">
                            <div className="col-5 col-md-5">
                                <img
                                    alt="partners"
                                    className="partners-icon w-100 p-3"
                                    src={produkcja}
                                />
                            </div>
                            <div className="col-7 col-md-7">
                                <div className="card-body text-right">
                                    <h1 className="card-title">11</h1>
                                    <p className="card-text">
                                        Nowych produktów!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/produkcja">
                            <div className="card-footer d-flex justify-content-between align-items-center bg-light">
                                Zobacz produkcje
                                <i className="fa fa-arrow-circle-right" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
