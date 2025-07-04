import "./issues.scss";
function Issues({ onNewIssueClick }) {
  return (
    <>
      <button className="issues-button" onClick={onNewIssueClick}>
        New Issues
      </button>
    </>
  );
}
export default Issues;
