import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/class/interface/role';
import { Client } from '../../model/class/client';
import { DatePipe } from '@angular/common';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),

  });

  constructor(private clientSrv: ClientService) {}

  employeeList: Employee[] = [];
  clientList: Client[] = [];

  //signal is used to declare a variable that will be used in the html file
  firstName = signal("Angular 18");

  projectList = signal<ClientProject[]>([]);


  ngOnInit(): void {
    //name is used to declare a variable that will be used in the html file
    const name = this.firstName();
    this.getAllEmployee();
    this.getAllClient();
    this.getAllClientProject();
  }

  changeFName(){
    //set is used to change the value of the variable
    this.firstName.set("ReactJS")
  }

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }


  getAllClientProject() {
    this.clientSrv.getAllClientProject().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data);
    });
  }

  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Project Saved Successfully");
      } else {
        alert(res.message);
      }
    }, (error) => {
        console.error("Error saving project:", error);
        alert("An error occurred while saving the project. See the console for details.");
    });
  }


}
