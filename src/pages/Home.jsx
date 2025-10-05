import {Question} from "../components/Question.jsx";
import {useAuth} from "../context/authContext.jsx";
import {useEffect, useState} from "react";
import {ref, onValue, query, limitToLast} from "firebase/database";
import {database} from "../lib/firebase/firebase.js";
import Input from "../components/Input.jsx";
import RoundButton from "../components/RoundButton.jsx";
import {IoTrashOutline} from "react-icons/io5";
import {Link} from "react-router";

function Home() {
    const { currentUser, userLoggedIn } = useAuth()
    const [ quizzes, setQuizzes ] = useState({})

    useEffect(() => {
      const newQuizzesRef = query(ref(database,'/quizzes'), limitToLast(10))
      onValue(newQuizzesRef, (snapshot) => {
        const data = snapshot.val();
        setQuizzes(data)
      });
    }, []);

    console.log(quizzes)

  return (
    <div>
        <h1 className={`text-3xl font-bold`}>20 שאלות של גיא</h1>
        {userLoggedIn && <h3>{`שלום ${currentUser.email}`}</h3>}
        <div className={"mx-6"}>
            <h2 className={"text-2xl text-start my-5"}>שאלונים אחרונים שנוצרו:</h2>
            <div className={'flex flex-col gap-3 my-3'}>
                {
                    Object.keys(quizzes).map((quizId) => {
                        console.log(quizId)
                        return <QuizLine key={quizId} quizId={quizId} quiz={quizzes[quizId]}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

function QuizLine({ quizId, quiz }) {
    return (
        <div className={`border-2 rounded-2xl flex flex-row justify-between`}>
            <div className={`p-2 w-full flex items-center`}>
                <h3>{quiz.title}</h3>
            </div>
            <div className={`p-2 flex flex-col justify-around border-s-2 border-dashed`}>
                <Link to={`quiz/${quizId}`}>
                    <RoundButton className={`bg-fuchsia-300 hover:bg-fuchsia-700`}>
                        שחק
                    </RoundButton>
                </Link>
            </div>
        </div>
    )
}

export default Home
