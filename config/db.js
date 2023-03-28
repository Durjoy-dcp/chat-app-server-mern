const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`successfully connected to mongodb : ${conn.connection.host}`);
  } catch (error) {
    console.log("NOt connected ");
    process.exit();
  }
};
module.exports = connectDB;
