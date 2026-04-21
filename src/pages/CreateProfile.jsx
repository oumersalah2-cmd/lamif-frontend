import { useState } from 'react'
import axios from 'axios'

function CreateProfile() {
  const [formData, setFormData] = useState({
    bio: '',
    subjects: '',
    hourlyRate: '',
    education: ''
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      console.log('Token:', token)
      
      const dataToSend = {
          ...formData,
          subjects: formData.subjects.split(',').map(s => s.trim()),
          hourlyRate: Number(formData.hourlyRate)
      }
      console.log('Data:', dataToSend)
      
      const response = await axios.post(
        'http://localhost:5000/api/tutor/profile',
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setMessage(response.data.message)
    } catch (error) {
      console.log('Error:', error.response)
      setMessage(error.response.data.message)
    }
  }
  return (
    <div className="auth-container">
      <h2>Create Tutor Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bio"
          placeholder="Your bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subjects"
          placeholder="Subjects (comma separated e.g. Math, Physics)"
          value={formData.subjects}
          onChange={handleChange}
        />
        <input
          type="number"
          name="hourlyRate"
          placeholder="Hourly rate in ETB"
          value={formData.hourlyRate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="education"
          placeholder="Your education background"
          value={formData.education}
          onChange={handleChange}
        />
        <button type="submit">Create Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default CreateProfile