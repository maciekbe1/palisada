import React, { useContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Context from "./context";
import reducer from "./reducer";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar/CalendarView";

function App() {
    const initialState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={render => <Homepage {...render} />}
                    />
                    <Route path="/kalendarz" component={Calendar} />
                </Switch>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
