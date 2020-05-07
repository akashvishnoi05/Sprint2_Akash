import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ViewflightComponent } from './viewflight/viewflight.component';
import { AddflightComponent }  from './addflight/addflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { SearchFlightComponent } from './searchflight/searchflight.component';
//import { DeleteflightComponent } from './deleteflight/deleteflight.component';


const routes: Routes = [
  { path: 'add', component: AddflightComponent },
  { path: 'view', component: ViewflightComponent },
  { path: 'update', component: UpdateflightComponent },
  //{ path: 'delete', component: DeleteflightComponent }
  //{ path: '',redirectTo:'/view',pathMatch: 'full'},
  { path: 'search', component: SearchFlightComponent },
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
