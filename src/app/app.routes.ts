import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate:[authGuard],
        children: [{
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
        },
    
        {
            path: 'client-project', // Path to client project
            component: ClientProjectComponent, // ClientProjectComponent is the default component
        }
    ]
    }

    
];
