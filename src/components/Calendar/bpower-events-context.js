import React, { useState, useEffect } from "react";
import axios from "axios";

export const BpowerEvents = React.createContext();
// kontekst do usunięcia po wprowadzeniu danych z bp przeniesienie koniguracji do CalendarConfig

const BpowerEventsStore = props => {
    const getLastDay = () => {
        const date = new Date();
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        return lastDay.toISOString();
    };
    const getFirstDay = () => {
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return firstDay.toISOString();
    };

    const [events, setEvents] = useState([]);
    const [monthFirstDay, setMonthFirstDay] = useState(getFirstDay);
    const [monthLastDay, setMonthLastDay] = useState(getLastDay);
    const [messages] = useState({
        allDay: "Cały dzień",
        previous: "Wstecz",
        next: "Dalej",
        today: "Dzisiaj",
        month: "Miesiąc",
        week: "Tydzień",
        work_week: "Tydzień pracy",
        day: "Dzień",
        agenda: "Agenda",
        date: "Data",
        time: "Godzina",
        event: "Wydarzenie", // Or anything you want
        showMore: total => `+ ${total} Dodatkowych wydarzeń`
    });

    useEffect(() => {
        const link = `https://content.googleapis.com/calendar/v3/calendars/${
            process.env.REACT_APP_ID_PALISADA
        }/events?timeMin=${monthFirstDay}&timeMax=${monthLastDay}&key=${
            process.env.REACT_APP_KEY
        }`;
        axios.get(link).then(res => {
            const arr = [];
            res.data.items.map(item => {
                if (item.originalStartTime) {
                    arr.push({
                        id: item.id,
                        start: convertDate(item.originalStartTime.dateTime),
                        end: convertDate(item.originalStartTime.dateTime),
                        title: item.summary
                    });
                    // return null;
                } else if (item.start.date) {
                    arr.push({
                        id: item.id,
                        start: convertDate(item.start.date),
                        end: convertDate(null, item.end.date),
                        title: item.summary
                    });
                } else if (item.start.dateTime) {
                    arr.push({
                        id: item.id,
                        start: convertDate(item.start.dateTime),
                        end: convertDate(item.end.dateTime),
                        title: item.summary
                    });
                }
                return null;
            });
            setEvents(arr);
        });
    }, [monthFirstDay, monthLastDay]);

    const convertDate = (start, end) => {
        const date = new Date(start ? start : end);
        const year = date.getFullYear();
        const month = date.getMonth();
        let day = null;
        if (start) {
            day = date.getDate();
        } else {
            day = date.getDate() - 1;
        }
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const miliseconds = date.getMilliseconds();

        const newDate = new Date(
            year,
            month,
            day,
            hours,
            minutes,
            seconds,
            miliseconds
        );

        return newDate;
    };

    return (
        <BpowerEvents.Provider
            value={{ messages, events, setMonthFirstDay, setMonthLastDay }}
        >
            {props.children}
        </BpowerEvents.Provider>
    );
};

export default BpowerEventsStore;
