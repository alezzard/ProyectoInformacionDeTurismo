export class Users {

    id!: number;
    firstName!: string;
    password!: string;
    email!: string;
    lastName!: string;
    role_id!: number;

    constructor(firstName: string, lastname: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastname;
        this.email = email;
        this.password = password;
        
    }

   
   }