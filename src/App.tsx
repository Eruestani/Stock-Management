import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

import Frame from "./frame/Frame";

import Error404Page from "./pages/Error404Page";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/MainPage";
import StockPage from "./pages/MainPage";
import SalesPage from "./pages/MainPage";
import ReportsPage from "./pages/MainPage";
import SettingsPage from "./pages/MainPage";

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={"/"}
                    element={<HomePage />}
                ></Route>
                <Route
                    path={"*"}
                    element={<Error404Page />}
                ></Route>
                <Route
                    path={"/login"}
                    element={<LoginPage />}
                />
                <Route element={<AuthOutlet fallbackPath="/login" />}>
                    <Route
                        path={"/dashboard"}
                        element={
                            <Frame>
                                <MainPage />
                            </Frame>
                        }
                    ></Route>
                    <Route
                        path="/products"
                        element={
                            <Frame>
                                <ProductsPage />
                            </Frame>
                        }
                    />
                    <Route
                        path="/stock"
                        element={
                            <Frame>
                                <StockPage />
                            </Frame>
                        }
                    />
                    <Route
                        path="/sales"
                        element={
                            <Frame>
                                <SalesPage />
                            </Frame>
                        }
                    />
                    <Route
                        path="/reports"
                        element={
                            <Frame>
                                <ReportsPage />
                            </Frame>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <Frame>
                                <SettingsPage />
                            </Frame>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
