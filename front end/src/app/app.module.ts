import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { ViewflightComponent } from './viewflight/viewflight.component';
import { AddflightComponent } from './addflight/addflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { SearchFlightComponent } from './searchflight/searchflight.component';
//import { DeleteflightComponent } from './deleteflight/deleteflight.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewflightComponent,
    AddflightComponent,
    UpdateflightComponent,
    SearchFlightComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
