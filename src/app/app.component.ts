import { EmployeeModel } from './model/Employee';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  EmployeeForm: FormGroup = new FormGroup({});

  employeeObj: EmployeeModel = new EmployeeModel();

  employeeList: EmployeeModel[] = [];


  constructor(){
    this.createForm()
    debugger;
    const oldDate = localStorage.getItem("EmpData");
    if(oldDate != null) {
      const parseData = JSON.parse(oldDate);
      this.employeeList = parseData;
    }
  }

  createForm() {
    this.EmployeeForm = new FormGroup({
        empid:new FormControl(this.employeeObj.empId),
        name: new FormControl(this.employeeObj.name),
        city: new FormControl(this.employeeObj.city),
        address: new FormControl(this.employeeObj.address),
        contactId: new FormControl(this.employeeObj.contactId),
        emailId: new FormControl(this.employeeObj.emailId),
        pinCode: new FormControl(this.employeeObj.pinCode),
        state: new FormControl(this.employeeObj.state)
    })
  }

  onSave() {
    debugger;
    const oldDate = localStorage.getItem("EmpData");
    if(oldDate != null) {
      const parseData = JSON.parse(oldDate);
      this.EmployeeForm.controls['empid'].setValue(parseData.length + 1);
      this.employeeList.unshift(this.EmployeeForm.value);
    }else {
      this.employeeList.unshift(this.EmployeeForm.value);
    }
  }
   
}
