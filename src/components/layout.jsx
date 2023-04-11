import { Outlet } from "react-router-dom"
import { TopBar } from "./top-bar"

export const Layout = () => {
    return (
        <>
            <TopBar />
            <Outlet />
        </>
    )
}