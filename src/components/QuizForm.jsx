import Input from "./Input.jsx";
import RoundButton from "./RoundButton.jsx";
import {useState} from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function QuizForm({ quiz, onSave }) {
    const [title, setTitle] = useState(quiz.title)
    const [questions, setQuestions] = useState(quiz.questions)
    const [ questionIndex, setQuestionIndex ] = useState(Math.max(...quiz.questions.map((question) => question.id), 0))
    const [ isLoading, setIsLoading] = useState(false)


    function onAddQuestion(e) {
        e.preventDefault()
        setQuestionIndex((questionIndex) => {
            const questionCopy = [...questions]
            const newQuestionIndex = questionIndex + 1
            questionCopy.push({id: newQuestionIndex, question: "", answer: ""})
            setQuestions(questionCopy)
            return newQuestionIndex
        })
    }

    function onQuestionChange(questionId, changeType, value) {
        setQuestions(questions.map((questionItem) => {
            return questionItem.id === questionId ? {...questionItem, [changeType]: value} : questionItem
        }))
    }

    function onQuestionDelete(e, questionId) {
        e.preventDefault()
        setQuestions(questions.filter((question) => question.id !== questionId))
    }

    function onSaveClick(e) {
        e.preventDefault()
        setIsLoading(true)
        onSave({
            title: title,
            questions: questions
        })
    }

    return (
        <div>
            <div>
                <Input id={"title"} placeholder={"title"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className={`flex gap-2 flex-col`}>
                    {questions.map((question,index, array) => {
                        return <QuestionForm key={question.id} questionData={question} index={index} onQuestionChange={onQuestionChange} onQuestionDelete={onQuestionDelete}/>
                    })}
                </div>
                <RoundButton className={`bg-fuchsia-400 hover:bg-fuchsia-600`} onClick={onAddQuestion}>+</RoundButton>
            </div>
            <RoundButton className={`bg-green-300 hover:bg-green-500`} onClick={!isLoading ? onSaveClick : undefined}>
                שמור!
            </RoundButton>
        </div>
    )
}


function QuestionForm({questionData, index, onQuestionChange, onQuestionDelete}) {

    // function onQuestionChange(question, questionId) {
    //     setQuestions(questions.map((questionItem) => {
    //         console.log(questionItem)
    //         return questionItem.id === questionId ? {...questionItem, question: question} : questionItem
    //     }))
    // }
    //
    // function onAnswerChange(answer, questionId) {
    //     setQuestions(questions.map((questionItem) => {
    //         return questionItem.id === questionId ? {...questionItem, answer: answer} : questionItem
    //     }))
    // }

    // function onQuestionDelete(e, questionId) {
    //     e.preventDefault()
    //     setQuestions(questions.filter((question) => question.id !== questionId))
    // }


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