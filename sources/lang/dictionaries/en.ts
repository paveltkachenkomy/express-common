import { EditableTextByToken } from "../editable-text-by-token";
import { CommonDictionary } from "./common";

export const EnDictionary: CommonDictionary = {
	testString: "Test string",
	testEditableString: new EditableTextByToken("Test editable string by token - %token", {
		token: "test"
	}),
};
