import { EditableTextByToken } from "../editable-text-by-token";

export type CommonDictionary = {
	testString: string;
	testEditableString: EditableTextByToken<{token: string}>;
};
