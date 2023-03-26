import * as React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import * as ADSPages from "./page/Export";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<ADSPages.Index/>}>

        </Route>
    )
);

const App: JSX.Element = <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>;

export {
    App
};