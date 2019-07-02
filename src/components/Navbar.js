import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
export default function Navbar() {
    return (
        <nav className="nav navbar-expand-sm navbar-light container-fluid">
            <Link className="navbar-brand" to="/">
                <img alt="logo" className="logo" src={logo} />
            </Link>
            <div className="nav-btn m-auto">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            exact={true}
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/"
                        >
                            Panel
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/zamowienia"
                        >
                            Zamówienia
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/oferty"
                        >
                            Oferty
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/raporty"
                        >
                            Raporty
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/uzytkownicy"
                        >
                            Uytkownicy
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/cennik"
                        >
                            Cennik
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/checklista"
                        >
                            Checklista
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/produkcja"
                        >
                            Produkcja
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/ksiegowosc"
                        >
                            Księgowość
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/statystyki"
                        >
                            Statystyki
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link btn mr-2"
                            activeClassName="active"
                            to="/kalendarz"
                        >
                            Kalendarz
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
