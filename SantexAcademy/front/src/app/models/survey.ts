import { Question } from "./questions";

export class Survey {
    id?: number;
    question!: Question[]; 

    constructor( questions: Question[]) {
       this.question = questions;
    }
}