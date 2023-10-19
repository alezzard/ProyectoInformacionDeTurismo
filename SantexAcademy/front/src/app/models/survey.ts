import { Question } from "./questions";

export class Survey {
    id?: number;
    name!: string;
    description?: string;
   /*  question!: Question[];  */

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}