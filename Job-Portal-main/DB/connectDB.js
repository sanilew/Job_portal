import mongoose from "mongoose";

// connecting to database
const connectDB = async () => {
  const connectionUrl = "mongodb://localhost:27017/jp";
  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
    mongoose.set("strictQuery", false);
  } catch (err) {
    console.log("Getting Error from DB connection: " + err.message);
  }
};

export default connectDB;
