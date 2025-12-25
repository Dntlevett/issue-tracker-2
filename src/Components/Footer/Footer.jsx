import "./footer.scss";
function Footer() {
  return (
    <>
      <footer className="app-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Bugtracker</p>
          <div className="footer-links">
            <a href="/">About</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/issues">Issues</a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
