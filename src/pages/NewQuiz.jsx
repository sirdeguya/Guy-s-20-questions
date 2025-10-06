import {useState} from "react";
import Input from "../components/Input.jsx";
import {useAuth} from "../context/authContext.jsx";
import RoundButton from "../components/RoundButton.jsx";
import { push, ref } from "firebase/database";
import {database} from "../lib/firebase/firebase.js";
import { IoTrashOutline } from "react-icons/io5";

export default function NewQuiz() {
    const { currentUser } = useAuth()

    const [ title, setTitle ] = useState("")
    const [ questions, setQuestions ] = useState([{question: "", answer: ""}])

    function onAddQuestion(e) {
        e.preventDefault()
        const questionCopy = [...questions]
        questionCopy.push({question: "", answer: ""})
        setQuestions(questionCopy)
    }

    function onSave(e) {
        e.preventDefault()
        push(ref(database, 'quizzes/'), {
            title: title,
            creator: currentUser.uid,
            questions: questions
        })
    }
    return (
        <div>
            <h1>יצירת שאלון חדש</h1>
            <div>
                <Input id={"title"} placeholder={"title"} onChange={(e) => setTitle(e.target.value)}/>
                <div className={`flex gap-2 flex-col`}>
                    {questions.map((question, index, array) => {
                        return <QuestionForm key={index} question={question} index={index} questions={array} setQuestions={setQuestions} />
                    })}
                </div>
                <RoundButton className={`bg-fuchsia-400 hover:bg-fuchsia-600`} onClick={onAddQuestion}>+</RoundButton>
            </div>
            <RoundButton className={`bg-green-300 hover:bg-green-500`} onClick={onSave}>
                שמור!
            </RoundButton>
        </div>
    )
}

function QuestionForm({question, index, questions, setQuestions}) {

    function onQuestionChange(question) {
        const questionCopy = [...questions]
        questionCopy[index]['question'] = question
        setQuestions(questionCopy)
    }

    function onAnswerChange(answer) {
        const questionCopy = [...questions]
        questionCopy[index]['answer'] = answer
        setQuestions(questionCopy)
    }

    function onQuestionDelete(e) {
        e.preventDefault()
        const questionCopy = [...questions]
        questionCopy.splice(index, 1)
        console.log(questions)
        setQuestions(questionCopy)
    }


    return (
        <div className={`border-2 rounded-2xl flex flex-row justify-between`}>
            <div className={`p-2 w-full`}>
                <Input id="question" placeholder={`שאלה מספר ${index + 1}`} onChange={(e) => {onQuestionChange(e.target.value)}}/>
                <Input id="answer" placeholder={`התשובה`} onChange={(e) => {onAnswerChange(e.target.value)}}/>
            </div>
            <div className={`p-2 flex flex-col justify-around border-s-2`}>
                <RoundButton className={`bg-red-300 hover:bg-red-500`} onClick={onQuestionDelete}>
                    <IoTrashOutline className={`w-6 h-6`}/>
                </RoundButton>
            </div>
        </div>
    )
}