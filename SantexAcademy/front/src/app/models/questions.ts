export class Question {
    id?: number;
    value: string;
    answerOptions: string;
    description: string;

    constructor(value: string, answerOptions: string, description: string) {
        this.value = value;
        this.description = description;
        this.answerOptions = answerOptions;
    }

}