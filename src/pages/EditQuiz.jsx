import {useAuth} from "../context/authContext.jsx";
import {set, ref, get} from "firebase/database";
import {database} from "../lib/firebase/firebase.js";
import {useNavigate, useParams} from "react-router";
import QuizForm from "../components/QuizForm.jsx";
import {useEffect, useState} from "react";

export default function EditQuiz() {
    const { quizId } = useParams()
    const {currentUser} = useAuth()
    const navigate = useNavigate();

    const [quiz, setQuiz ] = useState(undefined)

    async function onSave(quizData) {
        await set(ref(database, `quizzes/${quizId}`), {
            title: quizData.title,
            creator: quiz.creator,
            questions: quizData.questions
        })
        navigate(`/quiz/${quizId}`)
    }

    useEffect(() => {
        getQuizData()
    }, []);

    async function getQuizData() {
        const quizRef = ref(database, `quizzes/${quizId}`);
        const snapshot = await get(quizRef)
        const data = snapshot.val();
        setQuiz(data)
    }

    return (
        <div>
            <h1 className={`text-3xl font-bold`}>עריכת שאלון</h1>
            {quiz && <QuizForm quiz={quiz} onSave={onSave}/>}
        </div>
    )
}