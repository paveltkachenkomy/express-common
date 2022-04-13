export class  EditableTextByToken<T extends {[token: string]: string | number}>{
	private readonly _text: string;
	private readonly _tokens: T;

	constructor(text: string, tokens: T) {
		this._text = text;
		this._tokens = tokens;
	}

	public getText(tokens?: T): string {
		if (tokens) {
			return this.replaceTokensToValues(tokens);
		} else {
			return this.replaceTokensToValues(this._tokens);
		}
	}

	private replaceTokensToValues(tokens: T): string {
		let text = this._text;
		for (const token in tokens) {
			text = text.replaceAll(`%${token}`, tokens[token].toString());
		}
		return text;
	}
}

export type CommonDictionary = {
	readonly helloMessage: string,
	readonly helloName: EditableTextByToken<{name: string}>,
};
