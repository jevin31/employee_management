import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

//Decorator is used to define the properties of the component.
@Component({
  selector: 'app-roles',
  standalone: true,
  //For two way binding, we need to import FormsModule.
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

//Class is used to define the properties and methods of the component.
export class RolesComponent implements OnInit {

  //This variable will store the list of roles.
  roleList: IRole[] = [];

  //Dependency Injection is used to inject the HttpClient service into the component.
  http = inject(HttpClient);

  //Old way of Dependency Injection
  //constructor(private http: HttpClient) { }

  //ngOnInit is used to initialize the component properties.
  ngOnInit(): void {
    this.getAllRoles(); //Call the getAllRoles method to get all the roles from the API.
  }

  //This method is used to get all the roles from the API.
  getAllRoles() {
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) => {
      this.roleList = res.data; //Assign the response to the roleList variable.
    });
  }










  // //Typescript has data types: string, number, boolean, date, object, array, null, undefined, any.

  // //Create a variable

  // //method 1 (recommended way)
  // firstName: string = "Angular Tutorial";

  // //method 2
  // angularVersion = "Version 18";

  // version: number = 18;

  // isActive: boolean = false;

  // currentDate: Date = new Date();

  // //The variables above can only be displayed in the corresponding component html file.

  // //Property binding
  // //Radio button will be displayed in the html file.
  // //inputType: string = "radio";

  // //Button will be displayed in the html file.
  // inputType: string = "button";

  // //Two Way Binding
  // selectedCity: string = "";

  // //Create a function/method
  // //Method 1 (Without parameters)
  // ShowWelcomeAlert(){
  //   alert("Welcome to Angular 18 Tutorial");
  // }

  // //Method 2 (With parameters)
  // ShowMessage(message: string){
  //   alert(message);
  // }
}

