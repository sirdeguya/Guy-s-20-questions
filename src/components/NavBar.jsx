import { IoIosHome } from "react-icons/io";
import {IoBookSharp, IoLogInOutline} from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import RoundButton from "./RoundButton.jsx";
import {useAuth} from "../context/authContext.jsx";
import { IoLogOutOutline } from "react-icons/io5";
import {doSignOut} from "../lib/firebase/auth.js";
import {Link} from "react-router";

export default function NavBar() {
    const { userLoggedIn } = useAuth()


    return (
        <>
            <div className={`h-32`}></div>
            <div className={`w-full fixed bottom-0 start-0 p-4 bg-gray-100`}>
                <div className={`flex flex-row justify-around`}>
                    <Link to={`/`} className={`flex flex-col`}>
                        <RoundButton className={`bg-indigo-400 hover:bg-indigo-600`}><IoIosHome className={`w-5 h-5`}/></RoundButton>
                        בית
                    </Link>
                    {userLoggedIn && <>
                        <Link to={`quiz/new`} className={`flex flex-col`}>
                            <RoundButton className={`bg-amber-200 hover:bg-amber-400`}><CiCirclePlus className={`w-5 h-5`}/></RoundButton>
                            חדש
                        </Link>
                        <Link to={`/`} className={`flex flex-col`}>
                            <RoundButton className={`bg-emerald-300 hover:bg-emerald-700`}><IoBookSharp className={`w-5 h-5`}/></RoundButton>
                            שאלונים שלי
                        </Link>
                    </>
                    }
                    {userLoggedIn ? <div className={`flex flex-col`}>
                        <RoundButton className={`bg-orange-300 hover:bg-orange-500`} onClick={doSignOut}><IoLogOutOutline className={`w-5 h-5`}/></RoundButton>
                        התנתקות
                    </div> : <Link to={'/login'} className={`flex flex-col`}>
                        <RoundButton className={`bg-lime-300 hover:bg-lime-600`}><IoLogInOutline className={`w-5 h-5`}/></RoundButton>
                        התחברות
                    </Link>
                    }
                </div>
            </div>
        </>
    )
}