import {useState} from "react";
import { AiOutlineLike, AiOutlineDislike  } from "react-icons/ai";

const Statuses = {
    BLANK: "",
    RIGHT: "bg-green-100",
    WRONG: "bg-red-100"
}

export function Question({question, answer}) {
    const [revelAnswer, setRevelAnswer] = useState(false)
    const [ status, setStatus ] = useState(Statuses.BLANK)

    return <div className={`border-4 border-slate-600 rounded-2xl p-3 ${status}`}>
        <h2 className={`my-2 font-bold`}>{question}</h2>
        <button className={`border-2 rounded-md p-1 px-3 ${revelAnswer ? 'hidden' : ""}`} onClick={()=> setRevelAnswer(true)}>חסוף את התשובה</button>
        <div style={{display: revelAnswer ? "block" : "none"}}>
            <p className={`my-3`}>{answer}</p>
            <div className={'flex flex-row justify-around w-1/2 m-auto'} >
                <RoundButton className={'bg-green-300 hover:bg-green-500'} onClick={()=>setStatus(Statuses.RIGHT)}>
                        <AiOutlineLike/>
                </RoundButton>
                <button onClick={()=>setStatus(Statuses.WRONG)}>
                    <div className={'border-2 rounded-full p-2 bg-red-300'}>
                        <AiOutlineDislike />
                    </div>
                </button>
            </div>
        </div>
    </div>
}

function RoundButton({children, onClick, className}) {
    return <button className={`rounded-full border-2 p-2 ${className}`} onClick={onClick}>
            {children}
    </button>
}