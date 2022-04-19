import { CommonDictionary } from "./dictionaries/common";
import { EnDictionary } from "./dictionaries/en";
import { RuDictionary } from "./dictionaries/ru";

type Dictionaries = {[key: string]: CommonDictionary };

const dictionaries: Dictionaries = {
	"en": EnDictionary,
	"ru": RuDictionary,
};

class Lang {
	private _lang: keyof Dictionaries;
	private _texts: CommonDictionary;

	constructor(lang: keyof Dictionaries) {
		this._lang = lang;
		this._texts = dictionaries[lang];
	}

	get texts(): CommonDictionary {
		return this._texts;
	}

	get lang(): keyof Dictionaries {
		return this._lang;
	}

}
