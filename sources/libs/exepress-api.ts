import express from "express";
import { Languages } from "../dictionary";

export namespace ExpressApi {
	export enum Status {
		success = "success",
		fail = "fail"
	}

	export interface IResponse extends express.Response<{result: Status, data?: object, message?: string}> {}

	export interface IRequest extends express.Request {
		cookies: {
			language: Languages;
		};
	}

	export interface IError extends express.ErrorRequestHandler {code: number; name?: string; message?: string; }

	export interface INext extends express.NextFunction {(error?: Error): void; }
}
