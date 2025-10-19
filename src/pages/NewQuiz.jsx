import {useAuth} from "../context/authContext.jsx";
import { push, ref } from "firebase/database";
import {database} from "../lib/firebase/firebase.js";
import {useNavigate} from "react-router";
import QuizForm from "../components/QuizForm.jsx";

export default function NewQuiz() {
    const {currentUser} = useAuth()
    const navigate = useNavigate();

    const quizTemplate = {
        title: "",
        questions: [
            {id: 1, question: "", answer: ""}
        ]
    }

    async function onSave(quizData) {
        const data = await push(ref(database, 'quizzes/'), {
            title: quizData.title,
            creator: currentUser.uid,
            questions: quizData.questions
        })
        const quizId = data._path.pieces_[1]
        navigate(`/quiz/${quizId}`)
    }

    return (
        <div>
            <h1 className={`text-3xl font-bold`}>שאלון חדש</h1>
            <QuizForm quiz={quizTemplate} onSave={onSave}  />
        </div>
    )
}