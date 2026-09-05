"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function MainProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/projects");
      const data = await res.json();
      // Only keep featured projects for "Main Projects"
      setProjects(data.filter(p => p.isFeatured));
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await fetch(`http://localhost:5000/api/projects/${id}`, {
          method: "DELETE",
        });
        fetchProjects(); // Refresh list
      } catch (error) {
        console.error("Failed to delete project", error);
      }
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Manage Main Projects</h1>
        <Link href="/Admin/main-projects/new" className="btn-primary">
          <FiPlus /> Add Main Project
        </Link>
      </div>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.numberId}</td>
                  <td>{project.title}</td>
                  <td>{project.type}</td>
                  <td>
                    <Link href={`/Admin/main-projects/edit/${project._id}`} className="btn-edit">
                      <FiEdit2 />
                    </Link>
                    <button onClick={() => deleteProject(project._id)} className="btn-danger">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "2rem" }}>
                    No main projects found.
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
