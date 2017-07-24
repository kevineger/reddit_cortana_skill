// tslint:disable:variable-name

export class ChatMessage {
    public isUser: boolean;
    public rawJson: string;
    public text: string;

    constructor(isUser: boolean, originalObject: any, text: string = null) {
        this.isUser = isUser;
        this.rawJson = JSON.stringify(originalObject);
        this.text = text;
    }

}

