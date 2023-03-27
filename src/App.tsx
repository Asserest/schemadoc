import * as React from "react";
import {
    Route,
    BrowserRouter,
    Routes,
    Outlet,
} from "react-router-dom";

import Nav from "./components/Navbar";
import * as ADSPages from "./page/Export";


const App: JSX.Element = <BrowserRouter>
    <Routes>
        <Route path={"/"} element={
            <>
                <Nav/>
                <Outlet/>
            </>
        }>
            <Route index element={<ADSPages.Index/>}/>
            <Route path={"schema"} element={<ADSPages.SchemaDoc/>}/>
        </Route>
    </Routes>
</BrowserRouter>;

export {
    App
};