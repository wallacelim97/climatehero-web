import React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "@ui5/webcomponents-icons/dist/icons/add";
import HomePage from "./Pages/HomePage";
import AddActivityModal from "./Components/AddActivityModal";
import AddSeriesModal from "./Components/AddSeriesModal";
import AddGoalModal from "./Components/AddGoalModal";
import WelcomeModal from "./Components/WelcomeModal";
import EditActivityModal from "./Components/EditActivityModal";
import EditGoalModal from "./Components/EditGoalModal";

export default function ClimateHeroApp() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route exact strict path="/" component={HomePage} />
                <Redirect from="/" to="/" />
            </Switch>
            <WelcomeModal />
            <AddActivityModal />
            <EditActivityModal />
            <AddGoalModal />
            <EditGoalModal />
            <AddSeriesModal />
        </Router>
    );
}
