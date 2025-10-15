import Quiz from "../components/Quiz.jsx";
import {useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router";
import {get, ref, remove} from "firebase/database";
import {database} from "../lib/firebase/firebase.js";
import RoundButton from "../components/RoundButton.jsx";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import {useAuth} from "../context/authContext.jsx";
import {FaRegCirclePlay} from "react-icons/fa6";


export default function QuizPage({}) {
    const { quizId} = useParams()
    const { currentUser, isLoggedin } = useAuth()
    const [ quiz, setQuiz ] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getQuizData()
    }, []);

    async function getQuizData() {
        const quizRef = ref(database, `quizzes/${quizId}`);
        const snapshot = await get(quizRef)
        const data = snapshot.val();
        setQuiz(data)
    }

    async function onDelete(){
        const quizRef = ref(database, `quizzes/${quizId}`);
        await remove(quizRef)
        navigate(-1)

    }

    // TODO: add playing mode + answer count + timer?
    return <div>
        {quiz && <>
            <div className={`flex flex-row justify-between`}>
                {currentUser?.uid === quiz.creator && <>
                    <div className={`flex flex-col`}>
                        <RoundButton className={`bg-red-300 hover:bg-red-500`}
                                     onClick={onDelete}><IoTrashOutline/></RoundButton>
                        מחק
                    </div>
                    <div className={`flex flex-col`}>
                        <RoundButton className={`bg-lime-200 hover:bg-lime-600`}
                                     onClick={(e) => navigate(`/quiz/${quizId}/edit`)}><FaRegEdit/></RoundButton>
                        ערוך
                    </div>
                </>}
            </div>
            <h1 className={`text-3xl font-bold`}>{quiz.title}</h1>
            <Quiz questions={quiz.questions}/>
        </>}
    </div>
}
