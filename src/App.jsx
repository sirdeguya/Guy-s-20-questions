import './App.css'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import {BrowserRouter, Route, Routes} from "react-router";
import {AuthProvider} from "./context/authContext.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import NewQuiz from "./pages/NewQuiz.jsx";
import EditQuiz from "./pages/EditQuiz.jsx";

function App() {

  return (
    <>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route  path={"/quiz/new"} element={<NewQuiz/>}/>
                    <Route path={"/quiz/:quizId"} element={<QuizPage/>}/>
                    <Route path={"/quiz/:quizId/edit"} element={<EditQuiz/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App
