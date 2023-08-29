export class Users {

    id!: number;
    firstName!: string;
    password!: string;
    email!: string;
    lastName!: string;
    roleId!: number;

    constructor(firstName: string, lastname: string, email: string, password: string, roleId: number) {
        this.firstName = firstName;
        this.lastName = lastname;
        this.email = email;
        this.password = password;
        this.roleId = roleId;
    }

   
   }