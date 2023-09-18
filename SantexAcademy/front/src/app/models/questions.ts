export class Question {
    id?: number;
    nameQuestion: string;
    questionType: string;
    answer: string;

    constructor(nameQuestion: string, questionType: string, answer: string) {
        this.nameQuestion = nameQuestion;
        this.questionType = questionType;
        this.answer = answer;
    };

}