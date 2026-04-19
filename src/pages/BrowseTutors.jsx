import { useState, useEffect } from 'react'
import axios from 'axios'

function BrowseTutors() {
  const [tutors, setTutors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTutors() {
      try {
        const response = await axios.get('http://localhost:5000/api/tutor/all')
        setTutors(response.data.tutors)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchTutors()
  }, [])

  if (loading) return <p>Loading tutors...</p>

  return (
    <div className="browse-container">
      <h2>Browse Tutors</h2>
      <div className="tutors-grid">
        {tutors.map((tutor) => (
          <div className="tutor-card" key={tutor._id}>
            <h3>{tutor.user.name}</h3>
            <p>{tutor.bio}</p>
            <div className="tutor-subjects">
              {tutor.subjects.map((subject, index) => (
                <span className="subject-tag" key={index}>
                  {subject}
                </span>
              ))}
            </div>
            <p className="tutor-rate">{tutor.hourlyRate} ETB/hour</p>
            <p className="tutor-education">{tutor.education}</p>
            <button>Hire Tutor</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrowseTutors