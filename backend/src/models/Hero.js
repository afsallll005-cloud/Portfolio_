const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  backgroundText: {
    type: String,
    default: 'DEVELOPER'
  },
  title: {
    type: String,
    default: "YO, I'M AFSAL"
  },
  subtitle: {
    type: String,
    default: 'Fullstack Developer,\nI BUILD DIGITAL\nEXPERIENCES\nTHAT MATTER.'
  },
  image: {
    type: String,
    default: '/images/mee(2).png'
  },
  stat1Value: {
    type: String,
    default: '98'
  },
  stat1Label: {
    type: String,
    default: 'CLIENT SATISFACTION\nRATE'
  },
  stat2Value: {
    type: String,
    default: '20+'
  },
  stat2Label: {
    type: String,
    default: 'PROJECTS\nCOMPLETED'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Hero', heroSchema);
