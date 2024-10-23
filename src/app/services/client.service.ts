import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { APIResponseModel } from '../model/class/interface/role';
import { environment } from '../../environments/environment';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  
  // get all user
  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllClients(): Observable<APIResponseModel>{
    //using constant
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENT);
    
    //traditional way
    //return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients");
  }

  getAllEmployee(): Observable<APIResponseModel>{
    //traditional way
    //return this.http.get<APIResponseModel>(environment.API_URL + "GetAllEmployee");

    //using constant
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_EMP);
  }

  getAllClientProject(): Observable<APIResponseModel>{
  
    return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_PROJECT);
  }

  addUpdate(obj:Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient",obj);
  }

  deleteClientsById(id:number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId="+id);
  }

  addClientProjectUpdate(obj:Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject",obj);
  }

}
