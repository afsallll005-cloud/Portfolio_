"use client";

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contacts");
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await fetch(`http://localhost:5000/api/contacts/${id}`, {
          method: "DELETE",
        });
        fetchContacts(); // Refresh list
      } catch (error) {
        console.error("Failed to delete contact", error);
      }
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Contact Messages</h1>
      </div>

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td style={{ whiteSpace: "nowrap" }}>{new Date(contact.createdAt).toLocaleDateString()}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {contact.message}
                  </td>
                  <td>
                    <button onClick={() => deleteContact(contact._id)} className="btn-danger">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "2rem" }}>
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
