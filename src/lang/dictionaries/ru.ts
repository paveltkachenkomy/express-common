import { EditableTextByToken } from "../editable-text-by-token";
import { CommonDictionary } from "./common";

export const RuDictionary: CommonDictionary = {
	testString: "Тестовая строка",
	testEditableString: new EditableTextByToken("Тестовая изменяемая строка по токену - %token", {
		token: "тест"
	})
};
