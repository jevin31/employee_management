import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent,DesignationComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  // This is the current component that is being displayed
  currentComponent: string = "Roles";

  // This function is called when the user clicks on a tab
  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }

}
