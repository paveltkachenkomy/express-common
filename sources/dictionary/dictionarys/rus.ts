import { CommonDictionary, EditableTextByToken } from "./common";

export const RusDictionary: CommonDictionary = {
	helloMessage: "Привет Мир!",
	helloName: new EditableTextByToken("Привет %name", {name: "Павел"})
};
