import {useState} from "react";

const Statuses = {
    BLANK: "blank",
    RIGHT: "right",
    WRONG: "wrong"
}

export function Question({question, answer}) {
    const [revelAnswer, setRevelAnswer] = useState(false)
    const [ status, setStatus ] = useState(Statuses.BLANK)

    return <div>
        <h2>{question}</h2>
        <button onClick={()=> setRevelAnswer(true)}>חסוף את התשובה</button>
        <div style={{display: revelAnswer ? "block" : "none"}}>
            <p>{answer}</p>
            <div>
                <button onClick={()=>setStatus(Statuses.RIGHT)}>צדקתי</button>
                <button onClick={()=>setStatus(Statuses.WRONG)}>טעיתי</button>
            </div>
            {status}
        </div>
    </div>
}