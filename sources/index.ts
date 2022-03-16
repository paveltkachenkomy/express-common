import express from "express";
import path from "path";
import helment from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import {ExpressApi} from "./utils/exepress-api";

const app = express();

// Middleware
app.use(cors());
app.use(helment());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// Static files
app.use(express.static(path.resolve(__dirname, "public")));

// Routes

// Error handler
app.use((err: ExpressApi.IError, req: ExpressApi.IRequest, res: ExpressApi.IResponse, next: ExpressApi.INext) => {
	if (err.code) {
		
	}
});

// Run application
const port: string = process.env.PORT || "3000";
const server = app.listen(port);

server.on("listening", () => {
	console.info("Server listening");
});

server.on("error", (err: {code: string, syscall: string}) => {
	if (err.syscall !== "listen") {
		throw err;
	} else {
		switch (err.code) {
			case "EACCES":
				console.error("Server listening requires elevated privileges");
				process.exit(1);
			case "EADDRINUSE":
				console.error("Server listening is already in use");
				process.exit(1);
			default:
				console.warn(err);
				throw err;
		}
	}
});
