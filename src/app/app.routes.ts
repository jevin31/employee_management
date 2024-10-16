import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';

export const routes: Routes = [
    {
        // Lazy loading
        path: '', // Default path
        redirectTo: 'master', // Redirect to master
        pathMatch: 'full' // Redirect only if the path is empty

    },
    {
        path: 'master', // Path to master
        component: MasterComponent, // MasterComponent is the default component
    },
    {
        path: 'employee', // Path to employee
        component: EmployeeComponent, // EmployeeComponent is the default component
    },
    {
        path: 'client', // Path to client
        component: ClientComponent, // ClientComponent is the default component
    }
];
