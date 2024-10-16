import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/class/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  // This is a list of designations
  designationList: IDesignation[] = [];

  // This is a boolean variable to show/hide the loader
  isLoader: boolean = true;

  // This is a variable to store the selected designation
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result: APIResponseModel) => {
      this.designationList = result.data;

      // Hide the loader if the data is loaded
      this.isLoader = false;
    }, error=>{
      alert("API Error/Network Down");
      // Hide the loader if error occurs
      this.isLoader = false;
    })
  }
}
