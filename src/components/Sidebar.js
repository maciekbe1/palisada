import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Slider } from "react-burgers";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        let sidebar = document.querySelector(".sidebar");
        window.addEventListener("scroll", function() {
            const isTop = window.scrollY;
            if (isTop > 60) {
                //TODO change className for more logic
                sidebar.classList.add("ps");
            } else {
                sidebar.classList.remove("ps");
            }
        });
    }, []);
    return (
        <div className="sidebar">
            <div className={isOpen ? "sidebar-wide" : "sidebar-narrow"}>
                <Slider
                    onClick={toggle}
                    width={40}
                    active={isOpen}
                    color="#fff"
                />
                <NavLink
                    exact={true}
                    className=""
                    activeClassName="active"
                    to="/"
                >
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-home" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Panel</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/oferty">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-handshake-o" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Oferty</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/zamowienia">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-shopping-cart" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Zamówienia</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/raporty">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-file-text-o" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Raporty</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className=""
                    activeClassName="active"
                    to="/uzytkownicy"
                >
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-user" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Użytkownicy</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/cennik">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-money" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Cennik</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/checklista">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-list-alt" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Checklista</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/produkcja">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-cogs" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Produkcja</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/ksiegowosc">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-book" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Księgowość</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/statystyki">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-bar-chart" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Statystyki</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="" activeClassName="active" to="/kalendarz">
                    <div className="sidebar-link">
                        <div className="sidebar-box">
                            <div className="sidebar-icon">
                                <i className="fa fa-calendar" />
                            </div>
                            <div className={isOpen ? "sidebar-text" : "d-none"}>
                                <p>Kalendarz</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}
