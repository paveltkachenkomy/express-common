import { CommonDictionary } from "./dictionarys/common";
import { EngDictionary } from "./dictionarys/eng";
import { RusDictionary } from "./dictionarys/rus";

export enum Languages {
	en = "en",
	ru = "ru"
}

export class Dictionary {
	private _language: Languages;
	private _dictionary: CommonDictionary;

	constructor() {
		this._language = Languages.en;
		this._dictionary = EngDictionary;
	}

	public setLanguage(languages: Languages) {
		switch (languages) {
			case Languages.en:
				this.setEngLanguage();
				break;
			case Languages.ru:
				this.setRusLanguage();
				break;
			default:
				this.setEngLanguage();
				break;
		}
	}

	get language(): Languages{
		return this._language;
	}

	get dictionary(): CommonDictionary {
		return this._dictionary;
	}

	private setEngLanguage(): void {
		this._language = Languages.en;
		this._dictionary = EngDictionary;
	}

	private setRusLanguage(): void {
		this._language = Languages.ru;
		this._dictionary = RusDictionary;
	}
}
