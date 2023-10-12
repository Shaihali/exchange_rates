import { Navigate, Route, Routes } from "react-router-dom";
import { FormIdentification } from "../components/forms";

export const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/registration" element={<FormIdentification />} />
    <Route path="/login" element={<FormIdentification />} />
    <Route path="/" element={<Navigate to="/registration" />} />
  </Routes>
);