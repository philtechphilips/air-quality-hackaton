import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="*" element="404 Page"></Route>
    <Route path="/dashboard" element="Dshboard Page"></Route>
   </Routes>
    </>
  )
}

export default App
