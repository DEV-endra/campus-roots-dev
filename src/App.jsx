import { Navigate, Routes, Route } from "react-router-dom";

import Connections from "./components/ConnectionsPage.jsx";
import MessagesPage from "./components/MessagesPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";

import { useAuth } from "./contexts/auth-context.jsx";

import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage.jsx";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/connections"
        element={
          <ProtectedRoute>
            <Connections />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MessagesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={user ? "/home" : "/sign-in"} />} />
    </Routes>
  );
}
