import { useState, useEffect } from 'react';

function Dashboard() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            setUser(JSON.parse(userData))
        } else {
            window.location.href = `/login`
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = `/login`
    }

    if (!user) return <p>Loading...</p> 

    return (
        <div className="dashboard-container">
        <div className="dashboard-header">
        <h1>Welcome, {user.username}!</h1>
        <button onClick={handleLogout}>Logout</button>
        </div>


      {user.role === 'student' && (
        <div>
          <h2>Student Dashboard</h2>
          <p>Browse and hire tutors for your studies</p>
        </div>
      )}

      {user.role === 'tutor' && (
        <div>
          <h2>Tutor Dashboard</h2>
          <p>Manage your profile and students</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard