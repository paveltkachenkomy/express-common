import { EditableTextByToken } from "../editable-text-by-token";
import { Dictionary } from "../dictionary";
import { Languages } from "../index";

export const RusDictionary = new Dictionary(Languages.ru, {
	testString: "Тестовая строка",
	testEditableString: new EditableTextByToken("Тестовая изменяемая строка по токену - %token", {
		token: "тест"
	})
});
