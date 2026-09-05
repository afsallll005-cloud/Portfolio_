"use client";

import { useEffect, useState } from "react";
import { FiBriefcase, FiStar, FiMail } from "react-icons/fi";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    contacts: 0,
  });

  useEffect(() => {
    // In a real app, you might have a single /api/stats endpoint
    // For now, we'll fetch all and count to show activity
    const fetchStats = async () => {
      try {
        const [projectsRes, skillsRes, contactsRes] = await Promise.all([
          fetch("http://localhost:5000/api/projects"),
          fetch("http://localhost:5000/api/skills"),
          fetch("http://localhost:5000/api/contacts")
        ]);

        const projects = await projectsRes.json();
        const skills = await skillsRes.json();
        const contacts = await contactsRes.json();

        setStats({
          projects: projects.length || 0,
          skills: skills.length || 0,
          contacts: contacts.length || 0,
        });
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Dashboard Overview</h1>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-title">Total Projects</div>
          <div className="stat-card-value">
            <FiBriefcase style={{ marginRight: '10px', color: '#3b82f6' }} />
            {stats.projects}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-title">Total Skills</div>
          <div className="stat-card-value">
            <FiStar style={{ marginRight: '10px', color: '#eab308' }} />
            {stats.skills}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-title">Messages</div>
          <div className="stat-card-value">
            <FiMail style={{ marginRight: '10px', color: '#10b981' }} />
            {stats.contacts}
          </div>
        </div>
      </div>
    </div>
  );
}
