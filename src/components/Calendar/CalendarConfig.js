import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { BpowerEvents } from "./bpower-events-context";

import moment from "moment";
import "../../assets/styles/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarConfig = props => {
    const context = useContext(BpowerEvents);

    // const eventDetailsInfo = event => {
    //     console.log(event);
    // };

    const getCurrentDate = event => {
        const date = new Date(event);
        const dateFirstDay = event.toISOString();
        const dateLastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            1
        ).toISOString();

        context.setMonthFirstDay(dateFirstDay);
        context.setMonthLastDay(dateLastDay);
    };
    const eventBackgroundColor = (event, start, end) => {
        if (end < new Date()) {
            return {
                style: {
                    backgroundColor: "#6c757d"
                    // opacity: 0.5
                }
            };
        } else {
            return {
                style: {
                    backgroundColor: "#6c757d"
                }
            };
        }
    };

    return (
        <Calendar
            popup
            onNavigate={event => getCurrentDate(event)}
            localizer={localizer}
            events={context.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date()}
            messages={context.messages}
            culture={"pl-PL"}
            // onSelectEvent={event => eventDetailsInfo(event)}
            eventPropGetter={eventBackgroundColor}
        />
    );
};

export default CalendarConfig;
