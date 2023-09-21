export class Question {
    id?: number;
    question: string;
    description: string;
    answer: string;

    constructor(question: string,  answer: string, description: string) {
        this.question = question;
        this.description = description;
        this.answer = answer;
    };

}