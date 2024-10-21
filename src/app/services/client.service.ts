import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { APIResponseModel } from '../model/class/interface/role';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients");
  }

  addUpdate(obj:Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient",obj);
  }

  deleteClientsById(id:number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId="+id);
  }


}
