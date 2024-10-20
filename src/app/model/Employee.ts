export class EmployeeModel {
    empId: number;
    name: string ;
    city: string;
    state: string;
    emailId: string;
    contactId: string;
    address: string;
    pinCode:string;

    constructor() {
        this.empId = 0;
        this.address = '';
        this.city = '';
        this.contactId = '';
        this.emailId = '';7
        this.name = ''
        this.state = '';
        this.pinCode = '';
    }
}

