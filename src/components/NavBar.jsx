import { IoIosHome } from "react-icons/io";
import {IoBookSharp, IoLogInOutline} from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import RoundButton from "./RoundButton.jsx";
import {useAuth} from "../context/authContext.jsx";
import { IoLogOutOutline } from "react-icons/io5";
import {doSignOut} from "../lib/firebase/auth.js";
import {Link} from "react-router";
import {useEffect, useState} from "react";

export default function NavBar() {
    const { userLoggedIn } = useAuth()

    const navBarLinks = [
        {
            title: "בית",
            link: "/",
            style: `bg-indigo-400 hover:bg-indigo-600`,
            icon: <IoIosHome className={`w-5 h-5`}/>,
            onClick: undefined,
            condition: true
        },
        {
            title: "חדש",
            link: "quiz/new",
            style: `bg-amber-200 hover:bg-amber-400`,
            icon: <CiCirclePlus className={`w-5 h-5`}/>,
            onClick: undefined,
            condition: userLoggedIn
        },
        {
            title: "שאלונים שלי",
            link: "/",
            style: `bg-emerald-300 hover:bg-emerald-700`,
            icon: <IoBookSharp className={`w-5 h-5`}/>,
            onClick: undefined,
            condition: userLoggedIn
        },
        {
            title: "התנתקות",
            link: undefined,
            style: `bg-orange-300 hover:bg-orange-500`,
            icon: <IoLogOutOutline className={`w-5 h-5`}/>,
            onClick: doSignOut,
            condition: userLoggedIn
        },
        {
            title: "התחברות",
            link: "/login",
            style: `bg-lime-300 hover:bg-lime-600`,
            icon: <IoLogInOutline className={`w-5 h-5`}/>,
            onClick: undefined,
            condition: !userLoggedIn
        },
    ]

    const showLinksList = [...navBarLinks.filter((link) => link.condition)]

    return (
        <>
            <div className={`h-32`}></div>
            <div className={`w-full fixed bottom-0 start-0 p-4 bg-gray-100`}>
                <div className={`flex flex-row justify-around`}>
                    {showLinksList.map((link) => {
                        return (
                            <Link to={link.link} className={`flex flex-col`}>
                                <RoundButton className={link.style} onClick={link.onClick}>{link.icon}</RoundButton>
                                {link.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}