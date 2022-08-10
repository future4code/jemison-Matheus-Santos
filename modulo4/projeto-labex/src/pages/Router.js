import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./AdminHomePage/AdminHomePage";
import ApplicationFormPage from "./ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "./CreateTripPage/CreateTripPage";
import HomePage from "./HomePage/HomePage";
import ListTripsPage from "./ListTripsPage/ListTripsPage";
import LoginPage from "./LoginPage/LoginPage";
import TripDetailsPage from "./TripDetailsPage/TripDetailsPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route
                    path="/trips/application"
                    element={<ApplicationFormPage />}
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
                <Route
                    path="/admin/trips/create"
                    element={<CreateTripPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
