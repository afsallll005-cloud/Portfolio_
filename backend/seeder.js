const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const Project = require('./src/models/Project');
const Skill = require('./src/models/Skill');
const Contact = require('./src/models/Contact');
const projects = require('./src/data/projects');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Project.deleteMany();
    await Skill.deleteMany();
    await Contact.deleteMany();

    // Import projects
    await Project.insertMany(projects);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Project.deleteMany();
    await Skill.deleteMany();
    await Contact.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error with data destruction: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
