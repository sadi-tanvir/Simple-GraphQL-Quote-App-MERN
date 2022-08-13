import Home from "./components/Home/Home";
import Login from "./components/login-user/Login/Login";
import Register from "./components/login-user/Register/Register";
import Profile from "./components/Profile/Profile";
import Quotes from "./components/Quotes/Quotes";


export const routes = [
    { path: '/', element: <Home /> },
    { path: '/quotes', element: <Quotes /> },
    { path: '/profile', element: <Profile /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]