import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/Theme/Theme";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { useEffect, lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <AboutUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <ContactUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <Signup />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<CircularProgress color="primary" sx={{width:"100%", display:"flex" , justifyContent:"center" , alignItems:"center"}}/>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
