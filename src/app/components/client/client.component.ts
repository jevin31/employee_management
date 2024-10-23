import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { APIResponseModel } from '../../model/class/interface/role';
import { ClientService } from '../../services/client.service';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { MyButtonComponent } from "../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, AsyncPipe, AlertComponent, MyButtonComponent], 
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})

export class ClientComponent implements OnInit {

  currentDate:Date = new Date();

  clientObj: Client = new Client();
  clientList: Client[] = [];

  //inject the client service
  constructor(private clientService: ClientService) { }

  userLists$: Observable<any> = new Observable();


  ngOnInit(): void {
    this.loadClient();
    this.userLists$ = this.clientService.getAllUser();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  OnSaveClient(data: string) {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Client Added Successfully");
        this.loadClient();
        this.clientObj = new Client(); 
      } else {
        alert(res.message);
      }
    });
  }

  OnEditClient(client: Client) {
    this.clientObj = client;
  }

  OnDeleteClient(id: number) {
    console.log("Deleting client with ID:", id);
    const isDelete = confirm("Are you sure you want to delete this client?");
    if (isDelete) {
      this.clientService.deleteClientsById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client Deleted Successfully");
          this.loadClient();
        } else {
          alert(res.message);
        }
      }, (error)=>{
        console.error("Error while deleting client:", error);
        alert("Error while deleting client");
      });
    }

    
  }

}
