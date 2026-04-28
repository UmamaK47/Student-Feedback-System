import { useState } from "react"
import axios from "axios"

function Login({ setAuth }) {
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const submit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:5000/api/login", data)
      setAuth(true)
    } catch {
      alert("Invalid Login")
    }
  }

  return (
    <form onSubmit={submit} className="card p-4">
      <h3>Admin Login</h3>

      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) =>
          setData({ ...data, username: e.target.value })
        }
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <button className="btn btn-dark">
        Login
      </button>
    </form>
  )
}

export default Login