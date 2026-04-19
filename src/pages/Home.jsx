import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <nav className="home-nav">
        <h2>LAMIF</h2>
        <div className="nav-links">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')} className="btn-primary">
            Get Started
          </button>
        </div>
      </nav>

      <div className="hero-section">
        <h1>Find the Perfect Tutor for Your Studies</h1>
        <p>Connect with qualified tutors across Ethiopia.
           Learn faster, achieve more.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/register')} className="btn-primary">
            Find a Tutor
          </button>
          <button onClick={() => navigate('/register')} className="btn-secondary">
            Become a Tutor
          </button>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>🎓 Qualified Tutors</h3>
          <p>All tutors are verified with their CVs and qualifications</p>
        </div>
        <div className="feature-card">
          <h3>💰 Secure Payments</h3>
          <p>Pay safely through our platform with Chapa payment</p>
        </div>
        <div className="feature-card">
          <h3>📚 Any Subject</h3>
          <p>Find tutors for Math, Science, Languages and more</p>
        </div>
      </div>
    </div>
  )
}

export default Home