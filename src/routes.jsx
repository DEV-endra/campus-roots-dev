import App from "./App.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import Connections from "./components/ConnectionsPage.jsx";
import EmailVerification from "./components/EmailVerification.jsx";
import HomePageAlumni from "./components/HomePageAlumni.jsx";
import HomePageStudents from "./components/HomePageStudents.jsx";
import LoginPage from "./components/LoginPage.jsx";
import MessagesPage from "./components/MessagesPage.jsx";
import ResetPasswordPage from "./components/ResetPasswordPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup/:category",
    element: <SignupPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/EmailVerification",
    element: <EmailVerification />,
  },
  {
    path: "/HomePageStudents",
    element: <HomePageStudents />,
  },
  {
    path: "/HomePageAlumni",
    element: <HomePageAlumni />,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword />,
  },
  {
    path: "/connections",
    element: <Connections />
  },
  {
    path: "/messages",
    element: <MessagesPage />
  },
  {
    path: "/settings",
    element: <SettingsPage />
  }
];

export default routes;
