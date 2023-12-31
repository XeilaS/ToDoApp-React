import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoPage from "../pages/TodoPage/todo.page";
import ProfilePage from "../pages/ProfilePage/profile.page";
import ErrorPage from "../pages/ErrorPage/error.page";
import Document from "../components/Document";
import HomePage from "../pages/HomePage/home.page";
import FreelancePage from "../pages/FreelancePage/freelance.page";
import UserPage from "../pages/UserPage/user.page";

const router = createBrowserRouter([
    {

        path: "/",
        element: <Document />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/todo",
                element: <TodoPage />
            },
            {
                path: "/profile/:userTag",
                element: <ProfilePage />
            },
            {
                path: "/userPage",
                element: <UserPage />
            },
            {
                path: "/freelancePage",
                element: <FreelancePage />
            }]
    },
])


function RouteMap() {
    return <RouterProvider router={router} />
}

export default RouteMap;