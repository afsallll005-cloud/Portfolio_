"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewSkill() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    icon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/Admin/skills");
      } else {
        alert("Error saving skill");
      }
    } catch (error) {
      console.error("Failed to create skill", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Add New Skill</h1>
        <Link href="/Admin/skills" className="btn-edit">
          Cancel
        </Link>
      </div>

      <div className="admin-form-container">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="form-label">Skill Name (e.g., React)</label>
            <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Category (e.g., Frontend, Backend)</label>
            <input type="text" name="category" className="form-input" value={formData.category} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Icon Path/URL</label>
            <input type="text" name="icon" className="form-input" value={formData.icon} onChange={handleChange} required placeholder="/images/react-icon.png" />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Saving..." : "Save Skill"}
          </button>
        </form>
      </div>
    </div>
  );
}
