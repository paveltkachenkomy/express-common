import { CommonLangPack } from "./lang-package/common";
import { EngLangPack } from "./lang-package/eng";
import { RusLangPack } from "./lang-package/rus";

export enum Langs {
	en = "en",
	ru = "ru"
}

export class Lang {
	public lang: Langs;
	public texts: CommonLangPack;

	constructor() {
		this.lang = Langs.en;
		this.texts = EngLangPack;
	}

	public setLang(lang: Langs): void {
		switch (lang) {
			case Langs.en:
				this.setEngLang();
				break;
			case Langs.ru:
				this.setRusLang();
				break;
			default:
				this.setEngLang();
				break;
		}
	}

	private setEngLang(): void {
		this.lang = Langs.en;
		this.texts = EngLangPack;
	}

	private setRusLang(): void {
		this.lang = Langs.ru;
		this.texts = RusLangPack;
	}
}
