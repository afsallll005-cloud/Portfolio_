"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewMainProject() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    tags: "",
    year: "",
    image: "",
    numberId: "",
    isFeatured: true, // Hardcoded for Main Projects
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSubmit = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()), // Convert comma string to array
      };

      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (res.ok) {
        router.push("/Admin/main-projects");
      } else {
        alert("Error saving project");
      }
    } catch (error) {
      console.error("Failed to create project", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Add New Main Project</h1>
        <Link href="/Admin/main-projects" className="btn-edit">
          Cancel
        </Link>
      </div>

      <div className="admin-form-container">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="form-label">Number ID (e.g., 01, 02)</label>
            <input type="text" name="numberId" className="form-input" value={formData.numberId} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Title</label>
            <input type="text" name="title" className="form-input" value={formData.title} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Type (e.g., E-Commerce Platform)</label>
            <input type="text" name="type" className="form-input" value={formData.type} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Tags (comma separated, e.g., React, Node.js)</label>
            <input type="text" name="tags" className="form-input" value={formData.tags} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Year</label>
            <input type="text" name="year" className="form-input" value={formData.year} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label">Image Path/URL</label>
            <input type="text" name="image" className="form-input" value={formData.image} onChange={handleChange} required placeholder="/images/my-project.png" />
          </div>

          <div className="form-group">
            <label className="form-label">Project Link (Optional)</label>
            <input type="text" name="link" className="form-input" value={formData.link} onChange={handleChange} />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Saving..." : "Save Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
