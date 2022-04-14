import { CommonDictionary } from "./dictionarys/common";
import { Languages } from "./index";

export class Dictionary {
	public readonly language: Languages;
	public readonly texts: CommonDictionary;

	constructor(language: Languages, texts: CommonDictionary) {
		this.language = language;
		this.texts = texts;
	}
}
