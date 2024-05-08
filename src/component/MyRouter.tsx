import React from "react";
import {useRoutes} from 'react-router-dom'
import { AddUser } from "../page/AddUser";
import { Layout } from "../page/Layout";
import { MyError } from "../page/MyError";
import { ShowUser } from "../page/ShowUser";

export const MyRouter = React.memo(() => {
    const router = useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children:[
                {path: '/', element: <ShowUser/>},
                {path: '/addUser', element: <AddUser/>},
            ]
        },
        {
            path: '*',
            element: <MyError/>
        }
    ])

    return router
})