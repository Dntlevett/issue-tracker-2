import { Link } from "react-router-dom";
import { AiFillBug, AiOutlineDashboard, AiOutlineRocket } from "react-icons/ai";
import "./landing.scss";
function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Welcome to Bugtracker</h1>
        <p>Your Lightweight, Jira-inspired issue manager</p>
        <Link to="/dashboard" className="cta-button">
          Go to Dashboard
        </Link>
      </section>

      <section className="features">
        <div className="feature">
          <AiFillBug size={32} />
          <h3>Track Bugs</h3>
          <p> Log and monitor issues in real time.</p>
        </div>
        <div className="feature">
          <AiOutlineDashboard size={32} />
          <h3>Organize Work</h3>
          <p>Filter by tags and update statuses easily</p>
        </div>
        <div className="feature">
          <AiOutlineRocket size={32} />
          <h3>Stay Productive</h3>
          <p>Focus on what matters most with a clean UI</p>
        </div>
      </section>
    </div>
  );
}
export default Landing;
