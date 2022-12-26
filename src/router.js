import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/nft',
        element: 'nft'
    }
])


export default router