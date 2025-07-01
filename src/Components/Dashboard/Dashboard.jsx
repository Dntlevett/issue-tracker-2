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
                <span
                  className={`status-badge ${
                    ticket.status?.toLowerCase().replace(/\s+/g, "") || "open"
                  }`}
                  onClick={async () => {
                    try {
                      const res = await fetch(`/api/data/${ticket.id}/status`, {
                        method: "PATCH",
                      });
                      const data = await res.json();
                      setTickets((prev) =>
                        prev.map((t) =>
                          t.id === ticket.id
                            ? { ...t, status: data.ticket.status }
                            : t
                        )
                      );
                    } catch (err) {
                      console.error("Failed to update status", err);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {ticket.status || "Open"}
                </span>
                {/* <span
                  className={`status-badge ${
                    ticket.status.toLowerCase().replace(/\s+/g,) onClick={handleStatusChange}
                    style={{cursor: "pointer"}}
                    > || "open"
                  }`}
                  onClick={async () => {
                    try {
                      const res = await fetch(`/api/data/${ticket.id}/status`, {
                        method: "PATCH",
                      });
                      const data = await res.json();
                      setTickets((prev) =>
                        prev.map((t) =>
                          t.id === ticket.id
                            ? { ...t, status: data.ticket.status }
                            : t
                        )
                      );
                    } catch (err) {
                      console.error("Failed to update status", err);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {ticket.status || "Open"}
                </span> */}
              </div>

              <div className="ticket-body">
                <p>{ticket.message}</p>
                <small>{new Date(ticket.timestamp).toLocaleString()}</small>
              </div>
              {ticket.tags?.length > 0 && (
                <div className="tags">
                  {ticket.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
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
