import { useEffect, useState } from "react";
import "./dashboard.scss";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState(null);
  const { token } = useAuth();

  const handleFilterChange = async (tag) => {
    const selected = filter === tag ? null : tag;
    setFilter(selected);
    try {
      const res = await fetch(
        selected ? `/api/data?tag=${selected}` : "/api/data",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setTickets(data.entries);
    } catch (err) {
      console.error("Failed to fetch filter tickets", err);
    }
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("/api/data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setTickets(data.entries);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
      }
    };
    fetchTickets();
  }, [token]);

  return (
    <div className="dashboard">
      <h1>Support Tickets</h1>

      <div className="tag-filters">
        {["bug", "urgent", "feature"].map((tag) => (
          <button
            key={tag}
            className={`filter-button ${filter === tag ? "active" : ""}`}
            onClick={() => handleFilterChange(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {filter && (
        <p className="filter-summary">
          Showing tickets tagged with <strong>{filter}</strong>
        </p>
      )}

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
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      });
                      const data = await res.json();
                      if (filter) {
                        handleFilterChange(filter);
                      } else {
                        setTickets((prev) =>
                          prev.map((t) =>
                            t.id === ticket.id
                              ? { ...t, status: data.ticket.status }
                              : t
                          )
                        );
                      }
                    } catch (err) {
                      console.error("Failed to update status", err);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {ticket.status || "Open"}
                </span>
              </div>

              <div className="ticket-body">
                <p>{ticket.message}</p>
                <small>{new Date(ticket.timestamp).toLocaleString()}</small>
              </div>

              <div className="tags">
                {["bug", "urgent", "feature"].map((tagName) => {
                  const isActive = ticket.tags.includes(tagName);
                  return (
                    <span
                      key={tagName}
                      className={`tag ${tagName.toLowerCase()} ${
                        isActive ? "active" : ""
                      }`}
                      onClick={async () => {
                        try {
                          const res = await fetch(
                            `/api/data/${ticket.id}/tags`,
                            {
                              method: "PATCH",
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                              },
                              body: JSON.stringify({ tag: tagName }),
                            }
                          );
                          const data = await res.json();
                          setTickets((prev) =>
                            prev.map((t) =>
                              t.id === ticket.id
                                ? { ...t, tags: data.ticket.tags }
                                : t
                            )
                          );
                        } catch (err) {
                          console.error("Failed to toggle tag:", err);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {tagName}
                    </span>
                  );
                })}
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
