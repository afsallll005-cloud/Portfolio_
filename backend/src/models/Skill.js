const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String, // e.g., 'Frontend', 'Backend', 'Tools'
      required: true,
    },
    icon: {
      type: String, // URL or path to the icon image
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
