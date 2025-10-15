import {Question} from "./Question.jsx";

export default function Quiz({ questions }) {

    return (
        <div className={'flex flex-col gap-3 my-3 mx-6'}>
            {
                questions.map((question, index) => {
                    return <Question key={index} question={question.question} answer={question.answer}/>
                })
            }
        </div>
    )
}