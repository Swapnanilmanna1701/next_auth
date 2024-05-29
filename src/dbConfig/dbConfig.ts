import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.once("connected", () => {
      console.log("MongoDB Connected!!");
    });

    connection.once("error", (err) => {
      console.log("MongoDB connection error: " +  err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
