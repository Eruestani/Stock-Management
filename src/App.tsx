import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Frame from "./frame/Frame";

import Error404Page from "./pages/Error404Page";
import MainPage from "./pages/MainPage";

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Frame>
                    <MainPage />
                </Frame>
            ),
        },
        {
            path: "*",
            element: <Error404Page />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
