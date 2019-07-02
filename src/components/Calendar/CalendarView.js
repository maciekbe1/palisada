import React from "react";
import CalendarConfig from "./CalendarConfig";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import BpowerEventsStore from "./bpower-events-context";
import "moment/locale/pl";
import "moment/locale/en-gb";

const localizer = momentLocalizer(moment);

const CalendarLocalizer = () => {
    return (
        <BpowerEventsStore>
            <CalendarConfig localizer={localizer} />
        </BpowerEventsStore>
    );
};

export default CalendarLocalizer;
