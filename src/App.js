import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import FeedbackForm from "./components/FeedbackForm"
import Login from "./components/Login"
import FeedbackList from "./components/FeedbackList"

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Feedback System</h1>

      <FeedbackForm />

      <hr />

      {auth ? <FeedbackList /> : <Login setAuth={setAuth} />}
    </div>
  )
}

export default App