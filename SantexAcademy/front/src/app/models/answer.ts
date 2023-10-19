export class Answer {
    id?: number;
    value: string;
    description?: string;
    user_Id?: number; 
    survey_Id?: number; 
    question_Id?: number;
   

    constructor(user_Id:number, survey_Id:number, question_Id:number, value: string, description: string) {
        this.user_Id = user_Id;
        this.survey_Id = survey_Id;
        this.question_Id = question_Id;
        this.value = value;
        this.description = description;
    };

}