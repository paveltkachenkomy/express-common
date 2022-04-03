import { CommonLangPack } from "./language-package/common";
import { EngLangPack } from "./language-package/eng";
import { RusLangPack } from "./language-package/rus";

export enum Languages {
	en = "en",
	ru = "ru"
}

export class Language {
	private _language: Languages;
	private _texts: CommonLangPack;

	constructor() {
		this._language = Languages.en;
		this._texts = EngLangPack;
	}

	public setLanguage(languages: Languages) {
		switch (languages) {
			case Languages.en:
				this.setEngLang();
				break;
			case Languages.ru:
				this.setRusLang();
				break;
			default:
				this.setEngLang();
				break;
		}
	}

	private setEngLang(): void {
		this._language = Languages.en;
		this._texts = EngLangPack;
	}

	private setRusLang(): void {
		this._language = Languages.ru;
		this._texts = RusLangPack;
	}
}
