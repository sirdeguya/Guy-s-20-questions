import {Question} from "./Question.jsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {get, ref} from "firebase/database";
import {database} from "../lib/firebase/firebase.js";

export default function Quiz({}) {
    const { quizId} = useParams()
    const [ quiz, setQuiz ] = useState(null)

    useEffect(() => {
        console.log(`quiz ID is: ${quizId}`)
        const quizzesRef = ref(database, `quizzes/${quizId}`);
        get(quizzesRef).then((snapshot) => {
            const data = snapshot.val();
            setQuiz(data)
        })
        console.log(quiz)
    }, []);

    return (
        <div>
            {quiz &&
                <>
                    <h1 className={`text-3xl font-bold`}>{quiz.title}</h1>
                    <div className={'flex flex-col gap-3 my-3 mx-6'}>
                        {
                            quiz.questions.map((question) => {
                                return <Question key={question.id} question={question.question} answer={question.answer}/>
                            })
                        }
                    </div>
                </>}
        </div>
    )
}