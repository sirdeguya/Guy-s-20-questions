import RoundButton from "../components/RoundButton.jsx";
import {useAuth} from "../context/authContext.jsx";
import {useState} from "react";
import {
    doCreateUserWithEmailAndPassword,
    doSignInWithEmailAndPassword,
} from "../lib/firebase/auth.js";
import {Navigate} from "react-router";
import Input from "../components/Input.jsx";


function Login() {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSigninIn, setIsSigninIn] = useState(false)
    //TODO add UI for error massages
    const [errorMassage, setErrorMassage] = useState("")

    async function onSignIn(e) {
        e.preventDefault()
        if (!isSigninIn) {
            setIsSigninIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    async function onCreatingNewUser(e) {
        e.preventDefault()
        if (!isSigninIn) {
            setIsSigninIn(true)
            const result = await doCreateUserWithEmailAndPassword(email, password)
            console.log(result)
        }
    }

    return (
        <>
            { userLoggedIn && (<Navigate to={"/"} replace={true}/>) }
            <h1 className={`text-3xl font-bold`}>התחברות</h1>
            <div className={"w-2xs mx-auto"}>
                <div>
                    <div className={"w-full border-2 rounded-2xl px-4 py-2 my-6"}>
                        <input className={`w-full`} id="email" type="text" placeholder={"אימייל"} onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>
                    <Input id="password" type="password" placeholder={"סיסמא"} value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                </div>
                { isSigninIn && "טוען" }
                <div className={`flex flex-row justify-between`}>
                    <RoundButton className={`bg-green-300 hover:bg-green-500`} onClick={onSignIn}>
                        חבר אותי
                    </RoundButton>
                    <RoundButton className={`bg-yellow-200 hover:bg-yellow-300 text-sm`} onClick={onCreatingNewUser}>
                        צור משתמש חדש
                    </RoundButton>
                </div>
            </div>
        </>
    )
}

export default Login