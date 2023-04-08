import * as React from "react";
import {
    Route,
    BrowserRouter,
    Routes,
    Outlet,
} from "react-router-dom";

import Nav from "./components/Navbar";
import LoadingComponent from "./components/Loading";

const ASDPages = {
    Index: React.lazy(() => import("./page/Index")),
    SchemaDoc: React.lazy(() => import("./page/SchemaDoc"))
};


const App: JSX.Element = <BrowserRouter>
    <Routes>
        <Route path={"/"} element={
            <>
                <Nav/>
                <React.Suspense fallback={<LoadingComponent/>}>
                    <Outlet/>
                </React.Suspense>
            </>
        }>
            <Route index element={
                <ASDPages.Index/>
            }/>
            <Route path={"schema"} element={
                <ASDPages.SchemaDoc/>
            }/>
        </Route>
    </Routes>
</BrowserRouter>;

export {
    App
};