"use client";

import { useState, useEffect } from "react";

export default function HeroAdmin() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    backgroundText: "",
    title: "",
    subtitle: "",
    image: "",
    stat1Value: "",
    stat1Label: "",
    stat2Value: "",
    stat2Label: "",
  });

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/hero");
      const data = await res.json();
      if (data && !data.message) {
        setFormData({
          backgroundText: data.backgroundText || "",
          title: data.title || "",
          subtitle: data.subtitle || "",
          image: data.image || "",
          stat1Value: data.stat1Value || "",
          stat1Label: data.stat1Label || "",
          stat2Value: data.stat2Value || "",
          stat2Label: data.stat2Label || "",
        });
      }
    } catch (error) {
      console.error("Failed to fetch hero content", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("http://localhost:5000/api/hero", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Hero section updated successfully!");
      } else {
        alert("Error saving hero section");
      }
    } catch (error) {
      console.error("Failed to update hero", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Manage Hero Section</h1>
      </div>

      {loading ? (
        <p>Loading hero content...</p>
      ) : (
        <div className="admin-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Background Text</label>
              <input type="text" name="backgroundText" className="form-input" value={formData.backgroundText} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label">Title</label>
              <input type="text" name="title" className="form-input" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label">Subtitle (Use \n for new lines if needed, or just normal text)</label>
              <textarea name="subtitle" className="form-input" rows="4" value={formData.subtitle} onChange={handleChange} required></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Image Path/URL</label>
              <input type="text" name="image" className="form-input" value={formData.image} onChange={handleChange} required placeholder="/images/mee(2).png" />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Statistic 1 Value</label>
                <input type="text" name="stat1Value" className="form-input" value={formData.stat1Value} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Statistic 1 Label</label>
                <input type="text" name="stat1Label" className="form-input" value={formData.stat1Label} onChange={handleChange} required />
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Statistic 2 Value</label>
                <input type="text" name="stat2Value" className="form-input" value={formData.stat2Value} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Statistic 2 Label</label>
                <input type="text" name="stat2Label" className="form-input" value={formData.stat2Label} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
