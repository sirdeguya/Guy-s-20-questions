import './App.css'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import {BrowserRouter, Route, Routes} from "react-router";
import {AuthProvider} from "./context/authContext/index.jsx";

function App() {

  return (
    <>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Home/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App
