
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
import AskAi from './components/dashboard/AskAi';
import DashboardHome from './components/dashboard/DashboardHome';
import MyCourses from './components/dashboard/MyCourses';
import MyEarning from './components/dashboard/MyEarning';
import Books from './components/dashboard/Books';
import CareerCounseling from './components/dashboard/CareerCounseling';
import CareerCounselingPage from './pages/CareerCounselingPage';
import Admin from './pages/Admin';
import PirvacyPolicy from "./pages/PirvacyPolicy"
import Terms from "./pages/Terms"

const App = () => {
  const router = createBrowserRouter([
    {path: "/", element:<Home />},
    {path: "/about",element: <About />},
    {path: "/contact",element: <Contact />},   
    {path: "/login",element: <Login />}, 
    {path: "/signup",element: <Signup />},  
    {path: "*",element: <Notfound />},
    {path: "/dashboard",element: <DashboardHome />},
    {path: "/dashboard/home",element: <DashboardHome />},
    {path: "/dashboard/ask-questions",element: <AskAi />},
    {path: "/dashboard/my-course",element: <MyCourses />},
    {path: "/dashboard/earning",element: <MyEarning />},
    {path: "/dashboard/career-counseling",element: <CareerCounseling />},
    {path: "/dashboard/books",element: <Books />},
    {path: "/career-counseling",element: <CareerCounselingPage />},
    {path: "/admin",element: <Admin />},
    {path: "/privacy-policy",element: <PirvacyPolicy />},
    {path: "/terms",element: <Terms />}
  ])
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
