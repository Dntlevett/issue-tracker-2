import { useEffect, useState } from "react";
import "./dashboard.scss";

function Dashboard() {
  // Set state
  const [tickets, setTickets] = useState([]);
  // Call all tickets
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();
        setTickets(data.entries);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
      }
    };
    fetchTickets();
  }, []);
  return (
    <div className="dashboard">
      <h1>Support Tickets</h1>
      {tickets.length > 0 ? (
        <ul className="ticket-list">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="ticket">
              <div className="ticket-header">
                <strong>#{ticket.id}</strong> - {ticket.name} ({ticket.email})
              </div>
              <div className="ticket-body">
                <p>{ticket.message}</p>
                <small>{new Date(ticket.timestamp).toLocaleString()}</small>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
}
export default Dashboard;
