import { EditableTextByToken } from "../editable-text-by-token";

export interface CommonDictionary {
	testString: string;
	testEditableString: EditableTextByToken<{token: string}>;
}
