import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
    {
        path : '',
        redirectTo : '',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component: HomeComponent
    },
    {
       path : 'about',
       component : AboutComponent
    },
    {
       path: 'contact',
       component : ContactComponent
    },
    {
        path: 'hotel-list',
        component : HotelListComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path : 'admin',
        component : AdminComponent
    },
    {
        path : '**', 
        component: PagenotfoundComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule{

}