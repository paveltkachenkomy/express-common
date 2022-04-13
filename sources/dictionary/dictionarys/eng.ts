import { CommonDictionary, EditableTextByToken } from "./common";

export const EngDictionary: CommonDictionary = {
	helloMessage: "Hello World!",
	helloName: new EditableTextByToken("Hello %name", {name: "Pavel"})
};
