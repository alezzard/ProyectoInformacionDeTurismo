export class Answer {
    id?: number;
    value: string;
    description?: string;
    user_id?: number; 
    survey_id?: number; 
    question_id?: number;
   

    constructor(user_id:number, survey_id:number, question_id:number, value: string, description: string) {
        this.user_id = user_id;
        this.survey_id = survey_id;
        this.question_id = question_id;
        this.value = value;
        this.description = description;
    };

}