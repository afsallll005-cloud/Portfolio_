"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditSkill() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    icon: "",
  });

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/skills/${id}`);
        if (res.ok) {
          const skill = await res.json();
          setFormData({
            name: skill.name || "",
            category: skill.category || "",
            icon: skill.icon || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch skill details", error);
      } finally {
        setFetching(false);
      }
    };

    if (id) {
      fetchSkill();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/skills/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/Admin/skills");
      } else {
        alert("Error updating skill");
      }
    } catch (error) {
      console.error("Failed to update skill", error);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <p>Loading skill details...</p>;

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Edit Skill</h1>
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
            <input type="text" name="icon" className="form-input" value={formData.icon} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Updating..." : "Update Skill"}
          </button>
        </form>
      </div>
    </div>
  );
}
