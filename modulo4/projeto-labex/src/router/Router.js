import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />

                <Route path="/trips/list" element={<ListTripsPage />} />

                <Route
                    path="/trips/application"
                    element={<ApplicationFormPage />}
                />

                <Route path="/trips/login" element={<LoginPage />} />

                <Route path="/admin/trips/list" element={<AdminHomePage />} />

                <Route
                    path="/admin/trips/create"
                    element={<CreateTripPage />}
                />

                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />

                <Route path="*" element={"Página não encontrada"} />
            </Routes>
        </BrowserRouter>
    );
}
