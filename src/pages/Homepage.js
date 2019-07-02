import React from "react";
import Calendar from "../components/Calendar/CalendarView";
import Partners from "../components/Homepage/Partners";

export default function Homepage() {
    return (
        <div className="home-page container-fluid">
            <Partners />
            <Calendar />
        </div>
    );
}
