import * as React from "react";
import {
    Route,
    BrowserRouter,
    Routes,
    Outlet,
} from "react-router-dom";

import Nav from "./components/Navbar";
import * as ASDPages from "./page/Export";


const App: JSX.Element = <BrowserRouter>
    <Routes>
        <Route path={"/"} element={
            <>
                <Nav/>
                <Outlet/>
            </>
        }>
            <Route index element={<ASDPages.Index/>}/>
            <Route path={"schema"} element={<ASDPages.SchemaDoc/>}/>
        </Route>
    </Routes>
</BrowserRouter>;

export {
    App
};