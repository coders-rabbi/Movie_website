import { Component } from "react";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
        ],
    },
]);