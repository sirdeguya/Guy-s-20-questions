import {Question} from "./Question.jsx";

export default function Quiz({ questions }) {

    return (
        <div className={'flex flex-col gap-3 my-3 mx-6'}>
            {
                questions.map((question) => {
                    return <Question key={question.id} question={question.question} answer={question.answer}/>
                })
            }
        </div>
    )
}