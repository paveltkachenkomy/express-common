import { ExpressApi } from "./exepress-api";
import { LangAndDictionary, Langs } from "../lang";

export let Lang: LangAndDictionary;
export const LangMiddleware = (request: ExpressApi.IRequest, response: ExpressApi.IResponse, next: ExpressApi.INext) => {
	Lang = new LangAndDictionary(request.cookies.lang || Langs.en);
	next();
};
