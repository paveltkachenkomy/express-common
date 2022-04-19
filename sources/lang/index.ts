import { CommonDictionary } from "./dictionaries/common";
import { EnDictionary } from "./dictionaries/en";
import { RuDictionary } from "./dictionaries/ru";

export enum Langs {
	en = "en",
	ru = "ru",
}

const dictionaries: {[key in Langs]: CommonDictionary} = {
	"en": EnDictionary,
	"ru": RuDictionary,
};

export class Lang {
	private readonly _lang: Langs;
	private readonly _texts: CommonDictionary;

	constructor(lang: Langs) {
		this._lang = lang;
		this._texts = dictionaries[lang];
	}

	get texts(): CommonDictionary {
		return this._texts;
	}

	get lang(): Langs {
		return this._lang;
	}
}
