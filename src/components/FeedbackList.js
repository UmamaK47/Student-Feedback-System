import { useEffect, useState } from "react"
import axios from "axios"

function FeedbackList() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [subject, setSubject] = useState("")
  const [avg, setAvg] = useState(0)

  const loadData = async (p = 1, s = subject) => {
    const res = await axios.get(
      `http://localhost:5000/api/feedbacks?page=${p}&subject=${s}`
    )

    setData(res.data.data)
    setPages(res.data.pages)

    if (s) {
      const avgRes = await axios.get(
        `http://localhost:5000/api/average/${s}`
      )

      setAvg(Number(avgRes.data.avg).toFixed(2))
    } else {
      setAvg(0)
    }
  }

  useEffect(() => {
    loadData(page)
  }, [page])

  return (
    <div className="card p-4">
      <h3>Admin Feedback List</h3>

      <input
        className="form-control mb-2"
        placeholder="Filter by subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <button
        className="btn btn-secondary mb-2"
        onClick={() => {
          setPage(1)
          loadData(1, subject)
        }}
      >
        Filter
      </button>

      {subject && <h5>Average Rating: {avg}</h5>}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Rating</th>
            <th>Comments</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.studentName}</td>
              <td>{item.subject}</td>
              <td>{item.rating}</td>
              <td>{item.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          className="btn btn-outline-dark me-2"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span>{page} / {pages}</span>

        <button
          className="btn btn-outline-dark ms-2"
          disabled={page === pages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default FeedbackList