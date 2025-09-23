import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyHeader} from "./components/MyHeader.jsx";
import {Question} from "./components/Question.jsx";

function App() {

    const questions = [
        {id: 1, question: "שאלה", answer: "תשובה"},
        {id: 2, question: "שאלה", answer: "תשובה"},
        {id: 3, question: "שאלה", answer: "תשובה"},
        {id: 4, question: "שאלה", answer: "תשובה"},
    ]

  return (
    <>
        <h1 className={`text-3xl font-bold`}>20 שאלות של גיא</h1>
        <div className={'flex flex-col gap-3 my-3 mx-6'}>
            {
                questions.map((question) => {
                    return <Question key={question.id} question={question.question} answer={question.answer}/>
                })
            }
        </div>
    </>
  )
}

export default App
