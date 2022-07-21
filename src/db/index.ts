import * as mongoose from "mongoose";

// Connection to MongoDB
const mongoUri: string = process.env.MONGO_URI || "mongodb://localhost:27017/express-common";

mongoose.connect(mongoUri);

export {
	mongoose,
};
