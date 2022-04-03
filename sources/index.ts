import express from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ExpressApi } from "./libs/exepress-api";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// Static files
app.use(express.static(path.resolve(__dirname, "public")));

// Language

// Routes

// Error handler
app.use((error: ExpressApi.IError, request: ExpressApi.IRequest, response: ExpressApi.IResponse, next: ExpressApi.INext) => {
	if (error.code) {
		// TODO
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
				break;
			case "EADDRINUSE":
				console.error("Server listening is already in use");
				process.exit(1);
				break;
			default:
				console.warn(err);
				throw err;
		}
	}
});
