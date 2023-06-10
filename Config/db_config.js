const mongoose = require("mongoose");
const DATABASE_LINK =
  "mongodb+srv://imenealch:adelimamou@aspirion.8nr0hkr.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_LINK || DATABASE_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
connectDB();
module.exports = connectDB;
