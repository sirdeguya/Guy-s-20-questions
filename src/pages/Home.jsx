import {Question} from "../components/Question.jsx";
import {useAuth} from "../context/authContext/index.jsx";

function Home() {
    const { currentUser, userLoggenIn } = useAuth()

    const questions = [
        {id: 1, question: "שאלה", answer: "תשובה"},
        {id: 2, question: "שאלה", answer: "תשובה"},
        {id: 3, question: "שאלה", answer: "תשובה"},
        {id: 4, question: "שאלה", answer: "תשובה"},
    ]

    console.log(userLoggenIn)

  return (
    <>
        <h1 className={`text-3xl font-bold`}>20 שאלות של גיא</h1>
        {userLoggenIn && <h3>{`שלום ${currentUser.email}`}</h3>}
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

export default Home
