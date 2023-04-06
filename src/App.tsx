import * as React from "react";
import {
    Route,
    BrowserRouter,
    Routes,
    Outlet,
} from "react-router-dom";

import Nav from "./components/Navbar";

const ASDPages = {
    Index: React.lazy(() => import("./page/Index")),
    SchemaDoc: React.lazy(() => import("./page/SchemaDoc"))
};


const App: JSX.Element = <BrowserRouter>
    <Routes>
        <Route path={"/"} element={
            <>
                <Nav/>
                <Outlet/>
            </>
        }>
            <Route index element={
                <React.Suspense>
                    <ASDPages.Index/>
                </React.Suspense>
            }/>
            <Route path={"schema"} element={
                <React.Suspense>
                    <ASDPages.SchemaDoc/>
                </React.Suspense>
            }/>
        </Route>
    </Routes>
</BrowserRouter>;

export {
    App
};