type TextToken = {
	token: string,
	defaultValue?: string
}

class LocaleText <TextToken>{
	public text: string;
	public tokens?: TextToken[];
	
	constructor(text: string, tokens?: TextToken[]) {
		this.text = text;
		this.tokens = tokens;
	}
}
