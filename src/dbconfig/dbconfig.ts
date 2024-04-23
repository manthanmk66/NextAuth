import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log("Something Wnt Wrong Check your MongoDB connection", Error);
    process.exit();
  }
}
