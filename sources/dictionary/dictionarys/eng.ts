import { EditableTextByToken } from "../editable-text-by-token";
import { Dictionary } from "../dictionary";
import { Languages } from "../index";

export const EngDictionary = new Dictionary(Languages.en, {
	testString: "Test string",
	testEditableString: new EditableTextByToken("Test editable string by token - %token", {
		token: "test"
	}),
});
