import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            setUser(JSON.parse(userData))
        } else {
            navigate('/login')
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }

    if (!user) return <p>Loading...</p> 

    return (
        <div className="dashboard-container">
        <div className="dashboard-header">
        <h1>Welcome, {user.name}!</h1>
        <button onClick={handleLogout}>Logout</button>
        </div>


      {user.role === 'student' && (
        <div>
          <h2>Student Dashboard</h2>
          <p>Browse and hire tutors for your studies</p>
          <button onClick={() => navigate('/browse-tutors')}>
            Browse Tutors
            </button>
        </div> 
      )}

      {user.role === 'tutor' && (
        <div>
          <h2>Tutor Dashboard</h2>
          <p>Manage your profile and students</p>
          <button onClick={() => navigate('/create-profile')}>
            Create/Update Profile
          </button>
        </div>
      )}
    </div>
  )
}

export default Dashboard