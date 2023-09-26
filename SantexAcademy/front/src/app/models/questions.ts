export class Question {
    id?: number;
    question: string;
    optionAnswer: string;
    description: string;

    constructor(question: string, optionAnswer: string, description: string) {
        this.question = question;
        this.description = description;
        this.optionAnswer = optionAnswer;
    }

}