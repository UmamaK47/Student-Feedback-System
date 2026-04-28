import axios from "axios"
import { useForm } from "react-hook-form"

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const submit = async (data) => {
    await axios.post("http://localhost:5000/api/feedback", data)
    alert("Feedback Submitted")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="card p-4">
      <h3>Submit Feedback</h3>

      <input
        className="form-control mb-1"
        placeholder="Name"
        {...register("studentName", { required: true })}
      />
      {errors.studentName && <small className="text-danger">Required</small>}

      <input
        className="form-control mb-1"
        placeholder="Subject"
        {...register("subject", { required: true })}
      />
      {errors.subject && <small className="text-danger">Required</small>}

      <input
        type="number"
        className="form-control mb-1"
        placeholder="Rating"
        {...register("rating", {
          required: true,
          min: 1,
          max: 5
        })}
      />
      {errors.rating && <small className="text-danger">1 to 5 only</small>}

      <textarea
        className="form-control mb-2"
        placeholder="Comments"
        {...register("comments")}
      ></textarea>

      <button className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default FeedbackForm