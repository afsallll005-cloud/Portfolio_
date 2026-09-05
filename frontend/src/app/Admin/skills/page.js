"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function SkillsAdmin() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/skills");
      const data = await res.json();
      setSkills(data);
    } catch (error) {
      console.error("Failed to fetch skills", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteSkill = async (id) => {
    if (confirm("Are you sure you want to delete this skill?")) {
      try {
        await fetch(`http://localhost:5000/api/skills/${id}`, {
          method: "DELETE",
        });
        fetchSkills(); // Refresh list
      } catch (error) {
        console.error("Failed to delete skill", error);
      }
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Manage Skills</h1>
        <Link href="/Admin/skills/new" className="btn-primary">
          <FiPlus /> Add New Skill
        </Link>
      </div>

      {loading ? (
        <p>Loading skills...</p>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Icon Path</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill._id}>
                  <td>{skill.name}</td>
                  <td>{skill.category}</td>
                  <td>{skill.icon}</td>
                  <td>
                    <Link href={`/Admin/skills/edit/${skill._id}`} className="btn-edit">
                      <FiEdit2 />
                    </Link>
                    <button onClick={() => deleteSkill(skill._id)} className="btn-danger">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {skills.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "2rem" }}>
                    No skills found.
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
