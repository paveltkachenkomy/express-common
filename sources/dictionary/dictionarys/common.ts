type Tokens = {[token: string]: string | number};

export class  EditableTextByToken{
	private readonly _text: string;
	private readonly _tokens: Tokens;

	constructor(text: string, tokens: Tokens) {
		this._text = text;
		this._tokens = tokens;
	}

	get text(): string {
		return this._text;
	}
}

export type CommonDictionary = {
	readonly helloMessage: string,
	readonly helloName: EditableTextByToken,
};
