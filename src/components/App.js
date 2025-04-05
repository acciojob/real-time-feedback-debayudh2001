
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    if (e.target.name === "name" && e.target.value === "") {
      setErrors({ ...errors, name: "Name is required" })
    }
    else if (e.target.name === "email" && (!e.target.value.includes("@") || !e.target.value.includes(".com"))) {
      setErrors({ ...errors, email: "Invalid email format" })
    }
    else if (e.target.name === "password" && e.target.value.length < 6) {
      setErrors({ ...errors, password: "Password must be at least 6 characters long" })
    }
    else {
      setErrors({ ...errors, [e.target.name]: "" })
    }
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(details)
    setDetails({
      name: "",
      email: "",
      password: ""
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" id="name" value={details.name} onChange={handleChange} />
        <br />
        <span className="error-message">{errors.name}</span>
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" name="email" id="email" value={details.email} onChange={handleChange} />
        <br />
        <span className="error-message">{errors.email}</span>
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="text" name="password" id="password" value={details.password} onChange={handleChange} />
        <br />
        <span className="error-message">{errors.password}</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
