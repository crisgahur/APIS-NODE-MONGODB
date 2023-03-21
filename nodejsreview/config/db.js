const mongoose = require("mongoose");
const DB_URI = 'mongodb+srv://user_admin_node:R4TIj6J3erJW74UV@cluster0.sczq5ug.mongodb.net/nodejspreviewdb?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Database connected');
  } catch (error) {
    console.log("Error while connecting: " + error.message);
  }
};

module.exports = connectDB;
