import Input from "./Input.jsx";
import RoundButton from "./RoundButton.jsx";
import {useState} from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function QuizForm({ quiz: initialQuiz, onSubmit }) {
    const [title, setTitle] = useState(initialQuiz.title)
    const [questions, setQuestions] = useState(initialQuiz.questions)
    const [ nextQuestionIndex, setNextQuestionIndex ] = useState(Math.max(...initialQuiz.questions.map((question) => question.id), 0) +1)
    const [ isLoading, setIsLoading] = useState(false)


    function onAddQuestion(e) {
        setQuestions([...questions, {id: nextQuestionIndex, question: "", answer: ""}])
        setNextQuestionIndex((pevQuestionIndex) =>  pevQuestionIndex + 1)
    }

    function onQuestionChange(questionId, changeType, value) {
        setQuestions(questions.map((questionItem) => {
            return questionItem.id === questionId ? {...questionItem, [changeType]: value} : questionItem
        }))
    }

    function onQuestionDelete(e, questionId) {
        setQuestions(questions.filter((question) => question.id !== questionId))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        onSubmit({
            title: title,
            questions: questions
        })
    }

    return (
        <form onSubmit={!isLoading ? handleSubmit: undefined}>
            <div>
                <Input id={"title"} placeholder={"title"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className={`flex gap-2 flex-col`}>
                    {questions.map((question,index) => {
                        return <QuestionForm key={question.id} questionData={question} index={index} onQuestionChange={onQuestionChange} onQuestionDelete={onQuestionDelete}/>
                    })}
                </div>
                <RoundButton className={`bg-fuchsia-400 hover:bg-fuchsia-600`} onClick={onAddQuestion}>+</RoundButton>
            </div>
            <RoundButton className={`bg-green-300 hover:bg-green-500`} type={"submit"}>
                שמור!
            </RoundButton>
        </form>
    )
}


function QuestionForm({questionData, index, onQuestionChange, onQuestionDelete}) {

    return (
        <div className={`border-2 rounded-2xl flex flex-row justify-between`}>
            <div className={`p-2 w-full`}>
                <Input id="question" placeholder={`שאלה מספר ${index + 1}`} value={questionData.question} onChange={(e) => {onQuestionChange(questionData.id, 'question', e.target.value)}}/>
                <Input id="answer" placeholder={`התשובה`} value={questionData.answer} onChange={(e) => {onQuestionChange(questionData.id, 'answer', e.target.value)}}/>
            </div>
            <div className={`p-2 flex flex-col justify-around border-s-2`}>
                <RoundButton className={`bg-red-300 hover:bg-red-500`} onClick={(e) => onQuestionDelete(e, questionData.id)}>
                    <IoTrashOutline className={`w-6 h-6`}/>
                </RoundButton>
            </div>
        </div>
    )
}