import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyrepoComponent } from './myrepo/myrepo.component';
import { PublicrepoComponent } from './publicrepo/publicrepo.component';
import { MyserviceService } from './myservice.service'

@NgModule({
  declarations: [
    AppComponent,
    MyrepoComponent,
    PublicrepoComponent,
    RoutingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

