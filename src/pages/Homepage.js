import React from "react";
import Calendar from "../components/Calendar/CalendarView";
import Partners from "../components/Homepage/Partners";
import News from "../components/Homepage/News";
import "../assets/styles/Homepage.scss";

export default function Homepage() {
    return (
        <div className="home-page container">
            <Partners />
            <News />
            <h2>Kalendarz</h2>
            <Calendar />
        </div>
    );
}
