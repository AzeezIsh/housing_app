import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import FeedbackPage from "./pages/FeedbackPage";
import ModelPage from "./pages/ModelPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/settings-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-page":
        title = "";
        metaDescription = "";
        break;
      case "/feedback-page":
        title = "";
        metaDescription = "";
        break;
      case "/model-page":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OpeningPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/settings-page" element={<SettingsPage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/feedback-page" element={<FeedbackPage />} />
      <Route path="/model-page" element={<ModelPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
    </Routes>
  );
}
export default App;
